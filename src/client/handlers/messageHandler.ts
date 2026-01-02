import { PermissionResolvable, PermissionsBitField } from 'discord.js';
import { Command, CommandOptions, Message } from 'src/@types';

const handleMessage = async function (message: Message): Promise<void> {
	const prefix: string = message.client.getPrefix();
	const [commandString, ...args] = message.content.slice(prefix.length).toLowerCase().split(/ +/);
	const temp: string = message.content.slice(prefix.length).trim();
	const messageContent: string = temp.substring(temp.indexOf(' ') + 1);

	const command: Command = message.client.commandHandler.getCommand(commandString);
	const botPermissions: PermissionsBitField = <PermissionsBitField>message.guild?.members.me?.permissionsIn(message.channel.id);
	const userPermissions: PermissionsBitField = <PermissionsBitField>(
		message.guild?.members.cache.get(message.author.id)?.permissionsIn(message.channel.id)
	);

	if (message.channel.isDMBased() || !message.content.startsWith(prefix) || !command) return;

	if (command.ownerOnly) {
		const ownerID: string[] = message.client.getOwnerID();
		for (const owner of ownerID) {
			if (message.author.id != owner) return;
		}
		runCommand(command, { client: message.client, message: message, args: args, messageContent: messageContent });
		return;
	}

	if (!botPermissions?.has(<PermissionResolvable>command.botPermissions)) {
		const missingPermissions: PermissionsBitField = new PermissionsBitField();
		command.botPermissions?.forEach(permission => {
			if (!botPermissions?.has(permission)) missingPermissions.add(permission);
		});
		message.channel.send(`Missing bot permissions: \`${missingPermissions.toArray().join(', ')}\``);
		return;
	}

	if (!userPermissions?.has(<PermissionResolvable>command.userPermissions)) {
		const missingPermissions: PermissionsBitField = new PermissionsBitField();
		command.userPermissions?.forEach(permission => {
			if (!userPermissions?.has(permission)) missingPermissions.add(permission);
		});
		message.channel.send(`Missing permissions: \`${missingPermissions.toArray().join(', ')}\``);
		return;
	}

	runCommand(command, { client: message.client, message: message, args: args || [], messageContent: messageContent });
};

function runCommand(command: Command, args: CommandOptions): void {
	try {
		command.execute(args);
	} catch (e) {
		console.error(e);
	}
}

export = handleMessage;

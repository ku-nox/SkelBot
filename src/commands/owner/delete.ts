import { Command, CommandOptions } from 'src/@types';

const command: Command = {
	name: 'delete',
	aliases: ['del'],
	ownerOnly: true,
	execute: ({ client, message, args }: CommandOptions) => {
		const commandName = args[0];

		if (!message.channel.isSendable()) return;
		if (!commandName) return;

		try {
			client.commandHandler.deleteCommand(commandName);
			message.channel.send(`Deleted command: \`${commandName}\``);
		} catch (err) {
			message.channel.send(`\`${err}\``);
		}
	},
};

export = command;

import { Command, CommandOptions } from 'src/@types';

const command: Command = {
	name: 'reload',
	aliases: ['re'],
	ownerOnly: true,
	execute: ({ client, message, args }: CommandOptions) => {
		const commandName = args[0];

		if (!message.channel.isSendable()) return;
		if (!commandName) return;

		try {
			client.commandHandler.reloadCommand(commandName);
			message.channel.send(`Reloaded \`${commandName}\``);
		} catch (err) {
			message.channel.send(`\`${err}\``);
		}
	},
};

export = command;

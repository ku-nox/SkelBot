import path from 'node:path';
import { Command, CommandOptions } from 'src/@types';

const command: Command = {
	name: 'register',
	aliases: ['reg'],
	ownerOnly: true,
	execute: ({ client, message, args }: CommandOptions) => {
		const filePath = args[0] ? path.join(path.resolve(), 'src/commands', `${args[0]}.ts`) : undefined;
		if (!filePath) return;
		if (!message.channel.isSendable()) return;

		try {
			client.commandHandler.registerCommand(filePath);
			message.channel.send(`Registered command: \`${path.basename(filePath, path.extname(filePath))}\``);
		} catch (err) {
			message.channel.send(`\`${err}\``);
		}
	},
};

export = command;

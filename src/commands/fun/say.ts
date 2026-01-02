import { PermissionsBitField } from 'discord.js';
import { Command, CommandOptions } from 'src/@types';

const command: Command = {
	name: 'say',
	aliases: ['echo'],
	description: 'Say something with the bot',
	userPermissions: [],
	botPermissions: [PermissionsBitField.Flags.SendMessages, PermissionsBitField.Flags.SendMessagesInThreads],
	execute: async ({ message, messageContent }: CommandOptions) => {
		if (!message.channel.isSendable()) return;

		if (!(await message.guild?.members.fetch(message.author))?.permissionsIn(message.channelId).has(PermissionsBitField.Flags.MentionEveryone)) {
			message.channel.send({
				content: messageContent,
				allowedMentions: { parse: ['users'], repliedUser: true },
			});
			return;
		}
		message.channel.send({
			content: messageContent,
		});
	},
};

export = command;

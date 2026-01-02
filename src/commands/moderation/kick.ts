import { Command, CommandOptions } from 'src/@types';
import { PermissionsBitField } from 'discord.js';
import { extractMentions } from '../../utils/extractMentions';

const command: Command = {
	name: 'kick',
	aliases: [],
	userPermissions: [PermissionsBitField.Flags.KickMembers],
	botPermissions: [PermissionsBitField.Flags.KickMembers],
	execute: async ({ message, messageContent }: CommandOptions) => {
		const mentions: string[] = extractMentions(messageContent);
		const reason: string = messageContent.replace(/^((<@\d{18}>|\d{18})\s*)+/, '');
		let n = 0;

		if (!message.channel.isSendable()) return;
		if (mentions.length == 0) return message.channel.send(command.usage || '');

		for (const mention of mentions) {
			const target = await message.guild?.members.fetch(mention);
			if (!target?.kickable) {
				message.channel.send(`${target?.user.username} is not kickable`);
				continue;
			}

			target?.kick(reason || `None stated by ${message.author.username}`);
			n++;
			if (mentions.length <= 1) return message.channel.send(`${target.user.username} was kicked from the server`);
			message.channel.send(`Kicked ${mentions.length - n} users from the server`);
		}
	},
};

export = command;

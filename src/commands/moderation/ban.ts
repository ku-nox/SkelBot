import { Command, CommandOptions } from 'src/@types';
import { BulkBanResult, GuildMember, PermissionsBitField } from 'discord.js';
import { extractMentions } from '../../utils/extractMentions';

const command: Command = {
	name: 'ban',
	aliases: [],
	userPermissions: [PermissionsBitField.Flags.BanMembers],
	botPermissions: [PermissionsBitField.Flags.BanMembers],
	args: {
		user: 'user or users or userID',
		reason: 'string',
	},
	usage: 'Command Usage:\n```\n%ban @mention reason\n%ban @mention1 @mention2 reason\n%ban userID reason\n```',
	execute: async ({ message, messageContent }: CommandOptions) => {
		const mentions: string[] = extractMentions(messageContent);
		const reason: string = messageContent.replace(/^((<@\d{18}>|\d{18})\s*)+/, '');

		if (!message.channel.isSendable()) return;
		if (mentions.length == 0) return message.channel.send(command.usage || '');
		if (mentions.length > 1) {
			let res: BulkBanResult | undefined;
			try {
				res = await message.guild?.members.bulkBan(mentions, {
					deleteMessageSeconds: 7 * 24 * 60 * 60,
					reason: reason || `None stated by ${message.author.username}`,
				});
			} catch (e) {
				return message.channel.send(`Failed to ban any users`);
			}
			return message.channel.send(
				`Banned ${res?.bannedUsers.length} users, failed to ban ${res?.failedUsers.length}\nFailed for \`${res?.failedUsers.join(', ')}\``,
			);
		}

		const target: GuildMember | undefined = await message.guild?.members.fetch(mentions[1]);

		if (!target?.bannable) return message.channel.send(`${target?.user.username} is not banable`);

		target.ban({
			deleteMessageSeconds: 7 * 24 * 60 * 60,
			reason: reason || `None stated by ${message.author.username}`,
		});

		return message.channel.send(`${target.user.username} was banned from the server`);
	},
};

export = command;

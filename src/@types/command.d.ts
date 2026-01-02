import { Message as M } from 'discord.js';
import { Bot } from '../client/client';

type baseCommand = {
	name: string;
	aliases?: string[];
	description?: string;
	usage?: string;
	userPermissions?: bigint[];
	botPermissions?: bigint[];
	args?: object;
	execute: Function<CommandOptions>;
};

export type Command = baseCommand & {
	ownerOnly?: boolean;
	guildOnly?: boolean;
};

export type CommandOptions = {
	client: Bot;
	message: Message;
	args: string[];
	messageContent: string;
};

export type Message = M & {
	client: Bot;
};

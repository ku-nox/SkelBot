import * as Discord from 'discord.js';

export type ClientOptions = Discord.ClientOptions & {
	readonly ownerID: string[];
};

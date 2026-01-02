import { Events } from 'discord.js';
import { Event, Message } from '../@types';
import handleMessage from '../client/handlers/messageHandler';

let event: Event = {
	name: Events.MessageCreate,
	execute(message: Message): void {
		if (message.author.bot) return;
		handleMessage(message);
	},
};

export = event;

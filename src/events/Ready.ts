import { Event } from '../@types';
import { Bot } from '../client/client';
import { ClientApplication, Events } from 'discord.js';

let event: Event = {
	name: Events.ClientReady,
	once: true,
	execute(client: Bot): void {
		console.info(`Logged in as ${client.user?.tag}!`);
		console.info(`https://discord.com/api/oauth2/authorize?client_id=${(client.application as ClientApplication).id}&permissions=8&scope=bot`);
	},
};

export = event;

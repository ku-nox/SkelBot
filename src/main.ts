import { Bot } from './client/client';
import { GatewayIntentBits } from 'discord.js';
const Client: Bot = new Bot({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMembers,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildVoiceStates,
	],
	ownerID: [''],
});
Client.start();

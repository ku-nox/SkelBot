import * as Discord from 'discord.js';
import * as _ from 'lodash';
import * as fs from 'fs';
import * as path from 'path';
import { ClientOptions, Command } from 'src/@types';
import { CommandHandler } from './handlers/commandHandler';

export class Bot extends Discord.Client {
	private prefix: string | undefined;
	private ownerID: string[];

	public commandHandler: CommandHandler;

	constructor(options: ClientOptions) {
		super(options);
		this.prefix = process.env.PREFIX;
		this.ownerID = options.ownerID;
		this.commandHandler = new CommandHandler();
		this.loadCommands();
		this.loadEvents();
	}

	public start(): void {
		this.login(process.env.TOKEN);
	}

	public getPrefix(): string {
		return <string>this.prefix;
	}

	public getOwnerID(): string[] {
		return this.ownerID;
	}

	private loadCommands(): void {
		const folderPath: string = path.join(__dirname, '../commands');
		const commandsFolder: string[] = fs
			.readdirSync(folderPath, { withFileTypes: true })
			.filter((dirent: fs.Dirent) => dirent.isDirectory())
			.map((dirent: fs.Dirent) => dirent.name);

		for (const folder of commandsFolder) {
			const commandPath: string = path.join(folderPath, folder);
			const commandFiles: string[] = fs.readdirSync(commandPath).filter(file => file.endsWith('.ts'));

			for (const file of commandFiles) {
				const filePath: string = path.join(commandPath, file);
				this.commandHandler.registerCommand(filePath);
			}
		}

		console.info(`Loaded all commands`);
	}

	private loadEvents(): void {
		const folderPath: string = path.join(__dirname, '../events');
		const eventFiles: string[] = fs.readdirSync(folderPath).filter(file => file.endsWith('.ts'));

		for (const file of eventFiles) {
			const filePath: string = path.join(folderPath, file);
			const event = require(filePath);
			if (event.once) {
				this.once(event.name, (...args) => event.execute(...args));
			} else {
				this.on(event.name, (...args) => event.execute(...args));
			}
		}

		console.info(`Loaded all events`);
	}
}

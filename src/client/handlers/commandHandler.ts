import _ from 'lodash';
import { Collection } from 'discord.js';
import { Command } from 'src/@types';

export class CommandHandler {
	private commands: Collection<string[], Command>;
	private commandsPath: Collection<string[], string>;

	constructor() {
		this.commands = new Collection();
		this.commandsPath = new Collection();
	}

	public registerCommand(filePath: string) {
		const command = require(filePath);
		const commandName: string[] = _.union([command.name], command.aliases);
		this.commands.set(commandName, command);
		this.commandsPath.set(commandName, filePath);
		console.info(`Loaded command ${commandName[0]}`);
	}

	public deleteCommand(commandName: string): void {
		for (const [key, value] of this.commands) {
			if (key.includes(commandName)) {
				this.commands.delete(key);
				delete require.cache[require.resolve(this.getCommandPath(commandName))];
				console.warn(`Deleted command ${commandName}`);
			}
		}
	}

	public getCommand(commandName: string): Command {
		let target = undefined;
		for (const [key, value] of this.commands) {
			if (key.includes(commandName)) {
				target = value;
			}
		}
		return <Command>target;
	}

	public getCommandPath(commandName: string): string {
		let target = '';
		for (const [key, value] of this.commandsPath) {
			if (key.includes(commandName)) {
				target = value;
			}
		}
		return target;
	}

	public reloadCommand(commandName: string): void {
		let commandPath = this.getCommandPath(commandName);
		this.deleteCommand(commandName);
		this.registerCommand(commandPath);
	}
}

# SkelBot

A Discord bot built with TypeScript and Discord.js v14. This bot provides a solid foundation for building custom Discord bot features.

## 🚀 Features

- **Command Handler System** - Organized command structure with categories
- **Event Handler** - Modular event handling system
- **TypeScript Support** - Full TypeScript implementation for type safety
- **Slash Commands** - Modern Discord slash command support
- **Custom Logger** - Built-in logging system for debugging

### Command Categories

- **Fun Commands** - Entertainment and utility commands
- **Moderation Commands** - Server management tools
- **Owner Commands** - Bot administration features

## 📋 Prerequisites

- Node.js v17 (< v18)
- npm or yarn
- Discord Bot Token ([Create one here](https://discord.com/developers/applications))

## 🛠️ Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/IndigoGamer01/DBot.git
   cd SkelBot
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure environment variables**

   Create a `.env` file in the root directory:

   ```env
   DISCORD_TOKEN=your_bot_token_here
   CLIENT_ID=your_client_id_here
   ```

4. **Build the project**

   ```bash
   npm run build
   ```

5. **Start the bot**
   ```bash
   npm start
   ```

## 📁 Project Structure

```
SkelBot/
├── src/
│   ├── @types/         # TypeScript type definitions
│   ├── client/         # Bot client and handlers
│   ├── commands/       # Command implementations
│   ├── events/         # Event handlers
│   └── utils/          # Utility functions
├── lib/                # Custom libraries
└── dist/               # Compiled JavaScript (generated)
```

## 🎮 Usage

Once the bot is running and invited to your server, you can use slash commands by typing `/` in any channel where the bot has permissions.

### Available Commands

More commands will be added in future updates!

## 🔧 Development

### Adding New Commands

1. Create a new file in `src/commands/<category>/`
2. Follow the command structure pattern
3. The command handler will automatically load it

### Adding New Events

1. Create a new file in `src/events/`
2. Follow the event handler pattern
3. Export the event handler

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Ku-nox**

- GitHub: [@ku-nox](https://github.com/ku-nox)

**Wasiur Rahman**

- GitHub: [@Wasiur26](https://github.com/Wasiur26)

## 🔮 Roadmap

- [ ] Add more fun commands
- [ ] Enhance moderation features
- [ ] Add database support
- [ ] Implement music commands
- [ ] Create web dashboard
- [ ] Add multi-language support

## ⚠️ Disclaimer

This bot is currently in development. More features will be added in future updates.

---

_Made with ❤️ using Discord.js_

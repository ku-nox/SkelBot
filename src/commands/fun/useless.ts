import { APIEmbed, EmbedType, PermissionsBitField } from 'discord.js';
import { Command, CommandOptions } from 'src/@types';
import { randomColor } from '../../utils/randomColor';

const sites: string[] = [
	'http://heeeeeeeey.com/',
	'http://thatsthefinger.com/',
	'http://cant-not-tweet-this.com/',
	'http://eelslap.com/',
	'http://www.staggeringbeauty.com/',
	'http://burymewithmymoney.com/',
	'http://www.fallingfalling.com/',
	'http://ducksarethebest.com/',
	'http://www.trypap.com/',
	'http://www.republiquedesmangues.fr/',
	'http://www.movenowthinklater.com/',
	'http://www.partridgegetslucky.com/',
	'http://www.rrrgggbbb.com/',
	'http://beesbeesbees.com/',
	'http://www.sanger.dk/',
	'http://www.koalastothemax.com/',
	'http://www.everydayim.com/',
	'http://www.leduchamp.com/',
	'http://grandpanoclothes.com/',
	'http://www.haneke.net/',
	'http://r33b.net/',
	'http://randomcolour.com/',
	'http://cat-bounce.com/',
	'http://cachemonet.com/',
	'http://www.sadforjapan.com/',
	'http://www.taghua.com/',
	'http://chrismckenzie.com/',
	'http://hasthelargehadroncolliderdestroyedtheworldyet.com/',
	'http://ninjaflex.com/',
	'http://iloveyoulikeafatladylovesapples.com/',
	'http://ihasabucket.com/',
	'http://corndogoncorndog.com/',
	'http://giantbatfarts.com/',
	'http://www.ringingtelephone.com/',
	'http://www.pointerpointer.com/',
	'http://www.pleasedonate.biz/',
	'http://imaninja.com/',
	'http://willthefuturebeaweso.me/',
	'http://salmonofcapistrano.com/',
	'http://www.ismycomputeron.com/',
	'http://www.wwwdotcom.com/',
	'http://www.nullingthevoid.com/',
	'http://www.muchbetterthanthis.com/',
	'http://www.ouaismaisbon.ch/',
	'http://iamawesome.com/',
	'http://www.pleaselike.com/',
	'http://crouton.net/',
	'http://corgiorgy.com/',
	'http://www.electricboogiewoogie.com/',
	'http://www.nelson-haha.com/',
	'http://www.wutdafuk.com/',
	'http://unicodesnowmanforyou.com/',
	'http://tencents.info/',
	'http://intotime.com/',
	'http://leekspin.com/',
	'http://minecraftstal.com/',
	'http://www.riddlydiddly.com/',
	'http://www.patience-is-a-virtue.org/',
	'http://whitetrash.nl/',
	'http://www.theendofreason.com/',
	'http://zombo.com',
	'http://secretsfornicotine.com/',
	'http://pixelsfighting.com/',
	'http://crapo.la/',
	'http://baconsizzling.com/',
	'http://isitwhite.com/',
	'http://noot.space/',
	'http://tomsdog.com/',
	'http://hardcoreprawnlawn.com/',
	'http://www.omfgdogs.com/',
];

const command: Command = {
	name: 'useless',
	aliases: ['uselesswebsite', 'uselessweb'],
	description: 'Useless command',
	userPermissions: [],
	botPermissions: [PermissionsBitField.Flags.SendMessages, PermissionsBitField.Flags.SendMessagesInThreads],
	execute: ({ message }: CommandOptions) => {
		if (!message.channel.isSendable()) return;

		const index: number = Math.floor(Math.random() * sites.length);
		const site: string = sites[index];
		const embed: APIEmbed = {
			type: EmbedType.Rich,
			title: `Here is your useless website:`,
			description: `🌐 **${site}**`,
			color: randomColor(),
		};

		message.channel.send({ embeds: [embed] });
	},
};

export = command;

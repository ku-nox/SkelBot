export function extractMentions(text: string): string[] {
	const tokens = text.trim().split(/\s+/);
	const mentions: Set<string> = new Set();

	for (const token of tokens) {
		const argsMatch = token.match(/^<@(\d{18})>$/);
		if (argsMatch) {
			mentions.add(argsMatch[1]);
			continue;
		}

		if (/^\d{18}$/.test(token)) {
			mentions.add(token);
			continue;
		}

		break;
	}

	return [...mentions];
}

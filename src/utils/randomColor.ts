export function randomColor(min?: number, max?: number) {
	min = min ? Math.ceil(min) : 0;
	max = max ? Math.floor(max) : 16777215;
	return Math.floor(Math.random() * (max - min) + min);
}

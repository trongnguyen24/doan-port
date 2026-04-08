export function rafThrottle<T extends (...args: any[]) => void>(callback: T) {
	let frame = 0;
	let lastArgs: Parameters<T> | null = null;

	const throttled = (...args: Parameters<T>) => {
		lastArgs = args;

		if (frame) {
			return;
		}

		frame = requestAnimationFrame(() => {
			frame = 0;

			if (lastArgs) {
				callback(...lastArgs);
			}
		});
	};

	throttled.cancel = () => {
		if (!frame) {
			return;
		}

		cancelAnimationFrame(frame);
		frame = 0;
		lastArgs = null;
	};

	return throttled as T & { cancel: () => void };
}

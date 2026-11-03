// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

// Thuộc tính `scroll="reveal"` dùng làm trigger cho GSAP ScrollTrigger
declare module 'svelte/elements' {
	interface HTMLAttributes<T> {
		scroll?: string;
	}
}

export {};

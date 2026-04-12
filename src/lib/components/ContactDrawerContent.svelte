<script>
	// @ts-nocheck

	import { _ } from 'svelte-i18n';
	export let handleCopy;
</script>

<div class="space-y-3 p-4 text-gray-700">
	<div class="c-button group">
		<svg
			class="shrink-0"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12C22 15.7712 22 17.6569 20.8284 18.8284C19.6569 20 17.7712 20 14 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12Z"
				stroke="currentColor"
				stroke-width="1.5"
			/>
			<path
				d="M6 8L8.1589 9.79908C9.99553 11.3296 10.9139 12.0949 12 12.0949C13.0861 12.0949 14.0045 11.3296 15.8411 9.79908L18 8"
				stroke="currentColor"
				stroke-width="1.5"
				stroke-linecap="round"
			/>
		</svg>

		trongnguyen24@gmail.com

		<button data-copy="trongnguyen24@gmail.com" on:click={handleCopy} class="c-hover">
			<div class="moveLeft shrink-0 flex justify-center items-center">
				{#each { length: 4 } as __, i}
					<div
						class="text-content transition-opacity duration-300 opacity-0 group-hover:opacity-100 flex gap-8 shrink-0 px-4"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="w-6 h-6"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
							/>
						</svg>
						{$_('contact.copy_email')}
					</div>
				{/each}
			</div>
		</button>
		<div class="c-noti">{$_('contact.copied')}</div>
	</div>

	<div class="c-button group">
		<svg
			class="shrink-0"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M10.0376 5.31617L10.6866 6.4791C11.2723 7.52858 11.0372 8.90532 10.1147 9.8278C10.1147 9.8278 10.1147 9.8278 10.1147 9.8278C10.1146 9.82792 8.99588 10.9468 11.0245 12.9755C13.0525 15.0035 14.1714 13.8861 14.1722 13.8853C14.1722 13.8853 14.1722 13.8853 14.1722 13.8853C15.0947 12.9628 16.4714 12.7277 17.5209 13.3134L18.6838 13.9624C20.2686 14.8468 20.4557 17.0692 19.0628 18.4622C18.2258 19.2992 17.2004 19.9505 16.0669 19.9934C14.1588 20.0658 10.9183 19.5829 7.6677 16.3323C4.41713 13.0817 3.93421 9.84122 4.00655 7.93309C4.04952 6.7996 4.7008 5.77423 5.53781 4.93723C6.93076 3.54428 9.15317 3.73144 10.0376 5.31617Z"
				stroke="currentColor"
				stroke-width="1.5"
				stroke-linecap="round"
			/>
		</svg>

		(+84) 0379 573 674

		<button data-copy="0379573674" on:click={handleCopy} class="c-hover c-copy">
			<div class="moveLeft shrink-0 flex justify-center items-center">
				{#each { length: 4 } as __, i}
					<div
						class="text-content transition-opacity duration-300 opacity-0 group-hover:opacity-100 flex gap-8 shrink-0 px-4"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="w-6 h-6"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
							/>
						</svg>
						{$_('contact.copy_phone')}
					</div>
				{/each}
			</div>
		</button>
		<div class="c-noti">{$_('contact.copied')}</div>
	</div>

	<div class="c-button group">
		<svg
			class="shrink-0"
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
		>
			<path
				fill="none"
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="1.5"
				d="M12 .297c-6.63 0-12 5.373-12 12c0 5.303 3.438 9.8 8.205 11.385c.6.113.82-.258.82-.577c0-.285-.01-1.04-.015-2.04c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729c1.205.084 1.838 1.236 1.838 1.236c1.07 1.835 2.809 1.305 3.495.998c.108-.776.417-1.305.76-1.605c-2.665-.3-5.466-1.332-5.466-5.93c0-1.31.465-2.38 1.235-3.22c-.135-.303-.54-1.523.105-3.176c0 0 1.005-.322 3.3 1.23c.96-.267 1.98-.399 3-.405c1.02.006 2.04.138 3 .405c2.28-1.552 3.285-1.23 3.285-1.23c.645 1.653.24 2.873.12 3.176c.765.84 1.23 1.91 1.23 3.22c0 4.61-2.805 5.625-5.475 5.92c.42.36.81 1.096.81 2.22c0 1.606-.015 2.896-.015 3.286c0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
			/>
		</svg>
		trongnguyen24
		<div class="c-hover">
			<a target="_blank" href="https://github.com/trongnguyen24" rel="noreferrer">
				<div class="moveLeft shrink-0 flex justify-center items-center">
					{#each { length: 4 } as __, i}
						<div
							class="text-content transition-opacity duration-300 opacity-0 group-hover:opacity-100 flex gap-8 shrink-0 px-4"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="w-6 h-6"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
								/>
							</svg>

							{$_('contact.open_tab')}
						</div>
					{/each}
				</div>
			</a>
		</div>
	</div>

	<span class="c-coping c-copied hidden" aria-hidden="true"></span>
</div>

<style>
	.c-button {
		@apply bg-gray-100 transition-transform relative overflow-hidden rounded-xl flex gap-3 items-center text-lg px-4 py-3;
	}

	.c-noti {
		@apply inset-0 bg-violet-500 absolute text-white flex justify-center items-center z-10 -translate-y-[110%] scale-110 rounded-bl-[50%] rounded-br-[50%];
		transition: transform 500ms ease, border-radius 500ms ease;
	}

	.c-copied {
		@apply rounded scale-100;
		transform: translateY(0) !important;
	}

	.c-hover {
		@apply inset-0 overflow-hidden absolute flex items-center font-medium text-violet-300 bg-gray-950;
		clip-path: inset(50% 0);
		transition: clip-path 500ms ease;
	}

	.group:hover .c-hover {
		clip-path: inset(0 0);
	}

	.c-coping {
		inset: 0 !important;
	}

	.moveLeft {
		animation: moveLeft 6s linear infinite;
		animation-play-state: paused;
	}

	.group:hover .moveLeft {
		animation-play-state: running;
	}

	@keyframes moveLeft {
		from {
			transform: translateX(0%);
		}

		to {
			transform: translateX(-25%);
		}
	}
</style>

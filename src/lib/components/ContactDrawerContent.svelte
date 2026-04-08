<script>
	// @ts-nocheck

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

		npkhanhdoan@gmail.com

		<button data-copy="npkhanhdoan@gmail.com" on:click={handleCopy} class="c-hover">
			<div class="moveLeft shrink-0 flex justify-center items-center">
				{#each { length: 4 } as _, i}
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
						Click to copy email
					</div>
				{/each}
			</div>
		</button>
		<div class="c-noti">Copied</div>
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

		(+84) 939 004 133

		<button data-copy="0939004133" on:click={handleCopy} class="c-hover c-copy">
			<div class="moveLeft shrink-0 flex justify-center items-center">
				{#each { length: 4 } as _, i}
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
						Click to copy phone
					</div>
				{/each}
			</div>
		</button>
		<div class="c-noti">Copied</div>
	</div>

	<div class="c-button group">
		<svg
			class="shrink-0"
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
		>
			<g
				fill="none"
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="1.5"
			>
				<path d="M21 8v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5" />
				<path
					d="M9.099 11.826c2.535 0 2.535 4.174 0 4.174H6v-4.174m3.099 0H6m3.099 0c2.535 0 2.535-3.826 0-3.826H6v3.826M15.5 11a2.5 2.5 0 0 0-2.5 2.5h5a2.5 2.5 0 0 0-2.5-2.5M13 13.5a2.5 2.5 0 0 0 2.5 2.5c.928 0 1.49-.322 1.813-.62M17 8.5h-3"
				/>
			</g>
		</svg>
		fujisai6124de2
		<div class="c-hover">
			<a target="_blank" href="https://www.behance.net/fujisai6124de2" rel="noreferrer">
				<div class="moveLeft shrink-0 flex justify-center items-center">
					{#each { length: 4 } as _, i}
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

							Open in new tab
						</div>
					{/each}
				</div>
			</a>
		</div>
	</div>

	<div class="c-button group">
		<svg
			class="shrink-0"
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
		>
			<g fill="none" stroke="currentColor" stroke-width="1.5">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M12 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8"
				/>
				<path d="M3 16V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5Z" />
				<path stroke-linecap="round" stroke-linejoin="round" d="m17.5 6.51l.01-.011" />
			</g>
		</svg>
		@fjsaix612
		<div class="c-hover">
			<a target="_blank" href="https://www.instagram.com/fjsaix612/" rel="noreferrer">
				<div class="moveLeft shrink-0 flex justify-center items-center">
					{#each { length: 4 } as _, i}
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

							Open in new tab
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
		@apply inset-0 bg-violet-500 absolute text-white flex justify-center items-center z-10 -translate-y-[110%] transition-all scale-110 duration-500 rounded-bl-[50%] rounded-br-[50%];
	}

	.c-copied {
		@apply rounded scale-100;
		transform: translateY(0) !important;
	}

	.c-hover {
		@apply inset-x-0 inset-y-1/2 group-hover:inset-y-0 transform transition-all duration-500 overflow-hidden absolute flex items-center font-medium text-violet-300 bg-gray-950;
	}

	.c-coping {
		inset: 0 !important;
	}

	.moveLeft {
		animation: moveLeft 6s linear infinite;
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

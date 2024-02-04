<script>
	// @ts-nocheck

	import Icon from '$lib/icon/index.svelte';
	import gsap from 'gsap';
	import { spring } from 'svelte/motion';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import Cat from '$lib/icon/cat.svelte';
	import { Drawer } from '$lib/components/ui/vaul-svelte/dist';
	import * as Dialog from '$lib/components/ui/dialog';
	import Close from './ui/vaul-svelte/dist/vaul/components/close.svelte';

	let dialogOpen = false;

	let coords = spring(
		{ x: 32 },
		{
			stiffness: 0.03,
			damping: 0.1991
		}
	);

	function handleClick(event) {
		const element = event.currentTarget;
		element.classList.add('animate-bounce-nav');
		setTimeout(() => {
			element.classList.remove('animate-bounce-nav');
		}, 550); // Thời gian của animation
	}

	onMount(() => {
		let isMobile = window.matchMedia('(pointer:coarse)').matches;
		document.getElementById('cards').onmousemove = (e) => {
			for (const card of document.getElementsByClassName('card')) {
				const rect = card.getBoundingClientRect(),
					x = e.clientX - rect.left,
					y = e.clientY - rect.top;
				if (!isMobile) {
					card.style.setProperty('--mouse-x', `${x}px`);
					card.style.setProperty('--mouse-y', `${y}px`);
				}
			}
		};
		if (isMobile) {
			coords = spring(
				{ x: 32 },
				{
					stiffness: 0.03,
					damping: 0.16
				}
			);
		}

		let cards = document.getElementById('cards');
		let card = gsap.utils.toArray('.card');
		let dotnav = document.getElementsByClassName('nav-dot');
		let menutl = gsap.timeline({});
		menutl.set(cards, {
			width: '2rem',
			height: '1rem',
			y: '3rem',
			duration: 0
		});
		menutl.to(cards, {
			width: '4.125rem',
			height: '4.125rem',
			opacity: 1,
			y: '0',
			scale: 1,
			duration: 0.8
		});
		menutl.to(cards, {
			width: '14.5rem',
			duration: 1
		});
		menutl.to(card, {
			display: 'block',
			opacity: 1,
			stagger: 0.15,
			duration: 0.6
		});
		menutl.to(dotnav, {
			display: 'block',
			opacity: 1,
			duration: 0.3
		});
	});
</script>

<div
	id="cards"
	class="z-20 flex gap-2 p-2 fixed bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 bg-[rgb(251,251,253)] bg-opacity-90 backdrop-blur-xl rounded-full border border-solid border-[#EEEEF1] shadow-2xl"
>
	<div class="relative group">
		<span
			class="title pointer-events-none absolute -top-9 text-xs left-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 -translate-x-1/2 rounded-md bg-[rgb(251,251,253)] px-2 py-0.5 border border-gray-200"
			>Home</span
		>
		<a
			aria-current={$page.url.pathname === '/'
				? (coords.set({ x: 32 + 0 * 56 }), 'page')
				: undefined}
			href="/"
			on:click={(e) => coords.set({ x: 32 + 0 * 56 })}
			on:click={handleClick}
			class="card size-12 overflow-hidden bg-[#EEEEF1] rounded-full relative"
			data-sveltekit-noscroll
			aria-label="Home"
		>
			<div
				class="text-[#6B6B70] bg-[#EFEFF2] rounded-full inset-px absolute flex justify-center items-center li"
			>
				<Icon name="home" />
				<div class="size-12 shine absolute pointer-events-none"></div>
			</div>
		</a>
	</div>

	<div class="relative group">
		<span
			class="title pointer-events-none absolute -top-9 text-xs left-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 -translate-x-1/2 rounded-md bg-[rgb(251,251,253)] px-2 py-0.5 border border-gray-200"
			>Portfolio</span
		>
		<a
			aria-current={$page.url.pathname.includes('portfolio')
				? (coords.set({ x: 32 + 1 * 56 }), 'page')
				: undefined}
			href="/portfolio"
			on:click={(e) => coords.set({ x: 32 + 1 * 56 })}
			on:click={handleClick}
			class="card size-12 overflow-hidden bg-[#EEEEF1] rounded-full relative"
			data-sveltekit-noscroll
			aria-label="Portfolio"
		>
			<div
				class="text-[#6B6B70] bg-[#EFEFF2] rounded-full inset-px absolute flex justify-center items-center li"
			>
				<Icon name="work" />
				<div class="size-12 shine absolute pointer-events-none"></div>
			</div>
		</a>
	</div>

	<div class="relative group">
		<span
			class="title pointer-events-none absolute -top-9 text-xs left-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 -translate-x-1/2 rounded-md bg-[rgb(251,251,253)] px-2 py-0.5 border border-gray-200"
			>Cv</span
		>
		<a
			aria-current={$page.url.pathname === '/cv'
				? (coords.set({ x: 32 + 2 * 56 }), 'page')
				: undefined}
			href="/cv"
			on:click={(e) => coords.set({ x: 32 + 2 * 56 })}
			on:click={handleClick}
			class="card size-12 overflow-hidden bg-[#EEEEF1] rounded-full relative"
			data-sveltekit-noscroll
			aria-label="Curriculum vitae"
		>
			<div
				class="text-[#6B6B70] bg-[#EFEFF2] rounded-full inset-px absolute flex justify-center items-center li"
			>
				<Icon name="resume" />
				<div class="size-12 shine absolute pointer-events-none"></div>
			</div>
		</a>
	</div>

	<div class="relative group">
		<span
			class="title pointer-events-none absolute -top-9 text-xs left-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 -translate-x-1/2 rounded-md bg-[rgb(251,251,253)] px-2 py-0.5 border border-gray-200"
			>Contact</span
		>
		<button
			on:click={handleClick}
			class="card size-12 overflow-hidden bg-[#EEEEF1] rounded-full relative"
			aria-label="Contact"
		>
			<Drawer.Root bind:open={dialogOpen}>
				<Drawer.Trigger
					><div
						class="text-[#6B6B70] bg-[#EFEFF2] rounded-full inset-px absolute flex justify-center items-center li"
					>
						<Icon name="contact" />
						<div class="size-12 shine absolute pointer-events-none"></div>
					</div></Drawer.Trigger
				>
				<Drawer.Portal class="catTrigger relative inset-0 z-50 overflow-y-auto">
					<Drawer.Overlay class=" fixed inset-0 bg-white/90" />
					<Drawer.Content
						class="flex flex-col mt-24 sm:left-1/2 fixed sm:w-[28rem] w- inset-x-6 sm:-ml-[14rem] bottom-6 mx-auto"
					>
						<Cat />
						<Drawer.Close>
							<button
								class="absolute z-10 flex h-8 w-8 top-6 right-6 items-center justify-center rounded-full bg-gray-100 transition-transform focus:scale-95 focus-visible:shadow-focus-ring-button active:scale-75"
								type="button"
								><svg
									width="12"
									height="12"
									viewBox="0 0 12 12"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									><path
										d="M10.4854 1.99998L2.00007 10.4853"
										stroke="#999999"
										stroke-width="3"
										stroke-linecap="round"
										stroke-linejoin="round"
									></path><path
										d="M10.4854 10.4844L2.00007 1.99908"
										stroke="#999999"
										stroke-width="3"
										stroke-linecap="round"
										stroke-linejoin="round"
									></path></svg
								></button
							>
						</Drawer.Close>

						<div
							class="bg-white shadow-2xl shadow-gray-200 border border-gray-100 rounded-3xl overflow-hidden flex-1"
						>
							<header class="border-b border-[#F7F7F7] flex items-center px-6 h-20">
								<h2 class="font-medium text-xl leading-none text-[#222222]">Contact</h2>
							</header>
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

									<div data-copy="npkhanhdoan@gmail.com" class="c-hover">
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
									</div>
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

									<div data-copy="0939004133" class="c-hover c-copy">
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
									</div>
								</div>
								<div class="c-button group">
									<svg
										class="shrink-0"
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										><g
											fill="none"
											stroke="currentColor"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="1.5"
											><path
												d="M21 8v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5"
											/><path
												d="M9.099 11.826c2.535 0 2.535 4.174 0 4.174H6v-4.174m3.099 0H6m3.099 0c2.535 0 2.535-3.826 0-3.826H6v3.826M15.5 11a2.5 2.5 0 0 0-2.5 2.5h5a2.5 2.5 0 0 0-2.5-2.5M13 13.5a2.5 2.5 0 0 0 2.5 2.5c.928 0 1.49-.322 1.813-.62M17 8.5h-3"
											/></g
										></svg
									>
									fujisai6124de2
									<div class="c-hover">
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
									</div>
								</div>
								<div class="c-button group">
									<svg
										class="shrink-0"
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										><g fill="none" stroke="currentColor" stroke-width="1.5"
											><path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M12 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8"
											/><path
												d="M3 16V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5Z"
											/><path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="m17.5 6.51l.01-.011"
											/></g
										></svg
									>
									@fjsaix612
									<div class="c-hover">
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
									</div>
								</div>
							</div>
						</div>
					</Drawer.Content>
				</Drawer.Portal>
			</Drawer.Root>
		</button>
	</div>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<svg class="nav-dot absolute w-full h-full top-0 left-0 z-0 hidden opacity-0">
		<circle cx={$coords.x} cy="60" r="2" fill="#a78bfa" />
	</svg>
</div>

<style>
	.c-button {
		@apply bg-gray-100 transition-transform relative overflow-hidden rounded-xl flex gap-3 items-center text-lg px-4 py-3;
	}
	.c-hover {
		@apply inset-x-0 inset-y-1/2 group-hover:inset-y-0 transform transition-all duration-500 overflow-hidden absolute flex items-center font-medium text-violet-200 bg-gray-950;
	}
	@keyframes marquee {
		0% {
			transform: translateY(0);
		}
		100% {
			transform: translateX(-50%);
		}
	}

	#cards {
		opacity: 0;
	}
	.card {
		min-width: 3rem;
		aspect-ratio: 1;
		opacity: 0;
		display: none;
		@apply transition-colors duration-300 ease-in-out;
	}
	.card .li {
		z-index: 2;
		@apply transition-colors duration-300 ease-in-out;
	}
	.card .shine {
		background-image: linear-gradient(
			135deg,
			rgba(107, 107, 112, 0.19) 0%,
			rgba(107, 107, 112, 0) 38.92%,
			rgba(107, 107, 112, 0) 61.08%,
			rgba(107, 107, 112, 0.22) 100%
		);
		background-position: center;
		background-size: 130% 100%;
	}

	.card[aria-current='page'] .shine {
		background-image: linear-gradient(
			135deg,
			rgba(201, 147, 213, 0.25) 0%,
			rgba(110, 88, 115, 0) 38.92%,
			rgba(110, 88, 115, 0) 61.08%,
			rgba(201, 147, 213, 0.35) 100%
		);
		background-position: center;
		background-size: 130% 100%;
	}

	#cards:hover > .card::after {
		opacity: 1;
	}
	.card[aria-current='page'] {
		@apply bg-violet-50;
	}
	.card[aria-current='page'] .li {
		@apply bg-violet-50 text-violet-500;
	}
	.card:hover::before {
		opacity: 1;
	}

	.card::before,
	.card::after {
		border-radius: inherit;
		pointer-events: none;
		content: '';
		height: 100%;
		left: 0px;
		opacity: 0;
		position: absolute;
		top: 0px;
		transition: opacity 500ms;
		width: 100%;
	}

	.card::before {
		background: radial-gradient(
			2rem circle at var(--mouse-x) var(--mouse-y),
			rgba(255, 255, 255, 0.9),
			pi/posts transparent 90%
		);
		z-index: 3;
	}

	.card[aria-current='page']::before {
		background: radial-gradient(
			2rem circle at var(--mouse-x) var(--mouse-y),
			rgba(252, 249, 255, 0.9),
			transparent 90%
		);
		z-index: 3;
	}

	.card::after {
		background: radial-gradient(
			4rem circle at var(--mouse-x) var(--mouse-y),
			rgb(206, 206, 210),
			transparent 100%
		);
		z-index: 1;
	}

	.card[aria-current='page']::after {
		background: radial-gradient(
			4rem circle at var(--mouse-x) var(--mouse-y),
			rgb(228, 210, 255),
			transparent 100%
		);
		z-index: 1;
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

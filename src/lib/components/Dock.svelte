<script>
	// @ts-nocheck

	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import Icon from '$lib/icon/index.svelte';
	import Cat from '$lib/icon/cat.svelte';
	import { Drawer } from '$lib/components/ui/vaul-svelte/dist';
	import DockAppIcon from './DockAppIcon.svelte';
	import ContactDrawerContent from './ContactDrawerContent.svelte';
	import { isDarkMode } from '$lib/stores/darkMode';

	let mouseX = Infinity;
	let isMobile = false;
	let dialogOpen = false;

	const items = [
		{ href: '/', label: 'Home', icon: 'home', match: (pathname) => pathname === '/' },
		{
			href: '/portfolio',
			label: 'Portfolio',
			icon: 'work',
			match: (pathname) => pathname.startsWith('/portfolio')
		},
		{ href: '/cv', label: 'CV', icon: 'resume', match: (pathname) => pathname === '/cv' }
	];

	function updateViewportState() {
		isMobile = window.matchMedia('(pointer:coarse)').matches || window.innerWidth <= 800;
		if (isMobile) {
			mouseX = Infinity;
		}
	}

	function handleMouseMove(event) {
		if (!isMobile) {
			mouseX = event.clientX;
		}
	}

	function handleMouseLeave() {
		mouseX = Infinity;
	}

	function handleCopy(event) {
		const hoverElement = event.currentTarget;
		const valueToCopy = hoverElement.getAttribute('data-copy');
		const notiElement = hoverElement.parentNode.querySelector('.c-noti');

		navigator.clipboard.writeText(valueToCopy).then(() => {
			hoverElement.classList.add('c-coping');
			hoverElement.parentNode.style.setProperty('pointer-events', 'none');
			notiElement.classList.add('c-copied');
			setTimeout(() => {
				notiElement.classList.remove('c-copied');
			}, 2000);
			setTimeout(() => {
				hoverElement.classList.remove('c-coping');
				hoverElement.parentNode.style.setProperty('pointer-events', 'auto');
			}, 500);
		});
	}

	onMount(() => {
		updateViewportState();
		window.addEventListener('resize', updateViewportState);

		return () => {
			window.removeEventListener('resize', updateViewportState);
		};
	});
</script>

<!-- svelte-ignore a11y-interactive-supports-focus -->
<div
	on:mousemove={handleMouseMove}
	on:mouseleave={handleMouseLeave}
	class="dock-shell fixed bottom-6 left-1/2 z-50 flex h-[3.75rem] w-auto -translate-x-1/2 items-end gap-1.5 rounded-full border p-2 shadow-2xl backdrop-blur-xl lg:bottom-8"
	class:dock-dark={$isDarkMode}
	role="toolbar"
	aria-label="Primary"
>
	{#each items as item}
		<DockAppIcon
			{mouseX}
			{isMobile}
			tooltip={item.label}
			href={item.href}
			isActive={item.match($page.url.pathname)}
			ariaLabel={item.label}
			dark={$isDarkMode}
		>
			<Icon name={item.icon} />
		</DockAppIcon>
	{/each}

	<Drawer.Root bind:open={dialogOpen}>
		<DockAppIcon
			{mouseX}
			{isMobile}
			tooltip="Contact"
			ariaLabel="Contact"
			onclick={() => (dialogOpen = true)}
			dark={$isDarkMode}
		>
			<Icon name="contact" />
		</DockAppIcon>

		<Drawer.Portal class="catTrigger relative inset-0 z-50 overflow-y-auto">
			<Drawer.Overlay class="fixed inset-0 bg-slate-200/95" />
			<Drawer.Content
				class="fixed bottom-6 inset-x-6 mx-auto mt-24 flex flex-col sm:left-1/2 sm:w-[28rem] sm:-ml-[14rem]"
			>
				<Cat />
				<Drawer.Close>
					<button
						class="absolute right-6 top-6 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 transition-transform focus:scale-95 focus-visible:shadow-focus-ring-button active:scale-75"
						type="button"
					>
						<svg
							width="12"
							height="12"
							viewBox="0 0 12 12"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M10.4854 1.99998L2.00007 10.4853"
								stroke="#999999"
								stroke-width="3"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M10.4854 10.4844L2.00007 1.99908"
								stroke="#999999"
								stroke-width="3"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</button>
				</Drawer.Close>

				<div
					class="flex-1 overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-2xl shadow-gray-200"
				>
					<header class="flex h-20 items-center border-b border-[#F7F7F7] px-6">
						<h2 class="text-xl font-medium leading-none text-[#222222]">Contact</h2>
					</header>
					<ContactDrawerContent {handleCopy} />
				</div>
			</Drawer.Content>
		</Drawer.Portal>
	</Drawer.Root>
</div>

<style>
	/* --- Light mode (default) --- */
	.dock-shell {
		border-color: rgba(238, 238, 241, 0.95);
		background-color: rgba(251, 251, 253, 0.9);
		color: #9ca3af; /* text-gray-400 */
		transition:
			background-color 0.5s ease,
			border-color 0.5s ease,
			box-shadow 0.5s ease;
	}

	/* --- Dark mode --- */
	.dock-shell.dock-dark {
		border-color: rgba(33, 38, 46, 0.95);
		background-color: rgba(17, 24, 39, 0.85);
		color: #aeb4c0;
		box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
	}

	.dock-shell:not(:hover) {
		--delay-tooltip: 0.8s;
	}

	.dock-shell:hover {
		--delay-tooltip: 0.05s;
	}
</style>

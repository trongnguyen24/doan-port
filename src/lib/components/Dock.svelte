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
	import { _, locale } from 'svelte-i18n';

	let mouseX = Infinity;
	let isMobile = false;
	let dialogOpen = false;

	function toggleLocale() {
		const next = $locale === 'vi' ? 'en' : 'vi';
		locale.set(next);
		localStorage.setItem('locale', next);
	}

	$: items = [
		{ href: '/', label: $_('nav.home'), icon: 'home', match: (pathname) => pathname === '/' },
		{
			href: '/portfolio',
			label: $_('nav.portfolio'),
			icon: 'work',
			match: (pathname) => pathname.startsWith('/portfolio')
		},
		{ href: '/cv', label: $_('nav.cv'), icon: 'resume', match: (pathname) => pathname === '/cv' }
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
			tooltip={$_('nav.contact')}
			ariaLabel={$_('nav.contact')}
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
						<h2 class="text-xl font-medium leading-none text-[#222222]">{$_('contact.title')}</h2>
					</header>
					<ContactDrawerContent {handleCopy} />
				</div>
			</Drawer.Content>
		</Drawer.Portal>
	</Drawer.Root>

	<DockAppIcon
		{mouseX}
		{isMobile}
		tooltip={$_('nav.lang_switch')}
		ariaLabel={$_('nav.lang_switch')}
		onclick={toggleLocale}
		dark={$isDarkMode}
	>
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"
			><path
				opacity="0.5"
				d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z"
				fill="currentColor"
			></path><path
				d="M17.7124 5.45331C18.7593 5.25995 19.7184 5.19444 20.5094 5.30066C21.2797 5.40411 22.0451 5.69443 22.4649 6.36546C22.9112 7.07875 22.7767 7.90702 22.4527 8.62306C22.1234 9.35067 21.5345 10.1218 20.7806 10.8912C19.2652 12.4379 16.9446 14.1173 14.1835 15.5883C11.4214 17.0599 8.68924 18.0721 6.49015 18.5079C5.39463 18.7249 4.39197 18.807 3.56745 18.709C2.76731 18.614 1.96779 18.3262 1.53503 17.6345C1.06423 16.882 1.23859 16.0043 1.60462 15.2551C1.97963 14.4875 2.63744 13.6693 3.47686 12.8522L4 12.4165C4 12.6349 4.08336 13.1257 4.16811 13.5624C4.21263 13.7918 4.25753 14.0062 4.29093 14.1584C3.6391 14.8237 3.19304 15.421 2.95236 15.9136C2.67513 16.481 2.74418 16.7391 2.80665 16.8389C2.87948 16.9553 3.1117 17.1443 3.74441 17.2195C4.35275 17.2918 5.18406 17.2375 6.1986 17.0365C8.21962 16.636 10.8118 15.685 13.4782 14.2644C16.1457 12.8433 18.3298 11.2493 19.7092 9.84143C20.4027 9.13359 20.8587 8.50726 21.0861 8.00467C21.3187 7.4905 21.2526 7.25586 21.1933 7.16105C21.1231 7.04882 20.9042 6.86715 20.3097 6.78731C19.7683 6.7146 19.0378 6.74602 18.1466 6.89948L16.8697 5.65597C17.2085 5.55454 17.5278 5.48526 17.7124 5.45331Z"
				fill="currentColor"
			></path></svg
		>
	</DockAppIcon>
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

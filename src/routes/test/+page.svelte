<script>
	/** @type {import('./$types').PageData} */
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import PageGsapRefresh from '$lib/utils/PageGsapRefresh.svelte';
	import Gsapsetup from '$lib/utils/Gsapsetup.svelte';
	export let data;

	onMount(() => {
		const cont = document.querySelector('.us-wrap');
		let people = gsap.utils.toArray('.us__item');

		let maxWidth = 0;
		people.forEach((person) => {
			maxWidth += person.offsetWidth;
		});

		gsap.to(people, {
			x: () => `-${maxWidth - window.innerWidth}`,
			ease: 'none',
			scrollTrigger: {
				trigger: cont,
				markers: true,
				scrub: 1,
				pin: true,
				end: () => `+=${maxWidth}`
			}
		});
	});
</script>

<Gsapsetup />
<PageGsapRefresh />

<h1 class="text-6xl h-screen py-60">Testtttttt</h1>

<div class="us-wrap">
	<div class="us">
		<div class="us__item">
			<h1>Our Team</h1>
			<p>
				in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum
				fugiat quo voluptas nulla pariatur?
			</p>
		</div>
		<div class="us__item">
			<img src="https://pic.onlinewebfonts.com/svg/img_405324.png" class="team-member-img" />
		</div>
		<div class="us__item">
			<img src="https://pic.onlinewebfonts.com/svg/img_405324.png" class="team-member-img" />
		</div>
		<div class="us__item">
			<img src="https://pic.onlinewebfonts.com/svg/img_405324.png" class="team-member-img" />
		</div>
		<div class="us__item">
			<img src="https://pic.onlinewebfonts.com/svg/img_405324.png" class="team-member-img" />
		</div>
		<div class="us__item">
			<img src="https://pic.onlinewebfonts.com/svg/img_405324.png" class="team-member-img" />
		</div>
		<div class="us__item">
			<img src="https://pic.onlinewebfonts.com/svg/img_405324.png" class="team-member-img" />
		</div>
	</div>
</div>

<style>
	.us-wrap {
		overflow: hidden;
	}

	.us {
		display: flex;
		-ms-flex-wrap: nowrap;
		flex-wrap: nowrap;
		-ms-flex-item-align: center;
		align-self: center;
		height: 100vh;
		gap: 5rem;
	}
	.us__item {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		padding: 2rem;
		border: solid 2px black;
		flex: 1 0 auto;
	}
	.us__item img {
		width: 200px;
	}
	.us__item span {
		font-size: 30px;
		display: block;
	}
	.us__item:nth-of-type(1) {
		width: 50vw;
	}
</style>

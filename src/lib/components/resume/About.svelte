<script>
	// @ts-nocheck

	import { onMount, onDestroy } from 'svelte';
	import { gsap } from 'gsap';
	import { page } from '$app/stores';
	import MagicText from '../MagicText.svelte';
	import PageGsapRefresh from '$lib/utils/PageGsapRefresh.svelte';
	import Gsapsetup from '$lib/utils/Gsapsetup.svelte';

	onMount(() => {
		(function () {
			let xPercent, yPercent;
			let clientX = 1,
				clientY = 1;
			let xPointer, yPointer;
			let windowHeight = window.innerHeight,
				windowWidth = window.innerWidth;
			let handPointer = document.querySelector('.pointer');
			let rect = handPointer.getBoundingClientRect();

			const dom = {
				face: document.querySelector('#face'),
				eye: document.querySelectorAll('#eye'),
				innerFace: document.querySelector('#inner-face'),
				hairFront: document.querySelector('#hair-front'),
				eyeLightL: document.querySelector('#eyeLight_L'),
				eyeLightR: document.querySelector('#eyeLight_R'),
				hairBack: document.querySelector('#hair-back'),
				ear: document.querySelectorAll('#ear'),
				eyebrowLeft: document.querySelector('#eyebrow_L'),
				eyebrowRight: document.querySelector('#eyebrow_R')
			};

			// update mousemove
			document.addEventListener('mousemove', updateMouseCoords);

			function updateMouseCoords(e) {
				clientX = e.clientX;
				clientY = e.clientY;
			}

			// update if browser resizes
			function updateWindowSize() {
				windowHeight = window.innerHeight;
				windowWidth = window.innerWidth;
			}
			window.addEventListener('resize', updateWindowSize);
			updateWindowSize();

			function movePointer() {
				let element = document.getElementById('pointer');
				if (!element) {
					document.removeEventListener('mousemove', movePointer);
					document.removeEventListener('touchmove', movePointer);
					return;
				}
				rect = handPointer.getBoundingClientRect();
				// console.log('running');
				xPointer = rect.x + rect.width / 2;
				yPointer = rect.y + rect.height / 2;
				xPercent = gsap.utils.mapRange(
					0,
					windowWidth,
					(xPointer / windowWidth) * -1,
					1 - xPointer / windowWidth,
					clientX
				);
				yPercent = gsap.utils.mapRange(
					0,
					windowHeight,
					(xPointer / windowHeight) * -1,
					1 - yPointer / windowHeight,
					clientY
				);
				let x = xPercent * 80;
				let y = yPercent * 80;

				gsap.to(dom.face, {
					yPercent: y / 50,
					xPercent: x / 50
				});
				gsap.to(dom.eye, {
					yPercent: y / 10,
					xPercent: x / 18
				});
				gsap.to(dom.innerFace, {
					yPercent: y / 8.5,
					xPercent: x / 8.5
				});
				gsap.to(dom.hairFront, {
					yPercent: y / 15,
					xPercent: x / 22
				});
				gsap.to(dom.hairBack, {
					yPercent: (y / 20) * -1,
					xPercent: (x / 20) * -1
				});
				gsap.to(dom.ear, {
					yPercent: (y / 10) * -1,
					xPercent: (x / 50) * -1
				});
				gsap.to([dom.eyebrowLeft, dom.eyebrowRight], {
					yPercent: y / 10
				});
				gsap.to([dom.eyeLightL, dom.eyeLightR], {
					yPercent: (y / 3) * -1,
					xPercent: (x / 2) * -1
				});
			}

			// Nếu phần tử tồn tại, gắn sự kiện
			document.addEventListener('mousemove', movePointer);
			document.addEventListener('touchmove', movePointer);
			// Gọi hàm khi trang tải xong

			// gsap.ticker.add(movePointer);
			// gsap.ticker.remove(movePointer);
		})();
	});
</script>

<Gsapsetup />
<PageGsapRefresh />

<section class="py-4">
	<div class="flex flex-row gap-4 md:gap-8">
		<div class="bg-avatar size-32 md:size-44 aspect-square rounded-2xl md:rounded-3xl">
			<div id="pointer" class="pointer">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 185 204">
					<g id="aaaaa">
						<!-- <circle id="Ellipse 17" cx="92.5" cy="124.5" r="79.5" fill="#fff" /> -->
						<g id="hair-back">
							<path
								id="aaaaa_2"
								fill="#312D2D"
								d="M88 25c-14 0-19.5 8.5-20.5 13.5-16.5-5-23.5 19-22.5 29s0 11-3 13.5-6.5 0-7.5-4c-.8 7.6 3.666 11.5 6 12.5-5.834 3.333-11.221 8.898-9.5 17.5 1.5 7.5 8 13.5 11 14-.4-.8.5-2 1-2.5 2 1.5 7.2 4.9 12 6.5 4.8 1.6 9-.667 10.5-2l13 4.5 14.5 1c5-.667 15.8-2.1 19-2.5 3.5-1.5 6-5.5 10-6-1.6 2.8-6.334 5.167-8.5 6H126c6 0 2.5 1.5 10.5 0 6.4-1.2 11-8.5 12.5-12l-4 9.5c2.833-1 9.9-4.8 15.5-12 7-9-3-12.5-11.5-19s-2.5-10.5 0-20c2-7.6-7.5-11.5-12.5-12.5.166-2.167-.3-8.7-3.5-17.5s-14.334-9.667-19.5-9C110.833 30.667 102 25 88 25Z"
							/>
							<path
								id="aaaaa_3"
								stroke="#000"
								stroke-linecap="round"
								d="M48.5 85c-2.8 2.8-6.167 4.167-7.5 4.5m21.01 20c-.833 1.667-2.2 5.5-1 7.5 1.2 2 3.5 4.5 4.5 5.5M44 97c-2 1.5-5.9 5.5-5.5 9.5.5 5 3 9.5 4.5 11.5m91.011-36c-.5 4-2.5 8 0 13m9-21c-2.5 7-7.5 11.5-6.5 17s8 5.333 9 6m-14.5 8.5c3 13-2 19-10 19m31.5-24c3 4.5 6 8.5-5 20m-3-5.5c-.334 2-2.9 6.7-10.5 9.5m-24.5-3c2.333-.833 7.7-4 10.5-10M43 87c-5.5 2.5-18 10-11 23.5M148 68c2.5 8.5-2.8 14.1-2 18.5 1 5.5 7 8 9.5 8"
							/>
						</g>
						<g id="body">
							<path
								id="aaaaa_4"
								fill="#FCDACB"
								d="m76.617 133.26.883-20.76H109l-.888 19.536a4 4 0 0 0 2.039 3.671L128.5 146l2 36H53l-9-35 29.903-10.121a4 4 0 0 0 2.714-3.619Z"
							/>
							<path
								id="aaaaa_5"
								fill="#A2736B"
								d="M87 128.5c-2.998.111-7-3.833-10-6.5v-6l15.5 1.5H109v1.5c-3.167 2.667-12 9.13-22 9.5Z"
							/>
							<path
								id="aaaaa_6"
								fill="#F1F5F9"
								d="M35.5 150c6.8-4.8 25.166-10 33.5-12 .666 5.333 6.5 16 24.5 16s21.833-10.667 21.5-16c5.666 3 18.6 9.9 25 13.5 8 4.5 9.5 5.5 14 10.5 3.6 4 5.833 18 6.5 23H22c.5-6 1.5-17 2.5-21.5s2.5-7.5 11-13.5Z"
							/>
							<path
								id="aaaaa_7"
								fill="#DDD6FE"
								d="M47 172.5c-.5 1-.5 9-1 12.5l91 .5V174c0-2-1.5-1.5-3-1.5s-19.5 1.5-40.5 1.5-40.5-3-43.5-3-2.5.5-3 1.5Z"
							/>
							<path
								id="aaaaa_8"
								fill="#C4B5FD"
								d="M127.5 180c-3.2-.8-4.5-5.167-4.5-7l12.5-.5-.5 2.5c-1 1.833-4.3 5.8-7.5 5Z"
							/>
							<path
								id="aaaaa_9"
								fill="#C4B5FD"
								d="m50 175-1-4 12 1-.5 5.5-1.31 1.834a2 2 0 0 1-2.828.438L50 175Z"
							/>
							<g id="aaaaa_10" fill="#DDD6FE">
								<path
									d="m42 146 12-4 6.5 30-1.278 5.112a2 2 0 0 1-3.123 1.127L51 174.5 42 146ZM137.5 149l-10-4.5c0 2.333-.2 8.4-1 14s-2 11.333-2.5 13.5c.167 2 1.1 6.2 3.5 7 2.4.8 5.333-2.667 6.5-4.5.167-1.667.7-5.8 1.5-9s1.667-12.333 2-16.5Z"
								/>
							</g>
							<circle id="aaaaa_11" cx="56.5" cy="174.5" r="1.5" fill="#8B5CF6" />
							<circle id="aaaaa_12" cx="128.5" cy="175.5" r="1.5" fill="#8B5CF6" />
							<path
								id="aaaaa_13"
								stroke="#E2E8F0"
								d="M65.5 139c.833 6.5 7.6 19.2 28 18 20.4-1.2 24.833-12.333 24.5-17.5"
							/>
							<g id="aaaaa_14" fill="#E2E8F0">
								<path
									d="M32.5 171.5c.4 1.2 2.833 10.5 4 13.5h5c-2-4.667-6.8-16.9-8-16.5-1.5.5-1.5 1.5-1 3ZM145.5 171.5c-.4 1.6-1.833 10.667-2.5 13.5h5c0-3 .1-12.8.5-16 .5-4-2.5.5-3 2.5Z"
								/>
							</g>
						</g>
						<path
							id="face"
							fill="#FCDACB"
							d="M74.5 115C71 111.5 61 106 61 81.5V63c0-5 5-26 31.5-26s32 21 32 26v23c0 16.5-9 26-12 29s-14 8.5-20 8.5-14.5-5-18-8.5Z"
						/>
						<g id="ear">
							<g id="ear_L">
								<path
									id="aaaaa_15"
									fill="#FCDACB"
									d="M64.983 90.216C64.983 94.754 67 101 60.833 101c-3.436 0-7.303-5.135-7.779-10.784-.52-6.162 2.787-8.216 6.224-8.216 3.437 0 5.705 3.678 5.705 8.216Z"
								/>
								<path
									id="aaaaa_16"
									fill="#312D2D"
									d="M56.648 85.295c1.57 1.1 4.895 3.261 4.134 5.76a.423.423 0 0 1-.302.31.356.356 0 0 1-.212-.01.322.322 0 0 1-.16-.129c-.567-.83-.67-1.894-1.21-2.769a14.49 14.49 0 0 0-2.589-2.768.226.226 0 0 1-.077-.166.274.274 0 0 1 .068-.185.274.274 0 0 1 .172-.094.225.225 0 0 1 .176.051Z"
								/>
								<path
									id="aaaaa_17"
									fill="#312D2D"
									d="M59.06 95.47c-.7-1.84-2.277-5.595-.258-7.27a.413.413 0 0 1 .424-.086c.07.026.13.072.172.13a.34.34 0 0 1 .062.202c.013 1.031-.491 1.991-.524 3.045.044 1.305.255 2.594.626 3.841a.235.235 0 0 1-.028.186.27.27 0 0 1-.158.117.27.27 0 0 1-.196-.02.235.235 0 0 1-.12-.145Z"
								/>
							</g>
							<g id="ear_R">
								<path
									id="aaaaa_18"
									fill="#FCDACB"
									d="M120.315 90.216c0 4.538-2.017 10.784 4.15 10.784 3.437 0 7.303-5.135 7.779-10.784.52-6.162-2.786-8.216-6.223-8.216-3.438 0-5.706 3.678-5.706 8.216Z"
								/>
								<path
									id="aaaaa_19"
									fill="#312D2D"
									d="M128.809 85.294c-1.569 1.1-4.895 3.261-4.134 5.76a.417.417 0 0 0 .302.31.357.357 0 0 0 .212-.01.324.324 0 0 0 .16-.128c.567-.831.669-1.895 1.21-2.77a14.491 14.491 0 0 1 2.589-2.767c.048-.041.075-.101.077-.167a.273.273 0 0 0-.068-.184.274.274 0 0 0-.172-.095.225.225 0 0 0-.176.051Z"
								/>
								<path
									id="aaaaa_20"
									fill="#312D2D"
									d="M125.252 96.985c.814-2.255 2.627-6.87.671-8.775a.352.352 0 0 0-.426-.08.45.45 0 0 0-.182.167.508.508 0 0 0-.074.246c-.071 1.243.387 2.372.361 3.64a22.646 22.646 0 0 1-.852 4.665.318.318 0 0 0 .018.222.246.246 0 0 0 .155.132.245.245 0 0 0 .2-.035.318.318 0 0 0 .129-.182Z"
								/>
							</g>
						</g>
						<g id="inner-face">
							<path
								id="aaaaa_21"
								stroke="#F6B0B0"
								stroke-linecap="round"
								stroke-width="2"
								d="M79.125 91.125c-.915.784-1.956 1.41-2.875 2.188"
							/>
							<path
								id="aaaaa_22"
								stroke="#F6B0B0"
								stroke-linecap="round"
								stroke-width="2"
								d="M116.125 91.125c-.915.784-1.956 1.41-2.875 2.188"
							/>
							<path
								id="aaaaa_23"
								stroke="#F6B0B0"
								stroke-linecap="round"
								stroke-width="2"
								d="M70.563 94.188c1.633-1.634 3.667-2.8 5.5-4.188"
							/>
							<path
								id="aaaaa_24"
								stroke="#F6B0B0"
								stroke-linecap="round"
								stroke-width="2"
								d="M107.562 94.188c1.634-1.634 3.668-2.8 5.5-4.188"
							/>
							<path
								id="aaaaa_25"
								stroke="#F6B0B0"
								stroke-linecap="round"
								stroke-width="2"
								d="M67 93.313a16.994 16.994 0 0 1 3.063-2.376"
							/>
							<path
								id="aaaaa_26"
								stroke="#F6B0B0"
								stroke-linecap="round"
								stroke-width="2"
								d="M104 93.313a17.015 17.015 0 0 1 3.062-2.376"
							/>
							<path
								id="aaaaa_27"
								fill="#312D2D"
								d="M87 93.827c0-.691 2-1.037 2.8-.691.4.115 1.2.484 1.2 1.037 0 .691-.4 1.037-1.2.691-.206-.089-.4-.691-1.2-.691-.8 0-1.6.691-1.6-.346Z"
							/>
							<path
								id="aaaaa_28"
								fill="#312D2D"
								d="M95 93.827c0-.691-1.5-1.037-2.1-.691-.3.115-.9.484-.9 1.037 0 .691.3 1.037.9.691.154-.089.3-.691.9-.691.6 0 1.2.691 1.2-.346Z"
							/>
							<path
								id="aaaaa_29"
								stroke="#312D2D"
								stroke-linecap="round"
								d="M84 106s3.5 2 8.5 2c4 0 7.5-1.5 7.5-1.5"
							/>
							<path
								id="aaaaa_30"
								stroke="#312D2D"
								stroke-linecap="round"
								d="M86 73c1.226 1.577 2.844 2.939 3.5 4.5.656 1.561.825 6.102.5 10"
							/>
							<g id="eye">
								<g id="eye_R">
									<g id="Group 3">
										<g id="Group 2">
											<ellipse
												id="Ellipse 14"
												cx="4.311"
												cy="5.008"
												fill="#180E0D"
												rx="4.311"
												ry="5.008"
												transform="scale(-1 1) rotate(-14.676 239.865 472.483)"
											/>
											<circle
												id="Ellipse 15"
												cx="3.431"
												cy="3.431"
												r="3.431"
												fill="#58443C"
												transform="scale(-1 1) rotate(-14.676 245.164 468.827)"
											/>
											<circle
												id="Ellipse 16"
												cx="1.669"
												cy="1.669"
												r="1.669"
												fill="#0F0A07"
												transform="scale(-1 1) rotate(-14.676 251.687 459.535)"
											/>
											<circle
												id="eyeLight_R"
												cx="1.252"
												cy="1.252"
												r="1.252"
												fill="#CFC0B9"
												transform="matrix(-1 0 0 1 106.187 77.339)"
											/>
										</g>
									</g>
								</g>
								<g id="eye_L">
									<g id="Group 3_2">
										<g id="Group 2_2">
											<ellipse
												id="Ellipse 14_2"
												cx="77.422"
												cy="79.919"
												fill="#180E0D"
												rx="4.298"
												ry="4.993"
												transform="rotate(-14.676 77.422 79.92)"
											/>
											<circle
												id="Ellipse 15_2"
												cx="77.272"
												cy="79.839"
												r="3.42"
												fill="#58443C"
												transform="rotate(-14.676 77.272 79.84)"
											/>
											<circle
												id="Ellipse 16_2"
												cx="77.688"
												cy="79.931"
												r="1.664"
												fill="#0F0A07"
												transform="rotate(-14.676 77.688 79.931)"
											/>
											<circle id="eyeLight_L" cx="75.594" cy="78.577" r="1.248" fill="#CFC0B9" />
										</g>
									</g>
								</g>
							</g>
							<g id="eye_ML">
								<path
									id="Vector 37"
									fill="#FCDACB"
									d="m85 78.5 1.5 1-2-6C82 72.5 79.4 70 79 70H67l-4 3.5 2 5 2.5-1c2.667-.5 8.8-1.4 12-1 3.2.4 5 1.5 5.5 2Z"
								/>
								<path
									id="Vector 36"
									fill="#100E02"
									d="M78 77c4.4 0 5.833 1.667 6 2.5l1.5-1c-.833-.833-3.6-2.5-8-2.5s-8.833 1-10.5 1.5l2 1.5c1.167-.833 4.6-2 9-2Z"
								/>
							</g>
							<g id="eye_MR">
								<path
									id="Vector 37_2"
									fill="#FCDACB"
									d="m98.5 78.5-1.5 1 2-6c2.5-1 5.1-3.5 5.5-3.5h12l4 3.5-2 5-2.5-1c-2.667-.5-8.8-1.4-12-1-3.2.4-5 1.5-5.5 2Z"
								/>
								<path
									id="Vector 36_2"
									fill="#100E02"
									d="M105.5 77c-1.5 0-4.5 1-6 2l-1.5-.5c0-1.5 5.1-2.5 9.5-2.5s7.333 1 9 1.5l-2 1c-1.167-.833-4.6-1.5-9-1.5Z"
								/>
							</g>
							<path
								id="eyebrow_L"
								fill="#312D2D"
								d="M81.838 69.608c.458.26.778.599 1.003.945.546.84-.402 1.665-1.482 1.395a6.232 6.232 0 0 1-1.56-.6c-1.53-.87-5.098-2.61-7.137-2.61-2.038 0-3.568 1.305-5.097 2.174-1.53.87-1.02.435-1.53 0-.51-.434 4.588-3.912 6.627-3.912 2.04 0 7.646 1.739 9.176 2.608Z"
							/>
							<path
								id="eyebrow_R"
								fill="#312D2D"
								d="M98.162 69.608a2.88 2.88 0 0 0-1.003.945c-.546.84.402 1.665 1.482 1.395a6.232 6.232 0 0 0 1.56-.6c1.529-.87 5.097-2.61 7.136-2.61 2.039 0 3.569 1.305 5.098 2.174 1.529.87 1.02.435 1.529 0 .51-.434-4.587-3.912-6.626-3.912-2.039 0-7.646 1.739-9.176 2.608Z"
							/>
						</g>
						<g id="hair-front">
							<path
								id="aaaaa_31"
								fill="#312D2D"
								d="M91.5 62c-10 .4-13.833-7.5-14.5-11.5 0-.151 0-.302-.002-.454C74.23 50.018 70.911 51.05 69.5 55c-2.5 7-4.5 7.5-6 12-1.2 3.6-2 8.833-2.5 15.5L56 80c-1.833-1.334-5.2-5.4-4-11 1.5-7 6.135-17.636 13-24.5 8.5-8.5 20-9.637 20-9.637 2.685-.592 6.255-.759 11-.363 12 1 20.5 7.5 26 13s7.5 12 8.5 24c.8 9.6-4.167 12.833-5.5 15.5l-1-7c-1.667-2.5-5.8-8.6-9-13-4-5.5-11-5.5-23.5-5Z"
							/>
							<path
								id="aaaaa_32"
								stroke="#000"
								stroke-linecap="round"
								d="M77 50s3.125 6.464 8.5 8c7 2 13.5 0 13.5 0"
							/>
							<path
								id="aaaaa_33"
								stroke="#000"
								stroke-linecap="round"
								d="M77 50s-1.5 4.5 7 11 19-2 29 4"
							/>
							<path
								id="aaaaa_34"
								stroke="#000"
								stroke-linecap="round"
								d="M91.01 37.5c-1.166 0-5.41-.6-11.01 1-7 2-7.49 5-7.49 7-3.5 0-10.5 2-14 10.5m34-14.5c2-.666 7.3-1.3 12.5 1.5m9.5 16c2.334 1.167 6.71 3.72 8.99 6 2.5 2.5 2.677 7.5 3.01 9m-21.5-15c2.334 1.667 6.5 4.5 11.5 6 5.787 1.736 6.834 7 8 10m-61.5-11.5c-1 2-3.4 6.4-5 8m-7.51 5-2 8.5"
							/>
						</g>
					</g>
				</svg>
			</div>
		</div>
		<div class="font-medium flex flex-col justify-center text-[1.35rem] md:text-3xl text-slate-600">
			<p>Howdy!</p>
			<p>I am <span class="magic-title">Doan</span>,</p>
			<p>a <span class="magic-title">Graphic Designer</span></p>
		</div>
	</div>
	<div class="pt-8 title-4 text-slate-600 leading-relaxed">
		With a keen eye for design and 2 years of hands-on experience, I specialise in using Adobe
		Creative Suite to create visually compelling content. My expertise spans across merchandise
		concepts, editorial design, POSM, and comprehensive branding to packaging. I pride myself on my
		ability to transform concepts into simplified 2D vector or 3D illustrations, typography,
		engaging social media graphics, and realistic 3D product visualisations, contributing to
		cohesive brand identities and storytelling.
	</div>
</section>

<style>
	.bg-avatar {
		--purple: #f8f1ff;
		--violet: #e2d7ff;
		--pink: #ffe1f2;
		animation: background-pan 3s linear infinite;
		background-size: 200% 200%;
		background-image: linear-gradient(
			to right,
			var(--purple),
			var(--violet),
			var(--pink),
			var(--purple)
		);
	}
</style>

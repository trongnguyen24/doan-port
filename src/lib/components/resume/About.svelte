<script>
	// @ts-nocheck

	import { onMount, onDestroy } from 'svelte';
	import { gsap } from 'gsap';
	import { page } from '$app/stores';
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
					return;
				}
				console.log('running');
				let rect = handPointer.getBoundingClientRect();
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
					yPercent: y / 40,
					xPercent: x / 40
				});
				gsap.to(dom.eye, {
					yPercent: y / 10,
					xPercent: x / 18
				});
				gsap.to(dom.innerFace, {
					yPercent: y / 6,
					xPercent: x / 6
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
					yPercent: y / 2.5
				});
				gsap.to([dom.eyeLightL, dom.eyeLightR], {
					yPercent: y / 1.5,
					xPercent: (x / 4) * -1
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

<section class="">
	<div class="size-52 bg-slate-100 rounded-3xl">
		<div id="pointer" class="pointer">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 185 185">
				<g>
					<g id="hair-back">
						<path
							fill="#312D2D"
							d="M88 25c-14 0-19.5 8.5-20.5 13.5-16.5-5-23.5 19-22.5 29s0 11-3 13.5-6.5 0-7.5-4c-.8 7.6 3.666 11.5 6 12.5-5.834 3.333-11.221 8.898-9.5 17.5 1.5 7.5 8 13.5 11 14-.4-.8.5-2 1-2.5 2 1.5 7.2 4.9 12 6.5 4.8 1.6 9-.667 10.5-2l13 4.5 14.5 1c5-.667 15.8-2.1 19-2.5 3.5-1.5 6-5.5 10-6-1.6 2.8-6.334 5.167-8.5 6H126c6 0 2.5 1.5 10.5 0 6.4-1.2 11-8.5 12.5-12l-4 9.5c2.833-1 9.9-4.8 15.5-12 7-9-3-12.5-11.5-19s-2.5-10.5 0-20c2-7.6-7.5-11.5-12.5-12.5.166-2.167-.3-8.7-3.5-17.5s-14.334-9.667-19.5-9C110.833 30.667 102 25 88 25Z"
						/>
						<path
							stroke="#000"
							stroke-linecap="round"
							d="M48.5 85c-2.8 2.8-6.167 4.167-7.5 4.5m21.01 20c-.833 1.667-2.2 5.5-1 7.5 1.2 2 3.5 4.5 4.5 5.5M44 97c-2 1.5-5.9 5.5-5.5 9.5.5 5 3 9.5 4.5 11.5m91.011-36c-.5 4-2.5 8 0 13m9-21c-2.5 7-7.5 11.5-6.5 17s8 5.333 9 6m-14.5 8.5c3 13-2 19-10 19m31.5-24c3 4.5 6 8.5-5 20m-3-5.5c-.334 2-2.9 6.7-10.5 9.5m-24.5-3c2.333-.833 7.7-4 10.5-10"
						/>
					</g>
					<g id="body">
						<path
							fill="#F1CCBC"
							d="m76.617 133.26.883-20.76H109l-.888 19.536a4 4 0 0 0 2.039 3.671L128.5 146l2 36H53l-9-35 29.903-10.121a4 4 0 0 0 2.714-3.619Z"
						/>
						<path
							fill="#A2736B"
							d="M87 128.5c-2.998.111-7-3.833-10-6.5v-6l15.5 1.5H109v1.5c-3.167 2.667-12 9.13-22 9.5Z"
						/>
						<path
							fill="#FAEDE6"
							d="M35.5 150c6.8-4.8 25.166-10 33.5-12 .666 5.333 6.5 16 24.5 16s21.833-10.667 21.5-16c5.666 3 18.6 9.9 25 13.5 8 4.5 9.5 5.5 14 10.5 3.6 4 5.833 18 6.5 23H22c.5-6 1.5-17 2.5-21.5s2.5-7.5 11-13.5Z"
						/>
						<path
							fill="#8A7B7B"
							d="M47 172.5c-.5 1-.5 9-1 12.5l91 .5V174c0-2-1.5-1.5-3-1.5s-19.5 1.5-40.5 1.5-40.5-3-43.5-3-2.5.5-3 1.5Z"
						/>
						<path
							fill="#6C5959"
							d="M127.5 180c-3.2-.8-4.5-5.167-4.5-7l12.5-.5-.5 2.5c-1 1.833-4.3 5.8-7.5 5Z"
						/>
						<path
							fill="#6C5959"
							d="m50 175-1-4 12 1-.5 5.5-1.31 1.834a2 2 0 0 1-2.828.438L50 175Z"
						/>
						<g id="0" fill="#8A7B7B">
							<path
								d="m42 146 12-4 6.5 30-1.278 5.112a2 2 0 0 1-3.123 1.127L51 174.5 42 146ZM137.5 149l-10-4.5c0 2.333-.2 8.4-1 14s-2 11.333-2.5 13.5c.167 2 1.1 6.2 3.5 7 2.4.8 5.333-2.667 6.5-4.5.167-1.667.7-5.8 1.5-9s1.667-12.333 2-16.5Z"
							/>
						</g>
						<circle cx="56.5" cy="174.5" r="1.5" fill="#D9D9D9" />
						<circle cx="128.5" cy="175.5" r="1.5" fill="#D9D9D9" />
						<path
							stroke="#ECDFD9"
							d="M65.5 139c.833 6.5 7.6 19.2 28 18 20.4-1.2 24.833-12.333 24.5-17.5"
						/>
						<g fill="#ECDFD9">
							<path
								d="M32.5 171.5c.4 1.2 2.833 10.5 4 13.5h5c-2-4.667-6.8-16.9-8-16.5-1.5.5-1.5 1.5-1 3ZM145.5 171.5c-.4 1.6-1.833 10.667-2.5 13.5h5c0-3 .1-12.8.5-16 .5-4-2.5.5-3 2.5Z"
							/>
						</g>
					</g>
					<path
						id="face"
						fill="#F1CCBC"
						d="M74.5 115C71 111.5 61 106 61 81.5V63c0-5 5-26 31.5-26s32 21 32 26v23c0 16.5-9 26-12 29s-14 8.5-20 8.5-14.5-5-18-8.5Z"
					/>
					<g id="ear">
						<g id="ear_L">
							<path
								fill="#F1CCBC"
								d="M64.983 90.216C64.983 94.754 67 101 60.833 101c-3.436 0-7.303-5.135-7.779-10.784-.52-6.162 2.787-8.216 6.224-8.216 3.437 0 5.705 3.678 5.705 8.216Z"
							/>
							<path
								fill="#B89B8E"
								d="M56.648 85.295c1.57 1.1 4.895 3.261 4.134 5.76a.423.423 0 0 1-.302.31.356.356 0 0 1-.212-.01.322.322 0 0 1-.16-.129c-.567-.83-.67-1.894-1.21-2.769a14.49 14.49 0 0 0-2.589-2.768.226.226 0 0 1-.077-.166.274.274 0 0 1 .068-.185.274.274 0 0 1 .172-.094.225.225 0 0 1 .176.051Z"
							/>
							<path
								fill="#B89B8E"
								d="M59.06 95.47c-.7-1.84-2.277-5.595-.258-7.27a.413.413 0 0 1 .424-.086c.07.026.13.072.172.13a.34.34 0 0 1 .062.202c.013 1.031-.491 1.991-.524 3.045.044 1.305.255 2.594.626 3.841a.235.235 0 0 1-.028.186.27.27 0 0 1-.158.117.27.27 0 0 1-.196-.02.235.235 0 0 1-.12-.145Z"
							/>
						</g>
						<g id="ear_R">
							<path
								fill="#F1CCBC"
								d="M120.315 90.216c0 4.538-2.017 10.784 4.15 10.784 3.437 0 7.303-5.135 7.779-10.784.52-6.162-2.786-8.216-6.223-8.216-3.438 0-5.706 3.678-5.706 8.216Z"
							/>
							<path
								fill="#B89B8E"
								d="M128.809 85.294c-1.569 1.1-4.895 3.261-4.134 5.76a.417.417 0 0 0 .302.31.357.357 0 0 0 .212-.01.324.324 0 0 0 .16-.128c.567-.831.669-1.895 1.21-2.77a14.491 14.491 0 0 1 2.589-2.767c.048-.041.075-.101.077-.167a.273.273 0 0 0-.068-.184.274.274 0 0 0-.172-.095.225.225 0 0 0-.176.051Z"
							/>
							<path
								fill="#B89B8E"
								d="M125.252 96.985c.814-2.255 2.627-6.87.671-8.775a.352.352 0 0 0-.426-.08.45.45 0 0 0-.182.167.508.508 0 0 0-.074.246c-.071 1.243.387 2.372.361 3.64a22.646 22.646 0 0 1-.852 4.665.318.318 0 0 0 .018.222.246.246 0 0 0 .155.132.245.245 0 0 0 .2-.035.318.318 0 0 0 .129-.182Z"
							/>
						</g>
					</g>
					<g id="inner-face">
						<path
							fill="#F6B0B0"
							fill-rule="evenodd"
							d="M73.69 94.938c-1.196-.118-2.273-.442-3.043-.915-.69-.424-1.18-.919-1.439-1.45a1.907 1.907 0 0 1-.053-1.619c.315-.602 1.002-1.14 1.963-1.534.78-.307 1.762-.454 2.749-.413 1.297.107 2.484.43 3.374.914.89.485 1.43 1.105 1.534 1.761a.38.38 0 0 1 0 .207c.158.291.23.593.216.895.067.514-.253 1.022-.896 1.424-.643.402-1.563.67-2.579.75a8.031 8.031 0 0 1-1.826-.02Z"
							clip-rule="evenodd"
						/>
						<path
							fill="#F6B0B0"
							fill-rule="evenodd"
							d="M108.483 94.948c-1.011-.077-1.928-.342-2.571-.741-.643-.4-.965-.904-.905-1.417a1.885 1.885 0 0 1 .197-.896v-.207c.106-.66.649-1.281 1.542-1.767.894-.486 2.086-.807 3.386-.913.988-.041 1.97.106 2.749.414.962.395 1.649.933 1.964 1.537.223.535.205 1.09-.053 1.621-.258.532-.75 1.029-1.439 1.453-.771.474-1.847.798-3.044.916-.601.07-1.225.07-1.826 0Zm3.004-2.168v.05c0 .049.098-.04 0-.04v-.01Z"
							clip-rule="evenodd"
						/>
						<path
							fill="#B89B8E"
							d="M87 93.827c0-.691 2-1.037 2.8-.691.4.115 1.2.484 1.2 1.037 0 .691-.4 1.037-1.2.691-.206-.089-.4-.691-1.2-.691-.8 0-1.6.691-1.6-.346Z"
						/>
						<path
							fill="#B89B8E"
							d="M95 93.827c0-.691-1.5-1.037-2.1-.691-.3.115-.9.484-.9 1.037 0 .691.3 1.037.9.691.154-.089.3-.691.9-.691.6 0 1.2.691 1.2-.346Z"
						/>
						<path
							stroke="#76726F"
							stroke-linecap="round"
							d="M84 106c2.5 1 3.5 2 8.5 2 4 0 6.667-1 7.5-1.5"
						/>
						<path
							id="eyebrow_L"
							fill="#76726F"
							d="M82.244 69.75c.412.275.7.632.903.997.49.886-.362 1.756-1.334 1.471a5.14 5.14 0 0 1-1.402-.633c-1.376-.917-4.585-2.751-6.419-2.751-1.834 0-3.209 1.375-4.584 2.292-1.376.917-.918.459-1.376 0-.458-.458 4.126-4.126 5.96-4.126 1.834 0 6.877 1.834 8.252 2.75Z"
						/>
						<path
							id="eyebrow_R"
							fill="#76726F"
							d="M98.375 69.75c-.411.275-.7.632-.902.997-.49.886.362 1.756 1.334 1.471a5.14 5.14 0 0 0 1.402-.633c1.375-.917 4.585-2.751 6.418-2.751 1.834 0 3.21 1.375 4.585 2.292 1.375.917.917.459 1.376 0 .458-.458-4.126-4.126-5.96-4.126-1.834 0-6.877 1.834-8.253 2.75Z"
						/>
						<path
							stroke="#B89B8E"
							stroke-linecap="round"
							d="M86 73c1.226 1.577 2.844 2.939 3.5 4.5.656 1.561.825 6.102.5 10"
						/>
						<g id="eye">
							<g id="eye_R">
								<ellipse cx="105" cy="79.5" fill="#191919" rx="4" ry="4.5" />
								<path
									stroke="#191919"
									stroke-linecap="round"
									d="m108.138 75.04-1.078 1.958m3.477.639-2.038.92"
								/>
								<ellipse id="eyeLight_R" cx="106.5" cy="79" fill="#D9D9D9" rx="1.5" ry="1" />
							</g>
							<g id="eye_L">
								<ellipse cx="77" cy="79.5" fill="#191919" rx="4" ry="4.5" />
								<ellipse id="eyeLight_L" cx="78.5" cy="79" fill="#D9D9D9" rx="1.5" ry="1" />
								<path
									stroke="#191919"
									stroke-linecap="round"
									d="m73.428 75.238 1.447 1.705m-3.28 1.318 2.18.495"
								/>
							</g>
						</g>
					</g>
					<g id="hair-front">
						<path
							fill="#312D2D"
							d="M91.5 62c-10 .4-13.833-7.5-14.5-11.5 0-.151 0-.302-.002-.454C74.23 50.018 70.911 51.05 69.5 55c-2.5 7-4.5 7.5-6 12-1.2 3.6-2 8.833-2.5 15.5L56 80c-1.833-1.334-5.2-5.4-4-11 1.5-7 6.135-17.636 13-24.5 8.5-8.5 20-9.637 20-9.637 2.685-.592 6.255-.759 11-.363 12 1 20.5 7.5 26 13s7.5 12 8.5 24c.8 9.6-4.167 12.833-5.5 15.5l-1-7c-1.667-2.5-5.8-8.6-9-13-4-5.5-11-5.5-23.5-5Z"
						/>
						<path
							stroke="#000"
							stroke-linecap="round"
							d="M77 50c0 1.167.5 4.1 2.5 6.5 2.5 3 5 5 8.5 5.5"
						/>
						<path
							stroke="#000"
							stroke-linecap="round"
							d="M91.01 37.5c-1.166 0-5.41-.6-11.01 1-7 2-7.49 5-7.49 7-3.5 0-10.5 2-14 10.5m34-14.5c2-.666 7.3-1.3 12.5 1.5m9.5 16c2.334 1.167 6.71 3.72 8.99 6 2.5 2.5 2.677 7.5 3.01 9m-21.5-15c2.334 1.667 6.5 4.5 11.5 6 5.787 1.736 6.834 7 8 10m-61.5-11.5c-1 2-3.4 6.4-5 8m-7.51 5-2 8.5"
						/>
					</g>
				</g>
			</svg>
		</div>
	</div>
</section>

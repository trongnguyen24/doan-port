<script>
	import { onMount } from 'svelte';
	onMount(() => {
		document.addEventListener('mousemove', function (e) {
			moveIris(e, 'eye_R', 'iris');
			moveIris(e, 'eye_R', 'iris_2');
		});

		function moveIris(e, eyeId, irisId) {
			const eye = document.getElementById(eyeId);
			const iris = document.getElementById(irisId);
			const eyeRect = eye.getBoundingClientRect();

			const eyeCenterX = eyeRect.x + eyeRect.width / 2;
			const eyeCenterY = eyeRect.y + eyeRect.height / 2;
			const mouseX = e.clientX;
			const mouseY = e.clientY;

			const deltaX = mouseX - eyeCenterX;
			const deltaY = mouseY - eyeCenterY;
			const angle = Math.atan2(deltaY, deltaX);

			const irisMaxMove = eyeRect.width / 2; // Max distance iris can move from center
			const irisX = eyeCenterX + irisMaxMove * Math.cos(angle);
			const irisY = eyeCenterY + irisMaxMove * Math.sin(angle);

			// Update iris position
			iris.setAttribute('transform', `translate(${irisX - eyeCenterX}, ${irisY - eyeCenterY})`);
		}
	});
</script>

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 190 190">
	<g id="Frame 41">
		<path
			id="body"
			fill="#000"
			d="M66 176.5c-.504-13.046 8.598-40.859 29.764-40.497 21.165 0 28.506 24.363 28.506 38.497 0 13.486-2.302 15.5-28.506 15.5-21.265 0-29.26-.454-29.764-13.5Z"
		/>
		<path
			id="tail"
			fill="#000"
			fill-rule="evenodd"
			d="M136.5 159c1.875-1.5 5-.875 6.5 1 3.359 4.199 3.997 9.475 3.411 13.458-.579 3.937-2.843 7.21-5.786 9.417-5.785 4.339-15.076 5.024-20.625-2.375a2.501 2.501 0 0 1 4-3c3.451 4.601 9.411 4.536 13.625 1.375C139.682 177.332 140 175.5 140 173s-1.359-5.699-4-9c-1.6-2-.578-4.137.5-5Z"
			clip-rule="evenodd"
		/>
		<g id="head">
			<path
				id="face"
				fill="#000"
				fill-rule="evenodd"
				d="M80.642 56.163a76.62 76.62 0 0 1 13.829-1.249c5.118 0 10.1.436 14.88 1.261 4.844-8.475 21.344-18.458 26.83-15.71 7.169 3.327 8.471 18.54 7.566 31.05 10.084 8.548 16.195 19.745 16.195 32 0 41.372-29.313 48.601-65.471 48.601C58.312 152.116 29 140.87 29 110.413c0-14.433 6.583-27.65 17.358-37.563-1.096-12.738.035-28.938 7.46-32.385 5.484-2.747 21.972 7.226 26.824 15.698Z"
				clip-rule="evenodd"
			/>
			<path
				id="nose"
				fill="#fff"
				fill-rule="evenodd"
				d="M91 115.5a1.5 1.5 0 0 1 1.5-1.5h5a1.5 1.5 0 0 1 1.5 1.5c0 .852-1.331 2.129-2.507 3.169-.828.732-2.158.732-2.986 0-1.176-1.04-2.507-2.317-2.507-3.169Z"
				clip-rule="evenodd"
			/>
			<path
				id="fur4"
				stroke="#000"
				stroke-linecap="round"
				stroke-width="2"
				d="M39.124 116.463c-3.545-1.497-14.748-4.771-25.773.07"
			/>
			<path
				id="fur3"
				stroke="#000"
				stroke-linecap="round"
				stroke-width="2"
				d="M147.594 116.619c3.544-1.497 14.747-4.771 25.773.07"
			/>
			<path
				id="fur2"
				stroke="#000"
				stroke-linecap="round"
				stroke-width="2"
				d="M37.857 118.938c-4.086.816-13.75 4.683-19.714 13.624"
			/>
			<path
				id="fur1"
				stroke="#000"
				stroke-linecap="round"
				stroke-width="2"
				d="M148.86 119.094c4.086.816 13.75 4.683 19.714 13.624"
			/>
			<g id="eyes">
				<g id="eye_L">
					<circle id="eye" cx="71.5" cy="89.5" r="19.5" fill="#fff" />
					<path
						id="iris"
						fill="#000"
						fill-rule="evenodd"
						d="M71.825 98.6a8.775 8.775 0 1 0 0-17.55 8.775 8.775 0 0 0 0 17.55Zm-3.25-8.45a3.575 3.575 0 1 0 0-7.15 3.575 3.575 0 0 0 0 7.15Z"
						clip-rule="evenodd"
					/>
				</g>
				<g id="eye_R">
					<circle id="eye_2" cx="118.5" cy="89.5" r="19.5" fill="#fff" />
					<path
						id="iris_2"
						fill="#000"
						fill-rule="evenodd"
						d="M118.825 98.6a8.775 8.775 0 1 0 0-17.55 8.775 8.775 0 0 0 0 17.55Zm-3.25-8.45a3.575 3.575 0 1 0 0-7.15 3.575 3.575 0 0 0 0 7.15Z"
						clip-rule="evenodd"
					/>
				</g>
			</g>
		</g>
	</g>
</svg>

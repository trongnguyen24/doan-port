<script>import { Dialog as DialogPrimitive } from "bits-ui";
import { setCtx } from "../ctx.js";
import { get } from "svelte/store";
export let open = false;
export let onOpenChange = void 0;
export let closeThreshold = void 0;
export let scrollLockTimeout = void 0;
export let snapPoints = void 0;
export let fadeFromIndex = void 0;
export let openFocus = void 0;
export let onOutsideClick = void 0;
export let closeOnOutsideClick = true;
export let backgroundColor = "black";
export let nested = false;
export let shouldScaleBackground = false;
export let activeSnapPoint = void 0;
export let onActiveSnapPointChange = void 0;
export let onRelease = void 0;
export let onDrag = void 0;
export let onClose = void 0;
export let dismissible = void 0;
const {
  states: { keyboardIsOpen, activeSnapPoint: localActiveSnapPoint, drawerId, openDrawerIds },
  methods: { closeDrawer, openDrawer },
  options: { dismissible: localDismissible },
  updateOption
} = setCtx({
  defaultOpen: open,
  defaultActiveSnapPoint: activeSnapPoint,
  onOpenChange: ({ next }) => {
    if (open !== next) {
      onOpenChange?.(next);
      open = next;
    }
    return next;
  },
  onActiveSnapPointChange: ({ next }) => {
    if (next === void 0 && snapPoints && activeSnapPoint !== next) {
      const newNext = snapPoints[0];
      onActiveSnapPointChange?.(newNext);
      activeSnapPoint = newNext;
      return newNext;
    }
    if (activeSnapPoint !== next) {
      onActiveSnapPointChange?.(next);
      activeSnapPoint = next;
    }
    return next;
  },
  closeThreshold,
  scrollLockTimeout,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  snapPoints,
  fadeFromIndex,
  nested,
  onDrag,
  onClose,
  onRelease,
  shouldScaleBackground,
  backgroundColor,
  dismissible
});
$:
  activeSnapPoint !== void 0 && localActiveSnapPoint.set(activeSnapPoint);
$:
  updateOption("closeThreshold", closeThreshold);
$:
  updateOption("scrollLockTimeout", scrollLockTimeout);
$:
  updateOption("snapPoints", snapPoints);
$:
  updateOption("fadeFromIndex", fadeFromIndex);
$:
  updateOption("openFocus", openFocus);
$:
  updateOption("shouldScaleBackground", shouldScaleBackground);
$:
  updateOption("backgroundColor", backgroundColor);
$:
  updateOption("dismissible", dismissible);
</script>

<DialogPrimitive.Root
	{closeOnOutsideClick}
	closeOnEscape={false}
	bind:open
	preventScroll={false}
	onOpenChange={(o) => {
		onOpenChange?.(o);
		if (!o) {
			closeDrawer();
		} else if (o) {
			openDrawer();
		}
	}}
	onOutsideClick={(e) => {
		if (!closeOnOutsideClick) return;

		onOutsideClick?.(e);

		if (e?.defaultPrevented) return;

		if ($keyboardIsOpen) {
			keyboardIsOpen.set(false);
		}
		e.preventDefault();
		if (!$localDismissible) {
			return;
		}
		const $openDialogIds = get(openDrawerIds);
		const isLast = $openDialogIds[$openDialogIds.length - 1] === get(drawerId);
		if (isLast) {
			onOpenChange?.(false);
			closeDrawer();
		}
	}}
>
	<slot />
</DialogPrimitive.Root>

<style>
	:global([data-vaul-drawer]) {
		touch-action: none;
		transform: translate3d(0, 100%, 0);
		transition: transform 0.5s cubic-bezier(0.32, 0.72, 0, 1);
	}

	:global(.vaul-dragging .vaul-scrollable) {
		overflow-y: hidden !important;
	}

	:global([data-vaul-drawer][data-vaul-drawer-visible="true"]) {
		transform: translate3d(0, var(--snap-point-height, 0), 0);
	}

	:global([data-vaul-overlay]) {
		opacity: 0;
		transition: opacity 0.5s cubic-bezier(0.32, 0.72, 0, 1);
	}

	:global([data-vaul-overlay][data-vaul-drawer-visible="true"]) {
		opacity: 1;
	}

	:global([data-vaul-drawer]::after) {
		content: "";
		position: absolute;
		top: 100%;
		background: inherit;
		background-color: inherit;
		left: 0;
		right: 0;
		height: 200%;
	}

	:global(
			[data-vaul-overlay][data-vaul-snap-points="true"]:not(
					[data-vaul-snap-points-overlay="true"]
				):not([data-state="closed"])
		) {
		opacity: 0;
	}

	:global(
			[data-vaul-overlay][data-vaul-snap-points-overlay="true"]:not(
					[data-vaul-drawer-visible="false"]
				)
		) {
		opacity: 1;
	}

	/* This will allow us to not animate via animation, but still benefit from delaying
	unmount via Bits */
	@keyframes -global-fake-animation {
		from {
		}
		to {
		}
	}

	@media (hover: hover) and (pointer: fine) {
		:global([data-vaul-drawer]) {
			-webkit-user-select: none;
			   -moz-user-select: none;
			        user-select: none;
		}
	}
</style>

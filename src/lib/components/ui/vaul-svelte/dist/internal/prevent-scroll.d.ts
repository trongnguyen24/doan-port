export declare function isSafari(): boolean | undefined;
export declare function isIOS(): boolean | undefined;
export declare function isScrollable(node: Element): boolean;
export declare function getScrollParent(node: Element): Element;
/**
 * Prevents scrolling on the document body on mount, and
 * restores it on unmount. Also ensures that content does not
 * shift due to the scrollbars disappearing.
 */
export declare function preventScroll(): () => void;

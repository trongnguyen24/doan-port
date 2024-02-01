interface Style {
    [key: string]: string;
}
export declare function set(el?: Element | HTMLElement | null, styles?: Style, ignoreCache?: boolean): void;
export declare function reset(el: Element | HTMLElement | null, prop?: string): void;
export declare function getTranslateY(element: HTMLElement): number | null;
export declare function styleToString(style: Record<string, number | string | undefined>): string;
export {};

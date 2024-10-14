export type ValueOf<T> = T[keyof T];
export declare function omit<T extends Record<string, unknown>, K extends keyof T>(obj: T, ...keys: K[]): Omit<T, K>;
export declare function removeUndefined<T extends object>(obj: T): T;

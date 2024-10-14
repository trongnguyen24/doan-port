// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function chain(...callbacks) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (...args) => {
        for (const callback of callbacks) {
            if (typeof callback === "function") {
                callback(...args);
            }
        }
    };
}

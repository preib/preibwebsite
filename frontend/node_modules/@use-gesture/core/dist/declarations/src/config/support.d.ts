export declare const SUPPORT: {
    isBrowser: false | {
        <K extends keyof HTMLElementTagNameMap>(tagName: K, options?: ElementCreationOptions | undefined): HTMLElementTagNameMap[K];
        <K_1 extends keyof HTMLElementDeprecatedTagNameMap>(tagName: K_1, options?: ElementCreationOptions | undefined): HTMLElementDeprecatedTagNameMap[K_1];
        (tagName: string, options?: ElementCreationOptions | undefined): HTMLElement;
    };
    gesture: boolean;
    touch: boolean;
    touchscreen: boolean;
    pointer: boolean;
    pointerLock: boolean;
};

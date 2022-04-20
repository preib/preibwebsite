import { PinchConfig, GenericOptions, InternalPinchOptions, State, Vector2 } from '../types';
export declare const pinchConfigResolver: {
    useTouch(_v: any, _k: string, { pointer: { touch } }: {
        pointer?: {
            touch?: boolean | undefined;
        } | undefined;
    }): boolean;
    device(this: InternalPinchOptions, _v: any, _k: string, config: {
        shared: GenericOptions;
    } & PinchConfig): "touch" | "pointer" | "gesture" | undefined;
    bounds(_v: any, _k: string, { scaleBounds, angleBounds }: PinchConfig): number[][] | ((state: State) => number[][]);
    threshold(this: InternalPinchOptions, value: number | Vector2, _k: string, config: PinchConfig): [number, number];
    enabled(value?: boolean): boolean;
    preventDefault(value?: boolean): boolean;
    triggerAllEvents(value?: boolean): boolean;
    rubberband(value?: number | boolean | Vector2): Vector2;
    from(value: number | Vector2 | ((s: State) => Vector2)): [number, number] | ((s: State) => Vector2) | undefined;
    transform(this: import("../types").InternalGestureOptions<import("../types").GestureKey>, value: any, _k: string, config: {
        shared: GenericOptions;
    }): any;
};

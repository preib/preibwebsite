import * as React from 'react';
export declare type FloatProps = JSX.IntrinsicElements['group'] & {
    speed?: number;
    rotationIntensity?: number;
    floatIntensity?: number;
    children?: React.ReactNode;
};
export declare function Float({ children, speed, rotationIntensity, floatIntensity, ...props }: FloatProps): JSX.Element;

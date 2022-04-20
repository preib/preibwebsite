import * as React from 'react';
declare type Props = {
    snap?: boolean;
    global?: boolean;
    speed?: number;
    zoom?: number;
    rotation?: [number, number, number];
    polar?: [number, number];
    azimuth?: [number, number];
    config?: any;
    children?: React.ReactNode;
};
export declare function PresentationControls({ snap, global, children, speed, rotation, zoom, polar, azimuth, config, }: Props): JSX.Element;
export {};

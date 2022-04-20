import { ReactThreeFiber } from '@react-three/fiber';
import * as React from 'react';
import * as THREE from 'three';
import { ArcballControls as ArcballControlsImpl } from 'three-stdlib';
export declare type ArcballControlsProps = ReactThreeFiber.Overwrite<ReactThreeFiber.Object3DNode<ArcballControlsImpl, typeof ArcballControlsImpl>, {
    target?: ReactThreeFiber.Vector3;
    camera?: THREE.Camera;
    domElement?: HTMLElement;
    regress?: boolean;
    makeDefault?: boolean;
    onChange?: (e?: THREE.Event) => void;
    onStart?: (e?: THREE.Event) => void;
    onEnd?: (e?: THREE.Event) => void;
}>;
export declare const ArcballControls: React.ForwardRefExoticComponent<Pick<ArcballControlsProps, string | number | symbol> & React.RefAttributes<ArcballControlsImpl>>;

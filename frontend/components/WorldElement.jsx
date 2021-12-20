import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import WorldMesh from './WorldMesh';

export default function WorldElement({className}) {
    return (
        <Canvas camera={{ position: [0, 0, 60] }} className={className + " w-full h-full"}>
            <ambientLight intensity={.7} />
            <pointLight intensity={.6} position={[15, 40, 40]} />
            <Suspense fallback={null}>
                <WorldMesh />
            </Suspense>
        </Canvas>
    )
}
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function WorldMesh(props) {
    const group = useRef();
    const { nodes, materials, animations } = useGLTF("/worldanim.glb");
    const { actions } = useAnimations(animations, group);

    useEffect(() => {
        Object.values(actions).forEach((action) => action.play());
    }, [actions]);

    return (
        <group ref={group} {...props} dispose={null}>
            <group name="Empty" scale={[43.74, 43.74, 43.74]}>
                <group
                    position={[0.52, 0.22, 0.12]}
                    rotation={[0.51, 0.01, -1.12]}
                    scale={[0.02, 0.02, 0.02]}
                >
                    <mesh
                        geometry={nodes.Cube001.geometry}
                        material={nodes.Cube001.material}
                    />
                    <mesh
                        geometry={nodes.Cube001_1.geometry}
                        material={nodes.Cube001_1.material}
                    />
                </group>
                <group
                    position={[-0.36, 0.17, 0.44]}
                    rotation={[1.59, -0.49, 0.74]}
                    scale={[0.48, 0.48, 0.48]}
                >
                    <mesh
                        geometry={nodes.Cube003_1.geometry}
                        material={nodes.Cube003_1.material}
                    />
                    <mesh
                        geometry={nodes.Cube003_2.geometry}
                        material={nodes.Cube003_2.material}
                    />
                </group>
                <group
                    position={[0.5, -0.29, 0.16]}
                    rotation={[1.13, -0.59, -1.48]}
                    scale={[0.48, 0.48, 0.48]}
                >
                    <mesh
                        geometry={nodes.Cube007.geometry}
                        material={nodes.Cube007.material}
                    />
                    <mesh
                        geometry={nodes.Cube007_1.geometry}
                        material={nodes.Cube007_1.material}
                    />
                </group>
                <group
                    position={[0.21, 0.34, -0.41]}
                    rotation={[-0.82, 0.12, -0.38]}
                    scale={0.66}
                >
                    <mesh
                        geometry={nodes.Cube008.geometry}
                        material={nodes.Cube008.material}
                    />
                    <mesh
                        geometry={nodes.Cube008_1.geometry}
                        material={nodes.Cube008_1.material}
                    />
                </group>
                <group
                    position={[-0.08, -0.21, 0.53]}
                    rotation={[2, -0.33, 0.15]}
                    scale={[0.47, 0.47, 0.47]}
                >
                    <mesh
                        geometry={nodes.Cube016.geometry}
                        material={nodes.Cube016.material}
                    />
                    <mesh
                        geometry={nodes.Cube016_1.geometry}
                        material={nodes.Cube016_1.material}
                    />
                </group>
                <group
                    position={[-0.12, -0.14, -0.54]}
                    rotation={[0.63, -1.23, 2.42]}
                    scale={[0.59, 0.59, 0.59]}
                >
                    <mesh
                        geometry={nodes.Cylinder005_1.geometry}
                        material={nodes.Cylinder005_1.material}
                    />
                    <mesh
                        geometry={nodes.Cylinder005_2.geometry}
                        material={nodes.Cylinder005_2.material}
                    />
                </group>
                <mesh
                    geometry={nodes.Cylinder003.geometry}
                    material={nodes.Cylinder003.material}
                    position={[0.47, 0.34, -0.1]}
                    rotation={[0.07, 0.26, -0.97]}
                    scale={[0.34, 0.44, 0.34]}
                />
                <mesh
                    geometry={nodes.Cylinder004.geometry}
                    material={nodes.Cylinder004.material}
                    position={[0.53, 0.27, -0.01]}
                    rotation={[0.17, 0.1, -1.11]}
                    scale={[0.34, 0.44, 0.34]}
                />
                <mesh
                    geometry={nodes.Cylinder005.geometry}
                    material={nodes.Cylinder005.material}
                    position={[0.51, 0.29, -0.1]}
                    rotation={[0.09, 0.24, -1.08]}
                    scale={[0.34, 0.44, 0.34]}
                />
                <mesh
                    geometry={nodes.Cylinder006.geometry}
                    material={nodes.Cylinder006.material}
                    position={[0.48, 0.35, 0]}
                    rotation={[0.12, 0.09, -0.94]}
                    scale={[0.34, 0.44, 0.34]}
                />
                <mesh
                    geometry={nodes.Cylinder007.geometry}
                    material={nodes.Cylinder007.material}
                    position={[0.46, 0.33, -0.17]}
                    rotation={[0.09, 0.41, -1.01]}
                    scale={[0.34, 0.44, 0.34]}
                />
                <mesh
                    geometry={nodes.Cylinder008.geometry}
                    material={nodes.Cylinder008.material}
                    position={[-0.38, 0.34, 0.29]}
                    rotation={[0.32, 0.42, 0.79]}
                    scale={[0.34, 0.44, 0.34]}
                />
                <mesh
                    geometry={nodes.Cylinder009.geometry}
                    material={nodes.Cylinder009.material}
                    position={[-0.39, 0.37, 0.24]}
                    rotation={[0.19, 0.41, 0.8]}
                    scale={[0.34, 0.44, 0.34]}
                />
                <mesh
                    geometry={nodes.Cylinder010.geometry}
                    material={nodes.Cylinder010.material}
                    position={[-0.42, 0.39, 0.16]}
                    rotation={[0.06, 0.32, 0.84]}
                    scale={[0.34, 0.44, 0.34]}
                />
                <mesh
                    geometry={nodes.Cylinder011.geometry}
                    material={nodes.Cylinder011.material}
                    position={[-0.33, 0.39, 0.3]}
                    rotation={[0.29, 0.49, 0.67]}
                    scale={[0.34, 0.44, 0.34]}
                />
                <mesh
                    geometry={nodes.Cylinder012.geometry}
                    material={nodes.Cylinder012.material}
                    position={[0.5, 0.2, 0.24]}
                    rotation={[0.39, -0.29, -1.09]}
                    scale={[0.34, 0.44, 0.34]}
                />
                <mesh
                    geometry={nodes.Cylinder013.geometry}
                    material={nodes.Cylinder013.material}
                    position={[0.47, 0.19, 0.31]}
                    rotation={[0.41, -0.42, -1.05]}
                    scale={[0.34, 0.44, 0.34]}
                />
                <mesh
                    geometry={nodes.Cylinder014.geometry}
                    material={nodes.Cylinder014.material}
                    position={[0.18, 0.26, -0.5]}
                    rotation={[-1.07, 0.06, -0.31]}
                    scale={[0.28, 0.44, 0.28]}
                />
                <mesh
                    geometry={nodes.Cylinder015.geometry}
                    material={nodes.Cylinder015.material}
                    position={[0.21, 0.19, -0.52]}
                    rotation={[0.22, 1.19, -1.45]}
                    scale={[0.26, 0.44, 0.26]}
                />
                <mesh
                    geometry={nodes.Cylinder016.geometry}
                    material={nodes.Cylinder016.material}
                    position={[0.31, 0.13, -0.48]}
                    rotation={[1.26, 0.71, -2.36]}
                    scale={[0.26, 0.44, 0.26]}
                />
                <mesh
                    geometry={nodes.Cylinder017.geometry}
                    material={nodes.Cylinder017.material}
                    position={[0.32, 0.22, -0.44]}
                    rotation={[1.41, 0.73, -2.32]}
                    scale={[0.23, 0.44, 0.23]}
                />
                <mesh
                    geometry={nodes.Cylinder018.geometry}
                    material={nodes.Cylinder018.material}
                    position={[0.5, 0.02, 0.32]}
                    rotation={[0.75, -0.42, -1.17]}
                    scale={[0.34, 0.44, 0.34]}
                />
                <mesh
                    geometry={nodes.Cylinder019.geometry}
                    material={nodes.Cylinder019.material}
                    position={[0.43, 0.01, 0.41]}
                    rotation={[0.82, -0.56, -1.03]}
                    scale={[0.34, 0.44, 0.34]}
                />
                <mesh
                    geometry={nodes.Cylinder020.geometry}
                    material={nodes.Cylinder020.material}
                    position={[0.46, -0.05, 0.37]}
                    rotation={[1.83, 0.1, -0.9]}
                    scale={[0.29, 0.44, 0.29]}
                />
                <mesh
                    geometry={nodes.Cylinder021.geometry}
                    material={nodes.Cylinder021.material}
                    position={[0.41, -0.1, 0.41]}
                    rotation={[0.9, -0.68, -1.11]}
                    scale={[0.34, 0.44, 0.34]}
                />
                <mesh
                    geometry={nodes.Cylinder022.geometry}
                    material={nodes.Cylinder022.material}
                    position={[-0.14, 0.21, 0.53]}
                    rotation={[0.98, 0.73, 0.32]}
                    scale={[0.36, 0.57, 0.36]}
                />
                <mesh
                    geometry={nodes.Cylinder023.geometry}
                    material={nodes.Cylinder023.material}
                    position={[-0.2, 0.24, 0.5]}
                    rotation={[0.8, 0.72, 0.46]}
                    scale={[0.36, 0.57, 0.36]}
                />
                <mesh
                    geometry={nodes.Cylinder024.geometry}
                    material={nodes.Cylinder024.material}
                    position={[-0.07, 0.27, 0.52]}
                    rotation={[0.99, 0.7, 0.16]}
                    scale={[0.36, 0.57, 0.36]}
                />
                <mesh
                    geometry={nodes.Cylinder029.geometry}
                    material={nodes.Cylinder029.material}
                    position={[0.57, -0.13, 0.19]}
                    rotation={[-0.55, -1.02, -2.67]}
                    scale={[0.51, 0.51, 0.51]}
                />
                <mesh
                    geometry={nodes.Cylinder030.geometry}
                    material={nodes.Cylinder030.material}
                    position={[0.58, 0.07, -0.11]}
                    rotation={[0.47, 0.23, -1.55]}
                    scale={[0.34, 0.44, 0.34]}
                />
                <mesh
                    geometry={nodes.Cylinder031.geometry}
                    material={nodes.Cylinder031.material}
                    position={[0.58, 0.1, -0.03]}
                    rotation={[1.52, 0.17, -1.61]}
                    scale={[0.29, 0.44, 0.29]}
                />
                <mesh
                    geometry={nodes.Cylinder040.geometry}
                    material={nodes.Cylinder040.material}
                    position={[-0.26, 0.41, 0.34]}
                    rotation={[0.38, 0.56, 0.55]}
                    scale={[0.34, 0.44, 0.34]}
                />
                <mesh
                    geometry={nodes.Cylinder041.geometry}
                    material={nodes.Cylinder041.material}
                    position={[0.14, 0.41, 0.4]}
                    rotation={[0.95, 0.67, -0.3]}
                    scale={[0.36, 0.57, 0.36]}
                />
                <mesh
                    geometry={nodes.Cylinder042.geometry}
                    material={nodes.Cylinder042.material}
                    position={[0.12, 0.47, 0.34]}
                    rotation={[0.8, 0.67, -0.27]}
                    scale={[0.36, 0.57, 0.36]}
                />
                <mesh
                    geometry={nodes.Cylinder045.geometry}
                    material={nodes.Cylinder045.material}
                    position={[0.53, -0.09, 0.3]}
                    rotation={[-2.55, -0.29, -2.35]}
                    scale={[0.51, 0.51, 0.51]}
                />
                <mesh
                    geometry={nodes.Cylinder048.geometry}
                    material={nodes.Cylinder048.material}
                    position={[0.55, 0, 0.27]}
                    rotation={[-2.67, -0.42, -2.44]}
                    scale={[0.51, 0.51, 0.51]}
                />
                <mesh
                    geometry={nodes.Cylinder056.geometry}
                    material={nodes.Cylinder056.material}
                    position={[-0.22, 0.16, 0.55]}
                    rotation={[-2.69, 0.93, 3.05]}
                    scale={[0.51, 0.51, 0.51]}
                />
                <mesh
                    geometry={nodes.Mball001.geometry}
                    material={nodes.Mball001.material}
                    position={[0.61, -0.3, 0.4]}
                    rotation={[0.16, -0.62, -1.86]}
                    scale={[0.51, 0.51, 0.51]}
                />
                <mesh
                    geometry={nodes.Mball002.geometry}
                    material={nodes.Mball002.material}
                    position={[-0.25, 0.59, -0.43]}
                    rotation={[-0.72, 0.26, 0.32]}
                    scale={[0.51, 0.51, 0.51]}
                />
                <mesh
                    geometry={nodes.Mball022.geometry}
                    material={nodes.Mball022.material}
                    position={[-0.69, -0.42, 0.01]}
                    rotation={[0.01, 0.03, 2.12]}
                    scale={[0.51, 0.51, 0.51]}
                />
                <group
                    position={[-0.45, -0.41, -0.06]}
                    rotation={[0.55, 0.34, 2.24]}
                    scale={[0.05, 0.09, 0.05]}
                >
                    <mesh
                        geometry={nodes.Plane023.geometry}
                        material={nodes.Plane023.material}
                    />
                    <mesh
                        geometry={nodes.Plane023_1.geometry}
                        material={nodes.Plane023_1.material}
                    />
                </group>
                <mesh
                    geometry={nodes.Sphere.geometry}
                    material={materials.biru}
                    scale={[0.57, 0.57, 0.57]}
                />
                <mesh
                    geometry={nodes.Sphere001.geometry}
                    material={materials.hijau}
                    scale={[0.57, 0.57, 0.57]}
                />
                <group
                    position={[-0.07, 0.57, -0.04]}
                    rotation={[-3.09, 0.79, 3]}
                    scale={[0.39, 0.39, 0.39]}
                >
                    <mesh
                        geometry={nodes.Sphere003_1.geometry}
                        material={nodes.Sphere003_1.material}
                    />
                    <mesh
                        geometry={nodes.Sphere003_2.geometry}
                        material={nodes.Sphere003_2.material}
                    />
                </group>
                <group
                    position={[0.05, -0.38, -0.47]}
                    rotation={[-0.41, 1.49, -1.83]}
                    scale={[0.37, 0.37, 0.34]}
                >
                    <mesh
                        geometry={nodes.Sphere007.geometry}
                        material={nodes.Sphere007.material}
                    />
                    <mesh
                        geometry={nodes.Sphere007_1.geometry}
                        material={nodes.Sphere007_1.material}
                    />
                </group>
                <group
                    position={[0.42, 0.02, -0.43]}
                    rotation={[-1.3, 0.22, -0.79]}
                    scale={[-0.01, -0.01, -0.01]}
                >
                    <mesh
                        geometry={nodes.Sphere011.geometry}
                        material={nodes.Sphere011.material}
                    />
                    <mesh
                        geometry={nodes.Sphere011_1.geometry}
                        material={nodes.Sphere011_1.material}
                    />
                </group>
                <group
                    position={[0.1, -0.31, -0.51]}
                    rotation={[-2.05, 0.35, -0.17]}
                    scale={[-0.01, -0.01, -0.01]}
                >
                    <mesh
                        geometry={nodes.Sphere006_1.geometry}
                        material={nodes.Sphere006_1.material}
                    />
                    <mesh
                        geometry={nodes.Sphere006_2.geometry}
                        material={nodes.Sphere006_2.material}
                    />
                </group>
                <group
                    position={[0.17, -0.37, -0.45]}
                    rotation={[-2.13, 0.4, -0.31]}
                    scale={[-0.01, -0.01, -0.01]}
                >
                    <mesh
                        geometry={nodes.Sphere018_1.geometry}
                        material={nodes.Sphere018_1.material}
                    />
                    <mesh
                        geometry={nodes.Sphere018_2.geometry}
                        material={nodes.Sphere018_2.material}
                    />
                </group>
                <group
                    position={[-0.02, -0.43, 0.43]}
                    rotation={[-0.72, 1.12, 3.08]}
                    scale={[-0.01, -0.01, -0.01]}
                >
                    <mesh
                        geometry={nodes.Sphere021_1.geometry}
                        material={nodes.Sphere021_1.material}
                    />
                    <mesh
                        geometry={nodes.Sphere021_2.geometry}
                        material={nodes.Sphere021_2.material}
                    />
                </group>
                <group
                    position={[-0.01, -0.36, 0.48]}
                    rotation={[-0.9, 1.09, 3.11]}
                    scale={[-0.01, -0.01, -0.01]}
                >
                    <mesh
                        geometry={nodes.Sphere025_1.geometry}
                        material={nodes.Sphere025_1.material}
                    />
                    <mesh
                        geometry={nodes.Sphere025_2.geometry}
                        material={nodes.Sphere025_2.material}
                    />
                </group>
                <group
                    position={[0.01, 0.41, -0.45]}
                    rotation={[-0.86, -1.09, -0.03]}
                    scale={[-0.01, -0.01, -0.01]}
                >
                    <mesh
                        geometry={nodes.Sphere029_1.geometry}
                        material={nodes.Sphere029_1.material}
                    />
                    <mesh
                        geometry={nodes.Sphere029_2.geometry}
                        material={nodes.Sphere029_2.material}
                    />
                </group>
                <group
                    position={[-0.08, 0.41, -0.44]}
                    rotation={[-0.56, -1.1, 0.29]}
                    scale={[-0.01, -0.01, -0.01]}
                >
                    <mesh
                        geometry={nodes.Sphere033_1.geometry}
                        material={nodes.Sphere033_1.material}
                    />
                    <mesh
                        geometry={nodes.Sphere033_2.geometry}
                        material={nodes.Sphere033_2.material}
                    />
                </group>
                <group
                    position={[0.32, 0.4, -0.32]}
                    rotation={[-1.65, -0.91, -1.07]}
                    scale={[-0.01, -0.01, -0.01]}
                >
                    <mesh
                        geometry={nodes.Sphere037_1.geometry}
                        material={nodes.Sphere037_1.material}
                    />
                    <mesh
                        geometry={nodes.Sphere037_2.geometry}
                        material={nodes.Sphere037_2.material}
                    />
                </group>
                <mesh
                    geometry={nodes.Sphere048.geometry}
                    material={nodes.Sphere048.material}
                    position={[0.33, 0.06, -0.51]}
                    rotation={[-0.57, 0.88, -1.01]}
                    scale={[-0.01, -0.01, -0.01]}
                />
                <mesh
                    geometry={nodes.Sphere051.geometry}
                    material={nodes.Sphere051.material}
                    position={[0.04, 0.17, -0.59]}
                    rotation={[-1.24, 0.71, -0.09]}
                    scale={[-0.01, -0.01, -0.01]}
                />
            </group>
            <group rotation={[0, 0.84, 0]} scale={83.41}>
                <group name="OriginalPlane" scale={[0.26, 0.26, 0.26]}>
                    <mesh
                        geometry={nodes.Plane004.geometry}
                        material={nodes.Plane004.material}
                    />
                    <mesh
                        geometry={nodes.Plane004_1.geometry}
                        material={nodes.Plane004_1.material}
                    />
                    <mesh
                        geometry={nodes.Plane004_2.geometry}
                        material={nodes.Plane004_2.material}
                    />
                </group>
            </group>
            <group
                name="Cylinder035"
                position={[14.06, -17.51, 14.88]}
                rotation={[-2.31, -0.7, -0.65]}
                scale={[6.67, 10.22, 6.67]}
            >
                <mesh
                    geometry={nodes.Cylinder047.geometry}
                    material={nodes.Cylinder047.material}
                />
                <mesh
                    geometry={nodes.Cylinder047_1.geometry}
                    material={nodes.Cylinder047_1.material}
                />
                <mesh
                    geometry={nodes.Cylinder047_2.geometry}
                    material={nodes.Cylinder047_2.material}
                />
            </group>
            <group
                name="Torus"
                position={[-20.09, -14.19, 4.45]}
                rotation={[-1.54, -0.61, 0.2]}
                scale={[-0.83, -0.83, -0.83]}
            >
                <mesh
                    geometry={nodes.Torus_1.geometry}
                    material={nodes.Torus_1.material}
                />
                <mesh
                    geometry={nodes.Torus_2.geometry}
                    material={nodes.Torus_2.material}
                />
                <mesh
                    geometry={nodes.Torus_3.geometry}
                    material={nodes.Torus_3.material}
                />
            </group>
        </group>
    );
}

useGLTF.preload("/worldanim.glb");
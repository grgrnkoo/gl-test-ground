'use client'

import { shaderMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useRef } from "react";


import vertex from "../shaders/vertex.glsl";
import fragment from "../shaders/fragment.glsl";

export function ShaderPlane() {
    const ref = useRef<any>(null);

    useFrame(({ clock }) => {
        if (ref.current) {
            ref.current.uTime = clock.getElapsedTime();
        }
    });

    return (
        <mesh position={[0, 0, 0]}>
            <planeGeometry args={[2, 2]} />
            <shaderMaterial
                ref={ref}
                vertexShader={vertex}
                fragmentShader={fragment}
                uniforms={{
                    uTime: { value: 0 },
                    uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
                }}
            />
        </mesh>
    );
}
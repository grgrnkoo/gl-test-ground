'use client'

import { ShaderPlane } from "@/components/ShaderPlane";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="w-full h-screen">
      <Canvas className="w-full h-screen">
        <Suspense fallback={null}>
          <ShaderPlane />
        </Suspense>
      </Canvas>
    </div>
  );
}

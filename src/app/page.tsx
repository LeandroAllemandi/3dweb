"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";

const Cube: React.FC = () => {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="royalblue" />
    </mesh>
  );
};

export default function Home() {
  return (
    <main className="h-screen w-screen">
      <Canvas>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 5, 3]} />
          <Cube />
          <OrbitControls />
        </Suspense>
      </Canvas>
    </main>
  );
}

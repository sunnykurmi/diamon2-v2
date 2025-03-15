"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Environment, OrbitControls } from "@react-three/drei";
import Model from "../../public/models/model";
  

export default function Scene({ ringColor, diamondColor }) {
  return (
    <Canvas camera={{ position: [0, 2, 5], fov: 10 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-5, 5, 5]} intensity={1} color="white" />
      <Suspense fallback={null}>
        <mesh scale={[25, 25, 25]} rotation={[0, Math.PI, 0]}>
          {/* Pass selected colors to Model */}
          <Model ringColor={ringColor} diamondColor={diamondColor} />
        </mesh>
      </Suspense>
      <Environment preset="studio" />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
    </Canvas>
  );
}

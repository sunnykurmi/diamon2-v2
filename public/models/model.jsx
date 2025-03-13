import React from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/models/model.glb");

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.object_1.geometry}
          material={materials["default"]}
          scale={0.001}
        >
          <meshStandardMaterial color="gold" metalness={0.8} roughness={0.2} />
        </mesh>
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Diamond_Emerald.geometry}
          scale={0.001}
        >
          <meshStandardMaterial color="green" metalness={1.0} roughness={0.3} />
        </mesh>
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.object_6.geometry}
          scale={0.001}
        >
          <meshStandardMaterial color="gold" metalness={1} roughness={0.3} />
        </mesh>
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.object_2.geometry}
          scale={0.001}
        >
          <meshStandardMaterial color="gold" metalness={0.6} roughness={0.4} />
        </mesh>
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.object_3.geometry}
          scale={0.001}
        >
          <meshStandardMaterial color="gold" metalness={0.7} roughness={0.2} />
        </mesh>
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.object_4.geometry}
          scale={0.001}
        >
          <meshStandardMaterial color="gold" metalness={0.9} roughness={0.3} />
        </mesh>
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.object_5.geometry}
          scale={0.001}
        >
          <meshStandardMaterial color="gold" metalness={0.4} roughness={0.5} />
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload("/models/model.glb");

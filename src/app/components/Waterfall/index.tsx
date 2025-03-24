import { Sparkles } from "@react-three/drei";
import Model from "../Model";
import React from "react";
import Text3D from "../Text3D";

const FLOOR_HEIGHT = 2.3;
const NB_FLOORS = 3;

const Waterfall = () => {
  const scale = new Float32Array(
    Array.from({ length: 50 }, () => 0.5 + Math.random() * 4)
  );

  return (
    <group>
      <Model path="/models/springtree.glb" onLoad={() => {}} />
      <Sparkles
        count={scale.length}
        size={scale}
        position={[0, 0.9, 0]}
        scale={[4, 1.5, 4]}
        speed={0.3}
      />
    </group>
  );
};

export default Waterfall;

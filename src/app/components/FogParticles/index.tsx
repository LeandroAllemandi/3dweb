import { useMemo } from "react";
import * as THREE from "three";
import { Points, PointMaterial } from "@react-three/drei";

const FogParticles = () => {
  const particles = useMemo(() => {
    const count = 2000; // Más partículas para mayor densidad
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 15; // Nieblas más concentradas
      const y = Math.random() * 5 + 1; // Nieblas más bajas y cerca del suelo
      const z = (Math.random() - 0.5) * 10 - 5; // Aumentar profundidad para sensación de distancia

      positions.set([x, y, z], i * 3);
    }

    return positions;
  }, []);

  return (
    <Points positions={particles} frustumCulled={false}>
      <PointMaterial
        size={0.8} // Aumentar el tamaño de las partículas
        color="#bbb" // Niebla más grisácea
        transparent
        opacity={0.5} // Hacerla más densa
      />
    </Points>
  );
};

export default FogParticles;

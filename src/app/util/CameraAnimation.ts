import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

interface CameraAnimationProps {
  targetPosition: [number, number, number];  // Posición destino
  targetRotation: number;  // Rotación en radianes
  speed?: number;  // Velocidad de transición (0.01 - 1 recomendado)
}

export const CameraAnimation = ({ targetPosition, targetRotation, speed = 0.01 }: CameraAnimationProps) => {
  const cameraRef = useRef<THREE.Camera | null>(null);
  const smoothPosition = useRef(new THREE.Vector3(...targetPosition));
  const smoothRotation = useRef(targetRotation);

  useFrame(({ camera }) => {
    if (!cameraRef.current) cameraRef.current = camera;

    if (cameraRef.current instanceof THREE.PerspectiveCamera) {
      // Interpolar la posición con velocidad controlada
      smoothPosition.current.lerp(new THREE.Vector3(...targetPosition), speed);
      
      // Interpolar la rotación
      smoothRotation.current = THREE.MathUtils.lerp(smoothRotation.current, targetRotation, speed);

      // Aplicar la nueva posición
      cameraRef.current.position.copy(smoothPosition.current);
      
      // Actualizar la rotación de la cámara para que mire en la dirección deseada
      cameraRef.current.rotation.y = smoothRotation.current;

      // Si se quiere mover hacia la izquierda, puede ser necesario ajustar la posición en función de la rotación.
      // Por ejemplo, aplicar un offset según el ángulo de rotación:
      const offset = new THREE.Vector3(Math.sin(smoothRotation.current) * 5, 0, Math.cos(smoothRotation.current) * 5);
      cameraRef.current.position.add(offset);
      
      // Asegurar que la cámara mire hacia un objeto o punto específico (aquí se puede cambiar)
      cameraRef.current.lookAt(new THREE.Vector3(0, 1, 0));
    }
  });

  return null;
};

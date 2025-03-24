import { useFrame, useThree } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";
import * as THREE from "three";
import { useRef, useState, useEffect } from "react";

interface CameraControlProps {
  pathPositions: [number, number, number][];
  onStepChange: (step: number) => void; // Callback para notificar el paso actual
}

const CameraControl: React.FC<CameraControlProps> = ({ pathPositions, onStepChange }) => {
  const { camera } = useThree();
  const scroll = useScroll();
  const numPositions = pathPositions.length;
  const currentPosition = useRef(new THREE.Vector3(...pathPositions[0]));
  const [currentStep, setCurrentStep] = useState(0); // Estado para el paso actual

  useFrame(() => {
    if (scroll.offset !== undefined && pathPositions.length > 0) {
      const scrollIndex = Math.min(
        Math.floor(scroll.offset * (numPositions - 1)),
        numPositions - 2
      );

      const progress = scroll.offset * (numPositions - 1) - scrollIndex;
      const currentPos = new THREE.Vector3(...pathPositions[scrollIndex]);
      const nextPos = new THREE.Vector3(...pathPositions[scrollIndex + 1]);

      currentPosition.current.lerpVectors(currentPos, nextPos, progress * 0.1); 

      camera.position.set(
        currentPosition.current.x,
        currentPosition.current.y,
        currentPosition.current.z
      );

      camera.lookAt(0, 0, 0);

      if (scrollIndex !== currentStep) {
        setCurrentStep(scrollIndex);
        onStepChange(scrollIndex);
      }
    }
  });

  return null;
};

export default CameraControl;

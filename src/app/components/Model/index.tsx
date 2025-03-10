import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";

interface ModelProps {
  path: string;
  onLoad: () => void;
}

const Model = ({ path, onLoad }: ModelProps) => {
  const { scene } = useGLTF(path);

  useEffect(() => {
    if (scene) {
      onLoad();
    }
  }, [scene, onLoad]);

  return <primitive object={scene} />;
};

export default Model;

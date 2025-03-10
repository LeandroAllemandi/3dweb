import Model from "@/app/components/Model";
import { CameraAnimation } from "@/app/util/CameraAnimation";
import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";
import { Sparkles } from "@react-three/drei";
import "./index.css";
import Skybox from "@/app/components/Skybox";
import CameraControls from "@/app/components/CameraControls";
import Loading from "../loading";

const Home = () => {
  const [cameraPosition, setCameraPosition] = useState<
    [x: number, y: number, z: number]
  >([0, 2, 3]);
  const [cameraRotation, setCameraRotation] = useState(0);
  const [modelLoaded, setModelLoaded] = useState(false);

  useEffect(() => {
    if (modelLoaded) {
      setCameraPosition([0, 2, 0.05]);
      setCameraRotation(cameraRotation + Math.PI / 8);
    }
  }, [modelLoaded]);

  const scale = new Float32Array(
    Array.from({ length: 50 }, () => 0.5 + Math.random() * 4)
  );

  return (
    <main className="main-container">
      {!modelLoaded && <Loading />}

      <Canvas camera={{ position: cameraPosition, fov: 50 }}>
        <color attach="background" args={["#aabbcc"]} />
        <fog attach="fog" args={["#aabbcc", 1, 15]} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 3]} />
        <Skybox />
        <Model path="/models/montain.glb" onLoad={() => setModelLoaded(true)} />
        <Sparkles
          count={scale.length}
          size={scale}
          position={[0, 0.9, 0]}
          scale={[4, 1.5, 4]}
          speed={0.3}
        />
        <CameraAnimation
          targetPosition={cameraPosition}
          targetRotation={cameraRotation}
        />
      </Canvas>

      {/* Control de la cámara fuera del Canvas */}
      <CameraControls
        setCameraPosition={setCameraPosition}
        setCameraRotation={setCameraRotation}
        cameraRotation={cameraRotation}
      />
    </main>
  );
};

export default Home;

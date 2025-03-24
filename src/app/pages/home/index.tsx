import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import "./index.css";
import Skybox from "@/app/components/Skybox";
import Loading from "../loading";
import Waterfall from "@/app/components/Waterfall";
import { ScrollControls } from "@react-three/drei";
import CameraControl from "@/app/components/CameraControls";
import Steps from "@/app/components/Steps";
import Text3D from "@/app/components/Text3D";

const Home = () => {
  const [step, setStep] = useState(0); // Estado del paso actual
  const handleStepChange = (newStep: number) => {
    console.log(newStep);
  };
  return (
    <main className="main-container">
      <Loading />
      <Canvas camera={{ position: [0, 2, 5], fov: 75 }}>
        <fog attach="fog" args={["#aabbcc", 1, 15]} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 3]} />
        <Skybox />
        <Waterfall />
        <Text3D
          content={"ECOTERRA"}
          fontSize={0.5}
          delay={1000}
          position={[0, 2, 0]}
          rotation={[0, 0, 0]}
        />
        <ScrollControls pages={3} damping={1}>
          <CameraControl
            onStepChange={(index) => setStep(index)}
            pathPositions={[
              [0, 2, 5],
              [4, 2, -2],
              [-4, 4, -4],
              [-3, 2, 3],
              [0, 2, 5],
            ]}
          />
        </ScrollControls>
      </Canvas>
      <Steps onChangeStep={handleStepChange} currentStep={step} />
    </main>
  );
};

export default Home;

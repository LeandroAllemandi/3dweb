import { Sky } from '@react-three/drei';

const Skybox = () => {
  return (
    <Sky 
      distance={450000} 
      sunPosition={[1, 1, 0]} // Define la posición del sol
    />
  );
};

export default Skybox;

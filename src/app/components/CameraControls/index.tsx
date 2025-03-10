import React from "react";
import './index.css'
interface CameraControlsProps {
  setCameraPosition: React.Dispatch<React.SetStateAction<[number, number, number]>>;
  setCameraRotation: React.Dispatch<React.SetStateAction<number>>;
  cameraRotation: number;
}

const CameraControls: React.FC<CameraControlsProps> = ({
  setCameraPosition,
  setCameraRotation,
  cameraRotation
}) => {
  return (
    <div className="menu-container">
      <div className="view-section">
        <h3>Vistas</h3>
        <button onClick={() => setCameraPosition([0, 2, 0.05])}>Cercano</button>
        <button onClick={() => setCameraPosition([0, 2, 3])}>Medio</button>
        <button onClick={() => setCameraPosition([0, 3, 4])}>Lejano</button>
      </div>

      <div className="rotation-section">
        <h3>Rotación</h3>
        <button onClick={() => setCameraRotation(cameraRotation - Math.PI / 8)}>
          Girar Izquierda
        </button>
        <button onClick={() => setCameraRotation(cameraRotation + Math.PI / 8)}>
          Girar Derecha
        </button>
      </div>
    </div>
  );
};

export default CameraControls;

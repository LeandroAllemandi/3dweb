import { useState, useEffect } from "react";
import "./index.css";

const Steps = ({
  onChangeStep,
  currentStep, // Recibimos el paso actual como prop
}: {
  onChangeStep: (step: number) => void;
  currentStep: number; // Paso actual
}) => {
  const [activeStep, setActiveStep] = useState<number>(currentStep); // Inicializamos con el paso actual
  const totalSteps = 4;

  useEffect(() => {
    setActiveStep(currentStep); // Actualizamos el paso activo cuando cambia el paso actual
  }, [currentStep]);

  const handleStepClick = (step: number) => {
    setActiveStep(step);
    onChangeStep(step);
  };

  return (
    <div className="steps-container">
      {[...Array(totalSteps)].map((_, index) => (
        <div key={index} className="step-group">
          <div
            className={`step ${activeStep >= index  ? "active" : ""}`}
            onClick={() => handleStepClick(index + 1)}
          ></div>
          {index < totalSteps - 1 && (
            <div className={`line ${activeStep > index? "active" : ""}`}></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Steps;

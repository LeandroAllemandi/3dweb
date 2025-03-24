import React, { useState, useEffect } from "react";
import { Text } from "@react-three/drei";

interface Text3DProps {
  content?: string;
  position?: [number, number, number];
  rotation?: [number, number, number]; // Nueva propiedad para rotación
  color?: string;
  fontSize?: number;
  maxWidth?: number;
  lineHeight?: number;
  letterSpacing?: number;
  textAlign?: "center" | "left" | "right" | "justify" | undefined;
  delay?: number; // Tiempo antes de empezar a escribir (en ms)
}

const Text3D: React.FC<Text3DProps> = ({
  content = "Texto por defecto",
  position = [0, 0, 0],
  rotation = [0, 0, 0], // Valor por defecto sin rotación
  color = "black",
  fontSize = 1,
  maxWidth = 100,
  lineHeight = 1,
  letterSpacing = 0.02,
  textAlign = "center",
  delay = 0,
}) => {
  const [displayedText, setDisplayedText] = useState<string>("");
  const [index, setIndex] = useState<number>(0);
  const [started, setStarted] = useState<boolean>(false);

  useEffect(() => {
    if (!content || content.length === 0) return;

    const startTimeout = setTimeout(() => {
      setStarted(true);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [content, delay]);

  useEffect(() => {
    if (!started || index >= content.length) return;

    const timeout = setTimeout(() => {
      setDisplayedText((prev) => prev + content[index]);
      setIndex((prevIndex) => prevIndex + 1);
    }, 100);

    return () => clearTimeout(timeout);
  }, [index, content, started]);

  useEffect(() => {
    setDisplayedText("");
    setIndex(0);
    setStarted(false);
  }, [content]);

  return (
    <Text
      position={position}
      rotation={rotation} // Aplicando rotación
      color={color}
      fontSize={fontSize}
      maxWidth={maxWidth}
      lineHeight={lineHeight}
      letterSpacing={letterSpacing}
      textAlign={textAlign}
    >
      {displayedText}
    </Text>
  );
};

export default Text3D;

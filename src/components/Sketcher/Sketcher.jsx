import { useEffect, useRef, useState } from "react";

export const Sketcher = () => {
  const canvasRef = useRef(null);

  const handleCanvasInit = () => {
    const { innerWidth, innerHeight } = window;

    const canvas = canvasRef?.current;

    const ctx = canvas.getContext("2d");
    canvas.width = innerWidth;
    canvas.height = innerHeight;

    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
  };

  useEffect(() => {
    handleCanvasInit();
  }, []);

  return <canvas ref={canvasRef} />;
};

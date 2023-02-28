import React, { useEffect } from "react";

import setupGalaxy from "./galaxy";

const Stars = () => {
  useEffect(() => {
    setupGalaxy();
  }, []);

  return (
    <>
      <canvas
        id="canvas"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          zIndex: 2,
          background: "rgb(5, 0, 20, 0.25)",
          userSelect: "none",
        }}
      />
    </>
  );
};

export default Stars;

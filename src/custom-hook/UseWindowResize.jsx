import React, { useEffect, useState } from "react";

const useWindowResize = () => {
  const [windowSize, setWindowSize] = useState({
    width: parseInt(window.innerWidth),
    height: parseInt(window.innerHeight),
  });

  const handleChangeWindowSize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    handleChangeWindowSize();
    window.addEventListener("resize", handleChangeWindowSize);

    return () => {
      window.removeEventListener("resize", handleChangeWindowSize);
    };
  }, []);

  return { windowSize };
};

export default useWindowResize;

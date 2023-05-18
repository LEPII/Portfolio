import React, { useState, useEffect } from "react";

const LoadingScreen = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = "../assets/Background/contact_large.jpeg";

    image.onload = () => {
      setLoaded(true);
    };
  }, []);

  return (
    <div className={`loading-screen ${loaded ? "loaded" : ""}`}>
      <h1>Loading...</h1>
    </div>
  );
};

export default LoadingScreen;

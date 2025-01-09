import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./Image.scss";

const Image = ({ src, alt }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      setIsFullScreen(false);
    }
  };

  useEffect(() => {
    if (isFullScreen) {
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isFullScreen]);

  // Render full-screen image using a portal
  const fullScreenImage = isFullScreen ? (
    <div className="image-fullscreen" onClick={toggleFullScreen}>
      <img src={src} alt={alt} className="image-full" />
    </div>
  ) : null;

  return (
    <>
      <img
        src={src}
        alt={alt}
        onClick={toggleFullScreen}
        style={{ cursor: "pointer" }}
      />

      {isFullScreen &&
        ReactDOM.createPortal(
          fullScreenImage,
          document.getElementById("portal-root") // Render outside the slider
        )}
    </>
  );
};

export default Image;

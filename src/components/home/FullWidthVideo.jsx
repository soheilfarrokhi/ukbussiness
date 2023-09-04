import React from "react";
import Video from "../../assets/video/sample-video.mp4";
import { useHomeContext } from "../../context/HomeContext";

export const FullWidthVideo = () => {
  const { isDarkMode } = useHomeContext();

  return (
    <div className=" full-width-video">
      <video autoPlay loop muted playsInline>
        <source src={Video} type="video/mp4" />
        {/* Your browser does not support the video tag. */}
      </video>
      {isDarkMode && <div className="overlay"></div>}
    </div>
  );
};

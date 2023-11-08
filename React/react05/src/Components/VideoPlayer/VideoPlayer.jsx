import React, { useEffect, useRef } from "react";
import Video from "./Video";

const VideoPlayer = () => {
  const videoRef = useRef();
  useEffect(() => {
    //   videoRef.current.remove();
    console.log(videoRef);
  }, []);

  return (
    <div>
      <Video ref={videoRef} />
      <hr />
      <button
        onClick={() => {
          videoRef.current.play();
        }}
      >
        Play
      </button>
      <button
        onClick={() => {
          videoRef.current.pause();
        }}
      >
        Pause
      </button>
    </div>
  );
};

export default VideoPlayer;

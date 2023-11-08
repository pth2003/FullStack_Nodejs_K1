import React, { forwardRef, useImperativeHandle, useRef } from "react";
import video from "./video.mp4";
const Video = (props, ref) => {
  const videoRef = useRef(); // ref noi bo trong component vieo
  useImperativeHandle(ref, () => {
    return {
      play: () => {
        videoRef.current.play();
      },
      pause: () => {
        videoRef.current.pause();
      },
    };
  });
  return <video ref={videoRef} src={video}></video>;
};

export default forwardRef(Video);

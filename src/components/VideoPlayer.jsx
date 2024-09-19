import React, { useRef } from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ url }) => {
  const playerRef = useRef(null);

  const handleMouseEnter = () => {
    const player = playerRef.current.getInternalPlayer();
    if (player) {
      player.playVideo();
    }
  };

  const handleMouseLeave = () => {
    const player = playerRef.current.getInternalPlayer();
    if (player) {
      player.pauseVideo();
    }
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ borderRadius: "5px", overflow: "hidden" }}
    >
      <ReactPlayer
        ref={playerRef}
        url={url}
        playing={false}
        controls={true}
        width="100%"
        height="250px"
        config={{
          youtube: {
            playerVars: { enablejsapi: 1 },
          },
        }}
      />
    </div>
  );
};

export default VideoPlayer;

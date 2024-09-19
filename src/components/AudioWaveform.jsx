import React, { useState, useEffect, useRef } from "react";
import WaveSurfer from "wavesurfer.js";
// import Play from "../../Assets/play.png";
import { FaCirclePlay } from "react-icons/fa6";
import { BsPauseCircleFill } from "react-icons/bs";
import Song from "../assets/Cheri-Cheri-Lady.mp3";
const formWaveSurferOptions = (ref) => ({
  container: ref,
  waveColor: "#e5e5e5",
  progressColor: "#625ec8",
  cursorColor: "#1B51BB",
  barWidth: 3,
  barRadius: 3,
  responsive: true,
  height: 40,
  normalize: true,
  partialRender: true,
});
export default function AudioWaveform({ blobURL }) {
  const waveformRef = useRef(null);
  const wavesurfer = useRef(null);
  const [playing, setPlay] = useState(false);
  const [volume, setVolume] = useState(0.5);
  // console.log("blobURL", blobURL);
  // const url = blobURL;
  const url =
    "https://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3";
  useEffect(() => {
    setPlay(false);
    const options = formWaveSurferOptions(waveformRef.current);
    wavesurfer.current = WaveSurfer.create(options);
    wavesurfer.current.load(Song);
    wavesurfer.current.on("ready", function () {
      if (wavesurfer.current) {
        wavesurfer.current.setVolume(volume);
        setVolume(volume);
      }
    });
    return () => wavesurfer.current.destroy();
  }, [Song]);
  const handlePlayPause = () => {
    setPlay(!playing);
    wavesurfer.current.playPause();
  };
  // const onVolumeChange = (e) => {
  //   const { target } = e;
  //   const newVolume = +target.value;
  //   if (newVolume) {
  //     setVolume(newVolume);
  //     wavesurfer.current.setVolume(newVolume || 1);
  //   }
  // };
  return (
    <div
      style={{
        // backgroundColor: "#Fafafa",
        display: "flex",
        alignItems: "center",
        borderRadius: "0.2rem",
        padding: "0.5rem",
        columnGap: "0.5rem",
      }}
    >
      <div onClick={handlePlayPause}>
        {!playing ? (
          //   <img src={Play} />
          <FaCirclePlay color="#625ec8" fontSize={36} />
        ) : (
          //   <BsFillPauseFill color="#1B51BB" size={24} />
          <BsPauseCircleFill color="#625ec8" fontSize={36} />
        )}
      </div>
      <div
        id="waveform"
        ref={waveformRef}
        style={{
          width: "100%",
        }}
      />
    </div>
  );
}

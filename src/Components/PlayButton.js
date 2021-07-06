import React, { useEffect, useState } from "react";
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';


const PlayButton = () => {
  const [mute, setMute] = useState(false);

  const audioTune = new Audio("../../../soundAlert.mp3");

  useEffect(() => {
    console.log(mute);
    mute ? (audioTune.muted = true) : (audioTune.muted = false);
    console.log(audioTune.muted);
  }, [mute]);

  return (
    <div style={{display: "flex", alignContent: "center", justifyContent: "center", marginTop: "50px"}} >
      <button onClick={() => audioTune.play()}>Ring the bell!</button>
      <button type="submit" style={{border: 0, background: "transparent"}}
        onClick={() => {
          setMute(!mute);
        }}
      >
        {mute ? <VolumeOffIcon/> : <VolumeUpIcon/>}
      </button>
    </div>
  );
};

export default PlayButton;

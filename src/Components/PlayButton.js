import useSound from "use-sound";

import React, { useEffect, useState } from "react";

const PlayButton = () => {
  const [mute, setMute] = useState(false);

  const audioTune = new Audio("../../../soundAlert.mp3");

  useEffect(() => {
    console.log(mute);
    mute ? (audioTune.muted = true) : (audioTune.muted = false);
    console.log(audioTune.muted);
  }, [mute]);

  return (
    <div>
      <button onClick={() => audioTune.play()}>Click me!</button>
      <button
        onClick={() => {
          setMute(!mute);
        }}
      >
        Mute
      </button>
    </div>
  );
};

export default PlayButton;

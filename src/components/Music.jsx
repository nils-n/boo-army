import React, { useEffect } from 'react';

const Music = () => {
  useEffect(() => {
    const backgroundSound = new Audio('./src/assets/music/backgroundmusic.mp3');
    backgroundSound.loop = true;
    backgroundSound.play();

    // Clean up the audio element when the component unmounts
    return () => {
      backgroundSound.pause();
    };
  }, []);
  return (
    <div>
        {/* <!-- MUSIC --> */}
        <audio
        className="backgroundsound"
        src="./src/assets/music/backgroundmusic.mp3"
        loop
        ></audio>
        <audio className="btn-sound" src="./src/assets/music/btnsound.mp3"></audio>
    </div>
  )
}

export default Music
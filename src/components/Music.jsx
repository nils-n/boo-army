import React from 'react'

const Music = () => {
  // const backgroundSound = document.querySelector(".backgroundsound");
  // // Background Music
  // backgroundSound.play();
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
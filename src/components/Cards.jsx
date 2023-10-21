import React from 'react';

const ButtonWithSound = ({ text }) => {
  const playButtonClickSound = () => {
    const btnSound = new Audio('./src/assets/music/btnsound.mp3');
    btnSound.play();
  };

  return (
    <a href="#" className="btn btn-click-sound" onClick={playButtonClickSound}>
      {text}
    </a>
  );
};

const Cards = () => {
  return (
    <div>
      <div className="story-buttons">
        <ButtonWithSound text="The Haunted Mansion" />
        <ButtonWithSound text="Sorcerer's Curse (COMING SOON)" />
        <ButtonWithSound text="Vampire's Haven (COMING SOON)" />
      </div>
    </div>
  );
};

export default Cards;

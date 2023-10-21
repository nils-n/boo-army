import React, { useState } from 'react';

const Howto = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };  
  return (
    <div>
        {/* <!--HOW TO PLAY MODULE--> */}
      <aside className={`rules-box ${isOpen ? 'visibility' : ''}`}>
        <div className="rules">
          <div className="rules-content" id="rules">
            <div>
              <i className="fa fa-times rule-close-btn" onClick={toggleOpen} aria-hidden="true"></i>
            </div>
            <h2 className="rules-content-title">How To Play</h2>

            <div className="game-info">
              <p>
                Welcome to "Haunted Choices," an interactive horror story game
                where your choices determine your fate.
              </p>
              <p>
                In this spine-chilling adventure, you will be faced with
                terrifying scenarios, life-threatening decisions, and gruesome
                monsters.
              </p>
              <p>
                Your goal is to survive the night by making the right choices.
              </p>
              <p>
                Are you ready to test your wits and courage in the face of
                unspeakable horrors?
              </p>
            </div>
            <div className="game-rules">
              <p>1. Start the game by choosing the story.</p>
              <p>
                2. Read through the text on the screen to follow the narrative.
              </p>
              <p>
                Pay close attention to the details and descriptions, as they may
                contain clues to help you make the right decisions.
              </p>
              <p>
                3. At various points in the story, you will be presented with
                choices.
              </p>
              <p>
                Choose wisely! Your decisions will affect the outcome of the
                story, including your character's survival.
              </p>
              <p>To make a choice, tap the option on the screen.</p>
              <p>
                4. If your character meets an unfortunate end, don't worry! You
                can replay the story and make different choices to see if you
                can survive.
              </p>
              <p>Learn from your mistakes and try again.</p>
            </div>
            <div className="play-game">
              <button className="close-button btn" onClick={toggleOpen}>Play Game</button>
            </div>
          </div>
        </div>
      </aside>
    </div>
  )
}

export default Howto
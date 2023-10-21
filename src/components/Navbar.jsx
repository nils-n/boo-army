import React, { useState } from 'react';
import Howto from './Howto';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };  
  return (
      <>
        {/* <!--NAVIGATION BAR--> */}
        <nav className="navbar hiding" id="myNavbar">
            <ul className="navbar-items">
                <li>
                <a
                    href="#"
                    className="btn-click-sound"
                    id="home-link"
                    aria-label="Go to the home view"
                    >Home</a>
                </li>
                <li>
                <a
                    href="#"
                    className="btn-click-sound"
                    id="rules-link"
                    aria-label="Go to the rules view"
                    onClick={toggleVisibility}
                    >How To Play</a>
                </li>
            </ul>
        </nav>
        {isVisible ? <Howto /> : ""}
      </>
    )
  }
  
  export default Navbar
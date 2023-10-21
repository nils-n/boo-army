import React, { useState } from 'react';

const Footer = () => {
  const [isHidden, setIsHidden] = useState(true);

  const toggleFooter = () => {
    setIsHidden(!isHidden);
  };

  return (
    <footer>
      <div className="btn-pullup">
        <a className="pull" onClick={toggleFooter}>
          {isHidden ? 'Pull Up ⬆' : 'Push Down ⬇'}
        </a>
      </div>

      <div className={`footer-container ${isHidden ? 'hidden' : ''}`}>
        <div className="container">
          <div className="footer-content">
            <div className="footer-left">
              <a href="index.html"><h1>Haunted Choices</h1></a>
            </div>
            <div className="footer-middle">
              <p>
                &copy; <span className="footer__copyright"></span>
                <span className="footer__header">Haunted Choices</span>
              </p>
            </div>
            <div className="footer-right">
              <h2>Follow us:</h2>
              <ul className="social-links">
                <li className="links">
                  <a
                    href="https://www.facebook.com/"
                    aria-label="Facebook"
                    target="_blank"
                    rel="noopener"
                  >
                    <i className="fa-brands fa-facebook" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="links">
                  <a
                    href="https://twitter.com/"
                    aria-label="Twitter"
                    target="_blank"
                    rel="noopener"
                  >
                    <i className="fa-brands fa-square-x-twitter" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="links">
                  <a
                    href="https://www.instagram.com/"
                    aria-label="Instagram"
                    target="_blank"
                    rel="noopener"
                  >
                    <i className="fa-brands fa-square-instagram" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="links">
                  <a
                    href="https://www.youtube.com/"
                    aria-label="YouTube"
                    target="_blank"
                    rel="noopener"
                  >
                    <i className="fa-brands fa-youtube" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

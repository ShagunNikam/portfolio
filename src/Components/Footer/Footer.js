import React from "react";
// import footerBg from '../../Assets/images/wave.svg'
import "./_footer.scss";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer_wrapper">
          <div className="footer_text d-flex">
            <h2 className="text text1">Want to connect?</h2>
            <h1 className="text text2">Let's have a chat!</h1>
            <p className="text text3">Designed and Coded by shagun nikam. Built with React and SCSS.</p>
          </div>
          <div className="footer_content d-flex">
            <div className="copy_rights">
              <p>&copy; 2024 - All rights reserved </p>
            </div>
            <div className="footer_links">
              <ul className="list">
                <li>
                  <a
                    className="links"
                    href="https://www.linkedin.com/in/shagun-nikam-95bb1890"
                    target="_blank"
                    title="LINKEDIN"
                  >
                     LinkedIn <CiLinkedin />
                  </a>
                </li>
                <li>
                  <a
                    className="links"
                    href="https://www.instagram.com/shagun__nikam/"
                    target="_blank"
                    title="INSTAGRAM"
                  >
                    Instagram <FaInstagram />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

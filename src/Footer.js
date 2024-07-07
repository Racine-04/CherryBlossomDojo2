import React from 'react';
import './index.css';
import logo from './img/logo.jpg'; // https://stackoverflow.com/questions/39999367/how-do-i-reference-a-local-image-in-react
import { HashLink as Link } from 'react-router-hash-link'; // https://stackoverflow.com/questions/40280369/use-anchors-with-react-router

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="Logo" />
          <span className="footer-company-name">Cherry Blossom Dojo</span>
        </div>
        <div className="footer-info" id="contact">
          <p><i className="fas fa-map-marker-alt icon"></i> 2-14-8 Shibuya, Shibuya-ku, Tokyo, Japan</p>
          <p><i className="fas fa-phone-alt icon"></i> (613) 942-4413</p>
          <p><i className="fas fa-envelope icon"></i> CherryBlossomDojo@gmail.com</p>
        </div>
        <div className="footer-social">
          <p>Social Media</p>
          <div className="footer-social-icons">
            <a href="#Home"><i className="fab fa-facebook-f icon"></i></a>
            <a href="#Home"><i className="fab fa-twitter icon"></i></a>
            <a href="#Home"><i className="fab fa-linkedin-in icon"></i></a>
            <a href="#Home"><i className="fab fa-youtube icon"></i></a>
            <a href="#Home"><i className="fab fa-instagram icon"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
      <br></br>
        <ul className="footer-links">
          <li><Link to="/#about">About Us</Link></li>
          <li><a href="#contact">Contact Us</a></li>
          <li><a href="#help">Help</a></li>
          <li><a href="#privacy">Privacy Policy</a></li>
          <li><a href="#disclaimer">Disclaimer</a></li>
        </ul>
        <br></br>
        <p>&copy; 2024 ABC Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

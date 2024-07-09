import './index.css';
import { useTranslation } from 'react-i18next';
import logo from './img/logo.jpg'; // https://stackoverflow.com/questions/39999367/how-do-i-reference-a-local-image-in-react
import { HashLink as Link } from 'react-router-hash-link'; // https://stackoverflow.com/questions/40280369/use-anchors-with-react-router

const Footer = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
    localStorage.setItem('language', selectedLanguage); // Save the selected language to localStorage
  };

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
          <p>{t('socialMedia')}</p>
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
        <br />
        <ul className="footer-links">
          <li><Link to="/#about">{t('aboutUs')}</Link></li>
          <li><a href="#contact">{t('contactUs')}</a></li>
          <li><a href="#help">{t('help')}</a></li>
          <li><a href="#privacy">{t('privacyPolicy')}</a></li>
          <li><a href="#disclaimer">{t('disclaimer')}</a></li>
        </ul>
        <br />
        <div className="footer-language-selector">
          <label htmlFor="language-select">{t('language')}: </label>
          <select id="language-select" onChange={handleLanguageChange} defaultValue={i18n.language}>
            <option value="en">English</option>
            <option value="es">Spanish</option>
            {/* Add more languages as needed */}
          </select>
        </div>
        <p>&copy; 2024 ABC Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
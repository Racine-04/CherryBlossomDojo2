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
    <footer className="footer" aria-label="Footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="Cherry Blossom Dojo logo" />
          <span className="footer-company-name">Cherry Blossom Dojo</span>
        </div>
        <div className="footer-info" id="contact">
          <p><i className="fas fa-map-marker-alt icon" aria-hidden="true"></i> 2-14-8 Shibuya, Shibuya-ku, Tokyo, Japan</p>
          <p><i className="fas fa-phone-alt icon" aria-hidden="true"></i> (613) 942-4413</p>
          <p><i className="fas fa-envelope icon" aria-hidden="true"></i> CherryBlossomDojo@gmail.com</p>
        </div>
        <div className="footer-social">
          <p>{t('socialMedia')}</p>
          <div className="footer-social-icons">
            <a href="#https://www.facebook.com/" aria-label="Facebook"><i className="fab fa-facebook-f icon" aria-hidden="true"></i></a>
            <a href="https://x.com/" aria-label="Twitter"><i className="fab fa-twitter icon" aria-hidden="true"></i></a>
            <a href="https://www.linkedin.com/" aria-label="LinkedIn"><i className="fab fa-linkedin-in icon" aria-hidden="true"></i></a>
            <a href="https://www.youtube.com/" aria-label="YouTube"><i className="fab fa-youtube icon" aria-hidden="true"></i></a>
            <a href="https://www.instagram.com/" aria-label="Instagram"><i className="fab fa-instagram icon" aria-hidden="true"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <br />
        <ul className="footer-links" role="menu">
          <li role="menuitem"><Link to="/#about">{t('aboutUs')}</Link></li>
          <li role="menuitem"><a href="/Video">{t('tutorials')}</a></li>
          <li role="menuitem"><a href="#contact">{t('contactUs')}</a></li>
          <li role="menuitem"><a href="/Booking">{t('planLiveSession')}</a></li>
        </ul>
        <br />
        <div className="footer-language-selector">
          <label htmlFor="language-select">{t('language')}: </label>
          <select id="language-select" onChange={handleLanguageChange} defaultValue={i18n.language}>
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="ja">Japanese</option>
          </select>
        </div>
        <p>&copy; 2024 ABC Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

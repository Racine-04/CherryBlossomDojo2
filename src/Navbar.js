import { useState, useEffect } from 'react';
import './index.css';
import logo from './img/logo.jpg';
import { HashLink as Link } from 'react-router-hash-link'; // https://stackoverflow.com/questions/40280369/use-anchors-with-react-router
import { useTranslation } from 'react-i18next';

const Navbar = ({ name }) => {
  const { t } = useTranslation();
  const tmp = !(name == null);
  const [navBackground, setNavBackground] = useState(tmp);

  const handleScroll = () => {
    if (window.scrollY > 10 || tmp) {
      setNavBackground(true);
    } else {
      setNavBackground(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={navBackground ? 'navbar scrolled' : 'navbar'}>
      <div className="navbar-logo">
        <a href="/">
          <img src={logo} alt="logo" className="navbar-logo-img" />
          <span className="navbar-company-name">Cherry Blossom Dojo</span>
        </a>
      </div>
      <ul className="navbar-links">
        <li><Link to="/#about">{t('about')}</Link></li>
        <li><a href="/Video">{t('tutorials')}</a></li>
        <li><a href="#contact">{t('contact')}</a></li>
        <li><a href="/Booking">{t('planLiveSession')}</a></li>
      </ul>
      <div className="navbar-buttons">
        <a href="/Login"><button className="btn">{t('logIn')}</button></a>
        <a href="/Signup"><button className="btn signup-btn">{t('signUp')}</button></a>
      </div>
    </nav>
  );
};

export default Navbar;
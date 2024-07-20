import { useTranslation } from 'react-i18next';
import Navbar from './Navbar';
import Footer from './Footer';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // https://stackoverflow.com/questions/76387374/how-to-add-icons-in-react-js
import homePageImage from './img/CherryBlossomDojo.jpg'; 
import CherryBlossomBot from './Chatbot';
import training from './img/practicing.webp'; // https://krav-maga.com/further-training/ 
import { HashLink as Link } from 'react-router-hash-link'; // https://stackoverflow.com/questions/40280369/use-anchors-with-react-router

const App = () => {
  const { t } = useTranslation();

  return (
    <div className="App" lang={t('lang')}>
      <Navbar />
      <header className="hero-home-section">
        <img src={homePageImage} alt="Cherry Blossom Dojo main image" className="hero-image" role="img" aria-labelledby="hero-img-description" />
        <div className="hero-overlay"></div>
        <div className="hero-text">
          <h1>{t('title')}</h1>
          <div className="line-after-title"></div>
          <p className="subheading">{t('subheading')}</p>
          <a href="#about" aria-label={t('findOutMore')}><button className="hero-button">{t('findOutMore')}</button></a>
        </div>
      </header>
      <section className="about-section" id="about">
        <div className="about-content">
          <img src={training} alt="Woman training" className="about-image" role="img" aria-labelledby="about-img-description" />
          <div className="about-text">
            <h2>{t('aboutUs')}</h2>
            {t('aboutText', { returnObjects: true }).map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>
      <CherryBlossomBot />
      <Footer />
    </div>
  );
};

export default App;
import React, { useState, useEffect } from 'react';
import { TranslationProvider, useTranslation } from './TranslationContext';
import Navbar from './Navbar';
import Footer from './Footer';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // https://stackoverflow.com/questions/76387374/how-to-add-icons-in-react-js
import homePageImage from './img/CherryBlossomDojo.jpg'; 
import CherryBlossomBot from './Chatbot';
import training from './img/practicing.webp' // https://krav-maga.com/further-training/ 
import { HashLink as Link } from 'react-router-hash-link'; // https://stackoverflow.com/questions/40280369/use-anchors-with-react-router

const initialContent = {
  title: "Cherry Blossom Dojo",
  subheading: "Learn Martial Arts In The Comfort Of Your Own Home",
  findOutMore: "Find out More",
  aboutUs: "About Us",
  aboutText: [
    "Welcome to Cherry Blossom Dojo! We offer a unique blend of martial arts training that you can enjoy from the comfort of your home. Our mission is to bring the discipline, strength, and serenity of martial arts to everyone, regardless of location.",
    "Our experienced instructors provide high-quality tutorials that cater to all levels, from beginners to advanced practitioners. Join us to enhance your physical fitness, mental clarity, and overall well-being through the art of martial arts.",
    "At Cherry Blossom Dojo, we believe that martial arts is more than just physical activity; it is a way of life. Our programs are designed to not only improve your physical skills but also to foster mental discipline and spiritual growth. Whether you are looking to learn self-defense techniques, improve your fitness, or find a path to inner peace, our dojo offers something for everyone.",
    "We are committed to providing a supportive and inclusive environment where everyone can thrive. Join our community and embark on a journey of self-discovery, empowerment, and transformation. At Cherry Blossom Dojo, we are more than just a dojo; we are a family."
  ],
};

const AppContent = () => {
  const { language, translateTexts } = useTranslation();
  const [content, setContent] = useState(initialContent);

  useEffect(() => {
    const updateTranslations = async () => {
      if (language !== 'en') {
        const translatedContent = await translateTexts(initialContent);
        setContent(translatedContent);
      } else {
        setContent(initialContent);
      }
    };

    updateTranslations();
  }, [language, translateTexts]);

  return (
    <div className="App">
      <Navbar />
      <header className="hero-home-section">
        <img src={homePageImage} alt="Cherry Blossom Dojo" className="hero-image" />
        <div className="hero-overlay"></div>
        <div className="hero-text">
          <h1>{content.title}</h1>
          <div className="line-after-title"></div>
          <p className="subheading">{content.subheading}</p>
          <a href="#about"><button className="hero-button">{content.findOutMore}</button></a>
        </div>
      </header>
      <section className="about-section" id="about">
        <div className="about-content">
          <img src={training} alt="Woman training" className="about-image" />
          <div className="about-text">
            <h2>{content.aboutUs}</h2>
            {content.aboutText.map((paragraph, index) => (
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

const App = () => {
  return (
    <TranslationProvider>
      <AppContent />
    </TranslationProvider>
  );
};

export default App;
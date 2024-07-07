import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // https://stackoverflow.com/questions/76387374/how-to-add-icons-in-react-js
import homePageImage from './img/CherryBlossomDojo.jpg'; 
import CherryBlossomBot from './Chatbot';
import training from './img/practicing.webp' // https://krav-maga.com/further-training/ 
import { HashLink as Link } from 'react-router-hash-link'; // https://stackoverflow.com/questions/40280369/use-anchors-with-react-router

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <header className="hero-home-section">
        <img src={homePageImage} alt="Cherry Blossom Dojo" className="hero-image" />
        <div className="hero-overlay"></div>
        <div className="hero-text">
          <h1>Cherry Blossom Dojo</h1>
          <div className="line-after-title"></div>
          <p className="subheading">Learn Martial Arts In The Comfort Of Your Own Home</p>
          <a href="#about"><button className="hero-button">Find out More</button></a>
        </div>
      </header>
      <section className="about-section" id="about">
        <div className="about-content">
          <img src={training} alt="Woman training" className="about-image" />
          <div className="about-text">
            <h2>About Us</h2>
            <p>Welcome to Cherry Blossom Dojo! We offer a unique blend of martial arts training that you can enjoy from the comfort of your home. Our mission is to bring the discipline, strength, and serenity of martial arts to everyone, regardless of location.</p>
            <p>Our experienced instructors provide high-quality tutorials that cater to all levels, from beginners to advanced practitioners. Join us to enhance your physical fitness, mental clarity, and overall well-being through the art of martial arts.</p>
            <p>At Cherry Blossom Dojo, we believe that martial arts is more than just physical activity; it is a way of life. Our programs are designed to not only improve your physical skills but also to foster mental discipline and spiritual growth. Whether you are looking to learn self-defense techniques, improve your fitness, or find a path to inner peace, our dojo offers something for everyone.</p>
            <p>We are committed to providing a supportive and inclusive environment where everyone can thrive. Join our community and embark on a journey of self-discovery, empowerment, and transformation. At Cherry Blossom Dojo, we are more than just a dojo; we are a family.</p>
          </div>
        </div>
      </section>
      <CherryBlossomBot />
      <Footer />
    </div>
  );
};

export default App;

import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from './Navbar';
import Footer from './Footer';
import VideoList from './VideoList';
import cherryBlossomDojo from './img/CherryBlossomDojo.jpg'
import CherryBlossomBot from './Chatbot';
import './index.css'
import './video.css';
import { HashLink as Link } from 'react-router-hash-link'; // https://stackoverflow.com/questions/40280369/use-anchors-with-react-router

const Video = () => {
  const { t, i18n } = useTranslation();

  const [videos, setVideos] = useState(t('initialVideos', { returnObjects: true }));
  const [filters, setFilters] = useState({
    type: [],
    level: [],
    time: [],
    date: [],
  });

  useEffect(() => {
    setVideos(t('initialVideos', { returnObjects: true }));
  }, [i18n.language, t]);

  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;
    setFilters((prevFilters) => {
      const newValues = checked
        ? [...prevFilters[name], value]
        : prevFilters[name].filter((v) => v !== value);
      return { ...prevFilters, [name]: newValues };
    });
  };

  const clearFilters = () => {
    setFilters({ type: [], level: [], time: [], date: [] });
    const checkboxes = document.querySelectorAll('.filters input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
  };

  const filteredVideos = videos.filter((video) => {
    const matchesType = !filters.type.length || filters.type.includes(video.type);
    const matchesLevel = !filters.level.length || filters.level.includes(video.level);
    const matchesTime = !filters.time.length || filters.time.includes(video.time);
    const matchesDate = !filters.date.length || filters.date.includes(video.date);
    return matchesType && matchesLevel && matchesTime && matchesDate;
  });

  return (
    <div className="App">
      <Navbar />
      <header className="hero-section">
        <img src={cherryBlossomDojo} alt="Cherry Blossom Dojo" className="hero-image" />
        <div className="hero-overlay"></div>
        <div className="hero-text video-title">
          <h1>{t('tutorialsVideo')}</h1>
          <div className="line-after-title"></div>
          <p>{t('videoWelcome')}</p>
        </div>
      </header>
      <section className="filters-section">
        <div className="filters">
          <h2>{t('filters')}</h2>
          <div>
            <label className="filter-label">{t('martialArts')}</label>
            <div className="filter-group">
              <input type="checkbox" name="type" value={t('karate', { returnObjects: false })} onChange={handleCheckboxChange} />
              <label>{t('karate')}</label>
            </div>
            <div className="filter-group">
              <input type="checkbox" name="type" value={t('muayThai', { returnObjects: false })} onChange={handleCheckboxChange} />
              <label>{t('muayThai')}</label>
            </div>
            <div className="filter-group">
              <input type="checkbox" name="type" value={t('brazilianJiuJitsu', { returnObjects: false })} onChange={handleCheckboxChange} />
              <label>{t('brazilianJiuJitsu')}</label>
            </div>
            <div className="filter-group">
              <input type="checkbox" name="type" value={t('taekwondo', { returnObjects: false })} onChange={handleCheckboxChange} />
              <label>{t('taekwondo')}</label>
            </div>
            <div className="filter-group">
              <input type="checkbox" name="type" value={t('boxing', { returnObjects: false })} onChange={handleCheckboxChange} />
              <label>{t('boxing')}</label>
            </div>
          </div>
          <hr />
          <div>
            <label className="filter-label">{t('selfDefense')}</label>
            <div className="filter-group">
              <input type="checkbox" name="type" value={t('blocking', { returnObjects: false })} onChange={handleCheckboxChange} />
              <label>{t('blocking')}</label>
            </div>
            <div className="filter-group">
              <input type="checkbox" name="type" value={t('striking', { returnObjects: false })} onChange={handleCheckboxChange} />
              <label>{t('striking')}</label>
            </div>
            <div className="filter-group">
              <input type="checkbox" name="type" value={t('dodging', { returnObjects: false })} onChange={handleCheckboxChange} />
              <label>{t('dodging')}</label>
            </div>
            <div className="filter-group">
              <input type="checkbox" name="type" value={t('sweeps', { returnObjects: false })} onChange={handleCheckboxChange} />
              <label>{t('sweeps')}</label>
            </div>
          </div>
          <hr />
          <div>
            <label className="filter-label">{t('level')}</label>
            <div className="filter-group">
              <input type="checkbox" name="level" value={t('beginner', { returnObjects: false })} onChange={handleCheckboxChange} />
              <label>{t('beginner')}</label>
            </div>
            <div className="filter-group">
              <input type="checkbox" name="level" value={t('intermediate', { returnObjects: false })} onChange={handleCheckboxChange} />
              <label>{t('intermediate')}</label>
            </div>
            <div className="filter-group">
              <input type="checkbox" name="level" value={t('advanced', { returnObjects: false })} onChange={handleCheckboxChange} />
              <label>{t('advanced')}</label>
            </div>
          </div>
          <hr />
          <div>
            <label className="filter-label">{t('time')}</label>
            <div className="filter-group">
              <input type="checkbox" name="time" value={t('under10Minutes', { returnObjects: false })} onChange={handleCheckboxChange} />
              <label>{t('under10Minutes')}</label>
            </div>
            <div className="filter-group">
              <input type="checkbox" name="time" value={t('tenTo20Minutes', { returnObjects: false })} onChange={handleCheckboxChange} />
              <label>{t('tenTo20Minutes')}</label>
            </div>
            <div className="filter-group">
              <input type="checkbox" name="time" value={t('over20Minutes', { returnObjects: false })} onChange={handleCheckboxChange} />
              <label>{t('over20Minutes')}</label>
            </div>
          </div>
          <hr />
          <div>
            <label className="filter-label">{t('date')}</label>
            <div className="filter-group">
              <input type="checkbox" name="date" value={t('oneWeekAgo', { returnObjects: false })} onChange={handleCheckboxChange} />
              <label>{t('oneWeekAgo')}</label>
            </div>
            <div className="filter-group">
              <input type="checkbox" name="date" value={t('twoWeeksAgo', { returnObjects: false })} onChange={handleCheckboxChange} />
              <label>{t('twoWeeksAgo')}</label>
            </div>
            <div className="filter-group">
              <input type="checkbox" name="date" value={t('oneMonthAgo', { returnObjects: false })} onChange={handleCheckboxChange} />
              <label>{t('oneMonthAgo')}</label>
            </div>
            <div className="filter-group">
              <input type="checkbox" name="date" value={t('sixMonthsAgo', { returnObjects: false })} onChange={handleCheckboxChange} />
              <label>{t('sixMonthsAgo')}</label>
            </div>
          </div>
          <hr />
          <button onClick={clearFilters}>{t('clearFilters')}</button>
        </div>
        <VideoList videos={filteredVideos} />
      </section>
      <CherryBlossomBot />
      <Footer />
    </div>
  );
};

export default Video;
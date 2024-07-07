import { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import VideoList from './VideoList';
import cherryBlossomDojo from './img/CherryBlossomDojo.jpg'
import CherryBlossomBot from './Chatbot';
import './index.css'
import './video.css';
import { HashLink as Link } from 'react-router-hash-link'; // https://stackoverflow.com/questions/40280369/use-anchors-with-react-router

const Video = () => {
  const initialVideos = [
    {
      id: 1,
      title: 'Advanced BJJ Moves for MMA: Triangle Choke Tutorial',
      type: 'Brazilian Jiu Jitsu',
      level: 'Advanced',
      time: '10-20 minutes',
      date: '1 month ago',
      url: 'https://youtu.be/5UrATWw9ajQ?si=y_aVi2feJG426BUe',
      views: '50 views',
    },
    {
      id: 2,
      title: 'Mastering Striking Techniques: Lessons from McGregor vs Poirier',
      type: 'Boxing',
      level: 'Intermediate',
      time: '10-20 minutes',
      date: '2 weeks ago',
      url: 'https://youtu.be/LTcnTC4EFYI?si=HNRUviuy6h6s6xE9',
      views: '10K views',
    },
    {
      id: 3,
      title: 'Karate Basics for Beginners: Kihon Techniques',
      type: 'Karate',
      level: 'Beginner',
      time: 'Under 10 minutes',
      date: '3 days ago',
      url: 'https://youtu.be/mwE4idADxuM?si=QCEwZvYdxRV1jVB-',
      views: '1.2K views',
    },
    {
      id: 4,
      title: 'Muay Thai Advanced Combinations',
      type: 'Muay Thai',
      level: 'Advanced',
      time: 'Under 10 minutes',
      date: '2 weeks ago',
      url: 'https://youtu.be/tZzWgs2UQrE?si=0ID4j2eIb0BAVpqm',
      views: '8K views',
    },
    {
      id: 5,
      title: 'Taekwondo Kicks: Mastering the Roundhouse Kick',
      type: 'Taekwondo',
      level: 'Intermediate',
      time: '10-20 minutes',
      date: '1 week ago',
      url: 'https://youtu.be/gKCcOv70CAw?si=-aPWgbFG5zsE6GNU',
      views: '5K views',
    },
    {
      id: 6,
      title: 'Basic Blocking Techniques for Self-Defense',
      type: 'Blocking',
      level: 'Beginner',
      time: 'Under 10 minutes',
      date: '5 days ago',
      url: 'https://youtu.be/x4LzZ3BxP7k?si=A1JScl75xMZGptb7',
      views: '800 views',
    },
    {
      id: 7,
      title: 'Effective Striking: Boxing and Kickboxing Drills',
      type: 'Striking',
      level: 'Advanced',
      time: 'Over 20 minutes',
      date: '3 weeks ago',
      url: 'https://youtu.be/bs7X3F-XYTc?si=2bw44qj5KEtO-O6K',
      views: '15K views',
    },
    {
      id: 8,
      title: 'Dodging and Weaving: Essential Techniques for Fighters',
      type: 'Dodging',
      level: 'Intermediate',
      time: 'Under 10 minutes',
      date: '2 months ago',
      url: 'https://youtu.be/ABqs5V4q4S8?si=XFzNaRRltbOdNDn3',
      views: '7K views',
    },
    {
      id: 9,
      title: 'Sweeps and Throws: Judo for MMA',
      type: 'Sweeps',
      level: 'Advanced',
      time: 'Over 20 minutes',
      date: '1 month ago',
      url: 'https://youtu.be/_Zi5spppIxY?si=ohAAy4mKkezvUnKd',
      views: '20K views',
    },
    {
      id: 10,
      title: 'Boxing Footwork Drills for Beginners',
      type: 'Boxing',
      level: 'Beginner',
      time: 'Under 10 minutes',
      date: '1 week ago',
      url: 'https://youtu.be/v0y86288Wt0?si=ScPGtodFGYMyPS-1',
      views: '3K views',
    },
    {
      id: 11,
      title: 'Muay Thai Clinch Techniques for Intermediate Fighters',
      type: 'Muay Thai',
      level: 'Intermediate',
      time: '10-20 minutes',
      date: '3 weeks ago',
      url: 'https://youtu.be/SD2PvP-jVds?si=JS-Ft95bmcfwLIu5',
      views: '10K views',
    },
    {
      id: 12,
      title: 'Karate Advanced Kata: Gojushiho Sho',
      type: 'Karate',
      level: 'Advanced',
      time: 'Over 20 minutes',
      date: '2 months ago',
      url: 'https://youtu.be/39p6Py3xTWA?si=HGEQPQqDWVgQfrGF',
      views: '25K views',
    },
    {
      id: 13,
      title: 'Brazilian Jiu Jitsu Guard Pass Drills',
      type: 'Brazilian Jiu Jitsu',
      level: 'Intermediate',
      time: '10-20 minutes',
      date: '1 month ago',
      url: 'https://youtu.be/ToVa7_I2ps4?si=NGq09DcWU3GReu45',
      views: '9K views',
    },
    {
      id: 14,
      title: 'Taekwondo Sparring Tips for Beginners',
      type: 'Taekwondo',
      level: 'Beginner',
      time: 'Under 10 minutes',
      date: '3 weeks ago',
      url: 'https://youtu.be/JrmHkZRWXvo?si=c8KLTrwI913w7qnO',
      views: '2K views',
    },
    {
      id: 15,
      title: 'Advanced Blocking Techniques for MMA',
      type: 'Blocking',
      level: 'Advanced',
      time: '10-20 minutes',
      date: '2 months ago',
      url: 'https://youtu.be/jq7yqox1D5w?si=fmNY2VXpExpIp9u2',
      views: '11K views',
    },
    {
      id: 16,
      title: 'Striking Combinations: Muay Thai and Boxing',
      type: 'Striking',
      level: 'Intermediate',
      time: 'Over 20 minutes',
      date: '1 month ago',
      url: 'https://youtu.be/nxKukVoomL0?si=O1D6KtS9NeyT_eFF',
      views: '6K views',
    },
    {
      id: 17,
      title: 'Effective Dodging Techniques for Self-Defense',
      type: 'Dodging',
      level: 'Beginner',
      time: 'Under 10 minutes',
      date: '5 days ago',
      url: 'https://youtu.be/ooMjhFToGQw?si=q6852p3iMzKrdZV_',
      views: '900 views',
    },
    {
      id: 18,
      title: 'Judo Sweeps: Mastering Ashi Barai',
      type: 'Sweeps',
      level: 'Intermediate',
      time: '10-20 minutes',
      date: '3 weeks ago',
      url: 'https://youtu.be/igBN0Ef-FNE?si=8pHKhx8Vt4VLdERM',
      views: '4K views',
    },
    {
      id: 19,
      title: 'Boxing Advanced Combinations for Fighters',
      type: 'Boxing',
      level: 'Advanced',
      time: '10-20 minutes',
      date: '1 month ago',
      url: 'https://youtu.be/3ttZm7A_5ak?si=ANYVHiSPPq5m3bfl',
      views: '12K views',
    },
    {
      id: 20,
      title: 'Muay Thai Kick Drills for Power and Speed',
      type: 'Muay Thai',
      level: 'Advanced',
      time: 'Over 20 minutes',
      date: '2 months ago',
      url: 'https://youtu.be/pOL06akWQkc?si=wGnRcGsxiAvb8V4n',
      views: '22K views',
    },
    {
      id: 21,
      title: 'Karate Sparring Techniques for Intermediate Practitioners',
      type: 'Karate',
      level: 'Intermediate',
      time: 'Under 10 minutes',
      date: '1 month ago',
      url: 'https://youtu.be/Hk__nFdfvMQ?si=Xs8d1eQfsXP8NYIv',
      views: '9K views',
    },
    {
      id: 22,
      title: 'Brazilian Jiu Jitsu Submission Escapes',
      type: 'Brazilian Jiu Jitsu',
      level: 'Beginner',
      time: 'Under 10 minutes',
      date: '2 weeks ago',
      url: 'https://youtu.be/09WKJb8adxw?si=tx7kPmoCvvfGitj4',
      views: '5K views',
    },
    {
      id: 23,
      title: 'Taekwondo Advanced Sparring Combinations',
      type: 'Taekwondo',
      level: 'Advanced',
      time: 'Over 20 minutes',
      date: '3 months ago',
      url: 'https://www.youtube.com/live/HHNd-CCpAyQ?si=2cWYkTiyVMI-Y44-',
      views: '18K views',
    },
    {
      id: 24,
      title: 'Blocking Techniques for Street Self-Defense',
      type: 'Blocking',
      level: 'Intermediate',
      time: 'Under 10 minutes',
      date: '1 month ago',
      url: 'https://youtu.be/LN8xKzjL_zk?si=fM7b49zh1TTp21EA',
      views: '7K views',
    },
    {
      id: 25,
      title: 'Striking Drills for MMA Fighters',
      type: 'Striking',
      level: 'Advanced',
      time: '10-20 minutes',
      date: '2 months ago',
      url: 'https://youtu.be/Q3mqj0S-ECY?si=YhCgZOWSNo__sFRU',
      views: '14K views',
    },
    {
      id: 26,
      title: 'Dodging Techniques for Boxing',
      type: 'Dodging',
      level: 'Intermediate',
      time: 'Under 10 minutes',
      date: '1 month ago',
      url: 'https://youtu.be/mktvu90FZHo?si=ndxKWkb23lRCNdR8',
      views: '6K views',
    },
    {
      id: 27,
      title: 'Boxing Fundamentals for Beginners',
      type: 'Boxing',
      level: 'Beginner',
      time: 'Under 10 minutes',
      date: '2 weeks ago',
      url: 'https://youtu.be/kKDHdsVN0b8?si=AqFtpi3GaVWXnNZB',
      views: '4K views',
    },
    {
      id: 28,
      title: 'Muay Thai Clinch Work for Advanced Fighters',
      type: 'Muay Thai',
      level: 'Advanced',
      time: 'Over 20 minutes',
      date: '1 month ago',
      url: 'https://youtu.be/Ng1Zh3OUo3w?si=_4bjDw-P9w0bR4NN',
      views: '17K views',
    },
    {
      id: 29,
      title: 'Karate Kata for Intermediate Students',
      type: 'Karate',
      level: 'Intermediate',
      time: 'Under 10 minutes',
      date: '2 months ago',
      url: 'https://youtu.be/5uAxkiBh0JI?si=rVeBgNrGYXE1Y2kZ',
      views: '8K views',
    }
  ];  

  const [videos, setVideos] = useState(initialVideos);
  const [filters, setFilters] = useState({
    type: [],
    level: [],
    time: [],
    date: [],
  });

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
          <h1>Tutorials Video</h1>
          <div className="line-after-title"></div>
          <p>Welcome to our Tutorials Video page! Here, you'll find a wide range of martial arts tutorials that cater to all skill levels, from beginner to advanced. Our expertly curated videos cover various martial arts disciplines, including Karate, Muay Thai, Brazilian Jiu Jitsu, Taekwondo, Boxing, and self-defense techniques such as Blocking, Striking, Dodging, and Sweeps. Whether you're looking to improve your skills, learn new techniques, or find effective self-defense strategies, our tutorials are designed to help you achieve your goals. Use the filters on the left to narrow down your search by martial art type, skill level, video duration, and upload date. Happy training!</p>
        </div>
      </header>
      <section className="filters-section">
        <div className="filters">
          <h2>Filters</h2>
          <div>
            <label className="filter-label">Martial Arts</label>
            <div className="filter-group">
              <input type="checkbox" name="type" value="Karate" onChange={handleCheckboxChange} />
              <label>Karate</label>
            </div>
            <div className="filter-group">
              <input type="checkbox" name="type" value="Muay Thai" onChange={handleCheckboxChange} />
              <label>Muay Thai</label>
            </div>
            <div className="filter-group">
              <input type="checkbox" name="type" value="Brazilian Jiu Jitsu" onChange={handleCheckboxChange} />
              <label>Brazilian Jiu Jitsu</label>
            </div>
            <div className="filter-group">
              <input type="checkbox" name="type" value="Taekwondo" onChange={handleCheckboxChange} />
              <label>Taekwondo</label>
            </div>
            <div className="filter-group">
              <input type="checkbox" name="type" value="Boxing" onChange={handleCheckboxChange} />
              <label>Boxing</label>
            </div>
          </div>
          <hr />
          <div>
            <label className="filter-label">Self-Defense Technique</label>
            <div className="filter-group">
              <input type="checkbox" name="type" value="Blocking" onChange={handleCheckboxChange} />
              <label>Blocking</label>
            </div>
            <div className="filter-group">
              <input type="checkbox" name="type" value="Striking" onChange={handleCheckboxChange} />
              <label>Striking</label>
            </div>
            <div className="filter-group">
              <input type="checkbox" name="type" value="Dodging" onChange={handleCheckboxChange} />
              <label>Dodging</label>
            </div>
            <div className="filter-group">
              <input type="checkbox" name="type" value="Sweeps" onChange={handleCheckboxChange} />
              <label>Sweeps</label>
            </div>
          </div>
          <hr />
          <div>
            <label className="filter-label">Level</label>
            <div className="filter-group">
              <input type="checkbox" name="level" value="Beginner" onChange={handleCheckboxChange} />
              <label>Beginner</label>
            </div>
            <div className="filter-group">
              <input type="checkbox" name="level" value="Intermediate" onChange={handleCheckboxChange} />
              <label>Intermediate</label>
            </div>
            <div className="filter-group">
              <input type="checkbox" name="level" value="Advanced" onChange={handleCheckboxChange} />
              <label>Advanced</label>
            </div>
          </div>
          <hr />
          <div>
            <label className="filter-label">Time</label>
            <div className="filter-group">
              <input type="checkbox" name="time" value="Under 10 minutes" onChange={handleCheckboxChange} />
              <label>Under 10 minutes</label>
            </div>
            <div className="filter-group">
              <input type="checkbox" name="time" value="10-20 minutes" onChange={handleCheckboxChange} />
              <label>10-20 minutes</label>
            </div>
            <div className="filter-group">
              <input type="checkbox" name="time" value="Over 20 minutes" onChange={handleCheckboxChange} />
              <label>Over 20 minutes</label>
            </div>
          </div>
          <hr />
          <div>
            <label className="filter-label">Date</label>
            <div className="filter-group">
              <input type="checkbox" name="date" value="1 week ago" onChange={handleCheckboxChange} />
              <label>1 week ago</label>
            </div>
            <div className="filter-group">
              <input type="checkbox" name="date" value="2 weeks ago" onChange={handleCheckboxChange} />
              <label>2 weeks ago</label>
            </div>
            <div className="filter-group">
              <input type="checkbox" name="date" value="1 month ago" onChange={handleCheckboxChange} />
              <label>1 month ago</label>
            </div>
            <div className="filter-group">
              <input type="checkbox" name="date" value="6 months ago" onChange={handleCheckboxChange} />
              <label>6 months ago</label>
            </div>
          </div>
          <hr />
          <button onClick={clearFilters}>Clear Filters</button>
        </div>
        <VideoList videos={filteredVideos} />
      </section>
      <CherryBlossomBot />
      <Footer />
    </div>
  );
};

export default Video;
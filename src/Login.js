import { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useNavigate } from "react-router-dom"; // https://stackoverflow.com/questions/50644976/react-button-onclick-redirect-page
import '@fortawesome/fontawesome-free/css/all.min.css'; // https://stackoverflow.com/questions/76387374/how-to-add-icons-in-react-js
import { HashLink as Link } from 'react-router-hash-link'; // https://stackoverflow.com/questions/40280369/use-anchors-with-react-router
import './form.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate(); 


  const handleLogin = () => {
    if (email === '' || password === '') {
      setError('Please fill out all fields');
    } else {
      setError('');
      // Proceed with login 
      navigate("/Video");
    }
  };

  return (
    <div className="App entry">
      <Navbar name="form" />
      <div className="form-container">
        <div className="form-box">
          <h2>Log in</h2>
          <div className="form-group">
            <label htmlFor="email">Email address or user name</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email or user name"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group checkbox-group">
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label htmlFor="rememberMe">Remember me</label>
          </div>
          {error && <div className="error-message">{error}</div>}
          <button onClick={handleLogin}>Log in</button>
          <a href="#">Forget your password?</a>
          <a href="/Signup"> <span>Don't have an account? </span>Sign up</a>
          <hr />
          <div className="social-login">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-google"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
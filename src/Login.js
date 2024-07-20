import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from './Navbar';
import Footer from './Footer';
import CherryBlossomBot from './Chatbot';
import { useNavigate } from "react-router-dom"; // https://stackoverflow.com/questions/50644976/react-button-onclick-redirect-page
import '@fortawesome/fontawesome-free/css/all.min.css'; // https://stackoverflow.com/questions/76387374/how-to-add-icons-in-react-js
import { HashLink as Link } from 'react-router-hash-link'; // https://stackoverflow.com/questions/40280369/use-anchors-with-react-router
import './form.css';
import cherryBlossomMotifLeft from './img/cherryBlossomMotif.png'; 
import cherryBlossomMotifRight from './img/cherryBlossomMotif2.png';

const Login = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // https://www.simplilearn.com/tutorials/javascript-tutorial/email-validation-in-javascript#:~:text=One%20of%20the%20most%20popular,describe%20a%20pattern%20of%20characters.
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!email) {
      newErrors.email = t('emailRequired');
    } else if (!validateEmail(email)) {
      newErrors.email = t('invalidEmailFormat');
    }
    if (!password) newErrors.password = t('passwordRequired');
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = () => {
    if (validateForm()) {
      setErrors({});
      navigate("/Video");
    }
  };

  const handleSocialLogin = (url) => {
    window.open(url, '_blank');
    navigate("/Video");
  };

  return (
    <div className="App entry">
      <Navbar name="form" />
      <div className="form-container">
        <img src={cherryBlossomMotifLeft} className="cherry-blossom-left" alt="Cherry Blossom Motif" />
        <img src={cherryBlossomMotifRight} className="cherry-blossom-right" alt="Cherry Blossom Motif" />
        <div className="form-box">
          <h2>{t('logInTitle')}</h2>
          <div className="form-group">
            <label htmlFor="email">{t('emailOrUsername')}</label>
            <input
              type="email"
              id="email"
              placeholder={t('emailOrUsernamePlaceholder')}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="error-message"><i className="fas fa-exclamation-circle"></i> {errors.email}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="password">{t('password')}</label>
            <input
              type="password"
              id="password"
              placeholder={t('passwordPlaceholder')}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <p className="error-message"><i className="fas fa-exclamation-circle"></i> {errors.password}</p>}
          </div>
          <div className="form-group checkbox-group">
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label htmlFor="rememberMe">{t('rememberMe')}</label>
          </div>
          <button onClick={handleLogin}>{t('logIn')}</button>
          <a href="/password-reset">{t('forgetPassword')}</a>
          <a href="/Signup"> <span>{t('noAccount')}</span> {t('signUpHere')}</a>
          <hr />
          <div className="social-login">
                <button onClick={() => handleSocialLogin('https://www.facebook.com/login/')}>
                  <i className="fab fa-facebook"></i> {t('loginWithFacebook')}
                </button>
                <button onClick={() => handleSocialLogin('https://accounts.google.com/')}>
                  <i className="fab fa-google"></i> {t('loginWithGoogle')}
                </button>
              </div>
        </div>
      </div>
      <CherryBlossomBot />
      <Footer />
    </div>
  );
};

export default Login;

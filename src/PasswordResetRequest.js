import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from './Navbar';
import Footer from './Footer';
import CherryBlossomBot from './Chatbot';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useNavigate } from "react-router-dom";
import './form.css';
import cherryBlossomMotifLeft from './img/cherryBlossomMotif.png';
import cherryBlossomMotifRight from './img/cherryBlossomMotif2.png';

const PasswordReset = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

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
    if (!newPassword) {
      newErrors.newPassword = t('passwordRequired');
    } else if (newPassword.length < 8) {
      newErrors.newPassword = t('passwordTooShort');
    }
    if (newPassword !== confirmPassword) {
      newErrors.confirmPassword = t('passwordsDoNotMatch');
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const confirmed = window.confirm(t('confirmPasswordReset'));
      if (confirmed) {
        navigate("/Video");
      }
    }
  };

  return (
    <div className="App entry">
      <Navbar name="form" />
      <div className="form-container">
        <img src={cherryBlossomMotifLeft} className="cherry-blossom-left" alt="Cherry Blossom Motif" />
        <img src={cherryBlossomMotifRight} className="cherry-blossom-right" alt="Cherry Blossom Motif" />
        <div className="form-box">
          <h2>{t('resetPasswordTitle')}</h2>
            <div className="form-group">
              <label htmlFor="email">{t('email')}</label>
              <input
                type="email"
                id="email"
                placeholder={t('emailPlaceholder')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <p className="error-message"><i className="fas fa-exclamation-circle"></i> {errors.email}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="newPassword">{t('newPassword')}</label>
              <input
                type="password"
                id="newPassword"
                placeholder={t('newPasswordPlaceholder')}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              {errors.newPassword && <p className="error-message"><i className="fas fa-exclamation-circle"></i> {errors.newPassword}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">{t('confirmPassword')}</label>
              <input
                type="password"
                id="confirmPassword"
                placeholder={t('confirmPasswordPlaceholder')}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {errors.confirmPassword && <p className="error-message"><i className="fas fa-exclamation-circle"></i> {errors.confirmPassword}</p>}
            </div>
            <button onClick={handleSubmit}>{t('resetPassword')}</button>
            {errors.general && <p className="error-message"><i className="fas fa-exclamation-circle"></i> {errors.general}</p>}
        </div>
      </div>
      <CherryBlossomBot />
      <Footer />
    </div>
  );
};

export default PasswordReset;
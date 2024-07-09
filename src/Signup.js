import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from './Navbar';
import Footer from './Footer';
import CherryBlossomBot from './Chatbot';
import '@fortawesome/fontawesome-free/css/all.min.css'; // https://stackoverflow.com/questions/76387374/how-to-add-icons-in-react-js
import { useNavigate } from "react-router-dom"; // https://stackoverflow.com/questions/50644976/react-button-onclick-redirect-page
import { HashLink as Link } from 'react-router-hash-link'; // https://stackoverflow.com/questions/40280369/use-anchors-with-react-router
import './form.css';

const Signup = () => {
  const { t } = useTranslation();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    address: '',
    goal: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const nextStep = () => {
    const currentErrors = validateForm();
    if (Object.keys(currentErrors).length === 0) {
      setStep(step + 1);
    } else {
      setErrors(currentErrors);
    }
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let currentErrors = {};
    if (step === 1 && !formData.email) currentErrors.email = t('emailRequired');
    if (step === 2) {
      if (!formData.name) currentErrors.name = t('nameRequired');
      if (!formData.address) currentErrors.address = t('addressRequired');
      if (!formData.goal) currentErrors.goal = t('goalRequired');
    }
    if (step === 3) {
      if (!formData.password) currentErrors.password = t('passwordRequired');
      if (formData.password !== formData.confirmPassword) currentErrors.confirmPassword = t('passwordsDoNotMatch');
    }
    return currentErrors;
  };

  const handleSubmit = () => {
    const currentErrors = validateForm();
    if (Object.keys(currentErrors).length === 0) {
      navigate("/Video");
    } else {
      setErrors(currentErrors);
    }
  };

  return (
    <div className="App entry">
      <Navbar name="Form" />
      <div className="form-container">
        <div className="form-box">
          <h2>{t('createAccount')}</h2>
          <div className="step-indicator">
            <div className={`step ${step === 1 ? 'active' : ''}`}><span>1</span><p>{t('enterEmail')}</p></div>
            <div className={`step ${step === 2 ? 'active' : ''}`}><span>2</span><p>{t('provideInfo')}</p></div>
            <div className={`step ${step === 3 ? 'active' : ''}`}><span>3</span><p>{t('createPassword')}</p></div>
          </div>
          {step === 1 && (
            <div>
              <div className="form-group">
                <label htmlFor="email">{t('email')}</label>
                <input
                  type="email"
                  name="email"
                  placeholder={t('emailPlaceholder')}
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <p className="error-message">{errors.email}</p>}
              </div>
              <button onClick={nextStep}>{t('next')}</button>
              <hr />
              <div className="social-login">
                <a href="#"><button><i className="fab fa-facebook"></i> {t('signUpWithFacebook')}</button></a>
                <a href="#"><button><i className="fab fa-google"></i> {t('signUpWithGoogle')}</button></a>
              </div>
            </div>
          )}
          {step === 2 && (
            <div>
              <div className="form-group">
                <label htmlFor="name">{t('name')}</label>
                <input
                  type="text"
                  name="name"
                  placeholder={t('namePlaceholder')}
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <p className="error-message">{errors.name}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="address">{t('address')}</label>
                <input
                  type="text"
                  name="address"
                  placeholder={t('addressPlaceholder')}
                  value={formData.address}
                  onChange={handleChange}
                />
                {errors.address && <p className="error-message">{errors.address}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="goal">{t('goal')}</label>
                <input
                  type="text"
                  name="goal"
                  placeholder={t('goalPlaceholder')}
                  value={formData.goal}
                  onChange={handleChange}
                />
                {errors.goal && <p className="error-message">{errors.goal}</p>}
              </div>
              <div className="button-row">
                <button onClick={prevStep} className="prev-button">{t('previous')}</button>
                <button onClick={nextStep} className="next-button">{t('next')}</button>
              </div>
            </div>
          )}
          {step === 3 && (
            <div>
              <div className="form-group">
                <label htmlFor="password">{t('password')}</label>
                <input
                  type="password"
                  name="password"
                  placeholder={t('passwordPlaceholder')}
                  value={formData.password}
                  onChange={handleChange}
                />
                {errors.password && <p className="error-message">{errors.password}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword">{t('confirmPassword')}</label>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder={t('confirmPasswordPlaceholder')}
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                {errors.confirmPassword && <p className="error-message">{errors.confirmPassword}</p>}
              </div>
              <div className="button-row">
                <button onClick={prevStep} className="prev-button">{t('previous')}</button>
                <button onClick={handleSubmit} className="next-button">{t('submit')}</button>
              </div>
            </div>
          )}
          <a href="/Login"><span>{t('alreadyHaveAccount')}</span> {t('logInHere')}</a>
        </div>
      </div>
      <CherryBlossomBot />
      <Footer />
    </div>
  );
};

export default Signup;
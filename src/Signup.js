import { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '@fortawesome/fontawesome-free/css/all.min.css'; // https://stackoverflow.com/questions/76387374/how-to-add-icons-in-react-js
import { useNavigate } from "react-router-dom"; // https://stackoverflow.com/questions/50644976/react-button-onclick-redirect-page
import { HashLink as Link } from 'react-router-hash-link'; // https://stackoverflow.com/questions/40280369/use-anchors-with-react-router
import './form.css';

const Signup = () => {
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
    if (step === 1 && !formData.email) currentErrors.email = 'Email is required';
    if (step === 2) {
      if (!formData.name) currentErrors.name = 'Name is required';
      if (!formData.address) currentErrors.address = 'Address is required';
      if (!formData.goal) currentErrors.goal = 'Goal is required';
    }
    if (step === 3) {
      if (!formData.password) currentErrors.password = 'Password is required';
      if (formData.password !== formData.confirmPassword) currentErrors.confirmPassword = 'Passwords do not match';
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
          <h2>Create an account</h2>
          <div className="step-indicator">
            <div className={`step ${step === 1 ? 'active' : ''}`}><span>1</span><p>Enter your email address</p></div>
            <div className={`step ${step === 2 ? 'active' : ''}`}><span>2</span><p>Provide your basic info</p></div>
            <div className={`step ${step === 3 ? 'active' : ''}`}><span>3</span><p>Create your password</p></div>
          </div>
          {step === 1 && (
            <div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <p className="error-message">{errors.email}</p>}
              </div>
              <button onClick={nextStep}>Next</button>
              <hr />
              <div className="social-login">
                <a href="#"><button><i className="fab fa-facebook"></i> Sign up with Facebook</button></a>
                <a href="#"><button><i className="fab fa-google"></i> Sign up with Google</button></a>
              </div>
            </div>
          )}
          {step === 2 && (
            <div>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="What's your name?"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <p className="error-message">{errors.name}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  name="address"
                  placeholder="What's your address?"
                  value={formData.address}
                  onChange={handleChange}
                />
                {errors.address && <p className="error-message">{errors.address}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="goal">Goal</label>
                <input
                  type="text"
                  name="goal"
                  placeholder="What's your personal goal with our platform?"
                  value={formData.goal}
                  onChange={handleChange}
                />
                {errors.goal && <p className="error-message">{errors.goal}</p>}
              </div>
              <div className="button-row">
                <button onClick={prevStep} className="prev-button">Previous</button>
                <button onClick={nextStep} className="next-button">Next</button>
              </div>
            </div>
          )}
          {step === 3 && (
            <div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                />
                {errors.password && <p className="error-message">{errors.password}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                {errors.confirmPassword && <p className="error-message">{errors.confirmPassword}</p>}
              </div>
              <div className="button-row">
                <button onClick={prevStep} className="prev-button">Previous</button>
                <button onClick={handleSubmit} className="next-button">Submit</button>
              </div>
            </div>
          )}
          <a href="/Login"><span>Already have an account?</span> Log in</a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
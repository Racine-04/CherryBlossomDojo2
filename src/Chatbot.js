// https://www.geeksforgeeks.org/how-to-add-chatbot-in-reactjs-project/
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import botAvatar from './img/botAvatar.jpg'; 

const theme = {
  background: '#5A3D31',
  fontFamily: 'Arial, sans-serif',
  headerBgColor: '#FFC0CB',
  headerFontColor: '#FFFFFF',
  headerFontSize: '15px',
  botBubbleColor: '#FFC0CB',
  botFontColor: '#FFFFFF',
  userBubbleColor: '#FFFFFF',
  userFontColor: '#4A2C2A',
};

const steps = [
  {
    id: '1',
    message: 'Hello! What is your name?',
    trigger: 'name',
  },
  {
    id: 'name',
    user: true,
    trigger: '3',
  },
  {
    id: '3',
    message: 'Hi {previousValue}, what can I help you with today?',
    trigger: 'options',
  },
  {
    id: '4',
    message: 'Is there anything else I can assist you with today?',
    trigger: 'options',
  },
  {
    id: 'options',
    options: [
      { value: 'videos', label: 'Show me tutorial videos', trigger: 'showVideos' },
      { value: 'contact', label: 'Contact support', trigger: 'contactSupport' },
      { value: 'about', label: 'Tell me about Cherry Blossom Dojo', trigger: 'about' },
      { value: 'book', label: 'How do I book a live session?', trigger: 'bookSession' },
      { value: 'signup', label: 'How do I sign up?', trigger: 'signUp' },
      { value: 'login', label: 'How do I log in?', trigger: 'logIn' },
      { value: 'language', label: 'How can I change the language?', trigger: 'changeLanguage' },
      { value: 'about_us', label: 'Tell me more about Cherry Blossom Dojo', trigger: 'moreAboutUs' },
    ],
  },
  {
    id: 'showVideos',
    message: 'You can find our tutorial videos on the Tutorials Video page.',
    trigger: '4',
  },
  {
    id: 'contactSupport',
    message: 'You can contact support at CherryBlossomDojo@gmail.com.',
    trigger: '4',
  },
  {
    id: 'about',
    message: 'Cherry Blossom Dojo offers online martial arts training from the comfort of your home. Our experienced instructors provide high-quality tutorials for all levels. Join us to enhance your physical fitness, mental clarity, and overall well-being.',
    trigger: '4',
  },
  {
    id: 'bookSession',
    message: 'To book a live session, follow these steps: 1. Go to the "Plan a Live Session" page. 2. Select your Sensei and date. 3. Choose a time slot and enter your details. 4. Click "Book Now".',
    trigger: '4',
  },
  {
    id: 'signUp',
    message: 'To sign up: 1. Go to the Sign Up page. 2. Enter your email address. 3. Provide your basic info. 4. Create your password. 5. Click "Next" and follow the instructions.',
    trigger: '4',
  },
  {
    id: 'logIn',
    message: 'To log in: 1. Go to the Log In page. 2. Enter your email address or user name. 3. Enter your password. 4. Click "Log In".',
    trigger: '4',
  },
  {
    id: 'changeLanguage',
    message: 'To change the language: 1. Go to the footer of any page. 2. Find the language select dropdown. 3. Choose your preferred language from the options.',
    trigger: '4',
  },
  {
    id: 'moreAboutUs',
    message: 'At Cherry Blossom Dojo, we believe that martial arts is more than just physical activity; it is a way of life. Our programs are designed to not only improve your physical skills but also to foster mental discipline and spiritual growth. Whether you are looking to learn self-defense techniques, improve your fitness, or find a path to inner peace, our dojo offers something for everyone. We are committed to providing a supportive and inclusive environment where everyone can thrive.',
    trigger: '4',
  },
];

const config = {
  botAvatar: botAvatar,
  floating: true,
};

const CherryBlossomBot = () => {
  return (
    <div className="chatbot-container">
      <ThemeProvider theme={theme}>
        <ChatBot 
          steps={steps} 
          headerTitle="Cherry Blossom Bot" 
          {...config} 
        />
      </ThemeProvider>
    </div>
  );
};

export default CherryBlossomBot;
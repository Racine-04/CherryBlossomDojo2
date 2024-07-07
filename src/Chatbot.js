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
    message: 'Cherry Blossom Dojo offers online martial arts training from the comfort of your home.',
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
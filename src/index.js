import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MyRouter from './MyRouter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <MyRouter/>
);

// https://stackoverflow.com/questions/74826452/getting-duplicated-text-while-using-react-simple-chatbot-api
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
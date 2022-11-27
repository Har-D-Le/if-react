import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import Header from './components/Header/Header';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <App />
  </React.StrictMode>
);

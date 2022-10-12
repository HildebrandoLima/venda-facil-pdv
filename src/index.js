import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import Sale from './components/Sale/Sale';
import reportWebVitals from './reportWebVitals';
import Users from './components/User/Users';
import User from './components/User/User';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <User />
  </React.StrictMode>
);

reportWebVitals();

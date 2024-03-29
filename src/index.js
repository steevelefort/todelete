import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

if (navigator.serviceWorker) {
  navigator.serviceWorker.register('/todelete/sw.js')
  // navigator.serviceWorker.register('/todelete/sw.js')
    .then((registration) => {
      console.log("serviceWorker register")
    })
  .catch((err) => { 
    console.log("serviceWorker not registered:",err.message)
  })
}

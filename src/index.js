import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthContextProvider } from 'contexts/AuthContext';
import { ModalBackdropContextProvider } from 'contexts/ModalBackdropContext';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthContextProvider>
        <ModalBackdropContextProvider>
          <App />
        </ModalBackdropContextProvider>
      </AuthContextProvider>
    </Router>
    <ToastContainer
      transition={Slide}
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

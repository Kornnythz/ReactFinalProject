import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import './styles/global.css'
import GlobalStyled from './styles/GlobalStyle';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyled />
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
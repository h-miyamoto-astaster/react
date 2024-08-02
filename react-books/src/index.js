import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import "./destyle.css";
import "./styles.css";
import styled from "styled-components";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

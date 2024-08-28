import React from 'react';
import ReactDOM from 'react-dom/client';
import {App,AdminApp} from './App';

let rootdom = document.getElementById('root');
if(rootdom == null){}else{
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

let adminrootdom = document.getElementById('adminroot')
if(adminrootdom === null){}else{
  const adminroot = ReactDOM.createRoot(document.getElementById('adminroot'));

  adminroot.render(
    <React.StrictMode>
      <AdminApp />
    </React.StrictMode>
  );
}
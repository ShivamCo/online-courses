
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import  store  from './app/store.js'
import { Provider } from 'react-redux'
import { Auth0Provider } from '@auth0/auth0-react';


import { useNavigate } from 'react-router-dom';
import Dashboard from './pages/dashboard';



const OnRedirectCallback = (appState) => {
  const navigate = useNavigate()
  navigate(-1)
  console.log(navigate(-1))
};




const providerConfig = {
  domain: "dev-kcmksl0x6vn5uklv.us.auth0.com",
  clientId: "ufGEYA52KwhTnzTAOiBlfWRB6cIS6p6K",
  OnRedirectCallback,
  authorizationParams: {
    redirect_uri:window.location.origin,
    
  },
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  
  <Provider store={store}>
  <Auth0Provider
  {...providerConfig}
  >
    <App />
    </Auth0Provider>
</Provider>



  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


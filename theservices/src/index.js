import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react';
import { Auth0Provider } from "@auth0/auth0-react";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
  domain="dev-uodltcm0ls1s557f.us.auth0.com"
  clientId="sUhdOu2fu2ykPCdhgB3zlL2KRjRcyb24"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
>
  <BrowserRouter>
   <ChakraProvider>
    <App />
    </ChakraProvider>
    </BrowserRouter>
    </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

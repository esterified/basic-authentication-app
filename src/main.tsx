import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { Auth0Provider } from '@auth0/auth0-react';
import { CONFIGS } from './config.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Auth0Provider
      domain={CONFIGS.DOMAIN}
      clientId={CONFIGS.CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin + '/home',
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);

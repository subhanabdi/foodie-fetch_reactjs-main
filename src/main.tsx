import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { faComments } from '@fortawesome/free-regular-svg-icons';
import {
  faTwitter,
  faGithub,
  faHashnode,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

library.add(
  faTwitter,
  faGithub,
  faHashnode,
  faLinkedin,
  faQuoteLeft,
  faQuoteRight,
  faComments
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

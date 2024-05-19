import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ActivePageProvider from './context/ActivePage';
import 'semantic-ui-css/semantic.min.css'

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <ActivePageProvider>
      <App />
    </ActivePageProvider>

  </React.StrictMode>
);


reportWebVitals();

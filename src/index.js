import 'bulma/css/bulma.css';
import './styles/index.css'
import './styles/stylelib.css'

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { Provider } from './contexts/tasks';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(
  <Provider>
    <App />
  </Provider>
);

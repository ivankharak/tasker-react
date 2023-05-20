import 'bulma/css/bulma.css';
import './styles/index.css'
import './styles/stylelib.css'

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import TasksContext from './contexts/tasks';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TasksContext.Provider value={"Dummy Data"}>
    <App />
  </TasksContext.Provider>
);
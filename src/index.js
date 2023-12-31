import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import api from './api'
import './index.css';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './store';

React.$API = api;//全局 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>

    <React.StrictMode>
      <Provider store={store}>
        <Suspense fallback={<div></div>}>
          <App />
        </Suspense>

      </Provider>

    </React.StrictMode>

  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

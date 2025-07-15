import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter, BrowserRouter as Router, Route} from 'react-router-dom';
import CoinContextProvider from './context/CoinContext.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
         <CoinContextProvider>
             <App />
         </CoinContextProvider>
      </BrowserRouter>
  </React.StrictMode>,
)

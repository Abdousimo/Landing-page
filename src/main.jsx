import React, { useState } from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


import "./i18n.js";
import Navbar from './components/Navbar.jsx'





createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>
)

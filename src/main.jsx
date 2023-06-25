import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import Accordion from 'react-bootstrap'
import Hit from './Accordion.jsx'
import Down from './Dropdown.jsx'
import Cavan from './Offcanvas.jsx'
import Carousels from './Carousel.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Carousels />
    <App />
    <Hit />
    <Down />
    <Cavan />
  </React.StrictMode>,
)

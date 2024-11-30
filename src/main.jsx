import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { App } from "./App.jsx";
// import Profile from './components/profile.jsx';
// import { Prattices } from './pratics.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <Prattices /> */}
    {/* <Profile /> */}
  </React.StrictMode>,
)

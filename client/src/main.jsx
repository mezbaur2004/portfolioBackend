import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/header-about.css';
import './css/skills.css';
import './css/contact.css';
import './css/admin.css';
import './css/loginPage.css';
import './css/sidebar.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import Router from './routes'
import Login from './login'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router/>
  </StrictMode>
)

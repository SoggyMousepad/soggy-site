import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import headerComponent from './components/headerComponent.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

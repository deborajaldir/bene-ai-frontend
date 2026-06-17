import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { MetasProvider } from "./context/MetasContext"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MetasProvider>
      <App />
    </MetasProvider>
  </StrictMode >,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google'
const Client_ID ="439292025074-ulnuu8o93cc9lv5bu0peru4rc6trkuct.apps.googleusercontent.com"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={Client_ID}>
      <App />
    
    </GoogleOAuthProvider>
  </StrictMode>,
)

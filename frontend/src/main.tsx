import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const config = JSON.parse(import.meta.env.VITE_FIREBASE_CONFIG)
const app = initializeApp(config)
const analytics = getAnalytics(app)

console.log(analytics)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

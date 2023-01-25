import React from 'react'
import ReactDOM from 'react-dom/client'
import WelcomePage from '@/pages/WelcomePage'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <WelcomePage />
  </React.StrictMode>,
)

// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import TanstackProvider from './component/provider/TanstackProvider.jsx'
import { StateContext } from '../context/StateContext.jsx'


createRoot(document.getElementById('root')).render(
  <StateContext>
    <BrowserRouter>
      <TanstackProvider>
        <Toaster />
        <App />
      </TanstackProvider>
    </BrowserRouter>
  </StateContext>
)

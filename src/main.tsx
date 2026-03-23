import { createRoot } from 'react-dom/client'
import './index.module.scss'
import App from './App.js'
import { BrowserRouter } from 'react-router'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
    <Toaster position='top-center' reverseOrder={true} />
  </BrowserRouter>
)

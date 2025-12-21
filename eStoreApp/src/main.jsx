import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './app/Store.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  
    <Provider store = {store}>
    <RouterProvider />
    </Provider>
  
)

import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import Navbar from './components/Navbar'

createRoot(document.getElementById('root')).render(
  <App/> 
  // <Navbar />
)
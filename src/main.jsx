import ReactDOM from 'react-dom/client'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    <App />
  </HashRouter>,
)

// browser route + hash route: https://github.com/nhattruongniit/react-browser-hash-router

// 1. add event scroll window -> window.innerheight >= element.offsetHeight -> history.replace(xxxx, xxxx#elementId)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import './index.css'
import App from './App.jsx'
import Projects from './component/Projects.jsx'
import { ScrollToTop } from './component/ScrollToTop.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/projects" element={<Projects />}/>
      </Routes>
      {/* <App /> */}
    </BrowserRouter>
  </StrictMode>,
)

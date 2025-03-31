import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import './index.scss'
import { NewsProvider } from './context/NewsProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <NewsProvider>
        <App />
      </NewsProvider>
     </BrowserRouter>
  </StrictMode>,
)

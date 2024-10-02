import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppConnection from './aConnection/aAppConnection'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@/aConnection/aShadcnConnection/components/theme-provider'
import { HelmetProvider } from 'react-helmet-async'
import './aConnection/aShadcnConnection/index.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <BrowserRouter>
          <AppConnection />
        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  </StrictMode>,
)

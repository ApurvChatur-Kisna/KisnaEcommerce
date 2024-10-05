import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppConnection from './aConnection/aAppConnection'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@/aConnection/aShadcnConnection/components/theme-provider'
import { HelmetProvider } from 'react-helmet-async'
import './aConnection/aShadcnConnection/index.css'
// import { Provider as ReduxProvider } from 'react-redux'
// import store from './bLove/bRedux/aStore'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <ReduxProvider store={store} > */}
      <HelmetProvider>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <BrowserRouter>
            <AppConnection />
          </BrowserRouter>
        </ThemeProvider>
      </HelmetProvider>
    {/* </ReduxProvider> */}
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallback from './ui/ErrorFallback'
import { NextUIProvider } from '@nextui-org/react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NextUIProvider>
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => window.location.replace('/')}
      >
        <App />
      </ErrorBoundary>
    </NextUIProvider>
  </StrictMode>
)

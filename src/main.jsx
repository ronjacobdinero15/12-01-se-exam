import { NextUIProvider } from '@nextui-org/react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ErrorBoundary } from 'react-error-boundary'
import App from './App.jsx'
import './index.css'
import ErrorFallback from './ui/ErrorFallback'

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

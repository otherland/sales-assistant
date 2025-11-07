import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Wait for DOM to be ready and external scripts to load
function initReactApp() {
  const rootElement = document.getElementById('react-root')
  if (!rootElement) {
    console.error('React root element not found!')
    setTimeout(initReactApp, 100)
    return
  }

  // Check if sales_script.js has loaded (it defines salesData)
  // But don't block rendering - let React handle the loading state
  if (typeof window.salesData === 'undefined') {
    console.warn('salesData not yet loaded, React will wait for it')
    // Still render React - it will handle the loading state
  }

  try {
    ReactDOM.createRoot(rootElement).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    )
    console.log('React app mounted successfully')
  } catch (error) {
    console.error('Error mounting React app:', error)
  }
}

// Start initialization when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initReactApp)
} else {
  initReactApp()
}


import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Wait for external scripts to load before initializing React
function waitForScripts(callback, maxWait = 15000) {
  const startTime = Date.now()
  
  function checkScripts() {
    const elapsed = Date.now() - startTime
    
    // Check if scripts have loaded
    if (typeof window.salesData !== 'undefined' && 
        typeof window.reference_libraries !== 'undefined') {
      console.log('External scripts loaded successfully')
      callback()
      return
    }
    
    // If we've waited too long, proceed anyway (React will handle loading state)
    if (elapsed >= maxWait) {
      console.warn('Scripts not loaded after', maxWait, 'ms, proceeding anyway')
      console.log('Debug:', {
        salesData: typeof window.salesData,
        referenceLibraries: typeof window.reference_libraries,
        windowKeys: Object.keys(window).filter(k => 
          k.includes('sales') || k.includes('reference')
        ).slice(0, 10)
      })
      callback()
      return
    }
    
    // Check again after a short delay
    setTimeout(checkScripts, 100)
  }
  
  checkScripts()
}

// Wait for DOM to be ready and external scripts to load
function initReactApp() {
  const rootElement = document.getElementById('react-root')
  if (!rootElement) {
    console.error('React root element not found!')
    setTimeout(initReactApp, 100)
    return
  }

  // Wait for scripts to load before rendering React
  waitForScripts(() => {
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
  })
}

// Start initialization when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initReactApp)
} else {
  initReactApp()
}


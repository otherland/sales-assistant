import React, { createContext, useContext, useEffect, useState } from 'react'

const SalesDataContext = createContext(null)

export function SalesDataProvider({ children }) {
  const [salesData, setSalesData] = useState(null)
  const [referenceLibraries, setReferenceLibraries] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Wait for salesData and reference_libraries to be available from external scripts
    let attempts = 0
    const maxAttempts = 200 // 20 seconds max wait (increased for mobile)
    const startTime = Date.now()
    
    function checkData() {
      attempts++
      const elapsed = Date.now() - startTime
      
      // Check if data is available
      if (typeof window.salesData !== 'undefined' && 
          typeof window.reference_libraries !== 'undefined') {
        // Verify the data is actually populated (not just undefined)
        if (window.salesData && window.reference_libraries) {
          // Verify critical nested structures exist
          const hasSequentialFlow = !!window.salesData.sequential_flow?.call_one
          const hasObjectionHandlers = !!window.salesData.objection_handlers?.handlers || 
                                       !!window.salesData.objection_handlers?.objections
          
          // Only mark as loaded if we have at least one critical structure
          if (hasSequentialFlow || hasObjectionHandlers) {
            setSalesData(window.salesData)
            setReferenceLibraries(window.reference_libraries)
            setLoading(false)
            console.log('Sales data loaded successfully', { 
              hasSalesData: !!window.salesData, 
              hasRefLibs: !!window.reference_libraries,
              hasSequentialFlow,
              hasObjectionHandlers,
              sequentialFlowLength: window.salesData.sequential_flow?.call_one?.length || 0,
              handlersCount: window.salesData.objection_handlers?.handlers ? Object.keys(window.salesData.objection_handlers.handlers).length : 0,
              objectionsCount: window.salesData.objection_handlers?.objections?.length || 0,
              salesDataKeys: window.salesData ? Object.keys(window.salesData).slice(0, 5) : [],
              elapsed: elapsed + 'ms'
            })
            return
          } else {
            // Data exists but structures aren't ready yet - keep waiting
            console.log('Sales data exists but structures not ready yet', {
              hasSalesData: !!window.salesData,
              hasSequentialFlow,
              hasObjectionHandlers,
              attempts,
              elapsed: elapsed + 'ms'
            })
          }
        }
      }
      
      // Continue checking if we haven't exceeded max attempts or time
      if (attempts < maxAttempts && elapsed < 20000) {
        setTimeout(checkData, 100)
      } else {
        console.error('Failed to load salesData or reference_libraries after', attempts, 'attempts', elapsed + 'ms')
        console.log('Debug info:', {
          windowSalesData: typeof window.salesData,
          windowRefLibs: typeof window.reference_libraries,
          salesDataValue: window.salesData,
          refLibsValue: window.reference_libraries,
          windowKeys: Object.keys(window).filter(k => 
            k.includes('sales') || k.includes('reference') || k.includes('Sales') || k.includes('Reference')
          ).slice(0, 20),
          allWindowKeys: Object.keys(window).slice(0, 30)
        })
        setLoading(false) // Stop loading even if data isn't available
      }
    }
    
    // Start checking immediately, but also listen for script load events
    checkData()
    
    // Also listen for window load event as a fallback
    const handleLoad = () => {
      if (typeof window.salesData !== 'undefined' && 
          typeof window.reference_libraries !== 'undefined' &&
          window.salesData && window.reference_libraries) {
        // Verify critical nested structures exist
        const hasSequentialFlow = !!window.salesData.sequential_flow?.call_one
        const hasObjectionHandlers = !!window.salesData.objection_handlers?.handlers || 
                                     !!window.salesData.objection_handlers?.objections
        
        if (hasSequentialFlow || hasObjectionHandlers) {
          setSalesData(window.salesData)
          setReferenceLibraries(window.reference_libraries)
          setLoading(false)
          console.log('Sales data loaded via window.load event', {
            hasSequentialFlow,
            hasObjectionHandlers
          })
        }
      }
    }
    
    if (document.readyState === 'complete') {
      // Scripts should be loaded by now
      setTimeout(checkData, 100)
    } else {
      window.addEventListener('load', handleLoad)
    }
    
    return () => {
      window.removeEventListener('load', handleLoad)
    }
  }, [])

  const value = {
    salesData,
    referenceLibraries,
    loading
  }

  return (
    <SalesDataContext.Provider value={value}>
      {children}
    </SalesDataContext.Provider>
  )
}

export function useSalesData() {
  const context = useContext(SalesDataContext)
  if (!context) {
    throw new Error('useSalesData must be used within SalesDataProvider')
  }
  return context
}


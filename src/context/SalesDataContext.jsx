import React, { createContext, useContext, useEffect, useState } from 'react'

const SalesDataContext = createContext(null)

export function SalesDataProvider({ children }) {
  const [salesData, setSalesData] = useState(null)
  const [referenceLibraries, setReferenceLibraries] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Wait for salesData and reference_libraries to be available from external scripts
    let attempts = 0
    const maxAttempts = 100 // 10 seconds max wait
    
    function checkData() {
      attempts++
      if (typeof window.salesData !== 'undefined' && 
          typeof window.reference_libraries !== 'undefined') {
        setSalesData(window.salesData)
        setReferenceLibraries(window.reference_libraries)
        // salesData is already on window from external scripts, so navigation functions can access it
        setLoading(false)
        console.log('Sales data loaded successfully', { 
          hasSalesData: !!window.salesData, 
          hasRefLibs: !!window.reference_libraries,
          salesDataKeys: window.salesData ? Object.keys(window.salesData).slice(0, 5) : []
        })
      } else if (attempts < maxAttempts) {
        setTimeout(checkData, 100)
      } else {
        console.error('Failed to load salesData or reference_libraries after', maxAttempts, 'attempts')
        console.log('Debug info:', {
          windowSalesData: typeof window.salesData,
          windowRefLibs: typeof window.reference_libraries,
          windowKeys: Object.keys(window).filter(k => k.includes('sales') || k.includes('reference')).slice(0, 10)
        })
        setLoading(false) // Stop loading even if data isn't available
      }
    }
    checkData()
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


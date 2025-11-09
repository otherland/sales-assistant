import React, { createContext, useContext, useState, useEffect, useCallback } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useSalesData } from './SalesDataContext'

const ContentContext = createContext()

export function ContentProvider({ children }) {
  const { salesData } = useSalesData()
  const navigate = useNavigate()
  const location = useLocation()
  const [contentType, setContentType] = useState(null) // 'content', 'handler', 'reference', 'objection', null
  const [contentId, setContentId] = useState(null)
  const [currentContent, setCurrentContent] = useState(null)

  // Update URL based on content type and ID
  const updateURL = useCallback((type, id) => {
    if (type && id) {
      const newPath = `/${type}/${id}`
      if (location.pathname !== newPath) {
        navigate(newPath, { replace: false })
      }
    } else {
      // Welcome screen
      if (location.pathname !== '/') {
        navigate('/', { replace: false })
      }
    }
  }, [navigate, location.pathname])

  // Load sequential flow content
  const loadContent = useCallback((itemId, updateURLParam = true) => {
    if (!salesData) {
      console.warn('loadContent called but salesData is not available yet')
      return
    }

    if (!salesData?.sequential_flow?.call_one) {
      console.warn('loadContent called but sequential_flow.call_one is not available', {
        hasSalesData: !!salesData,
        hasSequentialFlow: !!salesData?.sequential_flow,
        hasCallOne: !!salesData?.sequential_flow?.call_one,
        itemId
      })
      return
    }

    const item = salesData.sequential_flow.call_one.find(i => i.id === itemId)
    if (item) {
      // Store last sequential content for breadcrumb trail
      localStorage.setItem('lastSequentialContent', itemId)

      // Track recently viewed
      if (typeof window !== 'undefined' && window.addToRecentlyViewed) {
        window.addToRecentlyViewed('content', itemId, item.title)
      }

      if (updateURLParam) {
        updateURL('content', itemId)
      }

      setContentType('content')
      setContentId(itemId)
      setCurrentContent(item)
      return
    }

    // If not found in sequential flow, check objections array by ID
    if (salesData?.objection_handlers?.objections) {
      const objection = salesData.objection_handlers.objections.find(
        obj => obj.id === itemId
      )
      if (objection) {
        // Load as handler since objections use HandlerContent via ObjectionContent
        if (typeof window !== 'undefined' && window.addToRecentlyViewed) {
          window.addToRecentlyViewed('handler', itemId, objection.title || itemId)
        }

        if (updateURLParam) {
          updateURL('handler', itemId)
        }

        setContentType('handler')
        setContentId(itemId)
        setCurrentContent(objection)
        return
      }
    }

    console.warn(`Content item not found: ${itemId}`, {
      hasSequentialFlow: !!salesData?.sequential_flow?.call_one,
      sequentialFlowLength: salesData?.sequential_flow?.call_one?.length,
      hasObjections: !!salesData?.objection_handlers?.objections,
      objectionsLength: salesData?.objection_handlers?.objections?.length
    })
  }, [salesData, updateURL])

  // Load objection handler
  const loadHandler = useCallback((handlerId, updateURLParam = true) => {
    if (!salesData) {
      console.warn('loadHandler called but salesData is not available yet', { handlerId })
      return
    }

    // First check handlers object
    if (salesData?.objection_handlers?.handlers) {
      const handlerData = salesData.objection_handlers.handlers[handlerId]
      if (handlerData) {
        // Track recently viewed
        if (typeof window !== 'undefined' && window.addToRecentlyViewed) {
          window.addToRecentlyViewed('handler', handlerId, handlerData.title || handlerId)
        }

        if (updateURLParam) {
          updateURL('handler', handlerId)
        }

        setContentType('handler')
        setContentId(handlerId)
        setCurrentContent(handlerData)
        return
      }
    }

    // If not found in handlers, check objections array by ID
    if (salesData?.objection_handlers?.objections) {
      const objection = salesData.objection_handlers.objections.find(
        obj => obj.id === handlerId
      )
      if (objection) {
        // Track recently viewed
        if (typeof window !== 'undefined' && window.addToRecentlyViewed) {
          window.addToRecentlyViewed('handler', handlerId, objection.title || handlerId)
        }

        if (updateURLParam) {
          updateURL('handler', handlerId)
        }

        setContentType('handler')
        setContentId(handlerId)
        setCurrentContent(objection)
        return
      }
    }

    console.warn(`Handler not found: ${handlerId}`, {
      hasHandlers: !!salesData?.objection_handlers?.handlers,
      handlersCount: salesData?.objection_handlers?.handlers ? Object.keys(salesData.objection_handlers.handlers).length : 0,
      hasObjections: !!salesData?.objection_handlers?.objections,
      objectionsLength: salesData?.objection_handlers?.objections?.length
    })
  }, [salesData, updateURL])

  // Load reference library content
  const loadReferenceContent = useCallback((refId, updateURLParam = true) => {
    const refLibs = window.reference_libraries
    if (!refLibs?.reference_libraries) {
      console.warn('Reference libraries not available')
      return
    }

    const refData = refLibs.reference_libraries[refId]
    if (!refData) {
      console.warn(`Reference not found: ${refId}`)
      return
    }

    // Track recently viewed
    if (typeof window !== 'undefined' && window.addToRecentlyViewed) {
      window.addToRecentlyViewed('reference', refId, refData.title || refId)
    }

    if (updateURLParam) {
      updateURL('reference', refId)
    }

    setContentType('reference')
    setContentId(refId)
    setCurrentContent(refData)
  }, [updateURL])

  // Load objection by number
  const loadObjection = useCallback((objectionNum, updateURLParam = true) => {
    if (!salesData?.objection_handlers?.objections) return

    const objection = salesData.objection_handlers.objections.find(
      obj => obj.number === objectionNum
    )
    if (!objection) {
      console.warn(`Objection ${objectionNum} not found`)
      return
    }

    // Track recently viewed
    if (typeof window !== 'undefined' && window.addToRecentlyViewed) {
      window.addToRecentlyViewed('objection', objectionNum.toString(), `Objection #${objectionNum}: ${objection.objection || 'Untitled'}`)
    }

    if (updateURLParam) {
      updateURL('objection', objectionNum.toString())
    }

    setContentType('objection')
    setContentId(objectionNum.toString())
    setCurrentContent(objection)
  }, [salesData, updateURL])

  // Show welcome screen
  const showWelcomeScreen = useCallback(() => {
    setContentType(null)
    setContentId(null)
    setCurrentContent(null)
    updateURL(null, null)
  }, [updateURL])

  // Handle route from URL (must be defined after all load functions)
  const handleRoute = useCallback(() => {
    const path = location.pathname
    
    if (path === '/' || path === '') {
      setContentType(null)
      setContentId(null)
      setCurrentContent(null)
      return
    }
    
    const parts = path.split('/').filter(p => p)
    
    if (parts.length >= 2) {
      const type = parts[0]
      const id = parts[1]
      
      if (type === 'content') {
        loadContent(id, false) // Skip URL update to avoid double push
      } else if (type === 'reference') {
        loadReferenceContent(id, false)
      } else if (type === 'objection') {
        const objectionNum = parseInt(id, 10)
        if (!isNaN(objectionNum)) {
          loadObjection(objectionNum, false)
        }
      } else if (type === 'handler') {
        loadHandler(id, false)
      }
    }
  }, [location.pathname, loadContent, loadReferenceContent, loadObjection, loadHandler])

  // Handle route changes from React Router (replaces popstate listener)
  useEffect(() => {
    // Ensure salesData is fully loaded with required structures before routing
    if (salesData && (
      salesData.sequential_flow?.call_one || 
      salesData.objection_handlers?.handlers ||
      salesData.objection_handlers?.objections
    )) {
      handleRoute()
    }
  }, [location.pathname, salesData, handleRoute])

  // Handle hash changes (for backward compatibility)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '')
      if (hash && salesData) {
        loadContent(hash, false)
      }
    }
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [salesData, loadContent])

  // No longer exposing on window - all code uses React hooks directly

  const value = {
    contentType,
    contentId,
    currentContent,
    loadContent,
    loadHandler,
    loadReferenceContent,
    loadObjection,
    showWelcomeScreen,
    updateURL,
    handleRoute
  }

  return <ContentContext.Provider value={value}>{children}</ContentContext.Provider>
}

export function useContent() {
  const context = useContext(ContentContext)
  if (!context) {
    throw new Error('useContent must be used within ContentProvider')
  }
  return context
}


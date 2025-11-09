import React, { useEffect, useRef, useMemo, useState } from 'react'
import { formatScript } from '../../utils/textFormatting'
import { useContent } from '../../context/ContentContext'

function ScriptBlock({ script, style = {} }) {
  const { loadContent, loadReferenceContent, loadObjection } = useContent()
  const containerRef = useRef(null)
  const [carpetUpdateTrigger, setCarpetUpdateTrigger] = useState(0)
  
  // Listen for CARPET updates
  useEffect(() => {
    const handleCarpetUpdate = () => {
      setCarpetUpdateTrigger(prev => prev + 1)
    }
    
    // Listen for custom event when CARPET values change
    window.addEventListener('carpetMetricsUpdated', handleCarpetUpdate)
    
    // Also poll periodically to catch localStorage changes
    const interval = setInterval(() => {
      if (window.getCARPETPlaceholder) {
        setCarpetUpdateTrigger(prev => prev + 1)
      }
    }, 1000)
    
    return () => {
      window.removeEventListener('carpetMetricsUpdated', handleCarpetUpdate)
      clearInterval(interval)
    }
  }, [])
  
  // Replace placeholders with CARPET values
  const processedScript = useMemo(() => {
    if (!script) return ''
    
    // Get placeholder replacement function from window (set by CARPETCalculator)
    if (typeof window !== 'undefined' && window.getCARPETPlaceholder) {
      let processed = script
      
      // Replace all placeholders (order matters - do [Y]% before [Y])
      const placeholders = ['[Y]%', '[X]', '[Y]', '[Z]', '[$]', '[ACV]', '[REVENUE]', '[CYCLE]', '[REP_CAPACITY]', '[PIPELINE]', '[ENVIRONMENT]', '[TIMELINE]']
      placeholders.forEach(placeholder => {
        const replacement = window.getCARPETPlaceholder(placeholder)
        // Use global replace to replace all instances
        const regex = new RegExp(placeholder.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')
        processed = processed.replace(regex, replacement)
      })
      
      return processed
    }
    
    return script
  }, [script, carpetUpdateTrigger])
  
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleClick = (e) => {
      const link = e.target.closest('.content-link')
      if (!link) return

      e.preventDefault()
      const action = link.getAttribute('data-action')
      const id = link.getAttribute('data-id')

      if (!action || !id) return

      switch (action) {
        case 'loadContent':
          loadContent(id)
          break
        case 'loadReferenceContent':
          loadReferenceContent(id)
          break
        case 'loadObjection':
          const objectionNum = parseInt(id, 10)
          if (!isNaN(objectionNum)) {
            loadObjection(objectionNum)
          }
          break
        default:
          console.warn(`Unknown action: ${action}`)
      }
    }

    container.addEventListener('click', handleClick)
    return () => container.removeEventListener('click', handleClick)
  }, [loadContent, loadReferenceContent, loadObjection])

  if (!script) return null
  
  return (
    <div 
      ref={containerRef}
      className="script-block" 
      style={style}
      dangerouslySetInnerHTML={{ __html: formatScript(processedScript) }}
    />
  )
}

export default ScriptBlock


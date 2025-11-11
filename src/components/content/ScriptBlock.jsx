import React, { useEffect, useRef, useMemo, useState } from 'react'
import { formatScript } from '../../utils/textFormatting'
import { useContent } from '../../context/ContentContext'

function ScriptBlock({ script, style = {} }) {
  const { loadContent, loadReferenceContent, loadObjection, loadHandler } = useContent()
  const containerRef = useRef(null)
  const [carpetUpdateTrigger, setCarpetUpdateTrigger] = useState(0)
  
  // Listen for CARPET updates
  useEffect(() => {
    const handleCarpetUpdate = () => {
      setCarpetUpdateTrigger(prev => prev + 1)
    }
    
    // Listen for custom event when CARPET values change
    window.addEventListener('carpetMetricsUpdated', handleCarpetUpdate)
    
    // Also poll periodically to catch localStorage changes (even when calculator isn't mounted)
    const interval = setInterval(() => {
      setCarpetUpdateTrigger(prev => prev + 1)
    }, 1000)
    
    return () => {
      window.removeEventListener('carpetMetricsUpdated', handleCarpetUpdate)
      clearInterval(interval)
    }
  }, [])
  
  // Fallback function to get placeholder values from localStorage when CARPETCalculator isn't mounted
  const getPlaceholderFromStorage = (placeholder) => {
    try {
      const CARPET_STORAGE_KEY = 'carpet_metrics'
      const ROI_STORAGE_KEY = 'roi_calculation'
      
      const metrics = JSON.parse(localStorage.getItem(CARPET_STORAGE_KEY) || '{}')
      const roiInputs = JSON.parse(localStorage.getItem(ROI_STORAGE_KEY) || '{}')
      
      // Calculate ROI if we have the inputs
      const qualified = parseFloat(roiInputs.qualifiedOpportunities) || 0
      const closeRate = parseFloat(roiInputs.closeRate) || 0
      const acv = parseFloat(metrics.acv) || 0
      
      let roi = null
      if (qualified && closeRate && acv) {
        const newClients = Math.round((qualified * closeRate) / 100)
        const revenue = newClients * acv
        roi = { newClients, revenue, acv }
      }
      
      const placeholderMap = {
        '[X]': roiInputs.qualifiedOpportunities || '[X]',
        '[Y]': roiInputs.closeRate ? `${roiInputs.closeRate}` : '[Y]',
        '[Y]%': roiInputs.closeRate ? `${roiInputs.closeRate}%` : '[Y]%',
        '[Z]': roi ? roi.newClients : '[Z]',
        '[$]': metrics.acv ? `$${parseInt(metrics.acv).toLocaleString()}` : '[$]',
        '[ACV]': metrics.acv ? `$${parseInt(metrics.acv).toLocaleString()}` : '[ACV]',
        '[REVENUE]': roi ? `$${parseInt(roi.revenue).toLocaleString()}` : '[REVENUE]',
        '[CYCLE]': metrics.cycle_days ? `${metrics.cycle_days} days` : '[CYCLE]',
        '[REP_CAPACITY]': metrics.rep_capacity ? `${metrics.rep_capacity} meetings/month` : '[REP_CAPACITY]',
        '[PIPELINE]': metrics.pipeline ? `${metrics.pipeline} opportunities/month` : '[PIPELINE]',
        '[ENVIRONMENT]': metrics.environment || '[ENVIRONMENT]',
        '[TIMELINE]': metrics.timeline || '[TIMELINE]'
      }
      
      return placeholderMap[placeholder] || placeholder
    } catch (e) {
      return placeholder
    }
  }

  // Replace placeholders with CARPET values
  const processedScript = useMemo(() => {
    if (!script) return ''
    
    let processed = script
    
    // Get placeholder replacement function from window (set by CARPETCalculator) or use fallback
    const getPlaceholder = typeof window !== 'undefined' && window.getCARPETPlaceholder 
      ? window.getCARPETPlaceholder 
      : getPlaceholderFromStorage
    
    // Replace all placeholders (order matters - do [Y]% before [Y])
    const placeholders = ['[Y]%', '[X]', '[Y]', '[Z]', '[$]', '[ACV]', '[REVENUE]', '[CYCLE]', '[REP_CAPACITY]', '[PIPELINE]', '[ENVIRONMENT]', '[TIMELINE]']
    placeholders.forEach(placeholder => {
      const replacement = getPlaceholder(placeholder)
      // Use global replace to replace all instances
      const regex = new RegExp(placeholder.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')
      processed = processed.replace(regex, replacement)
    })
    
    return processed
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
        case 'loadHandler':
          loadHandler(id)
          break
        default:
          console.warn(`Unknown action: ${action}`)
      }
    }

    container.addEventListener('click', handleClick)
    return () => container.removeEventListener('click', handleClick)
  }, [loadContent, loadReferenceContent, loadObjection, loadHandler])

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


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
      
      // Auto-calculate [X] = 1.5 × REP_CAPACITY
      const repCapacity = metrics.rep_capacity ? parseFloat(metrics.rep_capacity) : 0
      const autoX = repCapacity > 0 && !isNaN(repCapacity) ? Math.round(repCapacity * 1.5) : null
      
      // Use ROI input for [X] if provided, otherwise use auto-calculated value
      const manualX = roiInputs.qualifiedOpportunities !== '' && roiInputs.qualifiedOpportunities != null 
        ? parseFloat(roiInputs.qualifiedOpportunities) 
        : null
      const x = manualX != null && !isNaN(manualX) ? manualX : autoX
      
      // [Y]% - Use ROI input if available, otherwise calculate from R/P ratio
      let closeRate = roiInputs.closeRate !== '' && roiInputs.closeRate != null 
        ? parseFloat(roiInputs.closeRate) 
        : null
      
      // Auto-calculate close rate from REP_CAPACITY / PIPELINE if no manual input
      if (closeRate == null || isNaN(closeRate)) {
        const pipeline = metrics.pipeline ? parseFloat(metrics.pipeline) : 0
        if (repCapacity > 0 && pipeline > 0) {
          // Calculate close rate as percentage: (pipeline / rep_capacity) * 100
          // This gives us the conversion rate from meetings to opportunities
          closeRate = Math.round((pipeline / repCapacity) * 100)
        }
      }
      
      // Auto-calculate [Z] = [X] × [Y]% / 100 if we have both
      const z = (x != null && closeRate != null && !isNaN(closeRate)) 
        ? Math.round((x * closeRate) / 100) 
        : null
      
      // Auto-calculate [REVENUE] = [Z] × ACV if we have both
      const acv = parseFloat(metrics.acv) || 0
      const revenue = (z != null && acv > 0) 
        ? z * acv 
        : null
      
      const placeholderMap = {
        '[X]': x != null ? x.toString() : '[X]',
        '[Y]': closeRate != null && !isNaN(closeRate) ? closeRate.toString() : '[Y]',
        '[Y]%': closeRate != null && !isNaN(closeRate) ? `${closeRate}%` : '[Y]%',
        '[Z]': z != null ? z.toString() : '[Z]',
        '[$]': acv > 0 ? `$${parseInt(acv).toLocaleString()}` : '[$]',
        '[ACV]': acv > 0 ? `$${parseInt(acv).toLocaleString()}` : '[ACV]',
        '[REVENUE]': revenue != null ? `$${parseInt(revenue).toLocaleString()}` : '[REVENUE]',
        '[CYCLE]': metrics.cycle_days ? `${metrics.cycle_days} days` : '[CYCLE]',
        '[REP_CAPACITY]': metrics.rep_capacity ? metrics.rep_capacity.toString() : '[REP_CAPACITY]',
        '[PIPELINE]': metrics.pipeline ? metrics.pipeline.toString() : '[PIPELINE]',
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
    // Both functions now have the same auto-calculation logic
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


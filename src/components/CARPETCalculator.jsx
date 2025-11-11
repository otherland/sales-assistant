import React, { useState, useEffect } from 'react'
import { getSequenceSelections, getSelectionsDisplay } from '../utils/sequenceSelections'

const CARPET_STORAGE_KEY = 'carpet_metrics'
const ROI_STORAGE_KEY = 'roi_calculation'
const CARPET_NOTES_KEY = 'carpet_notes'

// CARPET Variables
const CARPET_VARIABLES = {
  C: { label: 'C (Cycle)', description: 'Sales cycle length (days)', unit: 'days', key: 'cycle_days' },
  A: { label: 'A (ACV)', description: 'Average Contract Value', unit: '$', key: 'acv' },
  R: { label: 'R (Rep)', description: 'Top rep meetings per month', unit: 'meetings', key: 'rep_capacity' },
  P: { label: 'P (Pipeline)', description: 'Qualified opportunities per month', unit: 'opportunities', key: 'pipeline' },
  E: { label: 'E (Environment)', description: 'Environment/compliance notes', unit: '', key: 'environment', isText: true },
  T: { label: 'T (Timeline)', description: 'Decision timeline/process', unit: '', key: 'timeline', isText: true }
}

function CARPETCalculator() {
  const [metrics, setMetrics] = useState(() => {
    try {
      const stored = localStorage.getItem(CARPET_STORAGE_KEY)
      return stored ? JSON.parse(stored) : {}
    } catch (e) {
      return {}
    }
  })

  const [roiInputs, setRoiInputs] = useState(() => {
    try {
      const stored = localStorage.getItem(ROI_STORAGE_KEY)
      return stored ? JSON.parse(stored) : {
        qualifiedOpportunities: '',
        closeRate: '',
        engagementDays: 45
      }
    } catch (e) {
      return {
        qualifiedOpportunities: '',
        closeRate: '',
        engagementDays: 45
      }
    }
  })

  const [notes, setNotes] = useState(() => {
    try {
      const stored = localStorage.getItem(CARPET_NOTES_KEY)
      return stored || ''
    } catch (e) {
      return ''
    }
  })

  const [notesCollapsed, setNotesCollapsed] = useState(false)
  const [sequenceSelections, setSequenceSelections] = useState(() => getSequenceSelections())

  // Load metrics from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(CARPET_STORAGE_KEY)
      if (stored) {
        setMetrics(JSON.parse(stored))
      }
    } catch (e) {
      console.error('Error loading CARPET metrics:', e)
    }
  }, [])

  // Save metrics to localStorage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem(CARPET_STORAGE_KEY, JSON.stringify(metrics))
    } catch (e) {
      console.error('Error saving CARPET metrics:', e)
    }
  }, [metrics])

  // Save ROI inputs to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(ROI_STORAGE_KEY, JSON.stringify(roiInputs))
    } catch (e) {
      console.error('Error saving ROI inputs:', e)
    }
  }, [roiInputs])

  // Save notes to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(CARPET_NOTES_KEY, notes)
    } catch (e) {
      console.error('Error saving notes:', e)
    }
  }, [notes])

  // Listen for sequence selections updates
  useEffect(() => {
    const handleSelectionsUpdate = () => {
      setSequenceSelections(getSequenceSelections())
    }
    
    window.addEventListener('sequenceSelectionsUpdated', handleSelectionsUpdate)
    return () => {
      window.removeEventListener('sequenceSelectionsUpdated', handleSelectionsUpdate)
    }
  }, [])

  const updateMetric = (key, value) => {
    setMetrics(prev => ({
      ...prev,
      [key]: value
    }))
  }

  const updateRoiInput = (field, value) => {
    setRoiInputs(prev => ({
      ...prev,
      [field]: value
    }))
  }

  // Calculate ROI
  const calculateROI = () => {
    const qualified = parseFloat(roiInputs.qualifiedOpportunities) || 0
    const closeRate = parseFloat(roiInputs.closeRate) || 0
    const acv = parseFloat(metrics.acv) || 0

    if (!qualified || !closeRate || !acv) {
      return null
    }

    const newClients = Math.round((qualified * closeRate) / 100)
    const revenue = newClients * acv

    return {
      qualifiedOpportunities: qualified,
      closeRate: closeRate,
      newClients: newClients,
      revenue: revenue,
      acv: acv
    }
  }

  const roi = calculateROI()

  // Auto-fill function that can be called from scripts
  const getPlaceholderValue = (placeholder) => {
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
  }

  // Expose to window for script access and trigger updates
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.getCARPETPlaceholder = getPlaceholderValue
      window.getCARPETMetrics = () => metrics
      window.getROICalculation = () => roi
      window.getSequenceSelections = getSequenceSelections
      
      // Dispatch event to notify ScriptBlock components of updates
      window.dispatchEvent(new Event('carpetMetricsUpdated'))
    }
  }, [metrics, roi, roiInputs])

  // Check completeness of CARPET variables
  const getCompleteness = () => {
    const required = ['cycle_days', 'acv', 'rep_capacity', 'pipeline']
    const completed = required.filter(key => metrics[key] && metrics[key] !== '')
    return {
      completed: completed.length,
      total: required.length,
      percentage: Math.round((completed.length / required.length) * 100)
    }
  }

  const completeness = getCompleteness()

  return (
    <div className="carpet-calculator">
      <div className="carpet-content">
          {/* Sequence Selections Display */}
          {(sequenceSelections.economyType || sequenceSelections.isReferral || sequenceSelections.hasRepeatableProcess !== null) && (
            <div style={{ 
              marginBottom: '1rem', 
              padding: '0.5rem',
              background: 'rgba(34, 197, 94, 0.1)',
              border: '1px solid rgba(34, 197, 94, 0.3)',
              borderRadius: '4px',
              fontSize: '0.75rem'
            }}>
              <div style={{ 
                fontWeight: 600, 
                color: 'var(--accent-green)', 
                marginBottom: '0.25rem',
                fontSize: '0.7rem',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                Sequence Selections
              </div>
              <div style={{ color: '#ffffff', lineHeight: '1.5' }}>
                {sequenceSelections.economyType && (
                  <div>Economy: <strong>{sequenceSelections.economyType === 'old' ? 'Old' : 'New'}</strong></div>
                )}
                {sequenceSelections.isReferral !== null && sequenceSelections.isReferral !== false && (
                  <div>Referral: <strong>Yes</strong></div>
                )}
                {sequenceSelections.hasRepeatableProcess !== null && (
                  <div>Repeatable Process: <strong>{sequenceSelections.hasRepeatableProcess ? 'Yes' : 'No'}</strong></div>
                )}
              </div>
            </div>
          )}

          {/* CARPET Variables */}
          <div style={{ marginBottom: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
              <h4 style={{ fontSize: '0.85rem', fontWeight: 600, color: '#ffffff', margin: 0 }}>
                CARPET Variables
              </h4>
              {completeness.total > 0 && (
                <div style={{ 
                  fontSize: '0.7rem', 
                  color: completeness.percentage === 100 ? 'var(--accent-green)' : completeness.percentage >= 50 ? '#ffa500' : '#ff6b6b',
                  fontWeight: 600
                }}>
                  {completeness.completed}/{completeness.total} ({completeness.percentage}%)
                </div>
              )}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
              {Object.entries(CARPET_VARIABLES).map(([key, variable]) => {
                const hasValue = metrics[variable.key] && metrics[variable.key] !== ''
                const isUsedInROI = variable.key === 'acv' || variable.key === 'pipeline'
                return (
                  <div key={key} style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', gridColumn: variable.isText ? '1 / -1' : 'auto' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      <label style={{ fontSize: '0.8rem', fontWeight: 600, color: '#ffffff' }}>
                        {variable.label}
                        {variable.unit && <span style={{ marginLeft: '0.25rem', color: '#ffffff', opacity: 0.9 }}>({variable.unit})</span>}
                      </label>
                      {hasValue && <span style={{ fontSize: '0.7rem', color: 'var(--accent-green)' }}>✓</span>}
                      {isUsedInROI && (
                        <span style={{ 
                          fontSize: '0.65rem', 
                          color: 'var(--accent-green)', 
                          opacity: 0.8,
                          marginLeft: 'auto'
                        }} title="Used in ROI calculation">
                          → ROI
                        </span>
                      )}
                    </div>
                    {variable.isText ? (
                      <textarea
                        value={metrics[variable.key] || ''}
                        onChange={(e) => updateMetric(variable.key, e.target.value)}
                        placeholder={variable.description}
                        style={{
                          padding: '0.4rem',
                          fontSize: '0.8rem',
                          border: hasValue ? '1px solid var(--accent-green)' : '1px solid rgba(255, 255, 255, 0.3)',
                          borderRadius: '4px',
                          background: 'rgba(255, 255, 255, 0.15)',
                          color: '#ffffff',
                          minHeight: '50px',
                          resize: 'vertical'
                        }}
                      />
                    ) : (
                      <input
                        type="number"
                        value={metrics[variable.key] || ''}
                        onChange={(e) => updateMetric(variable.key, e.target.value)}
                        placeholder={variable.description}
                        style={{
                          padding: '0.4rem',
                          fontSize: '0.8rem',
                          border: hasValue ? '1px solid var(--accent-green)' : '1px solid rgba(255, 255, 255, 0.3)',
                          borderRadius: '4px',
                          background: 'rgba(255, 255, 255, 0.1)',
                          color: '#ffffff'
                        }}
                      />
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          {/* Notes Section */}
          <div style={{
            marginBottom: '1rem',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '4px',
            overflow: 'hidden'
          }}>
            <button
              onClick={() => setNotesCollapsed(!notesCollapsed)}
              style={{
                width: '100%',
                padding: '0.5rem',
                background: 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                color: '#ffffff',
                fontSize: '0.8rem',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <span>📝 Call Notes & Observations</span>
              <span>{notesCollapsed ? '▼' : '▲'}</span>
            </button>
            {!notesCollapsed && (
              <div style={{ padding: '0.75rem' }}>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Add notes about the prospect, their situation, key insights, objections raised, etc."
                  style={{
                    width: '100%',
                    minHeight: '100px',
                    padding: '0.5rem',
                    fontSize: '0.8rem',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    borderRadius: '4px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    color: '#ffffff',
                    resize: 'vertical',
                    fontFamily: 'inherit'
                  }}
                />
              </div>
            )}
          </div>
        </div>
    </div>
  )
}

export default CARPETCalculator


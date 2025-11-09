import React, { useState, useEffect } from 'react'

const CARPET_STORAGE_KEY = 'carpet_metrics'
const ROI_STORAGE_KEY = 'roi_calculation'

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

  const [isExpanded, setIsExpanded] = useState(false)

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
  }

  // Expose to window for script access and trigger updates
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.getCARPETPlaceholder = getPlaceholderValue
      window.getCARPETMetrics = () => metrics
      window.getROICalculation = () => roi
      
      // Dispatch event to notify ScriptBlock components of updates
      window.dispatchEvent(new Event('carpetMetricsUpdated'))
    }
  }, [metrics, roi, roiInputs])

  return (
    <div className="carpet-calculator" style={{
      background: 'var(--bg-secondary)',
      border: '2px solid var(--primary-color)',
      borderRadius: '8px',
      padding: '1rem',
      marginBottom: '1rem'
    }}>
      <div 
        className="carpet-header"
        onClick={() => setIsExpanded(!isExpanded)}
        style={{
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: isExpanded ? '1rem' : '0'
        }}
      >
        <h3 style={{ margin: 0, color: 'var(--primary-color)', fontSize: '1rem', fontWeight: 700 }}>
          🧮 ROI Calculator
        </h3>
        <span style={{ fontSize: '1.2rem' }}>{isExpanded ? '▲' : '▼'}</span>
      </div>

      {isExpanded && (
        <div className="carpet-content">
          {/* CARPET Variables */}
          <div style={{ marginBottom: '1.5rem' }}>
            <h4 style={{ marginBottom: '0.75rem', fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)' }}>
              CARPET Variables
            </h4>
            <div style={{ display: 'grid', gap: '0.75rem' }}>
              {Object.entries(CARPET_VARIABLES).map(([key, variable]) => (
                <div key={key} style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                  <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                    {variable.label}
                    {variable.unit && <span style={{ marginLeft: '0.25rem', color: 'var(--text-secondary)' }}>({variable.unit})</span>}
                  </label>
                  {variable.isText ? (
                    <textarea
                      value={metrics[variable.key] || ''}
                      onChange={(e) => updateMetric(variable.key, e.target.value)}
                      placeholder={variable.description}
                      style={{
                        padding: '0.5rem',
                        fontSize: '0.85rem',
                        border: '1px solid var(--border-color)',
                        borderRadius: '4px',
                        background: 'var(--bg-primary)',
                        color: 'var(--text-primary)',
                        minHeight: '60px',
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
                        padding: '0.5rem',
                        fontSize: '0.85rem',
                        border: '1px solid var(--border-color)',
                        borderRadius: '4px',
                        background: 'var(--bg-primary)',
                        color: 'var(--text-primary)'
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* ROI Calculator */}
          <div style={{ 
            marginBottom: '1.5rem',
            padding: '1rem',
            background: 'var(--bg-primary)',
            borderRadius: '4px',
            border: '1px solid var(--border-color)'
          }}>
            <h4 style={{ marginBottom: '0.75rem', fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)' }}>
              ROI Calculation
            </h4>
            <div style={{ display: 'grid', gap: '0.75rem', marginBottom: '1rem' }}>
              <div>
                <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', display: 'block', marginBottom: '0.25rem' }}>
                  Qualified Opportunities (X)
                </label>
                <input
                  type="number"
                  value={roiInputs.qualifiedOpportunities}
                  onChange={(e) => updateRoiInput('qualifiedOpportunities', e.target.value)}
                  placeholder="e.g., 35"
                  style={{
                    padding: '0.5rem',
                    fontSize: '0.85rem',
                    border: '1px solid var(--border-color)',
                    borderRadius: '4px',
                    background: 'var(--bg-secondary)',
                    color: 'var(--text-primary)',
                    width: '100%'
                  }}
                />
              </div>
              <div>
                <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', display: 'block', marginBottom: '0.25rem' }}>
                  Close Rate (Y%)
                </label>
                <input
                  type="number"
                  value={roiInputs.closeRate}
                  onChange={(e) => updateRoiInput('closeRate', e.target.value)}
                  placeholder="e.g., 15"
                  step="0.1"
                  style={{
                    padding: '0.5rem',
                    fontSize: '0.85rem',
                    border: '1px solid var(--border-color)',
                    borderRadius: '4px',
                    background: 'var(--bg-secondary)',
                    color: 'var(--text-primary)',
                    width: '100%'
                  }}
                />
              </div>
              <div>
                <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', display: 'block', marginBottom: '0.25rem' }}>
                  Engagement Days
                </label>
                <input
                  type="number"
                  value={roiInputs.engagementDays}
                  onChange={(e) => updateRoiInput('engagementDays', e.target.value)}
                  placeholder="45"
                  style={{
                    padding: '0.5rem',
                    fontSize: '0.85rem',
                    border: '1px solid var(--border-color)',
                    borderRadius: '4px',
                    background: 'var(--bg-secondary)',
                    color: 'var(--text-primary)',
                    width: '100%'
                  }}
                />
              </div>
            </div>

            {roi && (
              <div style={{
                padding: '0.75rem',
                background: 'var(--bg-secondary)',
                borderRadius: '4px',
                border: '2px solid var(--accent-green)'
              }}>
                <div style={{ fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--accent-green)' }}>
                  ROI Results:
                </div>
                <div style={{ fontSize: '0.85rem', lineHeight: '1.6', color: 'var(--text-primary)' }}>
                  <div><strong>Qualified Opportunities:</strong> {roi.qualifiedOpportunities}</div>
                  <div><strong>Close Rate:</strong> {roi.closeRate}%</div>
                  <div><strong>New Clients (Z):</strong> {roi.newClients}</div>
                  <div><strong>ACV:</strong> ${parseInt(roi.acv).toLocaleString()}</div>
                  <div style={{ marginTop: '0.5rem', paddingTop: '0.5rem', borderTop: '1px solid var(--border-color)' }}>
                    <strong style={{ fontSize: '1rem', color: 'var(--accent-green)' }}>
                      Total Revenue: ${parseInt(roi.revenue).toLocaleString()}
                    </strong>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Placeholder Reference */}
          <div style={{
            padding: '0.75rem',
            background: 'var(--bg-primary)',
            borderRadius: '4px',
            border: '1px solid var(--border-color)',
            fontSize: '0.8rem',
            color: 'var(--text-secondary)'
          }}>
            <strong>Placeholders:</strong> [X], [Y]%, [Z], [$], [ACV], [REVENUE], [CYCLE], [REP_CAPACITY]
            <br />
            <span style={{ fontSize: '0.75rem', fontStyle: 'italic' }}>
              Values auto-fill in Post-Reconstruction Transition and other sections
            </span>
          </div>
        </div>
      )}
    </div>
  )
}

export default CARPETCalculator


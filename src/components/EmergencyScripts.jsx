import React, { useState } from 'react'
import { useContent } from '../context/ContentContext'
import { getSequenceSelections } from '../utils/sequenceSelections'

// Helper function to get CARPET completeness and missing variables
function getCARPETState() {
  try {
    const stored = localStorage.getItem('carpet_metrics')
    const metrics = stored ? JSON.parse(stored) : {}
    
    const required = {
      'cycle_days': { label: 'C (Cycle)', section: 'discovery_middle_funnel' },
      'acv': { label: 'A (ACV)', section: 'discovery_bottom_funnel' },
      'rep_capacity': { label: 'R (Rep)', section: 'discovery_middle_funnel' },
      'pipeline': { label: 'P (Pipeline)', section: 'discovery_top_funnel' }
    }
    
    const missing = []
    const completed = []
    
    Object.entries(required).forEach(([key, info]) => {
      if (!metrics[key] || metrics[key] === '') {
        missing.push({ key, ...info })
      } else {
        completed.push({ key, ...info })
      }
    })
    
    const completeness = {
      percentage: Math.round((completed.length / Object.keys(required).length) * 100),
      missing,
      completed
    }
    
    return { metrics, completeness }
  } catch (e) {
    return { metrics: {}, completeness: { percentage: 0, missing: [], completed: [] } }
  }
}

// Helper function to get ROI state
function getROIState() {
  try {
    const stored = localStorage.getItem('roi_calculation')
    const roiInputs = stored ? JSON.parse(stored) : {}
    
    const hasQualified = roiInputs.qualifiedOpportunities && roiInputs.qualifiedOpportunities !== ''
    const hasCloseRate = roiInputs.closeRate && roiInputs.closeRate !== ''
    
    return {
      hasQualified,
      hasCloseRate,
      isComplete: hasQualified && hasCloseRate
    }
  } catch (e) {
    return { hasQualified: false, hasCloseRate: false, isComplete: false }
  }
}

// Replace placeholders in script with actual CARPET/ROI values
function replacePlaceholders(scriptText) {
  const carpetState = getCARPETState()
  const roiState = getROIState()
  const metrics = carpetState.metrics
  
  // Calculate ROI if we have the inputs
  let roi = null
  try {
    const roiStored = localStorage.getItem('roi_calculation')
    const roiInputs = roiStored ? JSON.parse(roiStored) : {}
    const qualified = parseFloat(roiInputs.qualifiedOpportunities) || 0
    const closeRate = parseFloat(roiInputs.closeRate) || 0
    const acv = parseFloat(metrics.acv) || 0
    
    if (qualified && closeRate && acv) {
      const newClients = Math.round((qualified * closeRate) / 100)
      const revenue = newClients * acv
      roi = { newClients, revenue, acv, qualifiedOpportunities: qualified, closeRate }
    }
  } catch (e) {
    // ROI calculation failed, continue without it
  }
  
  // Replace placeholders - only replace if value exists, otherwise remove placeholder
  let result = scriptText
  
  // ROI placeholders - use actual values or remove
  const xValue = roi?.qualifiedOpportunities || metrics.pipeline
  result = result.replace(/\[X\]/g, xValue ? String(xValue) : '')
  
  if (roi?.closeRate) {
    result = result.replace(/\[Y\]%/g, `${roi.closeRate}%`)
    result = result.replace(/\[Y\]/g, String(roi.closeRate))
  } else {
    result = result.replace(/\[Y\]%/g, '')
    result = result.replace(/\[Y\]/g, '')
  }
  
  result = result.replace(/\[Z\]/g, roi?.newClients ? String(roi.newClients) : '')
  result = result.replace(/\[REVENUE\]/g, roi?.revenue ? `$${parseInt(roi.revenue).toLocaleString()}` : '')
  
  // CARPET placeholders - use actual values or remove
  result = result.replace(/\[ACV\]/g, metrics.acv ? `$${parseInt(metrics.acv).toLocaleString()}` : '')
  result = result.replace(/\[\$\]/g, metrics.acv ? `$${parseInt(metrics.acv).toLocaleString()}` : '')
  result = result.replace(/\[CYCLE\]/g, metrics.cycle_days ? `${metrics.cycle_days} days` : '')
  result = result.replace(/\[REP_CAPACITY\]/g, metrics.rep_capacity ? `${metrics.rep_capacity} meetings/month` : '')
  result = result.replace(/\[PIPELINE\]/g, metrics.pipeline ? `${metrics.pipeline} opportunities/month` : '')
  result = result.replace(/\[ENVIRONMENT\]/g, metrics.environment || '')
  result = result.replace(/\[TIMELINE\]/g, metrics.timeline || '')
  
  // Clean up awkward spacing left by removed placeholders (but preserve line breaks)
  result = result.replace(/  +/g, ' ') // Multiple spaces to single space
  result = result.replace(/\s+\./g, '.') // Space before period
  result = result.replace(/\s+,/g, ',') // Space before comma
  result = result.replace(/\s+:/g, ':') // Space before colon
  result = result.replace(/\s+—/g, '—') // Space before em dash
  result = result.replace(/—\s+/g, '—') // Space after em dash
  result = result.replace(/\n\s+\n\s+/g, '\n\n') // Multiple blank lines
  
  return result.trim()
}

// Get recommended re-entry points based on state
function getReEntryPoints() {
  const carpetState = getCARPETState()
  const roiState = getROIState()
  const sequenceSelections = getSequenceSelections()
  
  const recommendations = []
  
  // If CARPET is incomplete, suggest where to go
  if (carpetState.completeness.percentage < 100) {
    const missing = carpetState.completeness.missing
    
    // Prioritize by funnel position
    if (missing.some(m => m.key === 'pipeline')) {
      recommendations.push({
        id: 'discovery_top_funnel',
        label: 'Top of Funnel — Get Pipeline (P)',
        reason: 'Missing Pipeline volume data'
      })
    }
    
    if (missing.some(m => m.key === 'cycle_days' || m.key === 'rep_capacity')) {
      recommendations.push({
        id: 'discovery_middle_funnel',
        label: 'Middle of Funnel — Get Cycle (C) & Rep Capacity (R)',
        reason: 'Missing Cycle or Rep capacity data'
      })
    }
    
    if (missing.some(m => m.key === 'acv')) {
      recommendations.push({
        id: 'discovery_bottom_funnel',
        label: 'Bottom of Funnel — Get ACV (A)',
        reason: 'Missing Average Contract Value'
      })
    }
  } else if (!roiState.isComplete) {
    // CARPET complete but ROI not calculated
    recommendations.push({
      id: 'integration_explanation',
      label: 'Integration & ROI Calculation',
      reason: 'CARPET complete — ready to calculate ROI and present thesis'
    })
  } else {
    // Both complete, suggest moving forward
    recommendations.push({
      id: 'integration_explanation',
      label: 'Integration Explanation — Present Thesis',
      reason: 'All data captured — ready to present value proposition'
    })
  }
  
  // Always include discovery intro as fallback
  if (recommendations.length === 0) {
    recommendations.push({
      id: 'discovery_intro',
      label: 'Discovery Introduction',
      reason: 'Start or restart discovery flow'
    })
  }
  
  return recommendations
}

const PROTOCOLS = [
  {
    id: 'A',
    title: 'You\'re Stuck or Lost',
    script: 'Let me make sure I captured that correctly — did I get that right?\n\n(While they confirm, check your CARPET tracker for missing variables, then ask the next question based on what\'s missing.)',
    getReEntryPoints: () => {
      const carpetState = getCARPETState()
      const points = getReEntryPoints()
      
      if (carpetState.completeness.missing.length > 0) {
        const missingVars = carpetState.completeness.missing.map(m => m.label).join(', ')
        return points.map(p => ({
          ...p,
          reason: `${p.reason} — Missing: ${missingVars}`
        }))
      }
      
      if (carpetState.completeness.percentage < 25) {
        return [
          {
            id: 'discovery_intro',
            label: 'Restart Discovery Flow',
            reason: 'Early in discovery — restart from beginning to rebuild context'
          },
          ...points
        ]
      }
      
      return points
    }
  },
  {
    id: 'B',
    title: 'They\'re Giving Too Much Information',
    script: 'That\'s really helpful context—I appreciate you walking me through all of that. Just to narrow the focus so I can make sure I\'m capturing the right information: which of those is producing the most predictable results right now?',
    getReEntryPoints: () => {
      const carpetState = getCARPETState()
      const points = getReEntryPoints()
      
      if (carpetState.completeness.missing.some(m => m.key === 'pipeline')) {
        return [
          {
            id: 'discovery_top_funnel',
            label: 'Top of Funnel — Focus on Pipeline',
            reason: 'Redirect to capture Pipeline (P) variable from strongest channel'
          },
          ...points.filter(p => p.id !== 'discovery_top_funnel')
        ]
      }
      
      return points
    }
  },
  {
    id: 'C',
    title: 'Conversation Isn\'t Moving Forward',
    script: 'Let me be direct with you—it sounds like we\'re not making progress right now, and I completely understand that.\n\n(If you have CARPET data and ROI): "We\'ve covered a lot of ground today, and I have enough to build out a scope. I\'ll send you a draft proposal with the ROI math we discussed—[X] opportunities at [Y]% close rate equals [Z] clients and [REVENUE] in revenue. Plus case studies and client contacts. You review it on your timeline, and if it makes sense, we reconnect. If not, no hard feelings. Does that work?"\n\n(If you don\'t have enough data): "I realize we haven\'t gotten through the full discovery yet. I\'ll send you our case studies, client contacts, and a framework document that explains our approach. You do your diligence on your timeline. If it checks out and you want to reconnect to finish the discovery, I\'m happy to. If not, no hard feelings. Does that sound more reasonable?"',
    getReEntryPoints: () => {
      const carpetState = getCARPETState()
      const roiState = getROIState()
      
      if (carpetState.completeness.percentage >= 75 && roiState.isComplete) {
        return [
          {
            id: 'integration_explanation',
            label: 'Integration & ROI Presentation',
            reason: 'You have enough data—present the ROI and value proposition'
          },
          {
            id: 'transition_call_two',
            label: 'Close & Schedule Call Two',
            reason: 'Ready to close—secure next step'
          }
        ]
      }
      
      if (carpetState.completeness.percentage >= 50) {
        return [
          {
            id: 'discovery_bottom_funnel',
            label: 'Complete Discovery — Bottom of Funnel',
            reason: 'You\'re close—finish capturing remaining CARPET variables'
          },
          ...getReEntryPoints()
        ]
      }
      
      return [
        {
          id: 'discovery_intro',
          label: 'Restart Discovery',
          reason: 'Not enough data yet—restart discovery to build proper foundation'
        },
        ...getReEntryPoints()
      ]
    }
  },
  {
    id: 'G',
    title: 'Stuck in Mechanism Ville (Too Deep in Methods/Infrastructure)',
    steps: [
      'Pause the conversation explicitly',
      'Reframe back to diagnostic/advisory mode',
      'Reset the structure and get agreement'
    ],
    script: 'Let me pause us for a second. I want to make sure we\'re using this time well.\n\nHere\'s what I\'m thinking: I\'m going to map how demand actually works in your business—the channels, the conversion process, the economics. This is my diagnostic.\n\nThen I can tell you exactly how we\'d approach it and whether there\'s a fit. That structure work for you?',
    example: {
      text: 'Let me pause us for a second. I want to make sure we\'re using this time well.\n\nHere\'s what I\'m thinking: I\'m going to map how demand actually works in your business—the channels, the conversion process, the economics. This is my diagnostic.\n\nThen I can tell you exactly how we\'d approach it and whether there\'s a fit. That structure work for you?',
      note: '(Use when you\'ve fallen into talking about "XYZ method", "Bainsbridge method", "infrastructure", "two interaction methods" or other framework names without narrative. This pulls you back to Story Mode and the advisory frame.)'
    },
    guidance: 'When you\'re too deep in mechanism talk (methods, infrastructure, frameworks), this script resets the conversation back to diagnostic/advisory mode. It reframes you as mapping their business (diagnostic) rather than explaining your methods (mechanism). Gets you out of "Mechanism Ville" and back into Story Mode.'
  }
]

function EmergencyScripts({ expanded, isMobile, onAction }) {
  const [isOpen, setIsOpen] = useState(false)
  const [expandedProtocol, setExpandedProtocol] = useState(null)
  const { loadContent } = useContent()

  const toggleProtocol = (protocolId) => {
    setExpandedProtocol(expandedProtocol === protocolId ? null : protocolId)
  }

  const handleReEntryClick = (e, contentId) => {
    e.preventDefault()
    e.stopPropagation()
    if (loadContent && contentId) {
      loadContent(contentId)
      setIsOpen(false) // Close modal after navigation
    }
  }

  return (
    <>
      {/* Floating Button */}
      <button
        className={`emergency-scripts-fab fab-button ${expanded && isMobile ? 'fab-expanded' : ''}`}
        onClick={(e) => {
          e.stopPropagation()
          setIsOpen(!isOpen)
          if (onAction) onAction()
        }}
        aria-label="Emergency Scripts"
        style={expanded && isMobile ? { '--fab-index': 4 } : {}}
      >
        🆘 Emergency
      </button>

      {/* Modal/Overlay */}
      {isOpen && (
        <div className="emergency-scripts-overlay" onClick={() => setIsOpen(false)}>
          <div className="emergency-scripts-modal" onClick={(e) => e.stopPropagation()}>
            <div className="emergency-scripts-header">
              <h2>🆘 Emergency Recovery Scripts</h2>
              <p className="emergency-scripts-subtitle">Use these when you freeze or get lost</p>
              <button 
                className="emergency-scripts-close"
                onClick={() => setIsOpen(false)}
                aria-label="Close"
              >
                ×
              </button>
            </div>

            <div className="emergency-scripts-content">
              {PROTOCOLS.map((protocol) => {
                // Get re-entry points if function exists
                const reEntryPoints = protocol.getReEntryPoints ? protocol.getReEntryPoints() : []
                
                return (
                  <div 
                    key={protocol.id} 
                    className={`protocol-card ${expandedProtocol === protocol.id ? 'expanded' : ''}`}
                  >
                    <div 
                      className="protocol-header"
                      onClick={() => toggleProtocol(protocol.id)}
                    >
                      <div className="protocol-title">
                        <span className="protocol-name">{protocol.title}</span>
                      </div>
                      <span className="protocol-toggle">
                        {expandedProtocol === protocol.id ? '▲' : '▼'}
                      </span>
                    </div>

                    {expandedProtocol === protocol.id && (
                      <div className="protocol-content">
                        {/* Script Only */}
                        <div className="protocol-script-box" style={{
                          padding: '1rem',
                          background: 'var(--bg-secondary, #f8fafc)',
                          borderRadius: '6px',
                          border: '1px solid var(--border-color, #e2e8f0)'
                        }}>
                          <div className="script-text" style={{
                            fontSize: '0.95rem',
                            lineHeight: '1.8',
                            color: 'var(--text-primary, #0f172a)',
                            whiteSpace: 'pre-wrap'
                          }}>
                            {replacePlaceholders(protocol.script || '').split('\n').map((line, i) => (
                              <div key={i} style={{ marginBottom: line ? '0.5rem' : '0.25rem' }}>
                                {line || <br />}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Re-entry Points */}
                        {reEntryPoints.length > 0 && protocol.id !== 'G' && (
                          <div style={{
                            marginTop: '1rem',
                            padding: '0.75rem',
                            background: 'rgba(34, 197, 94, 0.08)',
                            borderRadius: '4px',
                            border: '1px solid rgba(34, 197, 94, 0.3)'
                          }}>
                            <div style={{ 
                              fontSize: '0.75rem', 
                              fontWeight: 600, 
                              color: 'var(--accent-green, #22c55e)',
                              marginBottom: '0.75rem',
                              textTransform: 'uppercase',
                              letterSpacing: '0.5px'
                            }}>
                              🎯 Recommended Re-entry Points:
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                              {reEntryPoints.map((point, idx) => (
                                <button
                                  key={idx}
                                  onClick={(e) => handleReEntryClick(e, point.id)}
                                  style={{
                                    padding: '0.6rem 0.75rem',
                                    background: 'rgba(34, 197, 94, 0.1)',
                                    border: '1px solid rgba(34, 197, 94, 0.4)',
                                    borderRadius: '4px',
                                    color: 'var(--text-primary, #0f172a)',
                                    fontSize: '0.85rem',
                                    textAlign: 'left',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '0.25rem'
                                  }}
                                  onMouseEnter={(e) => {
                                    e.target.style.background = 'rgba(34, 197, 94, 0.2)'
                                    e.target.style.borderColor = 'rgba(34, 197, 94, 0.6)'
                                  }}
                                  onMouseLeave={(e) => {
                                    e.target.style.background = 'rgba(34, 197, 94, 0.1)'
                                    e.target.style.borderColor = 'rgba(34, 197, 94, 0.4)'
                                  }}
                                >
                                  <div style={{ fontWeight: 600, color: 'var(--accent-green, #22c55e)' }}>
                                    {point.label}
                                  </div>
                                  <div style={{ 
                                    fontSize: '0.75rem', 
                                    color: 'var(--text-secondary, #475569)',
                                    fontStyle: 'italic'
                                  }}>
                                    {point.reason}
                                  </div>
                                </button>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

    </>
  )
}

export default EmergencyScripts


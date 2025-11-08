import React, { useState } from 'react'

function CollapsibleSection({ 
  title, 
  children, 
  defaultCollapsed = true, 
  variant = 'default',
  icon = null,
  className = ''
}) {
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed)

  const toggleSection = () => {
    setIsCollapsed(!isCollapsed)
  }

  return (
    <div className={`collapsible-section info-box ${isCollapsed ? 'collapsed' : ''} ${className}`} style={{ margin: '1rem 0' }}>
      <div 
        className="collapsible-section-header" 
        onClick={toggleSection}
        style={{
          cursor: 'pointer',
          padding: '0.75rem 1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: variant === 'highlight' ? 'var(--primary-color)' : 'transparent',
          color: variant === 'highlight' ? 'white' : 'var(--text-primary)',
          borderRadius: '4px',
          transition: 'background-color 0.2s'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          {icon && <span>{icon}</span>}
          <span style={{ fontWeight: variant === 'highlight' ? 600 : 500 }}>
            {title}
          </span>
        </div>
        <span style={{ fontSize: '0.9rem', opacity: 0.7 }}>
          {isCollapsed ? '▼' : '▲'}
        </span>
      </div>
      {!isCollapsed && (
        <div className="collapsible-section-content" style={{ padding: '1rem' }}>
          {children}
        </div>
      )}
    </div>
  )
}

export default CollapsibleSection


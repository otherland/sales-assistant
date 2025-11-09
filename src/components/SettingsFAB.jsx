import React from 'react'

function SettingsFAB({ onClick, expanded, isMobile, onAction }) {
  const handleClick = (e) => {
    e.stopPropagation()
    onClick()
    if (onAction) onAction()
  }

  return (
    <button 
      className={`settings-fab fab-button ${expanded && isMobile ? 'fab-expanded' : ''}`}
      id="settings-fab" 
      title="Settings"
      onClick={handleClick}
      style={expanded && isMobile ? { '--fab-index': 1 } : {}}
    >
      ⚙️
    </button>
  )
}

export default SettingsFAB


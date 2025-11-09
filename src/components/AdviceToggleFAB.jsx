import React from 'react'

function AdviceToggleFAB({ isVisible, onClick, expanded, isMobile, onAction }) {
  const handleClick = (e) => {
    e.stopPropagation()
    onClick()
    if (onAction) onAction()
  }

  return (
    <button 
      className={`advice-toggle-fab fab-button ${!isVisible ? 'hidden' : ''} ${expanded && isMobile ? 'fab-expanded' : ''}`}
      id="advice-toggle-fab" 
      title="Toggle Advice"
      onClick={handleClick}
      style={expanded && isMobile ? { '--fab-index': 2 } : {}}
    >
      💡
    </button>
  )
}

export default AdviceToggleFAB


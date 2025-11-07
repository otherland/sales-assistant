import React from 'react'

function AdviceToggleFAB({ isVisible, onClick }) {
  return (
    <button 
      className={`advice-toggle-fab ${!isVisible ? 'hidden' : ''}`}
      id="advice-toggle-fab" 
      title="Toggle Advice"
      onClick={onClick}
    >
      💡
    </button>
  )
}

export default AdviceToggleFAB


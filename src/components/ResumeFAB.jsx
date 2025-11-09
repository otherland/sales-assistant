import React from 'react'
import { useSalesData } from '../context/SalesDataContext'
import { useContent } from '../context/ContentContext'
import { resumeDiscovery } from '../utils/questionState'

function ResumeFAB({ expanded, isMobile, onAction }) {
  const { salesData } = useSalesData()
  const { loadContent } = useContent()

  const handleClick = (e) => {
    e.stopPropagation()
    if (salesData && loadContent) {
      resumeDiscovery(salesData, loadContent)
    }
    if (onAction) onAction()
  }

  return (
    <button 
      className={`resume-fab fab-button ${expanded && isMobile ? 'fab-expanded' : ''}`}
      id="resume-fab" 
      title="Resume Discovery"
      onClick={handleClick}
      style={expanded && isMobile ? { '--fab-index': 3 } : {}}
    >
      ▶️
    </button>
  )
}

export default ResumeFAB


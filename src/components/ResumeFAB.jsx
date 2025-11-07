import React from 'react'
import { useSalesData } from '../context/SalesDataContext'
import { useContent } from '../context/ContentContext'
import { resumeDiscovery } from '../utils/questionState'

function ResumeFAB() {
  const { salesData } = useSalesData()
  const { loadContent } = useContent()

  const handleClick = () => {
    if (salesData && loadContent) {
      resumeDiscovery(salesData, loadContent)
    }
  }

  return (
    <button 
      className="resume-fab" 
      id="resume-fab" 
      title="Resume Discovery"
      onClick={handleClick}
    >
      ▶️
    </button>
  )
}

export default ResumeFAB


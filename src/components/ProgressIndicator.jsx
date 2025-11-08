import React, { useState, useEffect } from 'react'
import { useSalesData } from '../context/SalesDataContext'
import { getQuestionProgress, getProgressBySection } from '../utils/questionProgress'

function ProgressIndicator() {
  const { salesData } = useSalesData()
  const [progress, setProgress] = useState({ total: 0, answered: 0, percentage: 0 })
  const [sectionProgress, setSectionProgress] = useState([])
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    if (!salesData) return

    const updateProgress = () => {
      const overall = getQuestionProgress(salesData)
      const bySection = getProgressBySection(salesData)
      setProgress(overall)
      setSectionProgress(bySection)
    }

    updateProgress()

    // Listen for question state changes
    const handleQuestionChange = () => updateProgress()
    window.addEventListener('questionsReset', handleQuestionChange)
    window.addEventListener('questionToggled', handleQuestionChange)
    
    // Also listen for storage changes (in case localStorage is modified elsewhere)
    window.addEventListener('storage', handleQuestionChange)

    return () => {
      window.removeEventListener('questionsReset', handleQuestionChange)
      window.removeEventListener('questionToggled', handleQuestionChange)
      window.removeEventListener('storage', handleQuestionChange)
    }
  }, [salesData])

  if (progress.total === 0) return null

  return (
    <div className={`progress-indicator ${isExpanded ? 'expanded' : ''}`}>
      <div 
        className="progress-indicator-header"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="progress-indicator-summary">
          <span className="progress-indicator-label">Questions</span>
          <span className="progress-indicator-stats">
            {progress.answered} / {progress.total}
          </span>
          <div className="progress-indicator-bar">
            <div 
              className="progress-indicator-fill"
              style={{ width: `${progress.percentage}%` }}
            />
          </div>
        </div>
        <span className="progress-indicator-toggle">
          {isExpanded ? '▲' : '▼'}
        </span>
      </div>
      {isExpanded && (
        <div className="progress-indicator-details">
          {sectionProgress.map(section => (
            <div key={section.sectionId} className="progress-indicator-section">
              <div className="progress-indicator-section-header">
                <span className="progress-indicator-section-title">
                  {section.sectionTitle.split('—')[0].trim()}
                </span>
                <span className="progress-indicator-section-stats">
                  {section.answered} / {section.total}
                </span>
              </div>
              <div className="progress-indicator-section-bar">
                <div 
                  className="progress-indicator-section-fill"
                  style={{ width: `${section.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default ProgressIndicator


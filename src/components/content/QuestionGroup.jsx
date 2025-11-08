import React, { useState, useEffect, useImperativeHandle, forwardRef } from 'react'
import { useQuestionState } from '../../hooks/useQuestionState'
import LinkifiedText from './LinkifiedText'

const QuestionGroup = forwardRef(function QuestionGroup({ group, sectionId, groupIndex, startingQuestionNumber = 1 }, ref) {
  const [isCollapsed, setIsCollapsed] = useState(true)
  const [questionNumbers, setQuestionNumbers] = useState({})

  // Expose expand method to parent via ref
  useImperativeHandle(ref, () => ({
    expand: () => setIsCollapsed(false)
  }))

  useEffect(() => {
    // Calculate question numbers starting from the provided startingQuestionNumber
    let questionNumber = startingQuestionNumber
    const numbers = {}
    group.questions.forEach((q, idx) => {
      const questionId = `${sectionId}_${group.title.replace(/\s+/g, '_')}_${idx}`
      numbers[questionId] = questionNumber++
    })
    setQuestionNumbers(numbers)
  }, [group, sectionId, startingQuestionNumber])

  // Listen for expand events for this group's questions
  useEffect(() => {
    const handleExpandGroup = (event) => {
      const questionId = event.detail?.questionId
      if (questionId) {
        const questionIds = group.questions.map((q, idx) => 
          `${sectionId}_${group.title.replace(/\s+/g, '_')}_${idx}`
        )
        if (questionIds.includes(questionId)) {
          setIsCollapsed(false)
        }
      }
    }

    window.addEventListener('expandQuestionGroup', handleExpandGroup)
    return () => window.removeEventListener('expandQuestionGroup', handleExpandGroup)
  }, [group, sectionId])

  const toggleGroup = () => {
    setIsCollapsed(!isCollapsed)
  }

  return (
    <div className={`question-group info-box ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="question-group-header" onClick={toggleGroup}>
        <span className="question-group-emoji">{group.emoji || '📋'}</span>
        <span className="question-group-title">{group.title}</span>
        <span className="question-group-toggle">{isCollapsed ? '▼' : '▲'}</span>
      </div>
      {!isCollapsed && (
        <div className="question-group-list">
          {group.questions.map((q, idx) => {
            const questionId = `${sectionId}_${group.title.replace(/\s+/g, '_')}_${idx}`
            const questionNumber = questionNumbers[questionId] || startingQuestionNumber + idx
            return (
              <QuestionItem
                key={idx}
                questionId={questionId}
                question={q}
                questionNumber={questionNumber}
              />
            )
          })}
        </div>
      )}
    </div>
  )
})

function QuestionItem({ questionId, question, questionNumber }) {
  const { isAsked, toggleQuestion } = useQuestionState(questionId)

  return (
    <div
      className={`script-block question-item ${isAsked ? 'asked' : ''}`}
      onClick={toggleQuestion}
      data-question-id={questionId}
    >
      {questionNumber}. {question}
    </div>
  )
}

export default QuestionGroup


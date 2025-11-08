import React, { useState, useEffect, useImperativeHandle, forwardRef } from 'react'
import { useQuestionState } from '../../hooks/useQuestionState'
import LinkifiedText from './LinkifiedText'
import ScriptBlock from './ScriptBlock'
import InfoBox from './InfoBox'

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
        <div className="question-group-content">
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
          {group.intro_script && (
            <InfoBox variant="advisor-note" style={{ marginBottom: '1rem' }}>
              <ScriptBlock script={group.intro_script} />
            </InfoBox>
          )}
          {group.example_answers && group.example_answers.length > 0 && (
            <InfoBox title="Example Answers" variant="default" style={{ marginBottom: '1rem' }}>
              {group.example_answers.map((example, idx) => (
                <div key={idx} style={{ marginBottom: '0.75rem', fontSize: '0.9rem', lineHeight: '1.5' }}>
                  <LinkifiedText text={example} />
                </div>
              ))}
            </InfoBox>
          )}
          {group.advisor_notes && group.advisor_notes.length > 0 && (
            <InfoBox title="Advisor Notes" variant="advisor-note" style={{ marginBottom: '1rem' }}>
              <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                {group.advisor_notes.map((note, idx) => (
                  <li key={idx} style={{ marginBottom: '0.5rem', lineHeight: '1.5' }}>
                    <LinkifiedText text={note} />
                  </li>
                ))}
              </ul>
            </InfoBox>
          )}

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


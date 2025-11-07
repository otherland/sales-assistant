import { useState, useCallback, useEffect } from 'react'

export function useQuestionState(questionId) {
  const [isAsked, setIsAsked] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(`question_${questionId}`)
    setIsAsked(stored === 'true')
  }, [questionId])

  const toggleQuestion = useCallback(() => {
    const newState = !isAsked
    setIsAsked(newState)
    localStorage.setItem(`question_${questionId}`, newState.toString())
  }, [isAsked, questionId])

  return { isAsked, toggleQuestion }
}

export function useAllQuestions() {
  const resetAllQuestions = useCallback(() => {
    Object.keys(localStorage).forEach(key => {
      if (key.startsWith('question_')) {
        localStorage.removeItem(key)
      }
    })
    // Trigger a re-render by dispatching a custom event
    window.dispatchEvent(new Event('questionsReset'))
  }, [])

  return { resetAllQuestions }
}


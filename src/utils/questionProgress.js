/**
 * Question progress tracking utilities
 */

/**
 * Get all questions from sales data
 */
export function getAllQuestions(salesData) {
  if (!salesData?.sequential_flow?.call_one) return []

  const questions = []
  
  salesData.sequential_flow.call_one.forEach(section => {
    if (section.question_groups && Array.isArray(section.question_groups)) {
      section.question_groups.forEach(group => {
        if (group.questions && Array.isArray(group.questions)) {
          group.questions.forEach((question, idx) => {
            const questionId = `${section.id}_${group.title.replace(/\s+/g, '_')}_${idx}`
            questions.push({
              id: questionId,
              sectionId: section.id,
              sectionTitle: section.title,
              groupTitle: group.title,
              question: question,
              questionIndex: idx
            })
          })
        }
      })
    }
  })

  return questions
}

/**
 * Get question progress statistics
 */
export function getQuestionProgress(salesData) {
  const allQuestions = getAllQuestions(salesData)
  const total = allQuestions.length
  
  if (total === 0) {
    return { total: 0, answered: 0, unanswered: 0, percentage: 0 }
  }

  let answered = 0
  allQuestions.forEach(q => {
    const isAnswered = localStorage.getItem(`question_${q.id}`) === 'true'
    if (isAnswered) answered++
  })

  const unanswered = total - answered
  const percentage = total > 0 ? Math.round((answered / total) * 100) : 0

  return { total, answered, unanswered, percentage }
}

/**
 * Get progress by section
 */
export function getProgressBySection(salesData) {
  if (!salesData?.sequential_flow?.call_one) return []

  return salesData.sequential_flow.call_one.map(section => {
    const questions = []
    
    if (section.question_groups && Array.isArray(section.question_groups)) {
      section.question_groups.forEach(group => {
        if (group.questions && Array.isArray(group.questions)) {
          group.questions.forEach((question, idx) => {
            const questionId = `${section.id}_${group.title.replace(/\s+/g, '_')}_${idx}`
            const isAnswered = localStorage.getItem(`question_${questionId}`) === 'true'
            questions.push({
              id: questionId,
              groupTitle: group.title,
              question,
              isAnswered
            })
          })
        }
      })
    }

    const total = questions.length
    const answered = questions.filter(q => q.isAnswered).length
    const percentage = total > 0 ? Math.round((answered / total) * 100) : 0

    return {
      sectionId: section.id,
      sectionTitle: section.title,
      total,
      answered,
      unanswered: total - answered,
      percentage,
      questions
    }
  }).filter(section => section.total > 0) // Only sections with questions
}


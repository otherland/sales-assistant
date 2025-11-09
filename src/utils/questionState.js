/**
 * Question state management utilities
 * Handles localStorage persistence and DOM manipulation for question state
 */

/**
 * Toggle the asked state of a question
 * @param {string} questionId - Unique identifier for the question
 * @param {HTMLElement} element - The question element to update
 */
export function toggleQuestion(questionId, element) {
  const currentState = localStorage.getItem(`question_${questionId}`) === 'true'
  const newState = !currentState

  // Save to localStorage
  localStorage.setItem(`question_${questionId}`, newState.toString())

  // Update visual styling
  if (newState) {
    element.classList.add('asked')
  } else {
    element.classList.remove('asked')
  }
}

/**
 * Reset all question states
 */
export function resetAllQuestions() {
  // Clear all question states from localStorage
  Object.keys(localStorage).forEach(key => {
    if (key.startsWith('question_')) {
      localStorage.removeItem(key)
    }
  })

  // Remove styling from all question items
  const questionItems = document.querySelectorAll('.question-item')
  questionItems.forEach(item => {
    item.classList.remove('asked')
  })

  // Show confirmation
  alert('All question progress has been reset.')
}

/**
 * Resume discovery by finding and navigating to the first unasked question
 * @param {Object} salesData - The sales data object containing question groups
 * @param {Function} loadContent - Function to load content (from React ContentContext)
 */
export function resumeDiscovery(salesData, loadContent) {
  if (!salesData) {
    console.warn('resumeDiscovery: salesData not available')
    return
  }
  if (!loadContent) {
    console.warn('resumeDiscovery: loadContent function not available')
    return
  }
  // Get all possible questions from the data structure
  const allPossibleQuestions = []

  // Check discovery sections
  const discoverySections = ['discovery_top_funnel', 'discovery_middle_funnel', 'discovery_bottom_funnel']

  discoverySections.forEach(sectionId => {
    if (salesData.sequential_flow && salesData.sequential_flow.call_one) {
      const section = salesData.sequential_flow.call_one.find(s => s.id === sectionId)
      if (section && section.question_groups) {
        section.question_groups.forEach((group, groupIndex) => {
          group.questions.forEach((question, questionIndex) => {
            const questionId = `${sectionId}_${group.title.replace(/\s+/g, '_')}_${questionIndex}`
            allPossibleQuestions.push({
              id: questionId,
              section: sectionId,
              groupTitle: group.title,
              questionIndex: questionIndex,
              text: question
            })
          })
        })
      }
    }
  })

  console.log('Total possible questions:', allPossibleQuestions.length)

  // Find the first unchecked question
  let firstUncheckedQuestion = null

  for (const question of allPossibleQuestions) {
    const storedValue = localStorage.getItem(`question_${question.id}`)
    console.log(`Question: ${question.id}, Stored value: "${storedValue}"`)

    if (storedValue !== 'true') {
      firstUncheckedQuestion = question
      break
    }
  }

  if (!firstUncheckedQuestion) {
    alert('All questions have been asked! 🎉')
    return
  }

  console.log('First unchecked question:', firstUncheckedQuestion)

  // Navigate to the section if not already there
  // Use pathname instead of hash for React Router compatibility
  const pathParts = window.location.pathname.split('/').filter(p => p)
  const currentContentId = pathParts.length >= 2 && pathParts[0] === 'content' ? pathParts[1] : null
  
  if (currentContentId !== firstUncheckedQuestion.section) {
    loadContent(firstUncheckedQuestion.section)
    // Wait a bit for content to load, then scroll
    setTimeout(() => {
      scrollToQuestion(firstUncheckedQuestion.id)
    }, 100)
  } else {
    scrollToQuestion(firstUncheckedQuestion.id)
  }
}

/**
 * Scroll to a specific question and highlight it
 * @param {string} questionId - Unique identifier for the question
 */
export function scrollToQuestion(questionId) {
  // Dispatch event to expand the parent group (React components listen for this)
  window.dispatchEvent(new CustomEvent('expandQuestionGroup', { 
    detail: { questionId } 
  }))

  // Wait a bit for React to update, then scroll
  setTimeout(() => {
    const questionElement = document.querySelector(`[data-question-id="${questionId}"]`)
    if (questionElement) {
      // Scroll to the question
      questionElement.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      })

      // Add a temporary highlight effect
      questionElement.style.backgroundColor = 'rgba(76, 175, 80, 0.3)'
      setTimeout(() => {
        questionElement.style.backgroundColor = ''
      }, 2000)
    } else {
      console.log('Question element not found:', questionId)
    }
  }, 100)
}

// Expose on window for legacy DOM event handlers (e.g., onclick attributes in HTML)
// Only toggleQuestion and scrollToQuestion are still used by DOM onclick handlers
if (typeof window !== 'undefined') {
  window.toggleQuestion = toggleQuestion
  window.resetAllQuestions = resetAllQuestions
  window.scrollToQuestion = scrollToQuestion
}


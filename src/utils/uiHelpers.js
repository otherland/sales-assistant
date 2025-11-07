/**
 * UI helper functions for DOM manipulation
 * These are simple DOM helpers that may still be needed for non-React code
 */

/**
 * Toggle a navigation phase section
 * @param {HTMLElement} element - The element that triggered the toggle
 */
export function togglePhase(element) {
  const navSection = element.parentElement
  navSection.classList.toggle('collapsed')
}

/**
 * Toggle a question group's collapsed state
 * @param {HTMLElement} element - The element that triggered the toggle
 */
export function toggleQuestionGroup(element) {
  const questionGroup = element.parentElement
  questionGroup.classList.toggle('collapsed')
}

// These functions are no longer used - all UI toggling is handled by React components
// Keeping exports for potential future use, but not exposing on window


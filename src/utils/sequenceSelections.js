// Global state management for sequence selections
// Tracks: economy type (old/new), referral status, repeatable process status

const SEQUENCE_SELECTIONS_KEY = 'sequence_selections'

// Initialize default selections
const defaultSelections = {
  economyType: null, // 'old' or 'new'
  isReferral: false, // true if referral-based business
  hasRepeatableProcess: null // true or false
}

// Get current selections from localStorage
export function getSequenceSelections() {
  try {
    const stored = localStorage.getItem(SEQUENCE_SELECTIONS_KEY)
    if (stored) {
      const parsed = JSON.parse(stored)
      return { ...defaultSelections, ...parsed }
    }
  } catch (e) {
    console.error('Error loading sequence selections:', e)
  }
  return { ...defaultSelections }
}

// Save selections to localStorage
export function saveSequenceSelections(selections) {
  try {
    const current = getSequenceSelections()
    const updated = { ...current, ...selections }
    localStorage.setItem(SEQUENCE_SELECTIONS_KEY, JSON.stringify(updated))
    
    // Dispatch event to notify components of updates
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('sequenceSelectionsUpdated', { detail: updated }))
    }
    
    return updated
  } catch (e) {
    console.error('Error saving sequence selections:', e)
    return null
  }
}

// Update economy type (old or new)
export function setEconomyType(economyType) {
  if (economyType === 'old_economy' || economyType === 'new_economy') {
    const normalized = economyType === 'old_economy' ? 'old' : 'new'
    return saveSequenceSelections({ economyType: normalized })
  }
  return null
}

// Update referral status
export function setReferralStatus(isReferral) {
  return saveSequenceSelections({ isReferral: Boolean(isReferral) })
}

// Update repeatable process status
export function setRepeatableProcessStatus(hasRepeatableProcess) {
  return saveSequenceSelections({ hasRepeatableProcess: Boolean(hasRepeatableProcess) })
}

// Reset all selections
export function resetSequenceSelections() {
  try {
    localStorage.removeItem(SEQUENCE_SELECTIONS_KEY)
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('sequenceSelectionsUpdated', { detail: defaultSelections }))
    }
    return { ...defaultSelections }
  } catch (e) {
    console.error('Error resetting sequence selections:', e)
    return null
  }
}

// Get formatted display string for selections
export function getSelectionsDisplay() {
  const selections = getSequenceSelections()
  const parts = []
  
  if (selections.economyType) {
    parts.push(`Economy: ${selections.economyType === 'old' ? 'Old' : 'New'}`)
  }
  
  if (selections.isReferral !== null) {
    parts.push(`Referral: ${selections.isReferral ? 'Yes' : 'No'}`)
  }
  
  if (selections.hasRepeatableProcess !== null) {
    parts.push(`Repeatable Process: ${selections.hasRepeatableProcess ? 'Yes' : 'No'}`)
  }
  
  return parts.length > 0 ? parts.join(' • ') : 'No selections yet'
}

// Expose to window for global access
if (typeof window !== 'undefined') {
  window.getSequenceSelections = getSequenceSelections
  window.setEconomyType = setEconomyType
  window.setReferralStatus = setReferralStatus
  window.setRepeatableProcessStatus = setRepeatableProcessStatus
  window.resetSequenceSelections = resetSequenceSelections
  window.getSelectionsDisplay = getSelectionsDisplay
}


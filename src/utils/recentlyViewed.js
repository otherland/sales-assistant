/**
 * Recently viewed content tracking
 */

const MAX_RECENT_ITEMS = 10
const STORAGE_KEY = 'recently_viewed'

export function addToRecentlyViewed(type, id, title) {
  if (!type || !id) return

  const recent = getRecentlyViewed()
  
  // Remove if already exists
  const filtered = recent.filter(item => !(item.type === type && item.id === id))
  
  // Add to beginning
  const updated = [
    { type, id, title, timestamp: Date.now() },
    ...filtered
  ].slice(0, MAX_RECENT_ITEMS)

  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
  
  // Dispatch event for React components to update
  window.dispatchEvent(new CustomEvent('recentlyViewedUpdated'))
}

export function getRecentlyViewed() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored ? JSON.parse(stored) : []
  } catch (e) {
    console.error('Error reading recently viewed:', e)
    return []
  }
}

export function clearRecentlyViewed() {
  localStorage.removeItem(STORAGE_KEY)
  window.dispatchEvent(new CustomEvent('recentlyViewedUpdated'))
}


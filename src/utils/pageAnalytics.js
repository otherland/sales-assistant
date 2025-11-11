/**
 * Page Analytics Utility
 * Tracks page views and time spent on pages within sequential_flow.call_one
 */

const STORAGE_KEY = 'pageAnalytics'
const DEFAULT_TARGET_VIEWS = 3 // Default target views per page
const DAILY_TARGET_SECONDS = 180 // 3 minutes per day per page

/**
 * Get all analytics data from localStorage
 */
export function getAnalyticsData() {
  try {
    const data = localStorage.getItem(STORAGE_KEY)
    return data ? JSON.parse(data) : {}
  } catch (error) {
    console.error('Error reading analytics data:', error)
    return {}
  }
}

/**
 * Save analytics data to localStorage
 */
function saveAnalyticsData(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  } catch (error) {
    console.error('Error saving analytics data:', error)
  }
}

/**
 * Get today's date string (YYYY-MM-DD)
 */
function getTodayDateString() {
  return new Date().toISOString().split('T')[0]
}

/**
 * Initialize analytics for a page if it doesn't exist
 */
function ensurePageData(pageId, data) {
  if (!data[pageId]) {
    data[pageId] = {
      viewCount: 0,
      totalTimeSeconds: 0,
      targetViews: DEFAULT_TARGET_VIEWS,
      dailyTime: {}, // Track daily time: { "2024-01-01": 45, "2024-01-02": 120 }
      sessions: [] // Track individual viewing sessions
    }
  }
  return data[pageId]
}

/**
 * Increment view count for a page
 */
export function trackPageView(pageId) {
  const data = getAnalyticsData()
  const pageData = ensurePageData(pageId, data)
  pageData.viewCount += 1
  saveAnalyticsData(data)
  return pageData
}

/**
 * Add time spent on a page (in seconds)
 */
export function addPageTime(pageId, seconds) {
  const data = getAnalyticsData()
  const pageData = ensurePageData(pageId, data)
  pageData.totalTimeSeconds += seconds
  
  // Track daily time
  const today = getTodayDateString()
  if (!pageData.dailyTime) {
    pageData.dailyTime = {}
  }
  pageData.dailyTime[today] = (pageData.dailyTime[today] || 0) + seconds
  
  // Track session
  const session = {
    timestamp: new Date().toISOString(),
    duration: seconds
  }
  pageData.sessions.push(session)
  
  // Keep only last 100 sessions to prevent storage bloat
  if (pageData.sessions.length > 100) {
    pageData.sessions = pageData.sessions.slice(-100)
  }
  
  saveAnalyticsData(data)
  return pageData
}

/**
 * Set target views for a page
 */
export function setPageTarget(pageId, targetViews) {
  const data = getAnalyticsData()
  const pageData = ensurePageData(pageId, data)
  pageData.targetViews = targetViews
  saveAnalyticsData(data)
  return pageData
}

/**
 * Get analytics for a specific page
 */
export function getPageAnalytics(pageId) {
  const data = getAnalyticsData()
  return data[pageId] || {
    viewCount: 0,
    totalTimeSeconds: 0,
    targetViews: DEFAULT_TARGET_VIEWS,
    dailyTime: {},
    sessions: []
  }
}

/**
 * Get analytics for all pages
 */
export function getAllPageAnalytics() {
  return getAnalyticsData()
}

/**
 * Format seconds into readable time string
 */
export function formatTime(seconds) {
  if (seconds < 60) {
    return `${Math.round(seconds)}s`
  } else if (seconds < 3600) {
    const minutes = Math.floor(seconds / 60)
    const secs = Math.round(seconds % 60)
    return `${minutes}m ${secs}s`
  } else {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    return `${hours}h ${minutes}m`
  }
}

/**
 * Get progress percentage for a page (views / target)
 */
export function getPageProgress(pageId) {
  const analytics = getPageAnalytics(pageId)
  if (analytics.targetViews === 0) return 100
  return Math.min(100, Math.round((analytics.viewCount / analytics.targetViews) * 100))
}

/**
 * Get today's time spent on a page (in seconds)
 */
export function getTodayTime(pageId) {
  const analytics = getPageAnalytics(pageId)
  const today = getTodayDateString()
  return analytics.dailyTime?.[today] || 0
}

/**
 * Get progress percentage for daily time target (today's time / 180 seconds)
 */
export function getDailyTimeProgress(pageId) {
  const todayTime = getTodayTime(pageId)
  return Math.min(100, Math.round((todayTime / DAILY_TARGET_SECONDS) * 100))
}

/**
 * Get total time across all pages (in seconds)
 */
export function getTotalTimeAllPages() {
  const data = getAnalyticsData()
  let total = 0
  Object.values(data).forEach(pageData => {
    total += pageData.totalTimeSeconds || 0
  })
  return total
}

/**
 * Format time in minutes (for total time display)
 */
export function formatTimeMinutes(seconds) {
  const minutes = Math.floor(seconds / 60)
  return `${minutes}m`
}

/**
 * Check if page is in sequential_flow.call_one
 */
export function isCallOnePage(pageId, salesData) {
  if (!salesData?.sequential_flow?.call_one) return false
  return salesData.sequential_flow.call_one.some(item => item.id === pageId)
}

/**
 * Reset analytics for a specific page
 */
export function resetPageAnalytics(pageId) {
  const data = getAnalyticsData()
  if (data[pageId]) {
    delete data[pageId]
    saveAnalyticsData(data)
  }
}

/**
 * Reset all analytics
 */
export function resetAllAnalytics() {
  localStorage.removeItem(STORAGE_KEY)
}


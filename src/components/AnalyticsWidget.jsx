import React, { useState, useEffect } from 'react'
import { useContent } from '../context/ContentContext'
import { useSalesData } from '../context/SalesDataContext'
import { 
  getPageAnalytics, 
  getAllPageAnalytics, 
  formatTime, 
  formatTimeMinutes,
  getPageProgress,
  getTodayTime,
  getDailyTimeProgress,
  getTotalTimeAllPages,
  isCallOnePage 
} from '../utils/pageAnalytics'

function AnalyticsWidget() {
  const { contentType, contentId } = useContent()
  const { salesData } = useSalesData()
  const [isExpanded, setIsExpanded] = useState(false)
  const [currentPageData, setCurrentPageData] = useState(null)
  const [allPagesData, setAllPagesData] = useState({})
  const [currentPageStartTime, setCurrentPageStartTime] = useState(null)
  const [currentPageLiveTime, setCurrentPageLiveTime] = useState(0)
  const [isVisible, setIsVisible] = useState(() => {
    const saved = localStorage.getItem('analyticsWidgetVisible')
    return saved !== null ? saved === 'true' : true
  })

  // Update analytics data when content changes
  useEffect(() => {
    if (contentType === 'content' && contentId && salesData) {
      if (isCallOnePage(contentId, salesData)) {
        const analytics = getPageAnalytics(contentId)
        setCurrentPageData(analytics)
        setCurrentPageStartTime(Date.now())
        setCurrentPageLiveTime(analytics.totalTimeSeconds)
      } else {
        setCurrentPageData(null)
        setCurrentPageStartTime(null)
        setCurrentPageLiveTime(0)
      }
      
      // Update all pages data
      setAllPagesData(getAllPageAnalytics())
    } else {
      setCurrentPageData(null)
      setCurrentPageStartTime(null)
      setCurrentPageLiveTime(0)
    }
  }, [contentType, contentId, salesData])

  // Update current page time in real time
  useEffect(() => {
    if (!currentPageData || !currentPageStartTime || contentType !== 'content' || !isCallOnePage(contentId, salesData)) {
      return
    }

    const interval = setInterval(() => {
      // Refresh the base time from localStorage in case it was updated
      const latestAnalytics = getPageAnalytics(contentId)
      const elapsed = (Date.now() - currentPageStartTime) / 1000
      setCurrentPageLiveTime(latestAnalytics.totalTimeSeconds + elapsed)
    }, 1000) // Update every second

    return () => clearInterval(interval)
  }, [currentPageData, currentPageStartTime, contentType, contentId, salesData])

  // Refresh all pages data periodically when expanded
  useEffect(() => {
    if (!isExpanded) return
    
    const interval = setInterval(() => {
      setAllPagesData(getAllPageAnalytics())
    }, 1000) // Update every second
    
    return () => clearInterval(interval)
  }, [isExpanded])

  const toggleVisibility = () => {
    const newVisible = !isVisible
    setIsVisible(newVisible)
    localStorage.setItem('analyticsWidgetVisible', newVisible.toString())
  }

  if (!isVisible) {
    return (
      <button
        className="analytics-widget-toggle"
        onClick={toggleVisibility}
        title="Show Analytics"
        aria-label="Show Analytics"
      >
        📊
      </button>
    )
  }

  const currentPage = salesData?.sequential_flow?.call_one?.find(item => item.id === contentId)

  // Get all call_one pages with their analytics
  const allCallOnePages = salesData?.sequential_flow?.call_one || []
  const pagesWithAnalytics = allCallOnePages.map(page => ({
    ...page,
    analytics: getPageAnalytics(page.id)
  }))
  
  const totalTimeAllPages = getTotalTimeAllPages()

  return (
    <div className={`analytics-widget ${isExpanded ? 'expanded' : ''}`}>
      <div className="analytics-widget-header">
        <h3>Page Analytics</h3>
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <button
            className="analytics-widget-expand"
            onClick={() => setIsExpanded(!isExpanded)}
            aria-label={isExpanded ? 'Collapse' : 'Expand'}
            title={isExpanded ? 'Collapse' : 'Expand'}
          >
            {isExpanded ? '▼' : '▲'}
          </button>
          <button
            className="analytics-widget-close"
            onClick={toggleVisibility}
            title="Hide Analytics"
            aria-label="Hide Analytics"
          >
            ×
          </button>
        </div>
      </div>

      {currentPageData && contentType === 'content' && isCallOnePage(contentId, salesData) ? (
        <div className="analytics-widget-current">
          <div className="analytics-page-title">
            <strong>{currentPage?.title || contentId}</strong>
          </div>

          <div className="analytics-metric">
            <div className="analytics-metric-label">Time Spent</div>
            <div className="analytics-metric-value">
              {formatTime(currentPageLiveTime)}
            </div>
          </div>
        </div>
      ) : (
        <div className="analytics-widget-current">
          <p className="analytics-no-data">
            {contentType === 'content' 
              ? 'Not tracking this page' 
              : 'Navigate to a Call One page to see analytics'}
          </p>
        </div>
      )}

      {isExpanded && (
        <div className="analytics-widget-all-pages">
          <div className="analytics-total-time">
            <strong>Total Time: {formatTimeMinutes(totalTimeAllPages)}</strong>
          </div>
          <h4>All Pages</h4>
          {pagesWithAnalytics.length > 0 ? (
            <div className="analytics-pages-list">
              {pagesWithAnalytics.map(page => {
                const todayTime = getTodayTime(page.id)
                const dailyProgress = getDailyTimeProgress(page.id)
                // If this is the current page, use live time
                const displayTime = page.id === contentId && currentPageLiveTime > 0 
                  ? currentPageLiveTime 
                  : page.analytics.totalTimeSeconds
                return (
                  <div key={page.id} className="analytics-page-item">
                    <div className="analytics-page-item-title">{page.title}</div>
                    <div className="analytics-page-item-stats">
                      <span className="analytics-stat">
                        ⏱️ {formatTime(displayTime)}
                      </span>
                      <span className="analytics-stat">
                        📅 Today: {formatTime(todayTime)}/3m
                      </span>
                    </div>
                    <div className="analytics-metric-label" style={{ marginBottom: '0.25rem', marginTop: '0.5rem' }}>
                      Daily Time Progress
                    </div>
                    <div className="analytics-progress-bar">
                      <div 
                        className="analytics-progress-fill"
                        style={{ width: `${dailyProgress}%` }}
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          ) : (
            <p className="analytics-no-data">No page data yet</p>
          )}
        </div>
      )}
    </div>
  )
}

export default AnalyticsWidget


import React, { useState, useEffect } from 'react'
import { useContent } from '../context/ContentContext'
import { getRecentlyViewed } from '../utils/recentlyViewed'

function RecentlyViewed() {
  const { loadContent, loadHandler, loadReferenceContent, loadObjection } = useContent()
  const [recentItems, setRecentItems] = useState([])
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    const updateRecent = () => {
      setRecentItems(getRecentlyViewed())
    }

    updateRecent()

    window.addEventListener('recentlyViewedUpdated', updateRecent)
    return () => window.removeEventListener('recentlyViewedUpdated', updateRecent)
  }, [])

  if (recentItems.length === 0) return null

  const handleItemClick = (item) => {
    switch (item.type) {
      case 'content':
        loadContent(item.id)
        break
      case 'handler':
        loadHandler(item.id)
        break
      case 'reference':
        loadReferenceContent(item.id)
        break
      case 'objection':
        loadObjection(parseInt(item.id))
        break
    }
  }

  const getTypeIcon = (type) => {
    const icons = {
      content: '📋',
      handler: '⛽',
      reference: '📚',
      objection: '⚠️'
    }
    return icons[type] || '📄'
  }

  return (
    <div className={`recently-viewed ${isExpanded ? 'expanded' : ''}`}>
      <div 
        className="recently-viewed-header"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span className="recently-viewed-label">Recently Viewed</span>
        <span className="recently-viewed-toggle">
          {isExpanded ? '▲' : '▼'}
        </span>
      </div>
      {isExpanded && (
        <div className="recently-viewed-list">
          {recentItems.map((item, index) => (
            <div
              key={`${item.type}-${item.id}-${index}`}
              className="recently-viewed-item"
              onClick={() => handleItemClick(item)}
            >
              <span className="recently-viewed-item-icon">{getTypeIcon(item.type)}</span>
              <span className="recently-viewed-item-title" title={item.title}>
                {item.title || `${item.type} #${item.id}`}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default RecentlyViewed


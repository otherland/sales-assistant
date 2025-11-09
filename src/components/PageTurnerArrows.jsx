import React from 'react'
import { useContent } from '../context/ContentContext'
import { useSalesData } from '../context/SalesDataContext'

function PageTurnerArrows() {
  const { contentType, contentId, loadContent } = useContent()
  const { salesData } = useSalesData()

  // Only show arrows for sequential content
  if (contentType !== 'content' || !salesData?.sequential_flow?.call_one) {
    return null
  }

  const currentIndex = salesData.sequential_flow.call_one.findIndex(i => i.id === contentId)
  const prevItem = currentIndex > 0 ? salesData.sequential_flow.call_one[currentIndex - 1] : null
  const nextItem = currentIndex < salesData.sequential_flow.call_one.length - 1 
    ? salesData.sequential_flow.call_one[currentIndex + 1] 
    : null

  if (!prevItem && !nextItem) return null

  return (
    <>
      {prevItem && (
        <button 
          className="page-turner-arrow page-turner-arrow-left" 
          onClick={() => loadContent(prevItem.id)}
          aria-label={`Previous: ${prevItem.title.split('—')[0].trim()}`}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>
      )}
      {nextItem && (
        <button 
          className="page-turner-arrow page-turner-arrow-right" 
          onClick={() => loadContent(nextItem.id)}
          aria-label={`Next: ${nextItem.title.split('—')[0].trim()}`}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </button>
      )}
    </>
  )
}

export default PageTurnerArrows


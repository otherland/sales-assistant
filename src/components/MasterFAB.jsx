import React, { useState, useEffect } from 'react'

function MasterFAB({ children }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth <= 768)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
      // Auto-collapse when switching to desktop
      if (window.innerWidth > 768) {
        setIsExpanded(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Close when clicking outside on mobile
  useEffect(() => {
    if (!isExpanded || !isMobile) return

    const handleClickOutside = (e) => {
      // Check if click is outside all FABs
      const fabs = document.querySelectorAll('.fab-button, .master-fab')
      let clickedFab = false
      fabs.forEach(fab => {
        if (fab.contains(e.target)) {
          clickedFab = true
        }
      })
      
      // If clicked outside and not on a FAB button, collapse
      if (!clickedFab) {
        setIsExpanded(false)
      }
    }

    // Small delay to avoid immediate collapse on click
    const timeout = setTimeout(() => {
      document.addEventListener('click', handleClickOutside)
    }, 100)

    return () => {
      clearTimeout(timeout)
      document.removeEventListener('click', handleClickOutside)
    }
  }, [isExpanded, isMobile])

  const toggleExpanded = (e) => {
    e.stopPropagation()
    setIsExpanded(!isExpanded)
  }

  // Clone children and pass expanded state
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { 
        expanded: isExpanded,
        isMobile: isMobile,
        onAction: () => {
          // Auto-collapse after action on mobile
          if (isMobile) {
            setIsExpanded(false)
          }
        }
      })
    }
    return child
  })

  return (
    <>
      {isMobile && (
        <button
          className={`master-fab ${isExpanded ? 'expanded' : ''}`}
          onClick={toggleExpanded}
          aria-label={isExpanded ? 'Collapse menu' : 'Expand menu'}
          aria-expanded={isExpanded}
        >
          <span className="master-fab-icon">{isExpanded ? '✕' : '+'}</span>
        </button>
      )}
      {childrenWithProps}
    </>
  )
}

export default MasterFAB


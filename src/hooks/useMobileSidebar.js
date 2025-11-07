import { useState, useEffect, useCallback } from 'react'

export function useMobileSidebar() {
  const [leftSidebarOpen, setLeftSidebarOpen] = useState(false)
  const [rightSidebarOpen, setRightSidebarOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

  // Sync body overflow with sidebar states
  useEffect(() => {
    if (leftSidebarOpen || rightSidebarOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [leftSidebarOpen, rightSidebarOpen])

  useEffect(() => {
    function handleResize() {
      const mobile = window.innerWidth <= 768
      setIsMobile(mobile)
      
      // Close sidebars when switching from mobile to desktop
      if (!mobile) {
        setLeftSidebarOpen(false)
        setRightSidebarOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Touch/swipe handling for mobile
  useEffect(() => {
    if (!isMobile) return

    let touchStartX = 0
    let touchStartY = 0
    let touchEndX = 0
    let touchEndY = 0
    const minSwipeDistance = 50
    const maxVerticalDistance = 100

    function handleTouchStart(e) {
      touchStartX = e.touches[0].clientX
      touchStartY = e.touches[0].clientY
    }

    function handleTouchMove(e) {
      const deltaX = Math.abs(e.touches[0].clientX - touchStartX)
      const deltaY = Math.abs(e.touches[0].clientY - touchStartY)
      
      // Prevent scrolling during horizontal swipes
      if (deltaX > deltaY && deltaX > 30) {
        e.preventDefault()
      }
    }

    function handleTouchEnd(e) {
      touchEndX = e.changedTouches[0].clientX
      touchEndY = e.changedTouches[0].clientY
      
      const deltaX = touchEndX - touchStartX
      const deltaY = Math.abs(touchEndY - touchStartY)

      // Ignore if vertical movement is too large
      if (deltaY > maxVerticalDistance) return

      // Determine swipe direction
      if (Math.abs(deltaX) < minSwipeDistance) return

      // Left edge swipe - open left sidebar
      if (touchStartX < 50 && deltaX > 0) {
        setLeftSidebarOpen(true)
      }
      // Right edge swipe - open right sidebar
      else if (touchStartX > window.innerWidth - 50 && deltaX < 0) {
        setRightSidebarOpen(true)
      }
      // Close sidebars with swipe gestures
      else if (leftSidebarOpen && deltaX < -minSwipeDistance) {
        setLeftSidebarOpen(false)
      }
      else if (rightSidebarOpen && deltaX > minSwipeDistance) {
        setRightSidebarOpen(false)
      }
    }

    document.addEventListener('touchstart', handleTouchStart, { passive: false })
    document.addEventListener('touchmove', handleTouchMove, { passive: false })
    document.addEventListener('touchend', handleTouchEnd, { passive: false })

    return () => {
      document.removeEventListener('touchstart', handleTouchStart)
      document.removeEventListener('touchmove', handleTouchMove)
      document.removeEventListener('touchend', handleTouchEnd)
    }
  }, [isMobile, leftSidebarOpen, rightSidebarOpen])

  const openLeftSidebar = useCallback(() => {
    setLeftSidebarOpen(true)
  }, [])

  const closeLeftSidebar = useCallback(() => {
    setLeftSidebarOpen(false)
  }, [])

  const openRightSidebar = useCallback(() => {
    setRightSidebarOpen(true)
  }, [])

  const closeRightSidebar = useCallback(() => {
    setRightSidebarOpen(false)
  }, [])

  const closeSidebars = useCallback(() => {
    setLeftSidebarOpen(false)
    setRightSidebarOpen(false)
  }, [])

  return {
    leftSidebarOpen,
    rightSidebarOpen,
    isMobile,
    openLeftSidebar,
    closeLeftSidebar,
    openRightSidebar,
    closeRightSidebar,
    closeSidebars
  }
}


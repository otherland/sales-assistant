import React, { useState, useEffect } from 'react'
import { useSalesData } from '../context/SalesDataContext'
import ContentDisplay from './ContentDisplay'

function MainContent({ onOpenLeftSidebar, onOpenRightSidebar }) {
  const { loading } = useSalesData()
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth <= 768)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  if (loading) {
    return (
      <main className="main-content">
        {isMobile && (
          <>
            <button 
              className="sidebar-toggle sidebar-toggle-left"
              onClick={onOpenLeftSidebar}
              aria-label="Open left sidebar"
            >
              ☰
            </button>
            <button 
              className="sidebar-toggle sidebar-toggle-right"
              onClick={onOpenRightSidebar}
              aria-label="Open right sidebar"
            >
              ☷
            </button>
          </>
        )}
        <div className="content-wrapper">
          <div id="content-area">
            <div className="welcome-screen">
              <h2>Loading...</h2>
            </div>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="main-content">
      {isMobile && (
        <>
          <button 
            className="sidebar-toggle sidebar-toggle-left"
            onClick={onOpenLeftSidebar}
            aria-label="Open left sidebar"
          >
            ☰
          </button>
          <button 
            className="sidebar-toggle sidebar-toggle-right"
            onClick={onOpenRightSidebar}
            aria-label="Open right sidebar"
          >
            ☷
          </button>
        </>
      )}
      <div className="content-wrapper">
        <div id="content-area">
          <ContentDisplay />
        </div>
      </div>
    </main>
  )
}

export default MainContent


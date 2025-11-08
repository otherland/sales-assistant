import React, { useState, useEffect } from 'react'
import { useSalesData } from '../context/SalesDataContext'
import ContentDisplay from './ContentDisplay'

function MainContent({ leftSidebarOpen, rightSidebarOpen, onToggleLeftSidebar, onToggleRightSidebar }) {
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
            {!rightSidebarOpen && (
              <button 
                className={`sidebar-toggle sidebar-toggle-left ${leftSidebarOpen ? 'in-sidebar' : ''}`}
                onClick={onToggleLeftSidebar}
                aria-label={leftSidebarOpen ? 'Close left sidebar' : 'Open left sidebar'}
              >
                {leftSidebarOpen ? '×' : '☰'}
              </button>
            )}
            {!leftSidebarOpen && (
              <button 
                className={`sidebar-toggle sidebar-toggle-right ${rightSidebarOpen ? 'in-sidebar' : ''}`}
                onClick={onToggleRightSidebar}
                aria-label={rightSidebarOpen ? 'Close right sidebar' : 'Open right sidebar'}
              >
                {rightSidebarOpen ? '×' : '☷'}
              </button>
            )}
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
          {!rightSidebarOpen && (
            <button 
              className={`sidebar-toggle sidebar-toggle-left ${leftSidebarOpen ? 'in-sidebar' : ''}`}
              onClick={onToggleLeftSidebar}
              aria-label={leftSidebarOpen ? 'Close left sidebar' : 'Open left sidebar'}
            >
              {leftSidebarOpen ? '×' : '☰'}
            </button>
          )}
          {!leftSidebarOpen && (
            <button 
              className={`sidebar-toggle sidebar-toggle-right ${rightSidebarOpen ? 'in-sidebar' : ''}`}
              onClick={onToggleRightSidebar}
              aria-label={rightSidebarOpen ? 'Close right sidebar' : 'Open right sidebar'}
            >
              {rightSidebarOpen ? '×' : '☷'}
            </button>
          )}
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


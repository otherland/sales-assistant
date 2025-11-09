import React, { useState, useEffect } from 'react'
import LeftSidebar from './components/LeftSidebar'
import RightSidebar from './components/RightSidebar'
import MainContent from './components/MainContent'
import SettingsPopup from './components/SettingsPopup'
import SettingsFAB from './components/SettingsFAB'
import AdviceToggleFAB from './components/AdviceToggleFAB'
import ResumeFAB from './components/ResumeFAB'
import GlobalSearch from './components/GlobalSearch'
import ProgressIndicator from './components/ProgressIndicator'
import RecentlyViewed from './components/RecentlyViewed'
import EmergencyScripts from './components/EmergencyScripts'
import { useMobileSidebar } from './hooks/useMobileSidebar'
import { SalesDataProvider } from './context/SalesDataContext'
import { ContentProvider } from './context/ContentContext'
import { addToRecentlyViewed } from './utils/recentlyViewed'

function App() {
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [globalSearchOpen, setGlobalSearchOpen] = useState(false)
  const [adviceVisible, setAdviceVisible] = useState(true)
  const [layoutReversed, setLayoutReversed] = useState(() => {
    return localStorage.getItem('layout-reversed') === 'true'
  })
  const { 
    leftSidebarOpen, 
    rightSidebarOpen, 
    openLeftSidebar, 
    closeLeftSidebar, 
    openRightSidebar, 
    closeRightSidebar,
    closeSidebars 
  } = useMobileSidebar()

  // Sync advice visibility with body class
  useEffect(() => {
    if (adviceVisible) {
      document.body.classList.remove('advice-hidden')
    } else {
      document.body.classList.add('advice-hidden')
    }
  }, [adviceVisible])

  // Expose addToRecentlyViewed on window for ContentContext
  useEffect(() => {
    window.addToRecentlyViewed = addToRecentlyViewed
    return () => {
      delete window.addToRecentlyViewed
    }
  }, [])

  // Global search keyboard shortcut (Cmd/Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setGlobalSearchOpen(prev => !prev)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Apply layout reversal
  useEffect(() => {
    localStorage.setItem('layout-reversed', layoutReversed.toString())
  }, [layoutReversed])

  return (
    <SalesDataProvider>
      <ContentProvider>
        <div className={`container ${layoutReversed ? 'layout-reversed' : ''}`}>
        <LeftSidebar 
          isOpen={leftSidebarOpen}
          onClose={closeLeftSidebar}
        />
        <MainContent 
          leftSidebarOpen={leftSidebarOpen}
          rightSidebarOpen={rightSidebarOpen}
          onToggleLeftSidebar={leftSidebarOpen ? closeLeftSidebar : openLeftSidebar}
          onToggleRightSidebar={rightSidebarOpen ? closeRightSidebar : openRightSidebar}
        />
        <RightSidebar 
          isOpen={rightSidebarOpen}
          onClose={closeRightSidebar}
        />
      </div>

      {/* Mobile Sidebar Overlay */}
      {(leftSidebarOpen || rightSidebarOpen) && (
        <div 
          className="sidebar-overlay active" 
          onClick={closeSidebars}
        />
      )}

      {/* Settings Popup */}
      <SettingsPopup 
        isOpen={settingsOpen}
        onClose={() => setSettingsOpen(false)}
        layoutReversed={layoutReversed}
        onLayoutReversedChange={setLayoutReversed}
      />

      {/* Global Search */}
      <GlobalSearch 
        isOpen={globalSearchOpen}
        onClose={() => setGlobalSearchOpen(false)}
      />

      {/* FAB Buttons */}
      <SettingsFAB onClick={() => setSettingsOpen(!settingsOpen)} />
      <AdviceToggleFAB 
        isVisible={adviceVisible}
        onClick={() => setAdviceVisible(!adviceVisible)}
      />
      <ResumeFAB />
      <EmergencyScripts />
      </ContentProvider>
    </SalesDataProvider>
  )
}

export default App


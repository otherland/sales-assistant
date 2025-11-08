import React, { useState, useEffect } from 'react'
import LeftSidebar from './components/LeftSidebar'
import RightSidebar from './components/RightSidebar'
import MainContent from './components/MainContent'
import SettingsPopup from './components/SettingsPopup'
import SettingsFAB from './components/SettingsFAB'
import AdviceToggleFAB from './components/AdviceToggleFAB'
import ResumeFAB from './components/ResumeFAB'
import { useMobileSidebar } from './hooks/useMobileSidebar'
import { SalesDataProvider } from './context/SalesDataContext'
import { ContentProvider } from './context/ContentContext'

function App() {
  const [settingsOpen, setSettingsOpen] = useState(false)
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

      {/* FAB Buttons */}
      <SettingsFAB onClick={() => setSettingsOpen(!settingsOpen)} />
      <AdviceToggleFAB 
        isVisible={adviceVisible}
        onClick={() => setAdviceVisible(!adviceVisible)}
      />
      <ResumeFAB />
      </ContentProvider>
    </SalesDataProvider>
  )
}

export default App


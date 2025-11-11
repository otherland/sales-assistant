import React, { useState, useEffect, useMemo } from 'react'
import { useSalesData } from '../context/SalesDataContext'
import { useContent } from '../context/ContentContext'
import ProgressIndicator from './ProgressIndicator'
import RecentlyViewed from './RecentlyViewed'
import { getDailyTimeProgress, getTotalTimeAllPages, formatTimeMinutes } from '../utils/pageAnalytics'

function LeftSidebar({ isOpen, onClose }) {
  const { salesData, referenceLibraries, loading } = useSalesData()
  const { loadContent, loadReferenceContent, contentId, contentType } = useContent()
  const [collapsedPhases, setCollapsedPhases] = useState({
    phase1: true,
    phase2: true,
    phase3: true,
    phase4: true,
    phase5: true,
    reference: true
  })
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth <= 768)
  const [refreshKey, setRefreshKey] = useState(0)

  // Update mobile state on resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Refresh analytics data periodically for real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setRefreshKey(prev => prev + 1)
    }, 1000) // Update every second
    
    // Also refresh when analytics are reset
    const handleAnalyticsReset = () => {
      setRefreshKey(prev => prev + 1)
    }
    window.addEventListener('analyticsReset', handleAnalyticsReset)
    
    return () => {
      clearInterval(interval)
      window.removeEventListener('analyticsReset', handleAnalyticsReset)
    }
  }, [])

  // Auto-expand the parent group when content changes
  useEffect(() => {
    if (!contentId || !salesData) return

    // Determine which phase/section to expand
    let phaseToExpand = null

    if (contentType === 'reference') {
      // Expand reference library section
      phaseToExpand = 'reference'
    } else if (contentType === 'content' && salesData?.sequential_flow?.call_one) {
      // Find the item and its phase
      const item = salesData.sequential_flow.call_one.find(i => i.id === contentId)
      if (item && item.phase) {
        phaseToExpand = `phase${item.phase}`
      }
    }

    // If we found a phase to expand, expand it and collapse all others
    if (phaseToExpand) {
      setCollapsedPhases(prev => {
        const newState = {
          phase1: true,
          phase2: true,
          phase3: true,
          phase4: true,
          phase5: true,
          reference: true
        }
        newState[phaseToExpand] = false // Expand the target phase
        return newState
      })
    }
  }, [contentId, contentType, salesData])

  // Get icon for reference library (must be defined before useMemo)
  const getReferenceIcon = (refId) => {
    const iconMap = {
      'two_economies': '🏢',
      'carpet_framework': '🧹',
      'discovery_framework': '🔍',
      'active_listening': '👂',
      'qualified_opportunity_anchor_mastery': '⚓',
      'discovery_objection_handling_os': '🛡️',
      'referrals_objection_mastery': '🔗',
      'story_mode_selling': '🎭',
      'mechanism_framing': '⚙️',
      'risk_mitigation_language': '🛡️',
      'micro_commitment_pattern': '✅',
      'dadd_formula': '📐',
      'curiosity_standard': '❓',
      'approval_flow_questions': '📋',
      'hormozi_diagnostic_router': '🎯'
    }
    return iconMap[refId] || '📚'
  }

  // Build reference libraries list dynamically from context
  // MUST be called before any conditional returns
  const referenceLibrariesList = useMemo(() => {
    if (!referenceLibraries?.reference_libraries) return []
    
    return Object.keys(referenceLibraries.reference_libraries)
      .map(refId => {
        const refData = referenceLibraries.reference_libraries[refId]
        return {
          id: refId,
          title: refData.title || refId,
          icon: getReferenceIcon(refId)
        }
      })
      .sort((a, b) => a.title.localeCompare(b.title)) // Optional: sort alphabetically
  }, [referenceLibraries])

  // Early return AFTER all hooks
  if (loading) {
    return (
      <nav className={`sidebar-left ${isOpen ? 'active' : ''}`}>
        <div className="sidebar-header">
          <h1>📞 CALL ONE FLOW</h1>
          <p>Loading...</p>
        </div>
      </nav>
    )
  }

  const togglePhase = (phaseKey) => {
    setCollapsedPhases(prev => ({
      ...prev,
      [phaseKey]: !prev[phaseKey]
    }))
  }

  const handleNavClick = (itemId) => {
    loadContent(itemId)
    if (window.innerWidth <= 768) {
      onClose()
    }
  }

  const handleReferenceClick = (refId) => {
    loadReferenceContent(refId)
    if (window.innerWidth <= 768) {
      onClose()
    }
  }

  // Group items by phase
  const phaseGroups = {}
  if (salesData?.sequential_flow?.call_one) {
    salesData.sequential_flow.call_one.forEach(item => {
      const phase = item.phase
      if (!phaseGroups[phase]) phaseGroups[phase] = []
      phaseGroups[phase].push(item)
    })
  }

  // Get icon for item
  const getItemIcon = (item) => {
    if (item.category === 'interrupt') return '⚠️'
    if (item.id === 'opening_frame') return '🎬'
    if (item.id === 'fork_deflection') return '🔀'
    if (item.id === 'discovery_intro') return '🎯'
    if (item.id === 'discovery_top_funnel') return '⬆️'
    if (item.id === 'discovery_middle_funnel') return '⚙️'
    if (item.id === 'discovery_bottom_funnel') return '💰'
    if (item.id === 'qoa_deployment_guide') return '⚓'
    if (item.id === 'integration_explanation') return '🔗'
    if (item.id === 'transition_call_two') return '📅'
    return '📄'
  }

  const totalTime = getTotalTimeAllPages()

  return (
    <nav className={`sidebar-left ${isOpen ? 'active' : ''}`}>
      <div className="sidebar-header">
        <h1>📞 CALL ONE FLOW</h1>
        <p>Revenue Discovery Script</p>
        <div className="sidebar-total-time">
          Total Time: {formatTimeMinutes(totalTime)}
        </div>
      </div>

      {/* Phase 1: Opening */}
      <div className={`nav-section ${collapsedPhases.phase1 ? 'collapsed' : ''}`}>
        <div className="nav-section-title" onClick={() => togglePhase('phase1')}>
          1. Opening
        </div>
        <div className="nav-content">
          {phaseGroups[1]?.map((item, index) => (
            <NavItem
              key={item.id}
              item={item}
              phase={1}
              index={index}
              icon={getItemIcon(item)}
              isActive={contentId === item.id}
              onClick={() => handleNavClick(item.id)}
              refreshKey={refreshKey}
            />
          ))}
        </div>
      </div>

      {/* Phase 2: Discovery */}
      <div className={`nav-section ${collapsedPhases.phase2 ? 'collapsed' : ''}`}>
        <div className="nav-section-title" onClick={() => togglePhase('phase2')}>
          2. Discovery
        </div>
        <div className="nav-content">
          {phaseGroups[2]?.map((item, index) => (
            <NavItem
              key={item.id}
              item={item}
              phase={2}
              index={index}
              icon={getItemIcon(item)}
              isActive={contentId === item.id}
              onClick={() => handleNavClick(item.id)}
              refreshKey={refreshKey}
            />
          ))}
        </div>
      </div>

      {/* Phase 3: Presentation */}
      <div className={`nav-section ${collapsedPhases.phase3 ? 'collapsed' : ''}`}>
        <div className="nav-section-title" onClick={() => togglePhase('phase3')}>
          3. Presentation
        </div>
        <div className="nav-content">
          {phaseGroups[3]?.map((item, index) => (
            <NavItem
              key={item.id}
              item={item}
              phase={3}
              index={index}
              icon={getItemIcon(item)}
              isActive={contentId === item.id}
              onClick={() => handleNavClick(item.id)}
              refreshKey={refreshKey}
            />
          ))}
        </div>
      </div>

      {/* Phase 4: Integration */}
      <div className={`nav-section ${collapsedPhases.phase4 ? 'collapsed' : ''}`}>
        <div className="nav-section-title" onClick={() => togglePhase('phase4')}>
          4. Integration
        </div>
        <div className="nav-content">
          {phaseGroups[4]?.map((item, index) => (
            <NavItem
              key={item.id}
              item={item}
              phase={4}
              index={index}
              icon={getItemIcon(item)}
              isActive={contentId === item.id}
              onClick={() => handleNavClick(item.id)}
              refreshKey={refreshKey}
            />
          ))}
        </div>
      </div>

      {/* Phase 5: Close */}
      <div className={`nav-section ${collapsedPhases.phase5 ? 'collapsed' : ''}`}>
        <div className="nav-section-title" onClick={() => togglePhase('phase5')}>
          5. Close
        </div>
        <div className="nav-content">
          {phaseGroups[5]?.map((item, index) => (
            <NavItem
              key={item.id}
              item={item}
              phase={5}
              index={index}
              icon={getItemIcon(item)}
              isActive={contentId === item.id}
              onClick={() => handleNavClick(item.id)}
              refreshKey={refreshKey}
            />
          ))}
        </div>
      </div>

      {/* Reference Library */}
      <div className={`nav-section nav-section-reference ${collapsedPhases.reference ? 'collapsed' : ''}`}>
        <div className="nav-section-title" onClick={() => togglePhase('reference')}>
          📚 Library
        </div>
        <div className="nav-content">
          {referenceLibrariesList.map((library) => (
            <div
              key={library.id}
              className={`nav-item ${contentId === library.id ? 'active' : ''}`}
              data-id={library.id}
              onClick={() => handleReferenceClick(library.id)}
            >
              <span className="nav-item-icon">{library.icon}</span>
              <span style={{ flex: 1 }}>{library.title}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Progress Indicator */}
      <ProgressIndicator />

      {/* Recently Viewed */}
      <RecentlyViewed />
    </nav>
  )
}

function NavItem({ item, phase, index, icon, isActive, onClick, refreshKey }) {
  if (!item.id || !item.title) return null

  const pageNumber = `${phase}.${index + 1}`
  // refreshKey forces re-render to get latest analytics data
  const dailyProgress = getDailyTimeProgress(item.id)

  return (
    <div
      className={`nav-item ${isActive ? 'active' : ''}`}
      data-id={item.id}
      onClick={onClick}
    >
      <span className="nav-item-number">{pageNumber}</span>
      <span className="nav-item-icon">{icon}</span>
      <span style={{ flex: 1 }}>{item.title.split('—')[0].trim()}</span>
      <span className="nav-item-progress">{dailyProgress}%</span>
    </div>
  )
}

export default LeftSidebar

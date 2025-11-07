import React, { useState, useEffect } from 'react'
import { useSalesData } from '../context/SalesDataContext'
import { useContent } from '../context/ContentContext'

function LeftSidebar({ isOpen, onClose }) {
  const { salesData, loading } = useSalesData()
  const { loadContent, loadReferenceContent, contentId } = useContent()
  const [collapsedPhases, setCollapsedPhases] = useState({
    phase1: true,
    phase2: true,
    phase3: true,
    phase4: true,
    phase5: true,
    reference: true
  })
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth <= 768)

  // Update mobile state on resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

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

  // Reference libraries
  const referenceLibraries = [
    { id: 'two_economies', title: 'Understanding The Two Economies', icon: '🏢' },
    { id: 'carpet_framework', title: 'CARPET Framework', icon: '🧹' },
    { id: 'discovery_framework', title: 'Discovery Framework', icon: '🔍' },
    { id: 'active_listening', title: 'Active Listening', icon: '👂' },
    { id: 'qualified_opportunity_anchor_mastery', title: 'QOA™ Complete Training Guide', icon: '⚓' },
    { id: 'discovery_objection_handling_os', title: 'Discovery Objection Handling OS', icon: '🛡️' },
    { id: 'referrals_objection_mastery', title: 'Referrals Objection Mastery', icon: '🔗' },
    { id: 'story_mode_selling', title: 'Story Mode Selling™', icon: '🎭' },
    { id: 'mechanism_framing', title: 'Mechanism Framing™', icon: '⚙️' },
    { id: 'risk_mitigation_language', title: 'Risk Mitigation Language', icon: '🛡️' },
    { id: 'micro_commitment_pattern', title: 'Micro-Commitment Pattern', icon: '✅' }
  ]

  return (
    <nav className={`sidebar-left ${isOpen ? 'active' : ''}`}>
      {/* Mobile toggle button */}
      {isMobile && (
        <button 
          className="sidebar-toggle sidebar-toggle-left"
          onClick={(e) => {
            e.stopPropagation()
            onClose()
          }}
          aria-label="Close left sidebar"
        >
          ←
        </button>
      )}
      <div className="sidebar-header">
        <h1>📞 CALL ONE FLOW</h1>
        <p>Revenue Discovery Script</p>
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
          {referenceLibraries.map((library) => (
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
    </nav>
  )
}

function NavItem({ item, phase, index, icon, isActive, onClick }) {
  if (!item.id || !item.title) return null

  const pageNumber = `${phase}.${index + 1}`

  return (
    <div
      className={`nav-item ${isActive ? 'active' : ''}`}
      data-id={item.id}
      onClick={onClick}
    >
      <span className="nav-item-number">{pageNumber}</span>
      <span className="nav-item-icon">{icon}</span>
      <span style={{ flex: 1 }}>{item.title.split('—')[0].trim()}</span>
    </div>
  )
}

export default LeftSidebar

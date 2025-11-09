/**
 * Phase Detection Utility
 * Determines current call phase from content ID or content item
 */

// Phase constants
export const PHASES = {
  OPENING_FRAME: 'opening_frame',
  DISCOVERY_TOF: 'discovery_tof', // Top of Funnel
  DISCOVERY_MOF: 'discovery_mof', // Middle of Funnel
  DISCOVERY_BOF: 'discovery_bof', // Bottom of Funnel
  THESIS: 'thesis',
  INTEGRATION: 'integration',
  CLOSE: 'close'
}

// Phase display names
export const PHASE_DISPLAY_NAMES = {
  [PHASES.OPENING_FRAME]: 'Opening Frame',
  [PHASES.DISCOVERY_TOF]: 'Discovery (Top of Funnel)',
  [PHASES.DISCOVERY_MOF]: 'Discovery (Middle of Funnel)',
  [PHASES.DISCOVERY_BOF]: 'Discovery (Bottom of Funnel)',
  [PHASES.THESIS]: 'Thesis Deployment',
  [PHASES.INTEGRATION]: 'Integration',
  [PHASES.CLOSE]: 'Close / Call Two'
}

/**
 * Detect phase from content ID
 * @param {string} contentId - The content item ID
 * @param {Object} salesData - The sales data object
 * @returns {string} - The detected phase
 */
export function detectPhaseFromContentId(contentId, salesData) {
  if (!contentId || !salesData?.sequential_flow?.call_one) {
    return PHASES.OPENING_FRAME // Default
  }

  const item = salesData.sequential_flow.call_one.find(i => i.id === contentId)
  if (!item) {
    return PHASES.OPENING_FRAME // Default
  }

  return detectPhaseFromItem(item)
}

/**
 * Detect phase from content item
 * @param {Object} item - The content item
 * @returns {string} - The detected phase
 */
export function detectPhaseFromItem(item) {
  if (!item) {
    return PHASES.OPENING_FRAME
  }

  // Direct phase property
  if (item.phase) {
    if (item.phase === 1) return PHASES.OPENING_FRAME
    if (item.phase === 2) {
      // Phase 2 has sections - determine which part of discovery
      if (item.section === 'A') return PHASES.DISCOVERY_TOF
      if (item.section === 'B') return PHASES.DISCOVERY_MOF
      if (item.section === 'C') return PHASES.DISCOVERY_BOF
      // Default to TOF if no section specified
      return PHASES.DISCOVERY_TOF
    }
    if (item.phase === 3) return PHASES.THESIS
    if (item.phase === 4) return PHASES.INTEGRATION
    if (item.phase === 5) return PHASES.CLOSE
  }

  // Fallback: detect from ID patterns
  if (item.id) {
    if (item.id.includes('opening')) return PHASES.OPENING_FRAME
    if (item.id.includes('discovery_top') || item.id.includes('discovery_referral')) return PHASES.DISCOVERY_TOF
    if (item.id.includes('discovery_mid') || item.id.includes('discovery_middle')) return PHASES.DISCOVERY_MOF
    if (item.id.includes('discovery_bottom') || item.id.includes('discovery_bof')) return PHASES.DISCOVERY_BOF
    if (item.id.includes('thesis') || item.id.includes('tic_tac_toe')) return PHASES.THESIS
    if (item.id.includes('integration') || item.id.includes('pricing')) return PHASES.INTEGRATION
    if (item.id.includes('call_two') || item.id.includes('close')) return PHASES.CLOSE
  }

  return PHASES.OPENING_FRAME // Default
}

/**
 * Get phase display name
 * @param {string} phase - The phase constant
 * @returns {string} - Display name
 */
export function getPhaseDisplayName(phase) {
  return PHASE_DISPLAY_NAMES[phase] || 'Unknown Phase'
}


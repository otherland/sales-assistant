/**
 * Phase-to-Handler Mapping
 * Maps call phases to most likely objection handlers
 * Based on Intelligent Objection Handler System Specification
 */

import { PHASES } from './phaseDetection'

/**
 * Phase-to-Handler Mapping
 * Each phase maps to an array of handler IDs in order of likelihood
 */
export const PHASE_HANDLER_MAPPING = {
  [PHASES.OPENING_FRAME]: [
    'differentiation_question', // "What do you do?" / "Tell me about your company"
    'send_info_first', // "Send me some info first"
    'just_email_me_info', // Similar to send_info_first
    'call_length_question', // "I don't have time right now"
    'research_mode', // "How did you get my info?" / research deflection
    'not_interested', // "We're not interested in vendors"
    'who_else_worked_with', // Social proof requests
  ],

  [PHASES.DISCOVERY_TOF]: [
    'referrals_objection', // "We grow through referrals" / "Do you have connections?"
    'we_only_do_referrals', // "We grow through referrals"
    'were_doing_fine_without_help', // "We're doing fine without help"
    'budget_constraints', // "We don't have budget"
    'past_vendor_failure', // "We've tried vendors before / been burned"
    'entity_size_credibility', // "We only work with people who know our industry"
    'referral_purist', // Referral-focused objections
    'wont_engage_discovery', // "Won't engage in discovery process"
  ],

  [PHASES.DISCOVERY_MOF]: [
    'why_do_you_need_to_know_this', // "Why do you need to know this?"
    'thats_confidential_information', // "That's confidential information"
    'this_is_too_many_questions', // "This is too many questions"
    'wont_engage_discovery', // "Won't engage in discovery process"
    'can_i_get_back_to_you', // "Can I get back to you on that?"
    'i_need_to_check_with_my_team_first', // "I need to check with my team first"
    'were_rebuilding_our_process_right_now', // "We're rebuilding our process right now"
    'why_does_that_matter', // Questioning relevance
  ],

  [PHASES.DISCOVERY_BOF]: [
    'budget_constraints', // "We can't afford that range"
    'can_we_pay_monthly_instead_of_upfront', // "Why do you need payment upfront?"
    'free_pilot', // "Can we do a trial first?"
    'our_sales_cycle_is_too_long', // "Our sales cycle is too long"
    'guarantees', // "We want guarantees"
    'payment_plans', // Payment structure questions
  ],

  [PHASES.THESIS]: [
    'what_tools', // "How do you actually do it?" (mechanism questions)
    'channel_questions', // "How do you do it?" (channels)
    'case_studies', // "Prove it works" / "Show me results"
    'what_makes_you_different', // "Why you vs. an agency?"
    'entity_size_credibility', // "Do you have experience in our industry?"
    'competitor_cheaper', // "That sounds like everyone else"
    'messaging_approach', // "We need to see the messaging first"
  ],

  [PHASES.INTEGRATION]: [
    'timing_isnt_right', // "Need to think about it"
    'lets_revisit_later', // Deferral
    'discount_request', // "Can you discount?"
    'payment_terms', // "Payment terms / installments"
    'proof_of_concept', // "What if it doesn't work?"
    'board_approval', // "Need to run this by [stakeholder]"
  ],

  [PHASES.CLOSE]: [
    'timing_isnt_right', // "Need to think about it"
    'lets_revisit_later', // Deferral
    'discount_request', // "Can you discount?"
    'payment_terms', // "Payment terms / installments"
    'proof_of_concept', // "What if it doesn't work?"
    'board_approval', // "Need to run this by [stakeholder]"
  ]
}

/**
 * Get predictive handlers for a given phase
 * @param {string} phase - The current phase
 * @param {Object} salesData - Sales data containing handlers
 * @param {number} maxHandlers - Maximum number of handlers to return (default: 7)
 * @returns {Array} - Array of handler objects with id, title, quick_response, etc.
 */
export function getPredictiveHandlers(phase, salesData, maxHandlers = 7) {
  if (!phase || !salesData?.objection_handlers?.handlers) {
    return []
  }

  const handlerIds = PHASE_HANDLER_MAPPING[phase] || []
  const handlers = salesData.objection_handlers.handlers

  // Map handler IDs to handler objects, filtering out missing handlers
  const predictiveHandlers = handlerIds
    .slice(0, maxHandlers)
    .map(handlerId => {
      const handler = handlers[handlerId]
      if (!handler) return null
      return {
        id: handlerId,
        title: handler.title || handlerId,
        trigger: handler.trigger || '',
        quick_response: handler.quick_response || '',
        category: handler.category || 'Other',
        handler // Include full handler object
      }
    })
    .filter(Boolean) // Remove null entries

  return predictiveHandlers
}

/**
 * Get all handlers for a phase (not just predictive)
 * Useful for "Show All [Phase] Handlers" functionality
 * @param {string} phase - The current phase
 * @param {Object} salesData - Sales data containing handlers
 * @returns {Array} - Array of all handler objects for this phase
 */
export function getAllHandlersForPhase(phase, salesData) {
  if (!phase || !salesData?.objection_handlers?.handlers) {
    return []
  }

  const handlerIds = PHASE_HANDLER_MAPPING[phase] || []
  const handlers = salesData.objection_handlers.handlers

  return handlerIds
    .map(handlerId => {
      const handler = handlers[handlerId]
      if (!handler) return null
      return {
        id: handlerId,
        title: handler.title || handlerId,
        trigger: handler.trigger || '',
        quick_response: handler.quick_response || '',
        category: handler.category || 'Other',
        handler
      }
    })
    .filter(Boolean)
}


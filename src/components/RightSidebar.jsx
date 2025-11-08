import React, { useState, useMemo, useEffect } from 'react'
import { useSalesData } from '../context/SalesDataContext'
import { useContent } from '../context/ContentContext'

// Framework sequential order for categories
const CATEGORY_ORDER = [
  'Opening',
  'Fork',
  'Discovery',
  'Tic-Tac-Toe',
  'Money',
  'Quality',
  'Timing',
  'How',
  'Referrals',
  'Competition',
  'Process',
  'Legal',
  'Issues',
  'Call Two',
  'Disqualify',
  'Edge Cases',
  'Other'
]

// Category emoji mapping
const CATEGORY_EMOJIS = {
  'Money': '💰',
  'Quality': '⭐',
  'Timing': '⏰',
  'Opening': '🎬',
  'Fork': '🔀',
  'Discovery': '🔍',
  'Tic-Tac-Toe': '🎯',
  'Process': '⚙️',
  'Legal': '📜',
  'How': '⚙️',
  'Referrals': '🤝',
  'Competition': '🏆',
  'Disqualify': '🚩',
  'Edge Cases': '🎲',
  'Issues': '⚠️',
  'Call Two': '➡️',
  'Other': '📄'
}

// Category mapping: old category names -> new consolidated names
const CATEGORY_MAP = {
  // Discovery consolidation
  'Discovery Top': 'Discovery',
  'Discovery Mid': 'Discovery',
  'Discovery Bottom': 'Discovery',
  // Tic-Tac-Toe consolidation
  'Tic': 'Tic-Tac-Toe',
  'Tac': 'Tic-Tac-Toe',
  'Toe': 'Tic-Tac-Toe',
  'Var Mechanism': 'Tic-Tac-Toe',
  'Var Quality': 'Tic-Tac-Toe',
  'Var Timing': 'Tic-Tac-Toe',
  // Process consolidation
  'Scope': 'Process',
  'Internal': 'Process',
  // Issues consolidation
  'Integration': 'Issues',
  'Integration/Close Issues': 'Issues',
  'Mid Issues': 'Issues',
  'Post Issues': 'Issues'
}

// Unique emoji mapping for each handler
const HANDLER_EMOJIS = {
  // Money & Budget
  'discount_request': '💸',
  'payment_terms': '💳',
  'budget_constraints': '📉',
  'free_pilot': '🆓',
  'performance_only': '📊',
  'roi_questions': '📈',
  'cost_breakdown': '🧾',
  'payment_plans': '💵',
  'can_we_pay_monthly_instead_of_upfront': '📅',
  'can_we_do_month_to_month': '🗓️',
  'we_have_budget_approved_for_x_but_youre_at_y': '⚖️',
  'were_in_a_budget_freeze_right_now': '❄️',
  
  // Quality & Proof
  'quality_concern_early': '⚠️',
  'quality_concern_late': '🚨',
  'quality_concern_toe': '🛡️',
  'case_studies': '📚',
  'references': '👥',
  'proof_of_concept': '🧪',
  'past_vendor_failure': '💔',
  'story_mode': '📖',
  'entity_size_credibility': '🏢',
  'will_they_convert': '✅',
  'define_qualified': '🎯',
  'verification_questions': '🔎',
  'case_study_request_mid_explanation': '📖',
  
  // Timing & Process
  'timing_isnt_right': '⏸️',
  'budget_cycle': '🔄',
  'lets_revisit_later': '⏭️',
  'need_more_time': '⏳',
  'send_info_first': '📧',
  'call_length_question': '⏱️',
  'can_we_make_this_quick': '⚡',
  'guarantees': '🤝',
  'just_email_me_info': '📨',
  'research_mode': '🔬',
  'not_interested': '🚫',
  'emergency_reschedule': '🚑',
  
  // Opening Frame
  'differentiation_question': '🤔',
  'who_else_worked_with': '👤',
  'calling_other_people': '📞',
  'still_confused': '😕',
  'too_much_information': '📚',
  'want_something_in_writing': '📝',
  
  // Fork Deflection
  'doesnt_sound_like_what_we_need': '❓',
  'different_from_other_industries': '🌍',
  'doesnt_answer_evasion': '🔄',
  
  // Discovery - Top of Funnel
  'why_do_you_need_to_know_this': '❓',
  'can_i_get_back_to_you': '⏰',
  'this_is_too_many_questions': '❓',
  'can_we_come_back_to_that_later': '⏭️',
  'i_need_to_check_with_my_team_first': '👥',
  'thats_confidential_information': '🔒',
  'why_does_that_matter': '🤷',
  
  // Discovery - Middle/Bottom of Funnel
  'were_doing_fine_without_help': '👍',
  'were_rebuilding_our_process_right_now': '🔨',
  'our_process_is_broken': '💥',
  'can_you_help_us_build_the_process': '🛠️',
  'we_have_a_problem_converting': '📉',
  'we_need_help_with_closing_not_lead_gen': '🎯',
  'our_team_is_overwhelmed_already': '😰',
  'we_lose_deals_at_specific_stage': '📉',
  'our_sales_cycle_is_too_long': '⏳',
  'we_cant_get_past_gatekeepers': '🚪',
  'we_want_to_scale_beyond_current_capacity': '📈',
  'we_need_to_hire_more_closers_first': '👔',
  'our_margins_are_thin': '📊',
  'we_have_high_churn': '🔄',
  'were_seasonal_business': '🍂',
  'our_close_rate_is_terrible': '📉',
  'only_the_founder_can_close': '👑',
  'we_have_no_crm_or_tracking': '📊',
  
  // The Tic - Process Repeatability
  'no_its_not_repeatable': '❌',
  'were_still_figuring_it_out': '🔍',
  'its_repeatable_when_i_do_it_personally': '👤',
  'only_in_certain_markets': '🌎',
  'was_repeatable_pre_covid_but_not_now': '🦠',
  'used_to_work_but_doesnt_anymore': '⏰',
  'were_testing_different_approaches': '🧪',
  
  // The Tac - Definition
  'thats_not_how_we_define_qualified': '📋',
  'we_need_them_to_have_x_y_z': '✅',
  'only_c_level_titles_count': '👔',
  'they_must_have_current_vendor': '🏢',
  'i_need_to_run_this_by_my_team': '👥',
  'what_if_they_lie_about_being_interested': '🤥',
  'problem_aware_is_too_subjective': '🤷',
  'too_easy_acceptance_without_engaging': '😐',
  
  // The Toe - Power Transfer
  'how_does_verification_actually_work': '🔍',
  'how_long_do_i_have_to_verify_each_one': '⏱️',
  'what_if_we_disagree_on_qualification': '⚖️',
  'can_we_have_a_third_party_verify': '👤',
  'that_sounds_like_a_lot_of_work_on_our_end': '😓',
  'who_makes_the_final_call_if_we_dispute': '👨‍⚖️',
  'can_we_reject_unlimited_times': '♾️',
  
  // Process & Clarity
  'what_tools': '🛠️',
  'spam_filter_question': '📧',
  'channel_questions': '📡',
  'infrastructure_questions': '🏗️',
  'messaging_approach': '💬',
  
  // Referrals & Network
  'do_you_have_connections': '🔗',
  'we_only_do_referrals': '🤝',
  'referral_purist': '✨',
  'warm_intro_obsession': '🔥',
  'network_questions': '🌐',
  
  // Competitors & Comparison
  'talking_to_other_vendors': '🔄',
  'competitor_cheaper': '💵',
  'competitor_guarantee': '🛡️',
  'what_makes_you_different': '⭐',
  'competitor_did_this': '🔄',
  
  // Scope & Structure
  'rfp_policy': '📋',
  'board_approval': '👔',
  'too_many_questions': '❓',
  'confidential_info': '🔒',
  'cancellation_policy': '🚫',
  'doing_fine_without_help': '👍',
  'just_researching': '🔍',
  'email_me_info': '📧',
  'lost_big_client': '💔',
  'shutting_down': '🚪',
  'just_raised_funding': '💰',
  'hire_you_for_something_else': '🔄',
  'train_our_team_instead': '🎓',
  'multiple_questions_at_once': '❓',
  'i_love_this_sign_today': '❤️',
  'can_we_cancel_mid_engagement': '🚫',
  'whats_included_vs_add_on': '➕',
  'this_needs_board_approval': '👔',
  'do_we_own_the_data_lists': '📊',
  'can_we_start_with_one_market_then_expand': '🌍',
  'do_you_have_payment_plans': '💳',
  'whats_the_onboarding_process': '🚀',
  'who_will_we_work_with_day_to_day': '👥',
  'how_often_do_we_get_updates': '📅',
  'were_reorganizing_right_now': '🔄',
  'can_we_get_started_while_legal_reviews': '⚖️',
  
  // Contract & Legal
  'whats_the_contract_term': '📜',
  'do_you_have_insurance': '🛡️',
  'can_we_do_an_nda_first': '🔒',
  'need_partner_approval': '🤝',
  'talk_to_team': '👥',
  'legal_review': '⚖️',
  'internal_team_exists': '👥',
  'champion_departure': '👋',
  'decision_path_questions': '🗺️',
  'who_needs_to_see_this': '👀',
  'contract_terms': '📋',
  'data_ownership': '💾',
  'ip_ownership': '🧠',
  'insurance_compliance': '🛡️',
  'nda_request': '🔐',
  'legal_has_redlines': '✏️',
  'procurement_process': '📦',
  
  // Additional Money & Budget
  'price_shock': '💥',
  'free_vs_paid_pilot': '🆓',
  'month_to_month': '📆',
  
  // Additional Quality & Proof
  'comparing_to_last_vendor': '🔄',
  'success_definition': '🎯',
  'how_do_you_validate_theyre_real_decision_makers': '🔍',
  
  // Additional Timing & Process
  'after_specific_event': '📅',
  'when_can_we_start': '🚀',
  'need_faster_results': '⚡',
  'time_waster_behaviors': '⏰',
  'we_have_an_emergency_can_we_reschedule': '🚨',
  
  // Transition to Call Two
  'can_we_start_sooner_than_2_weeks': '⚡',
  
  // Objection Variations - Timing
  'lets_start_in_q1': '📅',
  
  // Additional Discovery
  'cant_answer': '❓',
  'deflects_question': '🔄',
  'why_does_this_matter': '🤷',
  'dont_have_data': '📊',
  'dont_track_formally': '📝',
  'mentions_internal_team_data': '👥',
  'mentions_referrals_data': '🤝',
  'vague_responses': '💭',
  'wont_engage_discovery': '🚫',
  
  // Additional Process & Clarity
  'are_you_using_ai': '🤖',
  'do_you_buy_lists': '📋',
  'do_you_use_automation': '⚙️',
  'brand_risk_spam': '⚠️',
  'communication_cadence': '📞',
  'onboarding_questions': '🎓',
  'whats_included': '📦',
  'no_crm_tracking': '🗂️',
  
  // Additional Referrals & Network
  'referral_only_absolutist': '🚫',
  
  // Additional Competitors
  'our_competitor_just_did_this_we_need_it_now': '🔥',
  'need_to_compare': '⚖️',
  
  // Additional Scope & Structure
  'can_we_start_smaller': '📏',
  'pilot_request': '🧪',
  'scope_reduction': '📉',
  'phased_rollout': '📈',
  'one_market_first': '🌍',
  'market_too_niche': '🎯',
  'geographic_constraints': '🗺️',
  'title_requirements': '👔',
  'capacity_concerns': '📊',
  'capacity_overwhelm': '😰',
  'service_limitations': '🚧',
  'we_have_an_rfp': '📋',
  
  // Additional Tic handlers
  'conditional_tic': '❓',
  'hedged_tic': '🤷',
  'it_depends_tic': '🔄',
  'not_repeatable_tic': '❌',
  
  // Additional Tac handlers
  'rejects_a_b_c_tac': '❌',
  'wants_to_narrow_tac': '📏',
  
  // Additional Toe handlers
  'toe_process_questions': '❓',
  'verification_timing': '⏱️',
  'dispute_resolution': '⚖️',
  
  // Additional Discovery - Middle/Bottom
  'close_rate_problems': '📉',
  'sales_cycle_too_long': '⏳',
  'founder_dependency': '👑',
  'no_conversion_infrastructure': '🏗️',
  'high_churn': '🔄',
  'were_rebuilding': '🔨',
  'process_is_broken': '💥',
  
  // Additional scenarios
  'getting_acquired': '💼',
  'were_getting_acquired': '💼',
  'were_shutting_down': '🚪',
  'we_just_lost_our_biggest_client': '💔',
  'we_just_raised_funding_lets_go_bigger': '💰',
  'the_person_you_need_to_talk_to_just_left': '👋',
  'ghost_no_response': '👻',
  'unqualified_prospect': '🚫',
  'looks_good_but': '🤔',
  'immediate_yes': '✅',
  'need_to_check': '🔍',
  'new_objections': '💬',
  'what_if_they_say_theyre_interested_but_arent': '🤥',
  'what_if_theyre_just_gathering_info': '🔍',
  'can_we_modify': '✏️',
  'can_we_hire_you_to_do_something_else_instead': '🔄',
  'can_you_just_train_our_team_instead': '🎓'
}

function RightSidebar({ isOpen, onClose }) {
  const { salesData, loading } = useSalesData()
  const { loadHandler, loadContent, contentId } = useContent()
  const [searchQuery, setSearchQuery] = useState('')
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth <= 768)
  
  // Initialize all categories as collapsed (closed by default)
  const [collapsedCategories, setCollapsedCategories] = useState({})
  
  // Initialize top-level sections collapsed state (all expanded by default)
  const [collapsedSections, setCollapsedSections] = useState({
    'top-objections': false,
    'search-handlers': false,
    'full-library': false
  })

  // Update mobile state on resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Update collapsed state when salesData loads
  useEffect(() => {
    if (salesData?.objection_handlers?.handlers) {
      const initial = {}
      const categories = new Set()
      Object.values(salesData.objection_handlers.handlers).forEach(handler => {
        const originalCategory = handler.category || 'Other'
        const category = CATEGORY_MAP[originalCategory] || originalCategory
        categories.add(category)
      })
      categories.forEach(cat => {
        if (!(cat in collapsedCategories)) {
          initial[cat] = true // true = collapsed
        }
      })
      if (Object.keys(initial).length > 0) {
        setCollapsedCategories(prev => ({ ...prev, ...initial }))
      }
    }
  }, [salesData])

  // Group handlers by category from salesData
  const handlerCategories = useMemo(() => {
    if (!salesData?.objection_handlers?.handlers) return []

    const handlers = salesData.objection_handlers.handlers
    const categoriesMap = {}

    Object.keys(handlers).forEach(handlerId => {
      const handler = handlers[handlerId]
      const originalCategory = handler.category || 'Other'
      // Map old category names to consolidated names
      const category = CATEGORY_MAP[originalCategory] || originalCategory
      
      if (!categoriesMap[category]) {
        categoriesMap[category] = []
      }
      
      categoriesMap[category].push({
        id: handlerId,
        title: handler.title || handlerId,
        handler
      })
    })

    // Convert to array and sort by framework order
    return Object.keys(categoriesMap)
      .sort((a, b) => {
        const indexA = CATEGORY_ORDER.indexOf(a)
        const indexB = CATEGORY_ORDER.indexOf(b)
        // If both are in the order array, sort by their position
        if (indexA !== -1 && indexB !== -1) return indexA - indexB
        // If only one is in the order array, prioritize it
        if (indexA !== -1) return -1
        if (indexB !== -1) return 1
        // If neither is in the order array, sort alphabetically
        return a.localeCompare(b)
      })
      .map(category => ({
        title: category,
        handlers: categoriesMap[category].sort((a, b) => a.title.localeCompare(b.title))
      }))
  }, [salesData])

  // Filter handlers based on search
  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return handlerCategories

    const query = searchQuery.toLowerCase()
    return handlerCategories
      .map(category => ({
        ...category,
        handlers: category.handlers.filter(handler => {
          const searchableText = [
            handler.title,
            handler.handler.trigger || '',
            handler.handler.quick_response || '',
            handler.handler.key_principle || '',
            category.title
          ].join(' ').toLowerCase()
          return searchableText.includes(query)
        })
      }))
      .filter(category => category.handlers.length > 0)
  }, [handlerCategories, searchQuery])

  if (loading) {
    return (
      <nav className={`sidebar-right ${isOpen ? 'active' : ''}`}>
        <div className="sidebar-header">
          <h1>⛽ HANDLER LIBRARY</h1>
          <p>Loading...</p>
        </div>
      </nav>
    )
  }

  const toggleCategory = (categoryTitle) => {
    setCollapsedCategories(prev => ({
      ...prev,
      [categoryTitle]: !prev[categoryTitle]
    }))
  }

  const toggleSection = (sectionKey) => {
    setCollapsedSections(prev => ({
      ...prev,
      [sectionKey]: !prev[sectionKey]
    }))
  }

  const handleHandlerClick = (handlerId) => {
    loadHandler(handlerId)
    if (window.innerWidth <= 768) {
      onClose()
    }
  }

  const handleContentClick = (itemId) => {
    loadContent(itemId)
    if (window.innerWidth <= 768) {
      onClose()
    }
  }

  const handleClearSearch = () => {
    setSearchQuery('')
  }

  return (
    <nav className={`sidebar-right ${isOpen ? 'active' : ''}`}>
      <div className="sidebar-header">
        <h1>⛽ HANDLER LIBRARY</h1>
        <p>Pull off, handle, return</p>
      </div>

      {/* Top Objections */}
      <div className="nav-section">
        <div 
          className="nav-section-title nav-section-title-collapsible"
          onClick={() => toggleSection('top-objections')}
        >
          <span>⭐ Top Objections</span>
          <span className="nav-section-toggle">
            {collapsedSections['top-objections'] ? '▼' : '▲'}
          </span>
        </div>
        {!collapsedSections['top-objections'] && (
          <div className="interrupt-sequence nav-content">
            <div className="interrupt-step" onClick={() => handleContentClick('pricing_objection')}>
              <div className="step-number">1</div>
              <div className="step-content">
                <div className="step-title">Pricing Objection</div>
                <div className="step-desc">Handle early pricing questions</div>
              </div>
            </div>
            <div className="interrupt-step" onClick={() => handleContentClick('universal_objection_handle')}>
              <div className="step-number">2</div>
              <div className="step-content">
                <div className="step-title">Universal Handle</div>
                <div className="step-desc">Framework for any objection</div>
              </div>
            </div>
            <div className="interrupt-step" onClick={() => handleContentClick('referrals_objection')}>
              <div className="step-number">3</div>
              <div className="step-content">
                <div className="step-title">Referrals Objection</div>
                <div className="step-desc">Handle referral-only prospects</div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Search Handlers */}
      <div className="nav-section">
        <div 
          className="nav-section-title nav-section-title-collapsible"
          onClick={() => toggleSection('search-handlers')}
        >
          <span>🔍 Search Handlers</span>
          <span className="nav-section-toggle">
            {collapsedSections['search-handlers'] ? '▼' : '▲'}
          </span>
        </div>
        {!collapsedSections['search-handlers'] && (
          <div className="search-container">
            <input
              type="text"
              id="handler-search"
              placeholder="Search objections by keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button
                type="button"
                className="clear-search-btn"
                onClick={handleClearSearch}
                title="Clear search"
              >
                ×
              </button>
            )}
          </div>
        )}
      </div>

      {/* Full Handler Library */}
      <div className="nav-section">
        <div 
          className="nav-section-title nav-section-title-collapsible"
          onClick={() => toggleSection('full-library')}
        >
          <span>⛽ FULL HANDLER LIBRARY</span>
          <span className="nav-section-toggle">
            {collapsedSections['full-library'] ? '▼' : '▲'}
          </span>
        </div>
        {!collapsedSections['full-library'] && (
        <div className="nav-content">
          {filteredCategories.map((category, idx) => {
            const isCollapsed = collapsedCategories[category.title]
            const shouldShow = searchQuery ? true : !isCollapsed // Auto-expand on search
            
            return (
              <div
                key={category.title}
                className={`nav-group-container ${shouldShow ? '' : 'collapsed'}`}
                style={{ marginTop: idx === 0 ? '0' : undefined }}
              >
                <div
                  className={`nav-group-header ${shouldShow ? '' : 'collapsed'}`}
                  onClick={() => toggleCategory(category.title)}
                >
                  <span className="nav-group-emoji">{CATEGORY_EMOJIS[category.title] || '📄'}</span>
                  <span>{category.title}</span>
                  <span className="nav-group-toggle">{shouldShow ? '▲' : '▼'}</span>
                </div>
                {shouldShow && (
                  <div className="nav-group-items">
                    {category.handlers.map((handler) => {
                      const emoji = HANDLER_EMOJIS[handler.id] || '📌'
                      // Debug: log if emoji is missing
                      if (!HANDLER_EMOJIS[handler.id]) {
                        console.log('Missing emoji for handler:', handler.id, handler.title)
                      }
                      return (
                        <div
                          key={handler.id}
                          className={`nav-handler-item ${contentId === handler.id ? 'active' : ''}`}
                          data-id={handler.id}
                          data-category={category.title}
                          onClick={() => handleHandlerClick(handler.id)}
                        >
                          <span className="nav-handler-emoji" style={{ display: 'inline-block', minWidth: '1.2rem', fontSize: '1rem', lineHeight: '1' }}>{emoji}</span>
                          <span style={{ flex: 1 }}>{handler.title}</span>
                        </div>
                      )
                    })}
                  </div>
                )}
              </div>
            )
          })}
        </div>
        )}
      </div>
    </nav>
  )
}

export default RightSidebar

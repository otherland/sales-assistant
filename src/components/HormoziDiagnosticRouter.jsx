import React, { useState } from 'react'
import InfoBox from './content/InfoBox'

function HormoziDiagnosticRouter({ refData, refId }) {
  const [routePath, setRoutePath] = useState([]) // Track the path taken
  const [currentStep, setCurrentStep] = useState('stage1_e1') // Start at first question
  const [deepDiveCategory, setDeepDiveCategory] = useState(null) // Track current deep dive category

  const handleDecisionClick = (decision, nextStep, constraint = null, stepLabel = null) => {
    const newPath = [...routePath, {
      step: currentStep,
      decision,
      nextStep,
      constraint,
      stepLabel
    }]
    setRoutePath(newPath)
    setCurrentStep(nextStep)
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const resetPath = () => {
    setRoutePath([])
    setCurrentStep('stage1_e1')
    setDeepDiveCategory(null)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const goBack = () => {
    if (routePath.length > 0) {
      const newPath = [...routePath]
      const lastStep = newPath.pop()
      setRoutePath(newPath)
      setCurrentStep(lastStep.step)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const renderQuestion = (stepId, title, question, options) => {
    if (currentStep !== stepId) return null

    return (
      <div style={{ marginBottom: '2rem' }}>
        <InfoBox title={title} style={{ marginBottom: '1.5rem' }}>
          <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', fontWeight: '500' }}>
            {question}
          </p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {options.map((option, idx) => {
              const isRoute = option.nextStep && (option.nextStep.includes('stage3') || option.constraint)
              return (
                <button
                  key={idx}
                  onClick={() => handleDecisionClick(
                    option.label,
                    option.nextStep || stepId,
                    option.constraint,
                    title
                  )}
                  style={{
                    padding: '1rem 1.5rem',
                    backgroundColor: isRoute ? 'var(--primary-color, #007bff)' : 'var(--bg-primary, #ffffff)',
                    color: isRoute ? '#ffffff' : 'var(--text-primary, #212529)',
                    border: `2px solid ${isRoute ? 'var(--primary-color, #007bff)' : 'var(--border-color, #dee2e6)'}`,
                    borderRadius: '8px',
                    cursor: 'pointer',
                    textAlign: 'left',
                    fontSize: '0.95rem',
                    fontWeight: isRoute ? '600' : '400',
                    transition: 'all 0.2s ease',
                    boxShadow: isRoute ? '0 2px 8px rgba(0,123,255,0.2)' : '0 1px 3px rgba(0,0,0,0.1)'
                  }}
                  onMouseEnter={(e) => {
                    if (!isRoute) {
                      e.currentTarget.style.backgroundColor = 'var(--bg-secondary, #f8f9fa)'
                      e.currentTarget.style.borderColor = 'var(--primary-color, #007bff)'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isRoute) {
                      e.currentTarget.style.backgroundColor = 'var(--bg-primary, #ffffff)'
                      e.currentTarget.style.borderColor = 'var(--border-color, #dee2e6)'
                    }
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span>{option.label}</span>
                    {isRoute && (
                      <span style={{ fontSize: '0.85rem', opacity: 0.9 }}>→</span>
                    )}
                  </div>
                  {option.description && (
                    <div style={{ 
                      marginTop: '0.5rem', 
                      fontSize: '0.85rem', 
                      opacity: 0.8,
                      fontStyle: 'italic'
                    }}>
                      {option.description}
                    </div>
                  )}
                </button>
              )
            })}
          </div>
        </InfoBox>
      </div>
    )
  }

  // Deep Dive Questions Data Structure
  const deepDiveQuestions = {
    'MARKET': {
      'Market Size & Opportunity': [
        "What's the TAM in dollars?",
        "How many businesses/people in your target segment?",
        "What's the penetration rate of current solutions?",
        "Is the market growing, flat, or shrinking?",
        "What's driving growth or decline?",
        "What adjacent markets could you enter?"
      ],
      'Market Sophistication': [
        "What's the awareness level (unaware → most aware)?",
        "How educated is the market on solutions?",
        "How many competitors have come and gone?",
        "What's the dominant narrative in the market?",
        "What have competitors claimed/promised?",
        "Are customers jaded or excited?"
      ],
      'Market Access': [
        "Where does your market congregate?",
        "What do they read/watch/listen to?",
        "Who influences them?",
        "What associations/groups exist?",
        "How do they currently find solutions?"
      ],
      'Market Validation': [
        "Who else is successfully serving this market?",
        "What do they charge?",
        "What's their growth rate?",
        "Can you identify their customer volume?",
        "Are they profitable?"
      ]
    },
    'OFFER': {
      'Dream Outcome Analysis': [
        "What's the specific result they want?",
        "How do they describe success?",
        "What metrics matter to them?",
        "What's the emotional driver behind it?",
        "What's the cost of NOT solving it?",
        "How urgent is this problem (1-10)?"
      ],
      'Perceived Likelihood': [
        "Do they believe the outcome is possible?",
        "Have they tried and failed before?",
        "What proof do you have?",
        "How many testimonials/case studies?",
        "What's your success rate?",
        "Can you guarantee results?"
      ],
      'Time Delay': [
        "How long until first result?",
        "How long until full result?",
        "What's their expectation?",
        "How does this compare to alternatives?",
        "Can you shorten time to value?"
      ],
      'Effort & Sacrifice': [
        "What do they have to do?",
        "How much time required?",
        "What must they give up?",
        "What's difficult about implementation?",
        "Can you do more for them (done-for-you vs done-with-you)?"
      ],
      'Offer Stack': [
        "What's your core offering?",
        "What supports the core?",
        "What bonuses enhance value?",
        "What tools/resources included?",
        "How is it packaged/named?",
        "What's the delivery mechanism?"
      ],
      'Guarantee Structure': [
        "What guarantee do you offer?",
        "How strong is it?",
        "What percentage of people use it?",
        "Does it reverse risk completely?",
        "How do you frame the guarantee?"
      ],
      'Pricing Architecture': [
        "What's the price point?",
        "Why that price?",
        "What have you tested?",
        "What's your pricing vs. competitors?",
        "Is it one-time or recurring?",
        "What payment plans exist?",
        "What's your collections rate?"
      ],
      'Scarcity & Urgency': [
        "Why buy now vs. later?",
        "Is there limited availability?",
        "Is there a deadline?",
        "What's the penalty for waiting?"
      ]
    },
    'ACQUISITION': {
      'Paid Advertising': [
        "Which platforms? (FB, Google, LinkedIn, etc.)",
        "What's spend per month per channel?",
        "What's CPA per channel?",
        "What's CTR on ads?",
        "What's landing page conversion rate?",
        "What creatives/angles work best?",
        "How long have you been running ads?",
        "Who manages ads (in-house/agency)?",
        "What's your testing cadence?",
        "How many creatives per week?",
        "What's ad account health?",
        "Have you been banned/restricted?"
      ],
      'Organic Content': [
        "What platforms are you on?",
        "What's your posting frequency?",
        "What's your engagement rate?",
        "How many followers?",
        "What's follower growth rate?",
        "What content performs best?",
        "Do you have a content system?",
        "Who creates content?",
        "What's your content→customer rate?"
      ],
      'Outbound': [
        "Email, calls, LinkedIn, or other?",
        "What's your list size?",
        "How do you build lists?",
        "What's your response rate?",
        "What's your conversion rate?",
        "What scripts/sequences do you use?",
        "How many touches per prospect?",
        "Who does outbound?",
        "What tools do you use?"
      ],
      'Referrals/Word of Mouth': [
        "What % of customers come from referrals?",
        "Do you have a referral program?",
        "What incentive for referrals?",
        "What's your referral rate?",
        "Do you ask for referrals systematically?",
        "What makes customers refer?"
      ],
      'Partnerships/Affiliates': [
        "Do you have partners?",
        "What's the commission structure?",
        "How many active affiliates?",
        "What do top affiliates do differently?",
        "How do you recruit partners?",
        "What support do you provide?"
      ],
      'Top of Funnel': [
        "Where do leads come from?",
        "What's traffic volume by source?",
        "What's traffic quality by source?",
        "What's cost per click/impression?"
      ],
      'Middle of Funnel': [
        "What's the lead magnet/hook?",
        "What's opt-in rate?",
        "What happens after opt-in?",
        "Email sequence exist?",
        "What's email open/click rate?",
        "How many touches before booking?"
      ],
      'Sales Process': [
        "How do they book a call/demo?",
        "What's booking rate?",
        "What's show rate?",
        "How long is sales call?",
        "Who does sales?",
        "What's the script/process?",
        "What's close rate by rep?",
        "What objections come up?",
        "Where do deals die?",
        "What's follow-up process?",
        "How many touches to close?"
      ],
      'Lead Quality': [
        "What qualifies a lead?",
        "Do you have disqualification criteria?",
        "What's your ICP specifically?",
        "How do you score leads?",
        "What % of leads are qualified?",
        "Where do bad leads come from?"
      ],
      'Testing & Optimization': [
        "What are you currently testing?",
        "What have you tested historically?",
        "What worked? What failed?",
        "How do you determine winners?",
        "What's your sample size?",
        "How long do tests run?",
        "What's your testing framework?"
      ]
    },
    'MONETIZATION': {
      'Current Revenue Streams': [
        "What do you sell?",
        "What's revenue per product/service?",
        "What's margin per product/service?",
        "What's the mix of revenue sources?",
        "What's growing vs. declining?"
      ],
      'Price Optimization': [
        "When did you last raise prices?",
        "What happened when you did?",
        "What's your price testing history?",
        "What would happen at 2x price?",
        "What's the most you could charge?",
        "What's your price anchoring?",
        "Do you offer payment plans?",
        "What's the take-rate per option?"
      ],
      'Upsell Structure': [
        "What's your first purchase?",
        "What's the next offer?",
        "What's the sequence of offers?",
        "What % buy upsells?",
        "What's revenue per upsell?",
        "When do you make upsell offers?",
        "Who delivers upsells?"
      ],
      'Cross-sell Opportunities': [
        "What else could customers buy?",
        "What naturally fits together?",
        "What do they ask for that you don't offer?",
        "What adjacent problems do they have?",
        "What partnerships could enable cross-sells?"
      ],
      'Value Ladder': [
        "What's your entry offer?",
        "What's your mid-tier?",
        "What's your premium/high-ticket?",
        "What percentage of customers at each level?",
        "What's the ascension path?",
        "What's the upgrade rate?",
        "Why don't more people upgrade?"
      ],
      'Contract Value': [
        "Average order value?",
        "Median order value?",
        "What's your range (low to high)?",
        "What determines contract size?",
        "Can you increase contract value?",
        "What would enable larger deals?"
      ],
      'Lifetime Value Expansion': [
        "What's current LTV?",
        "What's the theoretical maximum?",
        "What's limiting expansion?",
        "How long do customers stay?",
        "What's max length of engagement?",
        "Can you extend duration?"
      ],
      'Unutilized Revenue': [
        "What could you charge for that you don't?",
        "What extras do you throw in for free?",
        "What services do customers request?",
        "What would they pay more for?"
      ]
    },
    'RETENTION': {
      'Churn Analysis': [
        "What's your monthly churn rate?",
        "What's annual churn rate?",
        "What's revenue churn vs. logo churn?",
        "When do most customers churn? (month 1, 3, 6, 12?)",
        "What's your retention curve?",
        "How does churn vary by segment/cohort?",
        "What's churn by acquisition channel?",
        "What's churn by price point?"
      ],
      'Churn Reasons': [
        "Why do customers actually leave? (data, not guesses)",
        "What do they say in exit surveys?",
        "What patterns exist in churned customers?",
        "What's the #1 reason?",
        "What's preventable vs. inevitable?",
        "Do you conduct exit interviews?",
        "What could you have done differently?"
      ],
      'Customer Success': [
        "What's your onboarding process?",
        "How long is onboarding?",
        "What's activation rate? (getting to first value)",
        "What's time to first value?",
        "What's time to full adoption?",
        "Who manages customer success?",
        "What's CS team size vs. customers?",
        "What's your check-in cadence?",
        "What triggers intervention?"
      ],
      'Results Delivery': [
        "What % of customers get results?",
        "What defines \"success\"?",
        "How do you measure outcomes?",
        "What's average result?",
        "What's median result?",
        "What's your range?",
        "What do best customers do differently?",
        "What do worst customers do differently?",
        "Where do customers get stuck?"
      ],
      'Engagement Metrics': [
        "What's product/service usage rate?",
        "What's login frequency?",
        "What features are used most/least?",
        "What engagement predicts retention?",
        "What engagement predicts churn?",
        "How do you measure engagement?"
      ],
      'Customer Satisfaction': [
        "What's your NPS score?",
        "What's your CSAT score?",
        "How often do you survey?",
        "What's response rate?",
        "What themes emerge?",
        "What do promoters say?",
        "What do detractors say?"
      ],
      'Reactivation': [
        "Do you have a winback campaign?",
        "What % of churned customers return?",
        "What brings them back?",
        "How long after churn do they return?",
        "What's different second time?"
      ],
      'Expansion Within Accounts': [
        "What % of customers expand?",
        "What's net revenue retention?",
        "How do customers expand?",
        "What triggers expansion?",
        "Who drives expansion conversations?"
      ]
    },
    'DELIVERY': {
      'Service Delivery Model': [
        "What's your delivery mechanism?",
        "Is it 1:1, 1:few, or 1:many?",
        "What's automated vs. manual?",
        "What's live vs. pre-recorded vs. self-service?",
        "What's synchronous vs. asynchronous?",
        "How many touch-points?"
      ],
      'Capacity Constraints': [
        "What's your theoretical max capacity?",
        "What's current utilization?",
        "Where's the bottleneck?",
        "What resource limits you? (people, time, tech, space)",
        "What happens at capacity?",
        "What's your waitlist situation?",
        "How fast can you scale capacity?",
        "What does it cost to add capacity?"
      ],
      'Quality Control': [
        "What's your quality standard?",
        "How do you measure quality?",
        "What's your defect/error rate?",
        "What breaks most often?",
        "Where do you cut corners when busy?",
        "What gets complaints?",
        "What requires rework?",
        "Who ensures quality?"
      ],
      'Process Documentation': [
        "What processes are documented?",
        "What's tribal knowledge?",
        "Can someone new execute from docs?",
        "What's your SOP library?",
        "How often are docs updated?",
        "Who owns documentation?"
      ],
      'Technology & Tools': [
        "What tech stack do you use?",
        "What's manual that could be automated?",
        "Where does tech fail you?",
        "What integrations are missing?",
        "What tech debt exists?",
        "What's your tech roadmap?"
      ],
      'Vendor Dependencies': [
        "What do you outsource?",
        "Who are critical vendors?",
        "What's vendor performance like?",
        "What's your backup plan?",
        "What could you bring in-house?",
        "What should stay outsourced?"
      ],
      'Customer Onboarding': [
        "What's the onboarding sequence?",
        "How long does it take?",
        "What's completion rate?",
        "Where do customers get stuck?",
        "What causes onboarding failure?",
        "Who handles onboarding?",
        "What's automated?"
      ],
      'Ongoing Fulfillment': [
        "What's the recurring delivery?",
        "What's the cadence?",
        "What's required from customers?",
        "What's required from you?",
        "Where's friction in the process?",
        "What takes longer than it should?"
      ]
    },
    'TEAM': {
      'Org Structure': [
        "What's your current org chart?",
        "What reporting lines exist?",
        "Who reports to whom?",
        "What's span of control?",
        "Where are there gaps?",
        "What roles don't exist yet?"
      ],
      'Key Person Assessment': [
        "Who are your A players?",
        "What makes them A players?",
        "What would break if they left?",
        "Are they maxed out or have headroom?",
        "What's their trajectory?",
        "Are they in the right role?"
      ],
      'Performance Issues': [
        "Who's underperforming?",
        "Why are they still here?",
        "What have you tried?",
        "Is it a skill or will issue?",
        "Can they be coached up?",
        "What's the plan?"
      ],
      'Missing Roles': [
        "What roles should exist?",
        "What's the priority order?",
        "What's the ROI of each hire?",
        "What's preventing you from hiring?",
        "What would hiring X unlock?",
        "What would you hire with unlimited budget?"
      ],
      'Hiring Process': [
        "How do you source candidates?",
        "What's your interview process?",
        "Who's involved in hiring?",
        "What's time to hire?",
        "What's your offer acceptance rate?",
        "What's new hire success rate?",
        "How do you assess culture fit?"
      ],
      'Onboarding & Training': [
        "What's your onboarding process?",
        "How long until fully productive?",
        "What training exists?",
        "What's self-taught vs. taught?",
        "Who trains new hires?",
        "What resources exist?"
      ],
      'Compensation & Incentives': [
        "How do you compensate?",
        "What's base vs. variable?",
        "What drives variable comp?",
        "How competitive are you?",
        "What non-monetary benefits?",
        "What's your retention rate?",
        "Why do people leave?"
      ],
      'Culture & Engagement': [
        "What's your culture?",
        "How would team describe it?",
        "What behaviors are rewarded?",
        "What behaviors are punished?",
        "What's employee satisfaction?",
        "What's eNPS?",
        "What creates engagement?",
        "What creates disengagement?"
      ],
      'Leadership Development': [
        "Who are future leaders?",
        "What's leadership pipeline?",
        "How do you develop leaders?",
        "What skills are they missing?",
        "Who could step up?"
      ]
    },
    'CASH': {
      'Current Position': [
        "What's cash in bank?",
        "What's monthly burn?",
        "What's runway?",
        "What's upcoming large expenses?",
        "What's AR (accounts receivable)?",
        "What's AP (accounts payable)?",
        "What's the timing mismatch?"
      ],
      'Cash Flow Dynamics': [
        "When do customers pay?",
        "When do you pay vendors/team?",
        "What's your cash conversion cycle?",
        "What's days sales outstanding?",
        "What's payment terms with customers?",
        "What's payment terms with vendors?",
        "Can you improve either?"
      ],
      'Unit Economics': [
        "What's gross margin per customer?",
        "What's contribution margin?",
        "When do you break even on a customer?",
        "What's your CAC payback period?",
        "Are you cash flow positive on new customers?",
        "At what scale do you become profitable?"
      ],
      'Capital Needs': [
        "How much capital do you need?",
        "What would you use it for?",
        "What's the ROI on that capital?",
        "Have you raised money?",
        "What's your raise history?",
        "What's your ownership structure?",
        "Are you open to raising?",
        "Debt or equity?"
      ],
      'Cash Deployment': [
        "Where are you spending money?",
        "What's the breakdown?",
        "What's ROI by category?",
        "What's working?",
        "What's not working?",
        "What would you cut first?",
        "What would you increase?"
      ],
      'Profitability Path': [
        "Are you profitable?",
        "If not, when will you be?",
        "What has to happen?",
        "What's preventing profitability?",
        "Have you been profitable before?",
        "What changed?"
      ],
      'Pricing & Collections': [
        "Do you have payment plans?",
        "What's default rate?",
        "How do you handle collections?",
        "What's write-off rate?",
        "Could you charge upfront?",
        "Could you increase down payments?"
      ]
    },
    'SYSTEMS': {
      'Process Maturity': [
        "What processes exist?",
        "What's documented vs. ad hoc?",
        "What's your documentation system?",
        "How often are processes followed?",
        "Where do people deviate? Why?"
      ],
      'Daily Operations': [
        "What's a typical day look like?",
        "What's your daily rhythm?",
        "What meetings exist?",
        "What reports are generated?",
        "What dashboards exist?",
        "What gets reviewed regularly?"
      ],
      'Chaos Indicators': [
        "How much time is firefighting?",
        "What fires are most common?",
        "What causes fires?",
        "What's your crisis frequency?",
        "What falls through the cracks?",
        "What gets forgotten?"
      ],
      'Communication Systems': [
        "What tools do you use? (Slack, email, etc.)",
        "How is information shared?",
        "What's your meeting cadence?",
        "What's working?",
        "What's not working?",
        "Where's miscommunication?"
      ],
      'Project Management': [
        "How do you manage projects?",
        "What tools do you use?",
        "What's your project success rate?",
        "What causes project failure?",
        "Where are bottlenecks?",
        "What's visibility like?"
      ],
      'Data & Reporting': [
        "What metrics do you track?",
        "How do you track them?",
        "What's automated vs. manual?",
        "What's real-time vs. delayed?",
        "Who sees what data?",
        "What decisions are data-driven?",
        "Where do you lack visibility?"
      ],
      'Integration & Tech Stack': [
        "What systems do you use?",
        "How do they integrate?",
        "What's manual between systems?",
        "What breaks regularly?",
        "What's user adoption like?",
        "What tech do people avoid using?"
      ],
      'Standard Operating Procedures': [
        "What SOPs exist?",
        "Who created them?",
        "Who maintains them?",
        "How accessible are they?",
        "When were they last updated?",
        "What needs SOPs that doesn't have them?"
      ]
    },
    'OWNER': {
      'Time Allocation': [
        "How do you spend your time? (hour by hour)",
        "What takes most of your time?",
        "What should you stop doing?",
        "What only you can do?",
        "Where are you the bottleneck?",
        "What's your ideal time allocation?",
        "What's preventing that?"
      ],
      'Decision-Making': [
        "What decisions do you make?",
        "What decisions are you delegating?",
        "What should you delegate?",
        "How fast do you make decisions?",
        "What slows down decisions?",
        "Where are you indecisive?"
      ],
      'Strengths & Weaknesses': [
        "What are you exceptional at?",
        "What are you terrible at?",
        "What do you enjoy?",
        "What do you hate?",
        "Where do you add most value?",
        "Where do you destroy value?"
      ],
      'Knowledge Gaps': [
        "What don't you know?",
        "What should you learn?",
        "What are you avoiding learning?",
        "What skill would 10x your business?",
        "Who do you learn from?",
        "What's your learning system?"
      ],
      'Beliefs & Mindset': [
        "What do you believe about scaling?",
        "What scares you about growth?",
        "What's your biggest fear?",
        "What have you not tried? Why?",
        "What are you avoiding?",
        "What do you believe that might not be true?"
      ],
      'Energy & Motivation': [
        "What energizes you?",
        "What drains you?",
        "When are you most productive?",
        "What causes burnout?",
        "What's your work schedule?",
        "How do you recharge?"
      ],
      'Support System': [
        "Who do you talk to about business?",
        "Do you have a coach/advisor/mentor?",
        "Who challenges your thinking?",
        "Who do you trust?",
        "Who have you learned from?"
      ],
      'Exit/Legacy': [
        "What's your endgame?",
        "Do you want to sell?",
        "When?",
        "For how much?",
        "What would you do after?",
        "What legacy do you want?"
      ],
      'Risk Tolerance': [
        "How much risk are you comfortable with?",
        "What risks have you taken?",
        "What risks haven't you taken?",
        "What's holding you back?",
        "What would you do if you couldn't fail?",
        "What would you do with a guarantee of success?"
      ]
    }
  }

  const renderConstraintConfirmation = (constraint) => {
    if (currentStep !== `stage3_${constraint}`) return null

    const questions = {
      'OFFER': [
        '"What\'s your refund/cancellation rate?" (Should be >5% if offer is the problem)',
        '"What do lost prospects say when they don\'t buy?" (Should hear price/value concerns)',
        '"How does your offer compare to competitors?" (Should see gaps)'
      ],
      'ACQUISITION': [
        '"Where do your best customers come from?" (Should have clear answer)',
        '"What\'s your cost per lead by channel?" (Should know this)',
        '"What\'s your lead-to-qualified rate?" (Should be <50% if acquisition is problem)'
      ],
      'RETENTION': [
        '"What do churned customers say?" (Should have exit data)',
        '"What do your best customers do differently?" (Should know this)',
        '"What\'s your NPS/CSAT?" (Should be <7 NPS if retention is the problem)'
      ],
      'DELIVERY': [
        '"What\'s your capacity utilization?" (Should be >80% if at capacity)',
        '"Where\'s the bottleneck?" (Should know specifically)',
        '"What breaks when you\'re busy?" (Should have examples)'
      ],
      'TEAM': [
        '"Who would you hire first if you could?" (Should have clear answer)',
        '"What breaks when people are out?" (Should have examples)',
        '"What roles are you doing that you shouldn\'t?" (Should be >3 things)'
      ],
      'SYSTEMS': [
        '"What\'s documented vs. in people\'s heads?" (Should be <50% documented)',
        '"How often do things fall through the cracks?" (Should be regularly)',
        '"What fires keep recurring?" (Should have 2-3 examples)'
      ],
      'OWNER': [
        '"What would happen if you disappeared for a month?" (Should be "everything breaks")',
        '"What decisions only you can make?" (Should be >10 things)',
        '"What are you avoiding/procrastinating on?" (Should have answer)'
      ],
      'MARKET': [
        '"What\'s the TAM and your penetration?" (Should know approximate market size)',
        '"How are competitors doing?" (Should have intel)',
        '"Is the market growing or shrinking?" (Should know trend)'
      ],
      'CASH': [
        '"What\'s your runway?" (Should be <6 months if cash is the constraint)',
        '"What can\'t you do because of cash?" (Should have specific examples)',
        '"What\'s your payback period on customers?" (Should be >6 months if cash is problem)'
      ]
    }

    return (
      <div style={{ marginBottom: '2rem' }}>
        <InfoBox title={`Constraint Confirmation: ${constraint}`} style={{ marginBottom: '1.5rem' }}>
          <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', fontWeight: '500' }}>
            Ask these confirmation questions before diving deep:
          </p>
          
          <ol style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
            {questions[constraint]?.map((q, idx) => (
              <li key={idx} style={{ marginBottom: '0.75rem' }}>{q}</li>
            ))}
          </ol>

          <div style={{ 
            padding: '1rem', 
            backgroundColor: 'var(--bg-secondary, #f5f5f5)', 
            borderRadius: '8px',
            marginBottom: '1rem',
            color: 'var(--text-primary, #212529)'
          }}>
            <p style={{ fontWeight: '600', marginBottom: '0.5rem' }}>Interpretation:</p>
            <p>If all 3 confirm → Proceed to {constraint} DEEP DIVE</p>
            <p>If any contradict → Recheck routing, may have misdiagnosed</p>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <button
              onClick={() => handleDecisionClick('All confirmed', 'stage4', constraint, `Confirm ${constraint}`)}
              style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: 'var(--primary-color, #007bff)',
                color: '#ffffff',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: '600'
              }}
            >
              All 3 Confirm → Continue
            </button>
            <button
              onClick={() => handleDecisionClick('Contradictions found', 'stage2_r1', null, 'Recheck routing')}
              style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: 'var(--warning-color, #ffc107)',
                color: 'var(--text-primary, #212529)',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: '600'
              }}
            >
              Contradictions → Recheck
            </button>
          </div>
        </InfoBox>
      </div>
    )
  }

  const renderDeepDive = (constraint) => {
    if (currentStep !== `deepdive_${constraint}`) return null
    
    const categories = deepDiveQuestions[constraint]
    if (!categories) return null

    const categoryKeys = Object.keys(categories)
    const currentCategoryIndex = deepDiveCategory !== null 
      ? categoryKeys.indexOf(deepDiveCategory)
      : 0
    const currentCategory = deepDiveCategory || categoryKeys[0]
    const questions = categories[currentCategory]

    return (
      <div style={{ marginBottom: '2rem' }}>
        <InfoBox title={`LEVEL 3: ${constraint} DEEP DIVE`} variant="advisor-note">
          <div style={{ marginBottom: '1.5rem' }}>
            <p style={{ fontSize: '1.1rem', marginBottom: '1rem', fontWeight: '600' }}>
              Category {currentCategoryIndex + 1} of {categoryKeys.length}: <strong>{currentCategory}</strong>
            </p>
            
            <div style={{ 
              marginBottom: '1rem',
              padding: '1rem',
              backgroundColor: 'var(--bg-secondary, #f8f9fa)',
              borderRadius: '8px'
            }}>
              <h4 style={{ marginBottom: '0.75rem', fontSize: '1rem', fontWeight: '600' }}>
                Questions to ask:
              </h4>
              <ol style={{ marginLeft: '1.5rem', lineHeight: '1.8' }}>
                {questions.map((q, idx) => (
                  <li key={idx} style={{ marginBottom: '0.5rem' }}>{q}</li>
                ))}
              </ol>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
              {categoryKeys.map((cat, idx) => (
                <button
                  key={cat}
                  onClick={() => {
                    setDeepDiveCategory(cat)
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                  style={{
                    padding: '0.5rem 1rem',
                    backgroundColor: cat === currentCategory 
                      ? 'var(--primary-color, #007bff)' 
                      : 'var(--bg-primary, #ffffff)',
                    color: cat === currentCategory ? '#ffffff' : 'var(--text-primary, #212529)',
                    border: `2px solid ${cat === currentCategory 
                      ? 'var(--primary-color, #007bff)' 
                      : 'var(--border-color, #dee2e6)'}`,
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    fontWeight: cat === currentCategory ? '600' : '400'
                  }}
                >
                  {idx + 1}. {cat}
                </button>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'space-between' }}>
              <button
                onClick={() => {
                  if (currentCategoryIndex > 0) {
                    setDeepDiveCategory(categoryKeys[currentCategoryIndex - 1])
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }
                }}
                disabled={currentCategoryIndex === 0}
                style={{
                  padding: '0.75rem 1.5rem',
                  backgroundColor: currentCategoryIndex === 0 
                    ? 'var(--bg-secondary, #f8f9fa)' 
                    : 'var(--primary-color, #007bff)',
                  color: currentCategoryIndex === 0 
                    ? 'var(--text-secondary, #6c757d)' 
                    : '#ffffff',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: currentCategoryIndex === 0 ? 'not-allowed' : 'pointer',
                  fontWeight: '600',
                  opacity: currentCategoryIndex === 0 ? 0.5 : 1
                }}
              >
                ← Previous Category
              </button>
              <button
                onClick={() => {
                  if (currentCategoryIndex < categoryKeys.length - 1) {
                    setDeepDiveCategory(categoryKeys[currentCategoryIndex + 1])
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }
                }}
                disabled={currentCategoryIndex === categoryKeys.length - 1}
                style={{
                  padding: '0.75rem 1.5rem',
                  backgroundColor: currentCategoryIndex === categoryKeys.length - 1
                    ? 'var(--bg-secondary, #f8f9fa)' 
                    : 'var(--primary-color, #007bff)',
                  color: currentCategoryIndex === categoryKeys.length - 1
                    ? 'var(--text-secondary, #6c757d)' 
                    : '#ffffff',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: currentCategoryIndex === categoryKeys.length - 1 ? 'not-allowed' : 'pointer',
                  fontWeight: '600',
                  opacity: currentCategoryIndex === categoryKeys.length - 1 ? 0.5 : 1
                }}
              >
                Next Category →
              </button>
            </div>
          </div>
        </InfoBox>
      </div>
    )
  }

  // Get the final constraint from route path (find the last non-null constraint)
  const finalConstraint = routePath.length > 0 
    ? (() => {
        // Find the last step that has a constraint set
        for (let i = routePath.length - 1; i >= 0; i--) {
          if (routePath[i].constraint) {
            return routePath[i].constraint
          }
        }
        return null
      })()
    : null

  return (
    <>
      <div className="content-header">
        <span className="content-category reference">Reference Library</span>
        <h2 className="content-title">{refData?.title || 'The Complete Hormozi Diagnostic Router'}</h2>
        {refData?.purpose && <p className="content-purpose">{refData.purpose}</p>}
        {refData?.subtitle && <p className="content-purpose">{refData.subtitle}</p>}
        
        {/* Route Path Display */}
        {routePath.length > 0 && (
          <InfoBox title="Your Diagnostic Path" variant="advisor-note" style={{ marginTop: '1rem' }}>
            <div style={{ marginBottom: '0.5rem' }}>
              {routePath.map((step, idx) => (
                <div key={idx} style={{ 
                  marginBottom: '0.25rem',
                  padding: '0.5rem',
                  backgroundColor: 'var(--bg-secondary, #f5f5f5)',
                  borderRadius: '4px',
                  fontSize: '0.9rem',
                  color: 'var(--text-primary, #212529)'
                }}>
                  <strong>{step.stepLabel || step.step}:</strong> {step.decision}
                  {step.constraint && (
                    <span style={{ 
                      marginLeft: '0.5rem',
                      padding: '0.25rem 0.5rem',
                      backgroundColor: 'var(--primary-color, #007bff)',
                      color: '#ffffff',
                      borderRadius: '4px',
                      fontSize: '0.85rem'
                    }}>
                      → {step.constraint}
                    </span>
                  )}
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button
                onClick={goBack}
                disabled={routePath.length === 0}
                style={{
                  padding: '0.5rem 1rem',
                  backgroundColor: 'var(--primary-color, #007bff)',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: routePath.length === 0 ? 'not-allowed' : 'pointer',
                  opacity: routePath.length === 0 ? 0.5 : 1
                }}
              >
                ← Back
              </button>
              <button
                onClick={resetPath}
                style={{
                  padding: '0.5rem 1rem',
                  backgroundColor: 'var(--warning-color, #ffc107)',
                  color: 'var(--text-primary, #212529)',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Reset Path
              </button>
            </div>
          </InfoBox>
        )}
      </div>

      <div className="content-body" style={{ maxWidth: '100%' }}>
        {/* STAGE 1: ENTRY POINT */}
        {renderQuestion('stage1_e1', 'E1: What\'s your revenue?', 
          'What\'s your revenue? (Record the number. This determines expected maturity level, common constraint patterns, and diagnostic depth required.)',
          [
            { label: 'Continue to next question', nextStep: 'stage1_e2' }
          ]
        )}

        {renderQuestion('stage1_e2', 'E2: What do you want it to be in 12 months?',
          'What do you want your revenue to be in 12 months?',
          [
            { label: '2x (Realistic growth - refine existing)', nextStep: 'stage1_e3' },
            { label: '3-5x (Aggressive growth - major changes needed)', nextStep: 'stage1_e3' },
            { label: '10x+ (Unrealistic - education needed first)', nextStep: 'stage1_e3' }
          ]
        )}

        {renderQuestion('stage1_e3', 'E3: What do you think is stopping you?',
          'What do you think is stopping you from getting there?',
          [
            { label: 'Category A: "Need more leads/traffic"', nextStep: 'stage2_r1' },
            { label: 'Category B: "Need better sales/conversions"', nextStep: 'stage2_r1' },
            { label: 'Category C: "Can\'t keep up with demand"', nextStep: 'stage2_r1' },
            { label: 'Category D: "Can\'t afford to grow"', nextStep: 'stage2_r1' },
            { label: 'Category E: "Don\'t have the right people"', nextStep: 'stage2_r1' },
            { label: 'Category F: "Don\'t know" or vague answer', nextStep: 'stage2_r1' }
          ]
        )}

        {/* STAGE 2: ROUTER METRICS */}
        {renderQuestion('stage2_r1', 'R1: What\'s your CAC and LTV in dollars?',
          'What\'s your Customer Acquisition Cost (CAC) and Lifetime Value (LTV) in dollars?',
          [
            { 
              label: 'Don\'t know', 
              nextStep: 'stage3_SYSTEMS', 
              constraint: 'SYSTEMS',
              description: 'ROUTE → SYSTEMS CONSTRAINT (Flying blind. Can\'t optimize what you don\'t measure.)'
            },
            { 
              label: '<1:1 ratio', 
              nextStep: 'stage2_r1a',
              description: 'Losing money per customer - go to R1-A'
            },
            { 
              label: '1:1 to 1.5:1 ratio', 
              nextStep: 'stage2_r1a',
              description: 'Barely profitable - go to R1-A'
            },
            { 
              label: '1.5:1 to 3:1 ratio', 
              nextStep: 'stage2_r2',
              description: 'Marginal economics. PASS TO R2'
            },
            { 
              label: '3:1 to 5:1 ratio', 
              nextStep: 'stage2_r2',
              description: 'Healthy economics. PASS TO R2'
            },
            { 
              label: '>5:1 ratio', 
              nextStep: 'stage2_r2',
              description: 'Excellent economics. PASS TO R2'
            }
          ]
        )}

        {renderQuestion('stage2_r1a', 'R1-A: OFFER vs ACQUISITION DISAMBIGUATOR',
          'What\'s your close rate on qualified opportunities?',
          [
            { 
              label: '<10% (Any context)', 
              nextStep: 'stage3_OFFER', 
              constraint: 'OFFER',
              description: 'OFFER CONSTRAINT'
            },
            { 
              label: '10-20% (High price point >$5K)', 
              nextStep: 'stage3_OFFER', 
              constraint: 'OFFER',
              description: 'OFFER CONSTRAINT'
            },
            { 
              label: '10-20% (Low price point <$5K)', 
              nextStep: 'stage3_ACQUISITION', 
              constraint: 'ACQUISITION',
              description: 'ACQUISITION CONSTRAINT (wrong leads)'
            },
            { 
              label: '20-30% (B2B >$10K)', 
              nextStep: 'stage3_ACQUISITION', 
              constraint: 'ACQUISITION',
              description: 'ACQUISITION CONSTRAINT (wrong leads)'
            },
            { 
              label: '20-30% (B2C or <$10K)', 
              nextStep: 'stage3_OFFER', 
              constraint: 'OFFER',
              description: 'OFFER CONSTRAINT (price resistance)'
            },
            { 
              label: '>30% (LTV:CAC still <3:1)', 
              nextStep: 'stage3_ACQUISITION', 
              constraint: 'ACQUISITION',
              description: 'ACQUISITION CONSTRAINT (paying too much for leads)'
            }
          ]
        )}

        {renderQuestion('stage2_r2', 'R2: How many qualified leads per month and what\'s the trend?',
          'How many qualified leads per month and what\'s the trend?',
          [
            { 
              label: '<50 leads (Any trend, any close rate)', 
              nextStep: 'stage3_ACQUISITION', 
              constraint: 'ACQUISITION',
              description: 'ROUTE → ACQUISITION (volume problem)'
            },
            { 
              label: '50-100 leads (Declining + <20% close)', 
              nextStep: 'stage3_OFFER', 
              constraint: 'OFFER',
              description: 'ROUTE → OFFER (leaky bucket)'
            },
            { 
              label: '50-100 leads (Flat/Growing + <20% close)', 
              nextStep: 'stage3_OFFER', 
              constraint: 'OFFER',
              description: 'ROUTE → OFFER (conversion problem first)'
            },
            { 
              label: '50-100 leads (Any trend + >20% close)', 
              nextStep: 'stage2_r3',
              description: 'PASS TO R3 (volume adequate, conversion okay)'
            },
            { 
              label: '100-500 leads (Declining + <15% close)', 
              nextStep: 'stage3_OFFER', 
              constraint: 'OFFER',
              description: 'ROUTE → OFFER (losing product-market fit)'
            },
            { 
              label: '100-500 leads (Any trend + <15% close)', 
              nextStep: 'stage3_OFFER', 
              constraint: 'OFFER',
              description: 'ROUTE → OFFER (conversion is the bottleneck)'
            },
            { 
              label: '100-500 leads (Any trend + 15-30% close)', 
              nextStep: 'stage2_r3',
              description: 'PASS TO R3 (healthy pipeline)'
            },
            { 
              label: '100-500 leads (Flat + >30% close)', 
              nextStep: 'stage3_ACQUISITION', 
              constraint: 'ACQUISITION',
              description: 'ROUTE → ACQUISITION (need more volume)'
            },
            { 
              label: '>500 leads (Any trend + <20% close)', 
              nextStep: 'stage3_OFFER', 
              constraint: 'OFFER',
              description: 'ROUTE → OFFER (drowning in bad leads or bad offer)'
            },
            { 
              label: '>500 leads (Any trend + >20% close)', 
              nextStep: 'stage2_r3',
              description: 'PASS TO R3 (not an acquisition problem)'
            }
          ]
        )}

        {renderQuestion('stage2_r3', 'R3: What\'s your monthly churn rate?',
          'What\'s your monthly churn rate? (or refund rate if not recurring)',
          [
            { 
              label: 'Monthly churn >10%', 
              nextStep: 'stage3_RETENTION', 
              constraint: 'RETENTION',
              description: 'ROUTE → RETENTION (bleeding customers)'
            },
            { 
              label: 'Monthly churn 5-10% (<$1M revenue)', 
              nextStep: 'stage2_r3a',
              description: 'PASS TO R3-A (could be wrong customers)'
            },
            { 
              label: 'Monthly churn 5-10% (>$1M revenue)', 
              nextStep: 'stage2_r3a',
              description: 'PASS TO R3-A (check timing)'
            },
            { 
              label: 'Monthly churn <5%', 
              nextStep: 'stage2_r4',
              description: 'PASS TO R4 (retention is healthy)'
            },
            { 
              label: 'Annual churn >40%', 
              nextStep: 'stage3_RETENTION', 
              constraint: 'RETENTION',
              description: 'ROUTE → RETENTION'
            },
            { 
              label: 'Annual churn 20-40%', 
              nextStep: 'stage2_r3a',
              description: 'PASS TO R3-A (borderline, check why)'
            },
            { 
              label: 'Annual churn <20%', 
              nextStep: 'stage2_r4',
              description: 'PASS TO R4 (good retention)'
            },
            { 
              label: 'Refund rate >10%', 
              nextStep: 'stage3_OFFER', 
              constraint: 'OFFER',
              description: 'ROUTE → OFFER (expectation mismatch)'
            },
            { 
              label: 'Refund rate 5-10%', 
              nextStep: 'stage2_r3a',
              description: 'PASS TO R3-A (check why)'
            },
            { 
              label: 'Refund rate <5%', 
              nextStep: 'stage2_r4',
              description: 'PASS TO R4'
            }
          ]
        )}

        {renderQuestion('stage2_r3a', 'R3-A: RETENTION vs WRONG CUSTOMERS DISAMBIGUATOR',
          'When do most customers churn - first month, 3-6 months, or randomly throughout?',
          [
            { 
              label: 'First 30 days + "Not what I expected"', 
              nextStep: 'stage3_OFFER', 
              constraint: 'OFFER',
              description: 'OFFER CONSTRAINT (oversold)'
            },
            { 
              label: 'First 30 days + "Too complicated" or "couldn\'t figure it out"', 
              nextStep: 'stage3_DELIVERY', 
              constraint: 'DELIVERY',
              description: 'DELIVERY CONSTRAINT (onboarding)'
            },
            { 
              label: 'First 30 days + "Not a good fit"', 
              nextStep: 'stage3_ACQUISITION', 
              constraint: 'ACQUISITION',
              description: 'ACQUISITION CONSTRAINT (wrong customers)'
            },
            { 
              label: '3-6 months + "Not getting results"', 
              nextStep: 'stage3_DELIVERY', 
              constraint: 'DELIVERY',
              description: 'DELIVERY CONSTRAINT (fulfillment quality)'
            },
            { 
              label: '3-6 months + "Too expensive" or "can\'t afford"', 
              nextStep: 'stage3_MONETIZATION', 
              constraint: 'MONETIZATION',
              description: 'MONETIZATION CONSTRAINT (wrong pricing tier)'
            },
            { 
              label: '6-12 months + "Achieved goal"', 
              nextStep: 'stage3_MONETIZATION', 
              constraint: 'MONETIZATION',
              description: 'Normal (need upsell path) → MONETIZATION'
            },
            { 
              label: '6-12 months + "Bored" or "got stale"', 
              nextStep: 'stage3_DELIVERY', 
              constraint: 'DELIVERY',
              description: 'DELIVERY CONSTRAINT (no progression)'
            },
            { 
              label: 'Random timing + No clear pattern', 
              nextStep: 'stage3_DELIVERY', 
              constraint: 'DELIVERY',
              description: 'DELIVERY CONSTRAINT (quality inconsistency)'
            },
            { 
              label: 'Random timing + Clear pattern when you dig', 
              nextStep: 'stage2_r3',
              description: 'Route based on pattern'
            }
          ]
        )}

        {renderQuestion('stage2_r4', 'R4: If you got 2x customers tomorrow, could you deliver?',
          'If you got 2x customers tomorrow, could you deliver?',
          [
            { 
              label: '"Yes, easily" + "We could handle 10x"', 
              nextStep: 'stage2_r5',
              description: 'PASS TO R5 (not a delivery constraint)'
            },
            { 
              label: '"Yes, easily" + But previous routers showed problems', 
              nextStep: 'stage2_r1',
              description: 'Recheck routers (something\'s wrong)'
            },
            { 
              label: '"Yes, but barely" + <$1M revenue', 
              nextStep: 'stage2_r4a',
              description: 'PASS TO R4-A (check what breaks first)'
            },
            { 
              label: '"Yes, but barely" + >$1M revenue', 
              nextStep: 'stage3_DELIVERY', 
              constraint: 'DELIVERY',
              description: 'ROUTE → DELIVERY (at capacity)'
            },
            { 
              label: '"No"', 
              nextStep: 'stage3_DELIVERY', 
              constraint: 'DELIVERY',
              description: 'ROUTE → DELIVERY (immediate bottleneck)'
            },
            { 
              label: '"No, but we could hire" + "Would need 1-2 people"', 
              nextStep: 'stage2_r4a',
              description: 'PASS TO R4-A (team constraint vs delivery)'
            },
            { 
              label: '"No, but we could hire" + "Would need 5+ people"', 
              nextStep: 'stage3_DELIVERY', 
              constraint: 'DELIVERY',
              description: 'ROUTE → DELIVERY (model doesn\'t scale)'
            }
          ]
        )}

        {renderQuestion('stage2_r4a', 'R4-A: DELIVERY vs TEAM vs SYSTEMS DISAMBIGUATOR',
          'What specifically would break if you got 2x customers?',
          [
            { 
              label: '"I personally couldn\'t handle it" + "I do all the delivery"', 
              nextStep: 'stage3_OWNER', 
              constraint: 'OWNER',
              description: 'OWNER CONSTRAINT'
            },
            { 
              label: '"I personally couldn\'t handle it" + "I do sales/admin"', 
              nextStep: 'stage3_TEAM', 
              constraint: 'TEAM',
              description: 'TEAM CONSTRAINT'
            },
            { 
              label: '"We\'d need more team" + "We have SOPs, just need bodies"', 
              nextStep: 'stage3_TEAM', 
              constraint: 'TEAM',
              description: 'TEAM CONSTRAINT'
            },
            { 
              label: '"We\'d need more team" + "People would have to figure it out"', 
              nextStep: 'stage3_SYSTEMS', 
              constraint: 'SYSTEMS',
              description: 'SYSTEMS CONSTRAINT'
            },
            { 
              label: '"Quality would suffer" + Clear bottleneck (time/people)', 
              nextStep: 'stage3_DELIVERY', 
              constraint: 'DELIVERY',
              description: 'DELIVERY CONSTRAINT'
            },
            { 
              label: '"Quality would suffer" + No clear bottleneck', 
              nextStep: 'stage3_SYSTEMS', 
              constraint: 'SYSTEMS',
              description: 'SYSTEMS CONSTRAINT'
            },
            { 
              label: '"Don\'t know what would break"', 
              nextStep: 'stage3_SYSTEMS', 
              constraint: 'SYSTEMS',
              description: 'SYSTEMS CONSTRAINT (no visibility)'
            },
            { 
              label: '"Our software/tools couldn\'t handle it"', 
              nextStep: 'stage3_DELIVERY', 
              constraint: 'DELIVERY',
              description: 'DELIVERY CONSTRAINT (infrastructure)'
            },
            { 
              label: '"We\'d run out of leads first"', 
              nextStep: 'stage2_r2', 
              constraint: 'ACQUISITION',
              description: 'ACQUISITION CONSTRAINT (back to R2)'
            }
          ]
        )}

        {renderQuestion('stage2_r5', 'R5: What percentage of your time is spent on tasks someone else could do?',
          'What percentage of your time is spent on tasks someone else could do?',
          [
            { 
              label: '>70% + <$1M revenue', 
              nextStep: 'stage3_OWNER', 
              constraint: 'OWNER',
              description: 'OWNER CONSTRAINT (you\'re the business)'
            },
            { 
              label: '>70% + $1-5M revenue', 
              nextStep: 'stage3_TEAM', 
              constraint: 'TEAM',
              description: 'TEAM CONSTRAINT (missing key roles)'
            },
            { 
              label: '>70% + >$5M revenue', 
              nextStep: 'stage3_SYSTEMS', 
              constraint: 'SYSTEMS',
              description: 'SYSTEMS CONSTRAINT (no process for delegation)'
            },
            { 
              label: '50-70% + <$1M revenue', 
              nextStep: 'stage3_OWNER', 
              constraint: 'OWNER',
              description: 'OWNER CONSTRAINT (could delegate more)'
            },
            { 
              label: '50-70% + >$1M revenue', 
              nextStep: 'stage3_TEAM', 
              constraint: 'TEAM',
              description: 'TEAM CONSTRAINT (need more/better people)'
            },
            { 
              label: '30-50%', 
              nextStep: 'stage2_r5a',
              description: 'PASS TO R5-A (check where time goes)'
            },
            { 
              label: '<30% + Previous routers all healthy', 
              nextStep: 'stage2_r5b',
              description: 'PASS TO R5-B (might be market/cash)'
            }
          ]
        )}

        {renderQuestion('stage2_r5a', 'R5-A: TIME ALLOCATION DISAMBIGUATOR',
          'Break down your time: what % on sales, delivery, admin, strategy, firefighting?',
          [
            { 
              label: 'Sales >40% + You have sales team', 
              nextStep: 'stage3_TEAM', 
              constraint: 'TEAM',
              description: 'TEAM CONSTRAINT (team not performing)'
            },
            { 
              label: 'Sales >40% + No sales team', 
              nextStep: 'stage3_TEAM', 
              constraint: 'TEAM',
              description: 'TEAM CONSTRAINT (need to hire)'
            },
            { 
              label: 'Delivery >40% + You have delivery team', 
              nextStep: 'stage3_TEAM', 
              constraint: 'TEAM',
              description: 'TEAM CONSTRAINT (team not performing)'
            },
            { 
              label: 'Delivery >40% + No delivery team', 
              nextStep: 'stage3_TEAM', 
              constraint: 'TEAM',
              description: 'TEAM CONSTRAINT (need to hire)'
            },
            { 
              label: 'Firefighting >30% + Same fires repeatedly', 
              nextStep: 'stage3_SYSTEMS', 
              constraint: 'SYSTEMS',
              description: 'SYSTEMS CONSTRAINT'
            },
            { 
              label: 'Firefighting >30% + Different fires', 
              nextStep: 'stage3_DELIVERY', 
              constraint: 'DELIVERY',
              description: 'DELIVERY CONSTRAINT (quality issues)'
            },
            { 
              label: 'Admin >30%', 
              nextStep: 'stage3_SYSTEMS', 
              constraint: 'SYSTEMS',
              description: 'SYSTEMS CONSTRAINT (no automation)'
            },
            { 
              label: 'Strategy >40% + Business growing', 
              nextStep: 'stage2_r5b',
              description: 'Healthy - PASS TO R5-B'
            },
            { 
              label: 'Strategy >40% + Business not growing', 
              nextStep: 'stage3_OWNER', 
              constraint: 'OWNER',
              description: 'OWNER CONSTRAINT (analysis paralysis)'
            }
          ]
        )}

        {renderQuestion('stage2_r5b', 'R5-B: MARKET vs CASH DISAMBIGUATOR',
          'You have good unit economics, healthy pipeline, strong retention, and capacity to scale. So why aren\'t you growing? What would you do if you had $500K to invest right now?',
          [
            { 
              label: '"Increase ad spend" + "Would get us more customers"', 
              nextStep: 'stage3_ACQUISITION', 
              constraint: 'ACQUISITION',
              description: 'ACQUISITION (just need scale)'
            },
            { 
              label: '"Hire sales team" + Current close rate >25%', 
              nextStep: 'stage3_ACQUISITION', 
              constraint: 'ACQUISITION',
              description: 'ACQUISITION (need volume)'
            },
            { 
              label: '"Hire sales team" + Current close rate <25%', 
              nextStep: 'stage2_r1',
              description: 'Go back - missed something'
            },
            { 
              label: '"Not sure how to deploy it" + Market is large', 
              nextStep: 'stage3_OWNER', 
              constraint: 'OWNER',
              description: 'OWNER CONSTRAINT (knowledge gap)'
            },
            { 
              label: '"Not sure how to deploy it" + Market is small/saturated', 
              nextStep: 'stage3_MARKET', 
              constraint: 'MARKET',
              description: 'MARKET CONSTRAINT'
            },
            { 
              label: '"Enter new market/segment" + Current market tapped out', 
              nextStep: 'stage3_MARKET', 
              constraint: 'MARKET',
              description: 'MARKET CONSTRAINT'
            },
            { 
              label: '"Build new product" + Customers asking for it', 
              nextStep: 'stage3_MONETIZATION', 
              constraint: 'MONETIZATION',
              description: 'MONETIZATION (need value ladder)'
            },
            { 
              label: '"Build new product" + Your idea, not customer-driven', 
              nextStep: 'stage3_OWNER', 
              constraint: 'OWNER',
              description: 'OWNER CONSTRAINT (shiny object)'
            },
            { 
              label: '"I don\'t need money"', 
              nextStep: 'stage3_OWNER', 
              constraint: 'OWNER',
              description: 'OWNER CONSTRAINT (ambition/motivation)'
            },
            { 
              label: '"Couldn\'t spend it profitably" + Can\'t improve CAC', 
              nextStep: 'stage3_MARKET', 
              constraint: 'MARKET',
              description: 'MARKET CONSTRAINT (saturated)'
            }
          ]
        )}

        {/* STAGE 3: CONSTRAINT CONFIRMATION */}
        {finalConstraint && renderConstraintConfirmation(finalConstraint)}

        {/* STAGE 4: MASKING CHECKS */}
        {renderQuestion('stage4', 'STAGE 4: MASKING CHECKS',
          `You've identified ${finalConstraint} as the constraint. But is this masking the real problem? Check these common false positives:`,
          finalConstraint ? [
            {
              label: 'Pattern 1: "Need more leads" but actually OFFER problem',
              nextStep: 'stage4_check1',
              description: 'Check: Close rate <15%, high refund/churn, leads say "too expensive"'
            },
            {
              label: 'Pattern 2: "Churn too high" but actually WRONG CUSTOMERS',
              nextStep: 'stage4_check2',
              description: 'Check: Churn in first 30 days, "not what I expected", best customers look different'
            },
            {
              label: 'Pattern 3: "Can\'t scale delivery" but actually NO SYSTEMS',
              nextStep: 'stage4_check3',
              description: 'Check: Nothing documented, "only I know how", every customer is custom'
            },
            {
              label: 'Pattern 4: "Need better team" but actually OWNER BOTTLENECK',
              nextStep: 'stage4_check4',
              description: 'Check: High turnover, "nobody does it as well as I do", micromanagement'
            },
            {
              label: 'Pattern 5: "Market is saturated" but actually OFFER/POSITIONING',
              nextStep: 'stage4_check5',
              description: 'Check: Competitors growing, you\'re declining, "everyone charges less"'
            },
            {
              label: 'No masking patterns match - constraint is correct',
              nextStep: 'stage5',
              description: 'Continue to Second-Order Check'
            }
          ] : []
        )}

        {/* Stage 4 Check Questions */}
        {renderQuestion('stage4_check1', 'Masking Check 1: "Need more leads" but actually OFFER?',
          'If I gave you 10x leads tomorrow, what would happen?',
          [
            { label: '"We\'d make 10x revenue"', nextStep: 'stage5', constraint: finalConstraint, description: 'Actually acquisition (they\'re right) - constraint confirmed' },
            { label: '"We\'d waste a lot of money"', nextStep: 'stage3_OFFER', constraint: 'OFFER', description: 'Actually OFFER (they\'re wrong) - reroute to OFFER' },
            { label: '"We couldn\'t handle it"', nextStep: 'stage3_DELIVERY', constraint: 'DELIVERY', description: 'Actually DELIVERY (neither is right) - reroute to DELIVERY' }
          ]
        )}

        {renderQuestion('stage4_check2', 'Masking Check 2: "Churn too high" but actually WRONG CUSTOMERS?',
          'Do your best customers look like your typical customer?',
          [
            { label: '"Yes"', nextStep: 'stage5', constraint: finalConstraint, description: 'Actually retention (delivery problem) - constraint confirmed' },
            { label: '"No, best customers are [different segment]"', nextStep: 'stage3_ACQUISITION', constraint: 'ACQUISITION', description: 'Actually ACQUISITION (targeting wrong people) - reroute to ACQUISITION' }
          ]
        )}

        {renderQuestion('stage4_check3', 'Masking Check 3: "Can\'t scale delivery" but actually NO SYSTEMS?',
          'If you had to train someone to do your job tomorrow, how would you do it?',
          [
            { label: '"I\'d show them a few times"', nextStep: 'stage3_SYSTEMS', constraint: 'SYSTEMS', description: 'Actually SYSTEMS (no process) - reroute to SYSTEMS' },
            { label: '"I\'d give them our playbook"', nextStep: 'stage5', constraint: finalConstraint, description: 'Actually delivery (model doesn\'t scale) - constraint confirmed' }
          ]
        )}

        {renderQuestion('stage4_check4', 'Masking Check 4: "Need better team" but actually OWNER BOTTLENECK?',
          'What\'s the last significant decision someone on your team made without you?',
          [
            { label: 'Can\'t remember or >1 month ago', nextStep: 'stage3_OWNER', constraint: 'OWNER', description: 'Actually OWNER (won\'t delegate) - reroute to OWNER' },
            { label: 'Recent examples', nextStep: 'stage5', constraint: finalConstraint, description: 'Actually team (people aren\'t capable) - constraint confirmed' }
          ]
        )}

        {renderQuestion('stage4_check5', 'Masking Check 5: "Market is saturated" but actually OFFER/POSITIONING?',
          'Show me a competitor who\'s winning and explain why customers choose them.',
          [
            { label: 'Can\'t articulate', nextStep: 'stage3_OFFER', constraint: 'OFFER', description: 'Actually OFFER (don\'t understand positioning) - reroute to OFFER' },
            { label: 'Clear articulation', nextStep: 'stage5', constraint: finalConstraint, description: 'Actually market (they\'ve figured it out) - constraint confirmed' }
          ]
        )}

        {/* STAGE 5: SECOND-ORDER CONSTRAINT CHECK */}
        {renderQuestion('stage5', `STAGE 5: SECOND-ORDER CONSTRAINT CHECK - ${finalConstraint}`,
          finalConstraint === 'ACQUISITION' 
            ? 'If I doubled your leads tomorrow, what would be the next bottleneck?'
            : finalConstraint === 'OFFER'
            ? 'If I fixed your offer and doubled conversions, what breaks next?'
            : finalConstraint === 'RETENTION'
            ? 'If I cut your churn in half, what\'s the next problem?'
            : finalConstraint === 'DELIVERY'
            ? 'If I doubled your capacity, what\'s the next bottleneck?'
            : finalConstraint === 'TEAM'
            ? 'If I hired your dream team tomorrow, what\'s the next problem?'
            : `Before diving deep, check what breaks if you fix the identified constraint: ${finalConstraint}`,
          finalConstraint === 'ACQUISITION' ? [
            {
              label: '"We\'d be at capacity"',
              nextStep: 'stage6',
              description: 'Secondary constraint: DELIVERY (solve both if <6 months away)'
            },
            {
              label: '"Our close rate would drop"',
              nextStep: 'stage6',
              description: 'Secondary constraint: LEAD QUALITY (still acquisition)'
            },
            {
              label: '"I couldn\'t manage the team"',
              nextStep: 'stage6',
              description: 'Secondary constraint: OWNER (solve both if <6 months away)'
            },
            {
              label: '"Nothing"',
              nextStep: 'stage6',
              description: 'Proceed with acquisition focus'
            }
          ] : finalConstraint === 'OFFER' ? [
            {
              label: '"We couldn\'t deliver"',
              nextStep: 'stage6',
              description: 'Secondary constraint: DELIVERY (solve both if <6 months away)'
            },
            {
              label: '"We\'d run out of leads"',
              nextStep: 'stage6',
              description: 'Secondary constraint: ACQUISITION (solve both if <6 months away)'
            },
            {
              label: '"Nothing"',
              nextStep: 'stage6',
              description: 'Proceed with offer focus'
            }
          ] : finalConstraint === 'RETENTION' ? [
            {
              label: '"We\'d be at capacity"',
              nextStep: 'stage6',
              description: 'Secondary constraint: DELIVERY (solve both if <6 months away)'
            },
            {
              label: '"We still wouldn\'t grow fast enough"',
              nextStep: 'stage6',
              description: 'Secondary constraint: ACQUISITION (solve both if <6 months away)'
            },
            {
              label: '"Nothing"',
              nextStep: 'stage6',
              description: 'Proceed with retention focus'
            }
          ] : finalConstraint === 'DELIVERY' ? [
            {
              label: '"We\'d run out of customers"',
              nextStep: 'stage6',
              description: 'Secondary constraint: ACQUISITION (solve both if <6 months away)'
            },
            {
              label: '"Quality would suffer"',
              nextStep: 'stage6',
              description: 'Secondary constraint: SYSTEMS (solve both if <6 months away)'
            },
            {
              label: '"Nothing"',
              nextStep: 'stage6',
              description: 'Proceed with delivery focus'
            }
          ] : finalConstraint === 'TEAM' ? [
            {
              label: '"We\'d run out of customers"',
              nextStep: 'stage6',
              description: 'Secondary constraint: ACQUISITION (solve both if <6 months away)'
            },
            {
              label: '"They wouldn\'t know what to do"',
              nextStep: 'stage6',
              description: 'Secondary constraint: SYSTEMS (solve both if <6 months away)'
            },
            {
              label: '"I wouldn\'t know how to manage them"',
              nextStep: 'stage6',
              description: 'Secondary constraint: OWNER (solve both if <6 months away)'
            },
            {
              label: '"Nothing"',
              nextStep: 'stage6',
              description: 'Proceed with team focus'
            }
          ] : [
            {
              label: 'Continue to Final Routing',
              nextStep: 'stage6',
              description: 'Proceed with identified constraint'
            }
          ]
        )}

        {/* STAGE 6: FINAL ROUTING DECISION */}
        {currentStep === 'stage6' && finalConstraint && (
          <div style={{ marginBottom: '2rem' }}>
            <InfoBox title="STAGE 6: FINAL ROUTING DECISION" variant="advisor-note">
              <p style={{ fontSize: '1.2rem', marginBottom: '1rem', fontWeight: '600' }}>
                Primary Constraint Identified: <strong style={{ color: 'var(--primary-color, #007bff)' }}>{finalConstraint}</strong>
              </p>
              <p style={{ marginBottom: '1rem' }}>
                You now have:
              </p>
              <ul className="bullet-list" style={{ marginBottom: '1.5rem' }}>
                <li>Primary Constraint (from routers)</li>
                <li>Confirmation (from confirmation questions)</li>
                <li>Masking Check (verified it's not hiding something else)</li>
                <li>Secondary Constraint (know what breaks next)</li>
              </ul>
              <div style={{ marginTop: '1.5rem' }}>
                <button
                  onClick={() => {
                    setCurrentStep(`deepdive_${finalConstraint}`)
                    setDeepDiveCategory(null)
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                  style={{
                    padding: '1rem 2rem',
                    backgroundColor: 'var(--primary-color, #007bff)',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontWeight: '600',
                    fontSize: '1.1rem'
                  }}
                >
                  Proceed to {finalConstraint} DEEP DIVE →
                </button>
              </div>
            </InfoBox>
          </div>
        )}

        {/* LEVEL 3: DEEP DIVE */}
        {finalConstraint && renderDeepDive(finalConstraint)}
      </div>
    </>
  )
}

export default HormoziDiagnosticRouter

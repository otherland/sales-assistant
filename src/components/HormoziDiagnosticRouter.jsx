import React, { useState } from 'react'
import InfoBox from './content/InfoBox'
import LinkifiedText from './content/LinkifiedText'

function HormoziDiagnosticRouter({ refData, refId }) {
  const [collapsedSections, setCollapsedSections] = useState({
    stage1: false,
    stage2: false,
    stage2_r1: true,
    stage2_r1a: true,
    stage2_r2: true,
    stage2_r3: true,
    stage2_r3a: true,
    stage2_r4: true,
    stage2_r4a: true,
    stage2_r5: true,
    stage2_r5a: true,
    stage2_r5b: true,
    stage3: true,
    stage4: true,
    stage5: true,
    stage6: true,
    usage: true
  })

  const toggleSection = (sectionKey) => {
    setCollapsedSections(prev => ({
      ...prev,
      [sectionKey]: !prev[sectionKey]
    }))
  }

  const CollapsibleSection = ({ id, title, children, defaultCollapsed = true }) => {
    const isCollapsed = collapsedSections[id] !== undefined ? collapsedSections[id] : defaultCollapsed
    return (
      <div style={{ marginBottom: '1.5rem' }}>
        <div
          onClick={() => toggleSection(id)}
          style={{
            cursor: 'pointer',
            padding: '1rem',
            backgroundColor: 'var(--bg-secondary, #f5f5f5)',
            borderRadius: '8px',
            marginBottom: '0.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontWeight: '600',
            fontSize: '1.1rem',
            border: '2px solid var(--primary-color, #007bff)'
          }}
        >
          <span>{title}</span>
          <span style={{ fontSize: '0.9rem' }}>{isCollapsed ? '▼' : '▲'}</span>
        </div>
        {!isCollapsed && (
          <div style={{ padding: '0 1rem' }}>
            {children}
          </div>
        )}
      </div>
    )
  }

  const DecisionTable = ({ rows }) => (
    <div style={{ overflowX: 'auto', margin: '1rem 0' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
        <thead>
          <tr style={{ backgroundColor: 'var(--bg-secondary, #f5f5f5)' }}>
            {rows[0].map((header, idx) => (
              <th key={idx} style={{ padding: '0.75rem', textAlign: 'left', border: '1px solid #ddd', fontWeight: '600' }}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.slice(1).map((row, rowIdx) => (
            <tr key={rowIdx} style={{ backgroundColor: rowIdx % 2 === 0 ? 'white' : 'var(--bg-primary, #fafafa)' }}>
              {row.map((cell, cellIdx) => (
                <td key={cellIdx} style={{ padding: '0.75rem', border: '1px solid #ddd' }}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

  return (
    <>
      <div className="content-header">
        <span className="content-category reference">Reference Library</span>
        <h2 className="content-title">{refData?.title || 'The Complete Hormozi Diagnostic Router'}</h2>
        {refData?.purpose && <p className="content-purpose">{refData.purpose}</p>}
        {refData?.subtitle && <p className="content-purpose">{refData.subtitle}</p>}
      </div>

      <div className="content-body" style={{ maxWidth: '100%' }}>
        {/* STAGE 1: ENTRY POINT */}
        <CollapsibleSection id="stage1" title="STAGE 1: ENTRY POINT (3 Questions)" defaultCollapsed={false}>
          <InfoBox title="E1: What's your revenue?" style={{ marginBottom: '1rem' }}>
            <p>Record the number. This determines:</p>
            <ul className="bullet-list">
              <li>Expected maturity level</li>
              <li>Common constraint patterns</li>
              <li>Diagnostic depth required</li>
            </ul>
          </InfoBox>

          <InfoBox title="E2: What do you want it to be in 12 months?" style={{ marginBottom: '1rem' }}>
            <p>Calculate the gap:</p>
            <ul className="bullet-list">
              <li><strong>2x</strong> = Realistic growth (refine existing)</li>
              <li><strong>3-5x</strong> = Aggressive growth (major changes needed)</li>
              <li><strong>10x+</strong> = Unrealistic (education needed first)</li>
            </ul>
          </InfoBox>

          <InfoBox title="E3: What do you think is stopping you?" style={{ marginBottom: '1rem' }}>
            <p>Their answer categories:</p>
            <ul className="bullet-list">
              <li><strong>Category A:</strong> "Need more leads/traffic"</li>
              <li><strong>Category B:</strong> "Need better sales/conversions"</li>
              <li><strong>Category C:</strong> "Can't keep up with demand"</li>
              <li><strong>Category D:</strong> "Can't afford to grow"</li>
              <li><strong>Category E:</strong> "Don't have the right people"</li>
              <li><strong>Category F:</strong> "Don't know" or vague answer</li>
            </ul>
            <p style={{ marginTop: '0.5rem', fontStyle: 'italic' }}>
              Mark their category. You'll check if they're right later.
            </p>
          </InfoBox>
        </CollapsibleSection>

        {/* STAGE 2: THE 5 ROUTER METRICS */}
        <CollapsibleSection id="stage2" title="STAGE 2: THE 5 ROUTER METRICS" defaultCollapsed={false}>
          <p style={{ marginBottom: '1rem', fontStyle: 'italic' }}>
            Ask these in exact order. Each metric routes or passes to next.
          </p>

          {/* R1 */}
          <CollapsibleSection id="stage2_r1" title="R1: What's your CAC and LTV in dollars?">
            <InfoBox title="Response Pattern A: They don't know" variant="warning" style={{ marginBottom: '1rem' }}>
              <p><strong>ROUTE → SYSTEMS CONSTRAINT</strong></p>
              <p>Skip all other routers</p>
              <p><strong>Rationale:</strong> Flying blind. Can't optimize what you don't measure.</p>
              <p><strong>Confirmation question:</strong> "What other numbers do you track?" (if &lt;3 metrics, confirms SYSTEMS)</p>
            </InfoBox>

            <InfoBox title="Response Pattern B: They know it" style={{ marginBottom: '1rem' }}>
              <p>Calculate LTV:CAC ratio:</p>
              <DecisionTable rows={[
                ['Ratio', 'Decision'],
                ['<1:1', 'ROUTE → OFFER or ACQUISITION (losing money per customer - go to R1-A)'],
                ['1:1 to 1.5:1', 'ROUTE → OFFER or ACQUISITION (barely profitable - go to R1-A)'],
                ['1.5:1 to 3:1', 'Marginal economics. PASS TO R2 (could be many things)'],
                ['3:1 to 5:1', 'Healthy economics. PASS TO R2 (constraint is elsewhere)'],
                ['>5:1', 'Excellent economics. PASS TO R2 (definitely not offer/acquisition)']
              ]} />
            </InfoBox>

            {/* R1-A */}
            <CollapsibleSection id="stage2_r1a" title="R1-A: OFFER vs ACQUISITION DISAMBIGUATOR (only if LTV:CAC <3:1)">
              <p style={{ marginBottom: '1rem' }}>"What's your close rate on qualified opportunities?"</p>
              <DecisionTable rows={[
                ['Close Rate', '+', 'Context', '=', 'Route'],
                ['<10%', '+', 'Any context', '=', 'OFFER CONSTRAINT'],
                ['10-20%', '+', 'High price point (>$5K)', '=', 'OFFER CONSTRAINT'],
                ['10-20%', '+', 'Low price point (<$5K)', '=', 'ACQUISITION CONSTRAINT (wrong leads)'],
                ['20-30%', '+', 'B2B >$10K', '=', 'ACQUISITION CONSTRAINT (wrong leads)'],
                ['20-30%', '+', 'B2C or <$10K', '=', 'OFFER CONSTRAINT (price resistance)'],
                ['>30%', '+', 'LTV:CAC still <3:1', '=', 'ACQUISITION CONSTRAINT (paying too much for leads)']
              ]} />
              <InfoBox title="Confirmation check" style={{ marginTop: '1rem' }}>
                <p>"Describe your last 3 lost deals. Why didn't they buy?"</p>
                <ul className="bullet-list">
                  <li>Price objections (2+ times) → OFFER (price/value mismatch)</li>
                  <li>"Need to think about it" (2+ times) → OFFER (unclear value prop)</li>
                  <li>"Going with competitor" (2+ times) → OFFER (positioning problem)</li>
                  <li>Never actually engaged → ACQUISITION (lead quality)</li>
                  <li>Asked questions you couldn't answer → OFFER (incomplete offer)</li>
                </ul>
                <p style={{ marginTop: '0.5rem', fontWeight: '600' }}>
                  → ROUTE TO: OFFER DEEP DIVE or ACQUISITION DEEP DIVE
                </p>
              </InfoBox>
            </CollapsibleSection>
          </CollapsibleSection>

          {/* R2 */}
          <CollapsibleSection id="stage2_r2" title="R2: How many qualified leads per month and what's the trend?">
            <DecisionTable rows={[
              ['Leads/Month', '+', 'Trend', '+', 'Close Rate', '=', 'Decision'],
              ['<50', '+', 'Any', '+', 'Any', '=', 'ROUTE → ACQUISITION (volume problem)'],
              ['50-100', '+', 'Declining', '+', '<20%', '=', 'ROUTE → OFFER (leaky bucket)'],
              ['50-100', '+', 'Flat/Growing', '+', '<20%', '=', 'ROUTE → OFFER (conversion problem first)'],
              ['50-100', '+', 'Any', '+', '>20%', '=', 'PASS TO R3 (volume adequate, conversion okay)'],
              ['100-500', '+', 'Declining', '+', '<15%', '=', 'ROUTE → OFFER (losing product-market fit)'],
              ['100-500', '+', 'Any', '+', '<15%', '=', 'ROUTE → OFFER (conversion is the bottleneck)'],
              ['100-500', '+', 'Any', '+', '15-30%', '=', 'PASS TO R3 (healthy pipeline)'],
              ['100-500', '+', 'Flat', '+', '>30%', '=', 'ROUTE → ACQUISITION (need more volume)'],
              ['>500', '+', 'Any', '+', '<20%', '=', 'ROUTE → OFFER (drowning in bad leads or bad offer)'],
              ['>500', '+', 'Any', '+', '>20%', '=', 'PASS TO R3 (not an acquisition problem)']
            ]} />
            <InfoBox title="Confirmation check" style={{ marginTop: '1rem' }}>
              <p>"What's your lead quality? What percentage of leads are actually qualified?"</p>
              <ul className="bullet-list">
                <li>&lt;30% qualified → ACQUISITION (targeting problem)</li>
                <li>30-70% qualified → Normal range, pass through</li>
                <li>70% qualified but low close rate → OFFER or SALES PROCESS</li>
              </ul>
            </InfoBox>
          </CollapsibleSection>

          {/* R3 */}
          <CollapsibleSection id="stage2_r3" title="R3: What's your monthly churn rate? (or refund rate if not recurring)">
            <DecisionTable rows={[
              ['Churn Type', 'Rate', '+', 'Revenue Stage', '=', 'Decision'],
              ['Monthly churn', '>10%', '+', 'Any', '=', 'ROUTE → RETENTION (bleeding customers)'],
              ['Monthly churn', '5-10%', '+', '<$1M revenue', '=', 'PASS TO R3-A (could be wrong customers)'],
              ['Monthly churn', '5-10%', '+', '>$1M revenue', '=', 'PASS TO R3-A (check timing)'],
              ['Monthly churn', '<5%', '+', 'Any', '=', 'PASS TO R4 (retention is healthy)'],
              ['Annual churn', '>40%', '+', 'Any', '=', 'ROUTE → RETENTION'],
              ['Annual churn', '20-40%', '+', 'Any', '=', 'PASS TO R3-A (borderline, check why)'],
              ['Annual churn', '<20%', '+', 'Any', '=', 'PASS TO R4 (good retention)'],
              ['Refund rate', '>10%', '+', 'Any', '=', 'ROUTE → OFFER (expectation mismatch)'],
              ['Refund rate', '5-10%', '+', 'Any', '=', 'PASS TO R3-A (check why)'],
              ['Refund rate', '<5%', '+', 'Any', '=', 'PASS TO R4']
            ]} />

            {/* R3-A */}
            <CollapsibleSection id="stage2_r3a" title="R3-A: RETENTION vs WRONG CUSTOMERS DISAMBIGUATOR">
              <p style={{ marginBottom: '1rem' }}>"When do most customers churn - first month, 3-6 months, or randomly throughout?"</p>
              <DecisionTable rows={[
                ['Timing', '+', 'Churn Reason', '=', 'Route'],
                ['First 30 days', '+', '"Not what I expected"', '=', 'OFFER CONSTRAINT (oversold)'],
                ['First 30 days', '+', '"Too complicated" or "couldn\'t figure it out"', '=', 'DELIVERY CONSTRAINT (onboarding)'],
                ['First 30 days', '+', '"Not a good fit"', '=', 'ACQUISITION CONSTRAINT (wrong customers)'],
                ['3-6 months', '+', '"Not getting results"', '=', 'DELIVERY CONSTRAINT (fulfillment quality)'],
                ['3-6 months', '+', '"Too expensive" or "can\'t afford"', '=', 'MONETIZATION CONSTRAINT (wrong pricing tier)'],
                ['6-12 months', '+', '"Achieved goal"', '=', 'Normal (need upsell path) → MONETIZATION'],
                ['6-12 months', '+', '"Bored" or "got stale"', '=', 'DELIVERY CONSTRAINT (no progression)'],
                ['Random timing', '+', 'No clear pattern', '=', 'DELIVERY CONSTRAINT (quality inconsistency)'],
                ['Random timing', '+', 'Clear pattern when you dig', '=', 'Route based on pattern']
              ]} />
              <InfoBox title="Confirmation check" style={{ marginTop: '1rem' }}>
                <p>"What percentage of customers get the result you promise?"</p>
                <ul className="bullet-list">
                  <li>&lt;50% → DELIVERY CONSTRAINT (can't deliver on promise)</li>
                  <li>50-70% → DELIVERY CONSTRAINT (inconsistent delivery)</li>
                  <li>70% → ACQUISITION CONSTRAINT (selling to wrong people) or MONETIZATION (need higher tiers)</li>
                </ul>
                <p style={{ marginTop: '0.5rem', fontWeight: '600' }}>
                  → ROUTE TO: RETENTION DEEP DIVE, DELIVERY DEEP DIVE, or ACQUISITION DEEP DIVE
                </p>
              </InfoBox>
            </CollapsibleSection>
          </CollapsibleSection>

          {/* R4 */}
          <CollapsibleSection id="stage2_r4" title="R4: If you got 2x customers tomorrow, could you deliver?">
            <DecisionTable rows={[
              ['Response', '+', 'Follow-up Context', '=', 'Decision'],
              ['"Yes, easily"', '+', '"We could handle 10x"', '=', 'PASS TO R5 (not a delivery constraint)'],
              ['"Yes, easily"', '+', 'But previous routers showed problems', '=', 'Recheck routers (something\'s wrong)'],
              ['"Yes, but barely"', '+', '<$1M revenue', '=', 'PASS TO R4-A (check what breaks first)'],
              ['"Yes, but barely"', '+', '>$1M revenue', '=', 'ROUTE → DELIVERY (at capacity)'],
              ['"No"', '+', 'Any', '=', 'ROUTE → DELIVERY (immediate bottleneck)'],
              ['"No, but we could hire"', '+', '"Would need 1-2 people"', '=', 'PASS TO R4-A (team constraint vs delivery)'],
              ['"No, but we could hire"', '+', '"Would need 5+ people"', '=', 'ROUTE → DELIVERY (model doesn\'t scale)']
            ]} />

            {/* R4-A */}
            <CollapsibleSection id="stage2_r4a" title="R4-A: DELIVERY vs TEAM vs SYSTEMS DISAMBIGUATOR">
              <p style={{ marginBottom: '1rem' }}>"What specifically would break if you got 2x customers?"</p>
              <DecisionTable rows={[
                ['Answer', '+', 'Follow-up', '=', 'Route'],
                ['"I personally couldn\'t handle it"', '+', '"I do all the delivery"', '=', 'OWNER CONSTRAINT'],
                ['"I personally couldn\'t handle it"', '+', '"I do sales/admin"', '=', 'TEAM CONSTRAINT'],
                ['"We\'d need more team"', '+', '"We have SOPs, just need bodies"', '=', 'TEAM CONSTRAINT'],
                ['"We\'d need more team"', '+', '"People would have to figure it out"', '=', 'SYSTEMS CONSTRAINT'],
                ['"Quality would suffer"', '+', 'Clear bottleneck (time/people)', '=', 'DELIVERY CONSTRAINT'],
                ['"Quality would suffer"', '+', 'No clear bottleneck', '=', 'SYSTEMS CONSTRAINT'],
                ['"Don\'t know what would break"', '+', 'Any', '=', 'SYSTEMS CONSTRAINT (no visibility)'],
                ['"Our software/tools couldn\'t handle it"', '+', 'Any', '=', 'DELIVERY CONSTRAINT (infrastructure)'],
                ['"We\'d run out of leads first"', '+', 'Any', '=', 'ACQUISITION CONSTRAINT (back to R2)']
              ]} />
              <InfoBox title="Confirmation check" style={{ marginTop: '1rem' }}>
                <p>"What percentage of delivery is documented in SOPs that someone new could follow?"</p>
                <ul className="bullet-list">
                  <li>&lt;20% documented → SYSTEMS CONSTRAINT</li>
                  <li>20-60% documented → DELIVERY CONSTRAINT (model issue)</li>
                  <li>60% documented → TEAM CONSTRAINT (just need people)</li>
                </ul>
                <p style={{ marginTop: '0.5rem', fontWeight: '600' }}>
                  → ROUTE TO: DELIVERY, TEAM, SYSTEMS, or OWNER DEEP DIVE
                </p>
              </InfoBox>
            </CollapsibleSection>
          </CollapsibleSection>

          {/* R5 */}
          <CollapsibleSection id="stage2_r5" title="R5: What percentage of your time is spent on tasks someone else could do?">
            <p style={{ marginBottom: '1rem', fontStyle: 'italic' }}>
              This catches OWNER/TEAM/SYSTEMS when previous routers showed healthy metrics.
            </p>
            <DecisionTable rows={[
              ['% Time on Delegable Tasks', '+', 'Revenue Stage', '=', 'Decision'],
              ['>70%', '+', '<$1M', '=', 'OWNER CONSTRAINT (you\'re the business)'],
              ['>70%', '+', '$1-5M', '=', 'TEAM CONSTRAINT (missing key roles)'],
              ['>70%', '+', '>$5M', '=', 'SYSTEMS CONSTRAINT (no process for delegation)'],
              ['50-70%', '+', '<$1M', '=', 'OWNER CONSTRAINT (could delegate more)'],
              ['50-70%', '+', '>$1M', '=', 'TEAM CONSTRAINT (need more/better people)'],
              ['30-50%', '+', 'Any', '=', 'PASS TO R5-A (check where time goes)'],
              ['<30%', '+', 'Previous routers all healthy', '=', 'PASS TO R5-B (might be market/cash)']
            ]} />

            {/* R5-A */}
            <CollapsibleSection id="stage2_r5a" title="R5-A: TIME ALLOCATION DISAMBIGUATOR">
              <p style={{ marginBottom: '1rem' }}>"Break down your time: what % on sales, delivery, admin, strategy, firefighting?"</p>
              <DecisionTable rows={[
                ['Top Time Consumer', '%', '+', 'Context', '=', 'Route'],
                ['Sales', '>40%', '+', 'You have sales team', '=', 'TEAM CONSTRAINT (team not performing)'],
                ['Sales', '>40%', '+', 'No sales team', '=', 'TEAM CONSTRAINT (need to hire)'],
                ['Delivery', '>40%', '+', 'You have delivery team', '=', 'TEAM CONSTRAINT (team not performing)'],
                ['Delivery', '>40%', '+', 'No delivery team', '=', 'TEAM CONSTRAINT (need to hire)'],
                ['Firefighting', '>30%', '+', 'Same fires repeatedly', '=', 'SYSTEMS CONSTRAINT'],
                ['Firefighting', '>30%', '+', 'Different fires', '=', 'DELIVERY CONSTRAINT (quality issues)'],
                ['Admin', '>30%', '+', 'Any', '=', 'SYSTEMS CONSTRAINT (no automation)'],
                ['Strategy', '>40%', '+', 'Business growing', '=', 'Healthy - PASS TO R5-B'],
                ['Strategy', '>40%', '+', 'Business not growing', '=', 'OWNER CONSTRAINT (analysis paralysis)']
              ]} />
            </CollapsibleSection>

            {/* R5-B */}
            <CollapsibleSection id="stage2_r5b" title="R5-B: MARKET vs CASH DISAMBIGUATOR (Only if all previous routers healthy)">
              <p style={{ marginBottom: '1rem', fontStyle: 'italic' }}>
                This is the "everything else works but we're not growing" scenario.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                "You have good unit economics, healthy pipeline, strong retention, and capacity to scale. So why aren't you growing?"
              </p>
              <p style={{ marginBottom: '1rem' }}>Then ask: "What would you do if you had $500K to invest right now?"</p>
              <DecisionTable rows={[
                ['Response', '+', 'Follow-up', '=', 'Route'],
                ['"Increase ad spend"', '+', '"Would get us more customers"', '=', 'ACQUISITION (just need scale)'],
                ['"Hire sales team"', '+', 'Current close rate >25%', '=', 'ACQUISITION (need volume)'],
                ['"Hire sales team"', '+', 'Current close rate <25%', '=', 'Go back - missed something'],
                ['"Not sure how to deploy it"', '+', 'Market is large', '=', 'OWNER CONSTRAINT (knowledge gap)'],
                ['"Not sure how to deploy it"', '+', 'Market is small/saturated', '=', 'MARKET CONSTRAINT'],
                ['"Enter new market/segment"', '+', 'Current market tapped out', '=', 'MARKET CONSTRAINT'],
                ['"Build new product"', '+', 'Customers asking for it', '=', 'MONETIZATION (need value ladder)'],
                ['"Build new product"', '+', 'Your idea, not customer-driven', '=', 'OWNER CONSTRAINT (shiny object)'],
                ['"I don\'t need money"', '+', 'Any', '=', 'OWNER CONSTRAINT (ambition/motivation)'],
                ['"Couldn\'t spend it profitably"', '+', 'Can\'t improve CAC', '=', 'MARKET CONSTRAINT (saturated)']
              ]} />
              <InfoBox title="Confirmation check" style={{ marginTop: '1rem' }}>
                <p>"How many competitors exist and how are they doing?"</p>
                <ul className="bullet-list">
                  <li>Few competitors, growing fast → ACQUISITION (just need scale)</li>
                  <li>Many competitors, growing fast → OFFER or ACQUISITION (differentiation)</li>
                  <li>Any competitors, declining → MARKET CONSTRAINT (dying market)</li>
                  <li>Competitors exiting → MARKET CONSTRAINT (red flag)</li>
                </ul>
                <p style={{ marginTop: '1rem' }}><strong>Final check:</strong> "What's your actual cash position and runway?"</p>
                <ul className="bullet-list">
                  <li>&lt;3 months runway → CASH CONSTRAINT (immediate crisis)</li>
                  <li>3-6 months → CASH CONSTRAINT (limits options)</li>
                  <li>6-12 months → Not cash constrained yet</li>
                  <li>12 months → Not a cash constraint</li>
                </ul>
                <p style={{ marginTop: '0.5rem', fontWeight: '600' }}>
                  → ROUTE TO: MARKET, CASH, OWNER, or MONETIZATION DEEP DIVE
                </p>
              </InfoBox>
            </CollapsibleSection>
          </CollapsibleSection>
        </CollapsibleSection>

        {/* STAGE 3: CONSTRAINT CONFIRMATION MATRIX */}
        <CollapsibleSection id="stage3" title="STAGE 3: CONSTRAINT CONFIRMATION MATRIX">
          <p style={{ marginBottom: '1rem', fontStyle: 'italic' }}>
            Once routed, ask these confirmation questions before diving deep:
          </p>

          {[
            {
              constraint: 'OFFER',
              questions: [
                '"What\'s your refund/cancellation rate?" (Should be >5% if offer is the problem)',
                '"What do lost prospects say when they don\'t buy?" (Should hear price/value concerns)',
                '"How does your offer compare to competitors?" (Should see gaps)'
              ]
            },
            {
              constraint: 'ACQUISITION',
              questions: [
                '"Where do your best customers come from?" (Should have clear answer)',
                '"What\'s your cost per lead by channel?" (Should know this)',
                '"What\'s your lead-to-qualified rate?" (Should be <50% if acquisition is problem)'
              ]
            },
            {
              constraint: 'RETENTION',
              questions: [
                '"What do churned customers say?" (Should have exit data)',
                '"What do your best customers do differently?" (Should know this)',
                '"What\'s your NPS/CSAT?" (Should be <7 NPS if retention is the problem)'
              ]
            },
            {
              constraint: 'DELIVERY',
              questions: [
                '"What\'s your capacity utilization?" (Should be >80% if at capacity)',
                '"Where\'s the bottleneck?" (Should know specifically)',
                '"What breaks when you\'re busy?" (Should have examples)'
              ]
            },
            {
              constraint: 'TEAM',
              questions: [
                '"Who would you hire first if you could?" (Should have clear answer)',
                '"What breaks when people are out?" (Should have examples)',
                '"What roles are you doing that you shouldn\'t?" (Should be >3 things)'
              ]
            },
            {
              constraint: 'SYSTEMS',
              questions: [
                '"What\'s documented vs. in people\'s heads?" (Should be <50% documented)',
                '"How often do things fall through the cracks?" (Should be regularly)',
                '"What fires keep recurring?" (Should have 2-3 examples)'
              ]
            },
            {
              constraint: 'OWNER',
              questions: [
                '"What would happen if you disappeared for a month?" (Should be "everything breaks")',
                '"What decisions only you can make?" (Should be >10 things)',
                '"What are you avoiding/procrastinating on?" (Should have answer)'
              ]
            },
            {
              constraint: 'MARKET',
              questions: [
                '"What\'s the TAM and your penetration?" (Should know approximate market size)',
                '"How are competitors doing?" (Should have intel)',
                '"Is the market growing or shrinking?" (Should know trend)'
              ]
            },
            {
              constraint: 'CASH',
              questions: [
                '"What\'s your runway?" (Should be <6 months if cash is the constraint)',
                '"What can\'t you do because of cash?" (Should have specific examples)',
                '"What\'s your payback period on customers?" (Should be >6 months if cash is problem)'
              ]
            }
          ].map(({ constraint, questions }) => (
            <InfoBox key={constraint} title={`If routed to ${constraint}:`} style={{ marginBottom: '1rem' }}>
              <ul className="bullet-list">
                {questions.map((q, idx) => (
                  <li key={idx}>{q}</li>
                ))}
              </ul>
              <p style={{ marginTop: '0.5rem', fontWeight: '600' }}>
                If all 3 confirm → Proceed to {constraint} DEEP DIVE<br />
                If any contradict → Recheck routing, may have misdiagnosed
              </p>
            </InfoBox>
          ))}
        </CollapsibleSection>

        {/* STAGE 4: MASKING CHECKS */}
        <CollapsibleSection id="stage4" title="STAGE 4: MASKING CHECKS">
          <p style={{ marginBottom: '1rem', fontStyle: 'italic' }}>
            Common false positives - where the stated constraint masks the real one:
          </p>

          {[
            {
              pattern: 'MASKING PATTERN 1: "Need more leads" but actually OFFER problem',
              indicators: [
                'Close rate <15%',
                'High refund/churn rate',
                'Leads say "too expensive"',
                'Competitors selling similar for less'
              ],
              check: '"If I gave you 10x leads tomorrow, what would happen?"',
              responses: [
                '"We\'d make 10x revenue" → Actually acquisition (they\'re right)',
                '"We\'d waste a lot of money" → Actually offer (they\'re wrong)',
                '"We couldn\'t handle it" → Actually delivery (neither is right)'
              ]
            },
            {
              pattern: 'MASKING PATTERN 2: "Churn too high" but actually WRONG CUSTOMERS',
              indicators: [
                'Churn timing = first 30 days',
                'Churned customers say "not what I expected"',
                'Best customers look different than typical'
              ],
              check: '"Do your best customers look like your typical customer?"',
              responses: [
                '"Yes" → Actually retention (delivery problem)',
                '"No, best customers are [different segment]" → Actually acquisition (targeting wrong people)'
              ]
            },
            {
              pattern: 'MASKING PATTERN 3: "Can\'t scale delivery" but actually NO SYSTEMS',
              indicators: [
                'Nothing documented',
                '"Only I know how to do it"',
                'Every customer is custom'
              ],
              check: '"If you had to train someone to do your job tomorrow, how would you do it?"',
              responses: [
                '"I\'d show them a few times" → Actually systems (no process)',
                '"I\'d give them our playbook" → Actually delivery (model doesn\'t scale)'
              ]
            },
            {
              pattern: 'MASKING PATTERN 4: "Need better team" but actually OWNER BOTTLENECK',
              indicators: [
                'High turnover',
                '"Nobody does it as well as I do"',
                'Micromanagement'
              ],
              check: '"What\'s the last significant decision someone on your team made without you?"',
              responses: [
                'Can\'t remember or >1 month ago → Actually owner (won\'t delegate)',
                'Recent examples → Actually team (people aren\'t capable)'
              ]
            },
            {
              pattern: 'MASKING PATTERN 5: "Market is saturated" but actually OFFER/POSITIONING',
              indicators: [
                'Competitors are growing',
                'You\'re declining',
                '"Everyone charges less than us"'
              ],
              check: '"Show me a competitor who\'s winning and explain why customers choose them."',
              responses: [
                'Can\'t articulate → Actually offer (don\'t understand your positioning)',
                'Clear articulation → Actually market (they\'ve figured it out, you haven\'t)'
              ]
            }
          ].map(({ pattern, indicators, check, responses }, idx) => (
            <InfoBox key={idx} title={pattern} variant="warning" style={{ marginBottom: '1rem' }}>
              <p><strong>Indicators:</strong></p>
              <ul className="bullet-list">
                {indicators.map((indicator, i) => (
                  <li key={i}>{indicator}</li>
                ))}
              </ul>
              <p style={{ marginTop: '0.5rem' }}><strong>Check:</strong> {check}</p>
              <ul className="bullet-list" style={{ marginTop: '0.5rem' }}>
                {responses.map((response, i) => (
                  <li key={i}>{response}</li>
                ))}
              </ul>
            </InfoBox>
          ))}
        </CollapsibleSection>

        {/* STAGE 5: SECOND-ORDER CONSTRAINT CHECK */}
        <CollapsibleSection id="stage5" title="STAGE 5: SECOND-ORDER CONSTRAINT CHECK">
          <p style={{ marginBottom: '1rem', fontStyle: 'italic' }}>
            Before diving deep, check what breaks if you fix the identified constraint:
          </p>

          {[
            {
              constraint: 'ACQUISITION',
              question: '"If I doubled your leads tomorrow, what would be the next bottleneck?"',
              responses: [
                '"We\'d be at capacity" → Secondary constraint: DELIVERY',
                '"Our close rate would drop" → Secondary constraint: LEAD QUALITY (still acquisition)',
                '"I couldn\'t manage the team" → Secondary constraint: OWNER',
                '"Nothing" → Proceed with acquisition focus'
              ]
            },
            {
              constraint: 'OFFER',
              question: '"If I fixed your offer and doubled conversions, what breaks next?"',
              responses: [
                '"We couldn\'t deliver" → Secondary constraint: DELIVERY',
                '"We\'d run out of leads" → Secondary constraint: ACQUISITION',
                '"Nothing" → Proceed with offer focus'
              ]
            },
            {
              constraint: 'RETENTION',
              question: '"If I cut your churn in half, what\'s the next problem?"',
              responses: [
                '"We\'d be at capacity" → Secondary constraint: DELIVERY',
                '"We still wouldn\'t grow fast enough" → Secondary constraint: ACQUISITION',
                '"Nothing" → Proceed with retention focus'
              ]
            },
            {
              constraint: 'DELIVERY',
              question: '"If I doubled your capacity, what\'s the next bottleneck?"',
              responses: [
                '"We\'d run out of customers" → Secondary constraint: ACQUISITION',
                '"Quality would suffer" → Secondary constraint: SYSTEMS',
                '"Nothing" → Proceed with delivery focus'
              ]
            },
            {
              constraint: 'TEAM',
              question: '"If I hired your dream team tomorrow, what\'s the next problem?"',
              responses: [
                '"We\'d run out of customers" → Secondary constraint: ACQUISITION',
                '"They wouldn\'t know what to do" → Secondary constraint: SYSTEMS',
                '"I wouldn\'t know how to manage them" → Secondary constraint: OWNER',
                '"Nothing" → Proceed with team focus'
              ]
            }
          ].map(({ constraint, question, responses }) => (
            <InfoBox key={constraint} title={`If primary constraint is ${constraint}:`} style={{ marginBottom: '1rem' }}>
              <p><strong>Ask:</strong> {question}</p>
              <ul className="bullet-list">
                {responses.map((response, idx) => (
                  <li key={idx}>{response}</li>
                ))}
              </ul>
            </InfoBox>
          ))}

          <InfoBox title="THE RULE:" variant="advisor-note" style={{ marginTop: '1rem' }}>
            <ul className="bullet-list">
              <li>If secondary constraint is &lt;6 months away → Solve both simultaneously</li>
              <li>If secondary constraint is &gt;6 months away → Focus on primary only</li>
              <li>If uncertain → Focus on primary only (solving it will clarify the next one)</li>
            </ul>
          </InfoBox>
        </CollapsibleSection>

        {/* STAGE 6: FINAL ROUTING DECISION */}
        <CollapsibleSection id="stage6" title="STAGE 6: FINAL ROUTING DECISION">
          <InfoBox title="You now have:" style={{ marginBottom: '1rem' }}>
            <ul className="bullet-list">
              <li>Primary Constraint (from routers)</li>
              <li>Confirmation (from confirmation questions)</li>
              <li>Masking Check (verified it's not hiding something else)</li>
              <li>Secondary Constraint (know what breaks next)</li>
            </ul>
            <p style={{ marginTop: '0.5rem', fontWeight: '600', fontSize: '1.1rem' }}>
              Proceed to the appropriate DEEP DIVE branch with confidence.
            </p>
          </InfoBox>

          <InfoBox title="DIAGNOSTIC FLOWCHART SUMMARY" style={{ marginTop: '1rem' }}>
            <div style={{ fontFamily: 'monospace', fontSize: '0.9rem', lineHeight: '1.8' }}>
              <div>START</div>
              <div>│</div>
              <div>├─→ E1-E3: Initial Triage (Revenue, Goal, Owner's Diagnosis)</div>
              <div>│</div>
              <div>├─→ R1: CAC/LTV Check</div>
              <div>│   ├─→ Don't know → SYSTEMS</div>
              <div>│   ├─→ &lt;3:1 ratio → R1-A: OFFER vs ACQUISITION Disambiguator</div>
              <div>│   │   └─→ Route based on close rate + context</div>
              <div>│   └─→ &gt;3:1 ratio → PASS TO R2</div>
              <div>│</div>
              <div>├─→ R2: Lead Volume &amp; Trend Check</div>
              <div>│   ├─→ &lt;50 leads OR declining + low close → ACQUISITION</div>
              <div>│   ├─→ 50-100 leads + &lt;20% close → OFFER</div>
              <div>│   └─→ Healthy numbers → PASS TO R3</div>
              <div>│</div>
              <div>├─→ R3: Churn Check</div>
              <div>│   ├─→ &gt;10% monthly → RETENTION</div>
              <div>│   ├─→ 5-10% → R3-A: RETENTION vs WRONG CUSTOMERS</div>
              <div>│   │   └─→ Route based on timing + reasons</div>
              <div>│   └─→ &lt;5% → PASS TO R4</div>
              <div>│</div>
              <div>├─→ R4: Capacity Check</div>
              <div>│   ├─→ "Can't handle 2x" → DELIVERY</div>
              <div>│   ├─→ "Could but barely" → R4-A: DELIVERY vs TEAM vs SYSTEMS</div>
              <div>│   │   └─→ Route based on what breaks</div>
              <div>│   └─→ "Yes easily" → PASS TO R5</div>
              <div>│</div>
              <div>├─→ R5: Owner Time Allocation</div>
              <div>│   ├─→ &gt;70% delegable tasks → OWNER/TEAM based on revenue</div>
              <div>│   ├─→ 50-70% → R5-A: Time breakdown analysis</div>
              <div>│   │   └─→ Route based on where time goes</div>
              <div>│   └─→ &lt;30% + all healthy → R5-B: MARKET vs CASH</div>
              <div>│       └─→ Route based on growth blockers</div>
              <div>│</div>
              <div>├─→ STAGE 3: Confirmation (3 questions to verify routing)</div>
              <div>│</div>
              <div>├─→ STAGE 4: Masking Check (ensure not hiding real constraint)</div>
              <div>│</div>
              <div>├─→ STAGE 5: Second-Order Check (what breaks next)</div>
              <div>│</div>
              <div>└─→ STAGE 6: Proceed to appropriate DEEP DIVE</div>
              <div>    ├─→ OFFER Deep Dive</div>
              <div>    ├─→ ACQUISITION Deep Dive</div>
              <div>    ├─→ RETENTION Deep Dive</div>
              <div>    ├─→ DELIVERY Deep Dive</div>
              <div>    ├─→ TEAM Deep Dive</div>
              <div>    ├─→ SYSTEMS Deep Dive</div>
              <div>    ├─→ OWNER Deep Dive</div>
              <div>    ├─→ MARKET Deep Dive</div>
              <div>    ├─→ CASH Deep Dive</div>
              <div>    └─→ MONETIZATION Deep Dive</div>
            </div>
          </InfoBox>
        </CollapsibleSection>

        {/* USAGE NOTES */}
        <CollapsibleSection id="usage" title="USAGE NOTES">
          <InfoBox title="Time to diagnose:" style={{ marginBottom: '1rem' }}>
            <ul className="bullet-list">
              <li><strong>Experienced:</strong> 10-15 minutes to route + 5-10 minutes to confirm = 15-25 minutes total</li>
              <li><strong>First-timer:</strong> 20-30 minutes to route + 10 minutes to confirm = 30-40 minutes total</li>
            </ul>
          </InfoBox>

          <InfoBox title="Common mistakes:" variant="warning" style={{ marginBottom: '1rem' }}>
            <ul className="bullet-list">
              <li>Accepting owner's diagnosis without verification</li>
              <li>Routing based on symptoms instead of metrics</li>
              <li>Skipping confirmation questions</li>
              <li>Missing masking patterns</li>
              <li>Not checking second-order constraints</li>
            </ul>
          </InfoBox>

          <InfoBox title="Pro tips:" variant="advisor-note">
            <ul className="bullet-list">
              <li>Always get numbers, not feelings</li>
              <li>When in doubt between two constraints, fix the one upstream (acquisition before retention, offer before delivery)</li>
              <li>If routers contradict each other, you missed something - start over</li>
              <li>Most businesses under $1M have offer problems even if they think it's acquisition</li>
              <li>Trust the process more than your gut - the routers catch 95% of misdiagnoses</li>
            </ul>
            <p style={{ marginTop: '1rem', fontWeight: '600', fontSize: '1.1rem' }}>
              This is now a mechanical, repeatable process that anyone can follow to reach the correct diagnostic branch.
            </p>
          </InfoBox>
        </CollapsibleSection>
      </div>
    </>
  )
}

export default HormoziDiagnosticRouter


import React, { useState } from 'react'
import { useContent } from '../../context/ContentContext'
import { useSalesData } from '../../context/SalesDataContext'
import InfoBox from './InfoBox'
import ScriptBlock from './ScriptBlock'
import LinkifiedText from './LinkifiedText'
import QuestionGroup from './QuestionGroup'
import ForkPaths from './ForkPaths'

function SequentialContent({ item, itemId }) {
  const { loadContent } = useContent()
  const { salesData } = useSalesData()
  const [selectedEconomyPath, setSelectedEconomyPath] = useState(null)

  if (!item) return null

  const category = item.category === 'interrupt' ? 'Objection Handler' : item.category
  const categoryDisplay = category + (item.section ? ` — Section ${item.section}` : '')

  const handleEconomyPath = (pathId) => {
    const path = item.paths.find(p => p.id === pathId)
    if (path) {
      setSelectedEconomyPath({ itemId, pathId, path })
    }
  }

  return (
    <>
      <div className="content-header">
        <span className="content-category">{categoryDisplay}</span>
        <h2 className="content-title">{item.title}</h2>
        {item.purpose && <p className="content-purpose">{item.purpose}</p>}
      </div>
      <div className="content-body">
        {item.trigger && (
          <InfoBox title="Trigger" variant="warning">
            <p>{item.trigger}</p>
          </InfoBox>
        )}

        {item.where_it_shows_up && (
          <InfoBox title="Where It Shows Up">
            <LinkifiedText text={item.where_it_shows_up} />
          </InfoBox>
        )}

        {item.context && (
          <InfoBox title="Context">
            <LinkifiedText text={item.context} />
          </InfoBox>
        )}

        {item.golden_rule && (
          <InfoBox title="Golden Rule" variant="warning">
            <LinkifiedText text={item.golden_rule} />
          </InfoBox>
        )}

        {item.core_principle && (
          <InfoBox title="Core Principle">
            <LinkifiedText text={item.core_principle} />
          </InfoBox>
        )}

        {item.primary_reframe && (
          <InfoBox title="Primary Reframe Script" variant="advisor-note">
            <ScriptBlock script={item.primary_reframe} />
          </InfoBox>
        )}

        {item.validation_spins && item.validation_spins.length > 0 && (
          <InfoBox title="Validation Spins — Choose Your Response">
            <ul className="bullet-list">
              {item.validation_spins.map((spin, idx) => (
                <li key={idx}>"{spin}"</li>
              ))}
            </ul>
          </InfoBox>
        )}

        {item.polite_disqualification && (
          <InfoBox title="Polite Disqualification Script" variant="warning">
            <ScriptBlock script={item.polite_disqualification} />
          </InfoBox>
        )}

        {item.why_they_do_it && item.why_they_do_it.length > 0 && (
          <InfoBox title="Why They Do It">
            <ul className="bullet-list">
              {item.why_they_do_it.map((reason, idx) => (
                <li key={idx}>{reason}</li>
              ))}
            </ul>
          </InfoBox>
        )}

        {item.handle_steps && item.handle_steps.length > 0 && (
          <div className="info-box" style={{ margin: '2rem 0' }}>
            <h3 style={{ color: 'var(--text-primary)', marginBottom: '1.5rem', fontSize: '1.25rem' }}>
              How to Handle It:
            </h3>
            {item.handle_steps.map((stepObj, idx) => (
              <div
                key={idx}
                style={{
                  marginBottom: '2rem',
                  paddingLeft: '1rem',
                  borderLeft: '3px solid var(--primary-color)'
                }}
              >
                <h4 style={{ color: 'var(--primary-color)', marginBottom: '0.75rem', fontWeight: 700 }}>
                  {stepObj.step}
                </h4>
                {stepObj.script && (
                  <ScriptBlock script={stepObj.script} style={{ marginBottom: '1rem' }} />
                )}
                {stepObj.goal && (
                  <p style={{ fontStyle: 'italic', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                    {stepObj.goal}
                  </p>
                )}
                {stepObj.questions && stepObj.questions.length > 0 && (
                  <ul className="bullet-list">
                    {stepObj.questions.map((q, qIdx) => (
                      <li key={qIdx}>
                        <LinkifiedText text={q} />
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )}

        {item.how_to_handle && item.how_to_handle.length > 0 && (
          <div className="info-box" style={{ margin: '2rem 0' }}>
            <h3 style={{ color: 'var(--text-primary)', marginBottom: '1.5rem', fontSize: '1.25rem' }}>
              How to Handle It:
            </h3>
            {item.how_to_handle.map((stepObj, idx) => (
              <div
                key={idx}
                style={{
                  marginBottom: '2rem',
                  paddingLeft: '1rem',
                  borderLeft: '3px solid var(--primary-color)'
                }}
              >
                <h4 style={{ color: 'var(--primary-color)', marginBottom: '0.75rem', fontWeight: 700 }}>
                  {stepObj.step}
                </h4>
                {stepObj.content && (
                  <LinkifiedText
                    text={stepObj.content}
                    style={{ marginBottom: '0.5rem', lineHeight: 1.6 }}
                  />
                )}
                {stepObj.script && (
                  <ScriptBlock script={stepObj.script} style={{ marginBottom: '1rem' }} />
                )}
                {stepObj.goal && (
                  <p style={{ fontStyle: 'italic', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                    {stepObj.goal}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}

        {item.key_lesson && (
          <InfoBox title="Key Lesson" variant="advisor-note">
            <LinkifiedText text={item.key_lesson} />
          </InfoBox>
        )}

        {item.advisor_mindset && (
          <InfoBox title="Advisor Mindset" variant="advisor-note">
            <p>{item.advisor_mindset}</p>
          </InfoBox>
        )}

        {item.advisor_guidance && (
          <InfoBox title="Advisor Guidance" variant="advisor-note">
            <p>{item.advisor_guidance}</p>
          </InfoBox>
        )}

        {item.script && <ScriptBlock script={item.script} />}

        {item.intro && <ScriptBlock script={item.intro} />}

        {item.question_groups && item.question_groups.length > 0 && (
          <>
            {item.question_groups.map((group, groupIndex) => {
              // Create a unique key that includes sectionId and group title
              const groupKey = `${itemId}_${group.title.replace(/\s+/g, '_')}_${groupIndex}`
              return (
                <QuestionGroup
                  key={groupKey}
                  ref={(el) => {
                    // Store ref in a global map for resumeDiscovery to access
                    if (el && typeof window !== 'undefined') {
                      if (!window.questionGroupRefs) window.questionGroupRefs = new Map()
                      window.questionGroupRefs.set(groupKey, el)
                    }
                  }}
                  group={group}
                  sectionId={itemId}
                  groupIndex={groupIndex}
                />
              )
            })}
          </>
        )}

        {item.paths && (
          <ForkPaths
            itemId={itemId}
            paths={item.paths}
            onPathSelect={handleEconomyPath}
          />
        )}

        {item.on_call_sequence && (
          <InfoBox title={item.on_call_sequence.title || "On-Call Sequence"} variant="advisor-note" style={{ margin: '2rem 0' }}>
            {item.on_call_sequence.tic && (
              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ color: 'var(--primary-color)', marginBottom: '0.5rem', fontWeight: 700 }}>Tic</h4>
                {item.on_call_sequence.tic.when && (
                  <p style={{ fontStyle: 'italic', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                    When: {item.on_call_sequence.tic.when}
                  </p>
                )}
                {item.on_call_sequence.tic.script && (
                  <ScriptBlock script={item.on_call_sequence.tic.script} />
                )}
                {item.on_call_sequence.tic.outcome && (
                  <p style={{ marginTop: '0.5rem', fontWeight: 600, color: 'var(--accent-green)' }}>
                    {item.on_call_sequence.tic.outcome}
                  </p>
                )}
              </div>
            )}
            {item.on_call_sequence.tac && (
              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ color: 'var(--primary-color)', marginBottom: '0.5rem', fontWeight: 700 }}>Tac</h4>
                {item.on_call_sequence.tac.when && (
                  <p style={{ fontStyle: 'italic', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                    When: {item.on_call_sequence.tac.when}
                  </p>
                )}
                {item.on_call_sequence.tac.script && (
                  <ScriptBlock script={item.on_call_sequence.tac.script} />
                )}
                {item.on_call_sequence.tac.outcome && (
                  <p style={{ marginTop: '0.5rem', fontWeight: 600, color: 'var(--accent-green)' }}>
                    {item.on_call_sequence.tac.outcome}
                  </p>
                )}
              </div>
            )}
            {item.on_call_sequence.toe_optional && (
              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ color: 'var(--primary-color)', marginBottom: '0.5rem', fontWeight: 700 }}>Toe (Optional)</h4>
                {item.on_call_sequence.toe_optional.when && (
                  <p style={{ fontStyle: 'italic', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                    When: {item.on_call_sequence.toe_optional.when}
                  </p>
                )}
                {item.on_call_sequence.toe_optional.script && (
                  <ScriptBlock script={item.on_call_sequence.toe_optional.script} />
                )}
                {item.on_call_sequence.toe_optional.outcome && (
                  <p style={{ marginTop: '0.5rem', fontWeight: 600, color: 'var(--accent-green)' }}>
                    {item.on_call_sequence.toe_optional.outcome}
                  </p>
                )}
              </div>
            )}
            {item.on_call_sequence.note && (
              <p style={{ marginTop: '1rem', fontStyle: 'italic', color: 'var(--text-secondary)' }}>
                {item.on_call_sequence.note}
              </p>
            )}
          </InfoBox>
        )}

        {item.handling_quality_objections && (
          <InfoBox title={item.handling_quality_objections.title || "Handling Quality Objections"} variant="warning" style={{ margin: '2rem 0' }}>
            {item.handling_quality_objections.trigger && (
              <p style={{ fontStyle: 'italic', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                {item.handling_quality_objections.trigger}
              </p>
            )}
            {item.handling_quality_objections.script && (
              <ScriptBlock script={item.handling_quality_objections.script} />
            )}
            {item.handling_quality_objections.content && (
              <div style={{ marginTop: '1rem' }}>
                <LinkifiedText text={item.handling_quality_objections.content} />
              </div>
            )}
          </InfoBox>
        )}

        {item.quick_reference_card && (
          <InfoBox title={item.quick_reference_card.title || "Quick Reference"} style={{ margin: '2rem 0' }}>
            {item.quick_reference_card.tic && (
              <div style={{ marginBottom: '1rem' }}>
                <strong style={{ color: 'var(--primary-color)' }}>Tic:</strong> {item.quick_reference_card.tic}
              </div>
            )}
            {item.quick_reference_card.tac && (
              <div style={{ marginBottom: '1rem' }}>
                <strong style={{ color: 'var(--primary-color)' }}>Tac:</strong> {item.quick_reference_card.tac}
              </div>
            )}
            {item.quick_reference_card.toe && (
              <div style={{ marginBottom: '1rem' }}>
                <strong style={{ color: 'var(--primary-color)' }}>Toe:</strong> {item.quick_reference_card.toe}
              </div>
            )}
          </InfoBox>
        )}

        {item.capitalization_framing && (
          <InfoBox title={item.capitalization_framing.title || "Capitalization Framing"} variant="advisor-note" style={{ margin: '2rem 0' }}>
            {item.capitalization_framing.key_principle && (
              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ color: 'var(--primary-color)', marginBottom: '0.5rem', fontWeight: 700 }}>Key Principle</h4>
                <LinkifiedText text={item.capitalization_framing.key_principle} />
              </div>
            )}
            {item.capitalization_framing.content && (
              <div style={{ marginBottom: '1.5rem' }}>
                <LinkifiedText text={item.capitalization_framing.content} />
              </div>
            )}
            {item.capitalization_framing.script && (
              <div style={{ marginTop: '1.5rem' }}>
                <h4 style={{ color: 'var(--primary-color)', marginBottom: '0.5rem', fontWeight: 700 }}>Scripts</h4>
                {Array.isArray(item.capitalization_framing.script) ? (
                  item.capitalization_framing.script.map((scriptText, idx) => (
                    <div key={idx} style={{ marginBottom: '1rem' }}>
                      <ScriptBlock script={scriptText} />
                    </div>
                  ))
                ) : (
                  <ScriptBlock script={item.capitalization_framing.script} />
                )}
              </div>
            )}
          </InfoBox>
        )}

        {/* Additional content sections can be added here */}

        {/* Navigation buttons */}
        {salesData?.sequential_flow?.call_one && (
          <NavButtons currentItemId={itemId} onNavigate={loadContent} />
        )}
      </div>
    </>
  )
}

function NavButtons({ currentItemId, onNavigate }) {
  const { salesData } = useSalesData()
  
  if (!salesData?.sequential_flow?.call_one) return null
  
  const currentIndex = salesData.sequential_flow.call_one.findIndex(i => i.id === currentItemId)
  const prevItem = currentIndex > 0 ? salesData.sequential_flow.call_one[currentIndex - 1] : null
  const nextItem = currentIndex < salesData.sequential_flow.call_one.length - 1 
    ? salesData.sequential_flow.call_one[currentIndex + 1] 
    : null

  if (!prevItem && !nextItem) return null

  return (
    <div className="nav-buttons">
      {prevItem && (
        <button 
          className="nav-btn nav-btn-prev" 
          onClick={() => onNavigate(prevItem.id)}
        >
          ← Previous: {prevItem.title.split('—')[0].trim()}
        </button>
      )}
      {nextItem && (
        <button 
          className="nav-btn nav-btn-next" 
          onClick={() => onNavigate(nextItem.id)}
        >
          Next: {nextItem.title.split('—')[0].trim()} →
        </button>
      )}
    </div>
  )
}

export default SequentialContent


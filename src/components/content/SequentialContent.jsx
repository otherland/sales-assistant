import React, { useState } from 'react'
import { useContent } from '../../context/ContentContext'
import { useSalesData } from '../../context/SalesDataContext'
import InfoBox from './InfoBox'
import ScriptBlock from './ScriptBlock'
import LinkifiedText from './LinkifiedText'
import QuestionGroup from './QuestionGroup'
import ForkPaths from './ForkPaths'
import CollapsibleSection from './CollapsibleSection'

function SequentialContent({ item, itemId }) {
  const { loadContent, loadHandler } = useContent()
  const { salesData } = useSalesData()
  const [selectedEconomyPath, setSelectedEconomyPath] = useState(null)
  const [openPaths, setOpenPaths] = useState({})

  // Calculate starting question number for this section
  const getStartingQuestionNumber = () => {
    if (!salesData?.sequential_flow?.call_one) return 1
    
    let questionCount = 0
    const currentIndex = salesData.sequential_flow.call_one.findIndex(i => i.id === itemId)
    
    // Count all questions in sections before this one
    for (let i = 0; i < currentIndex; i++) {
      const section = salesData.sequential_flow.call_one[i]
      if (section.question_groups && Array.isArray(section.question_groups)) {
        section.question_groups.forEach(group => {
          if (group.questions && Array.isArray(group.questions)) {
            questionCount += group.questions.length
          }
        })
      }
    }
    
    return questionCount + 1
  }

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

        {/* How to Handle It - Each step gets its own collapsible section */}
        {item.how_to_handle && item.how_to_handle.length > 0 && (
          <>
            {item.how_to_handle.map((stepObj, idx) => {
              if (!stepObj || !stepObj.step || !stepObj.script) return null
              return (
                <CollapsibleSection
                  key={`how-to-handle-${idx}`}
                  title={stepObj.step}
                  defaultCollapsed={true}
                  variant="default"
                >
                  <ScriptBlock script={stepObj.script} />
                </CollapsibleSection>
              )
            })}
          </>
        )}

        {item.key_lesson && (
          <InfoBox title="Key Lesson" variant="advisor-note">
            <LinkifiedText text={item.key_lesson} />
          </InfoBox>
        )}

        {/* Main Script - Core verbatim (collapsible, expanded by default) */}
        {item.main_script && (
          <CollapsibleSection 
            title={item.main_script.title || "📝 What to Say (Standard Script)"}
            // defaultCollapsed={false}
            variant="default"
          >
            {item.main_script.script && (
              <div style={{ marginBottom: item.main_script.advisor_notes ? '1rem' : '0' }}>
                <ScriptBlock script={item.main_script.script} />
              </div>
            )}
            {item.main_script.advisor_notes && item.main_script.advisor_notes.length > 0 && (
              <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
                <strong style={{ color: 'var(--primary-color)' }}>💡 How to Deliver:</strong>
                <ul className="bullet-list" style={{ marginTop: '0.5rem' }}>
                  {item.main_script.advisor_notes.map((note, idx) => (
                    <li key={idx}>
                      <LinkifiedText text={note} />
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </CollapsibleSection>
        )}

        {/* Legacy script support (for backward compatibility) */}
        {!item.main_script && item.script && <ScriptBlock script={item.script} />}

        {item.intro && <ScriptBlock script={item.intro} />}

        {/* Context Variations - Collapsible */}
        {item.context_variations && item.context_variations.variations && item.context_variations.variations.length > 0 && (
          <>
            {item.context_variations.variations.map((variation, idx) => {
              // Special handling for CRE dual-track - make it stand out
              const isCRE = variation.id === 'cre_dual_track'
              const variationTitle = isCRE 
                ? 'When They Need Both Deals AND Capital'
                : variation.id === 'why_now_timeline'
                ? 'When They Ask About Timeline'
                : variation.title

              return (
                <CollapsibleSection
                  key={variation.id || idx}
                  title={variationTitle}
                  defaultCollapsed={true}
                  icon={isCRE ? '🏢' : '⏰'}
                >
                  {variation.when_to_use && (
                    <div style={{ marginBottom: '1rem', padding: '0.75rem', backgroundColor: 'var(--bg-secondary)', borderRadius: '4px' }}>
                      <strong style={{ color: 'var(--primary-color)' }}>When to Use:</strong>
                      <div style={{ marginTop: '0.25rem' }}>
                        <LinkifiedText text={variation.when_to_use} />
                      </div>
                    </div>
                  )}
                  {variation.context && (
                    <div style={{ marginBottom: '1rem' }}>
                      <strong style={{ color: 'var(--text-primary)' }}>Context:</strong>
                      <div style={{ marginTop: '0.25rem' }}>
                        <LinkifiedText text={variation.context} />
                      </div>
                    </div>
                  )}
                  {variation.diagnosis_questions && variation.diagnosis_questions.length > 0 && (
                    <div style={{ marginBottom: '1rem' }}>
                      <strong style={{ color: 'var(--text-primary)' }}>Questions to Ask:</strong>
                      <ul className="bullet-list" style={{ marginTop: '0.5rem' }}>
                        {variation.diagnosis_questions.map((q, qIdx) => (
                          <li key={qIdx}>
                            <LinkifiedText text={q} />
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {variation.script && (
                    <div style={{ marginBottom: '1rem' }}>
                      <strong style={{ color: 'var(--text-primary)' }}>What to Say:</strong>
                      <div style={{ marginTop: '0.5rem' }}>
                        <ScriptBlock script={variation.script} />
                      </div>
                    </div>
                  )}
                  {variation.milestone_structure && (
                    <div style={{ marginBottom: '1rem', padding: '0.75rem', backgroundColor: 'var(--bg-secondary)', borderRadius: '4px' }}>
                      <strong style={{ color: 'var(--text-primary)' }}>Milestone Structure:</strong>
                      <div style={{ marginTop: '0.25rem' }}>
                        <LinkifiedText text={variation.milestone_structure} />
                      </div>
                    </div>
                  )}
                  {variation.risk_mitigation && (
                    <div style={{ marginBottom: '1rem', padding: '0.75rem', backgroundColor: 'var(--bg-secondary)', borderRadius: '4px' }}>
                      <strong style={{ color: 'var(--text-primary)' }}>Risk Mitigation:</strong>
                      <div style={{ marginTop: '0.25rem' }}>
                        <LinkifiedText text={variation.risk_mitigation} />
                      </div>
                    </div>
                  )}
                  {variation.paths && variation.paths.length > 0 && (
                    <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '2px solid var(--border-color)' }}>
                      <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: '1rem' }}>If They Say:</strong>
                      <div className="two-paths-emerge-section">
                        <div className="two-paths-buttons-row">
                          {variation.paths.map((path, pathIdx) => {
                            const pathId = `${variation.id}_path_${pathIdx}`
                            const isSelected = openPaths[pathId] || false
                            
                            return (
                              <button
                                key={pathId}
                                className={`two-paths-button ${isSelected ? 'selected' : ''}`}
                                onClick={() => {
                                  const newOpenPaths = { ...openPaths }
                                  // First, deselect all paths for this variation
                                  variation.paths.forEach((_, idx) => {
                                    const vPathId = `${variation.id}_path_${idx}`
                                    newOpenPaths[vPathId] = false
                                  })
                                  // Then, toggle the clicked path (only select if it wasn't already selected)
                                  if (!isSelected) {
                                    newOpenPaths[pathId] = true
                                  }
                                  setOpenPaths(newOpenPaths)
                                }}
                                style={{ marginBottom: '0.5rem' }}
                              >
                                <div className="two-paths-button-title">
                                  {path.condition}
                                </div>
                              </button>
                            )
                          })}
                        </div>
                        {variation.paths.map((path, pathIdx) => {
                          const pathId = `${variation.id}_path_${pathIdx}`
                          const isSelected = openPaths[pathId] || false
                          
                          if (!isSelected) return null
                          
                          return (
                            <div key={`content-${pathId}`} className="two-paths-content" style={{ marginTop: '1rem' }}>
                              {path.script && (
                                <div style={{ marginBottom: '1rem' }}>
                                  <ScriptBlock script={path.script} />
                                </div>
                              )}
                              {path.advisor_notes && path.advisor_notes.length > 0 && (
                                <InfoBox title="Advisor Notes" variant="advisor-note" style={{ marginTop: '1rem' }}>
                                  <ul className="bullet-list">
                                    {path.advisor_notes.map((note, noteIdx) => (
                                      <li key={noteIdx}>
                                        <LinkifiedText text={note} />
                                      </li>
                                    ))}
                                  </ul>
                                </InfoBox>
                              )}
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  )}
                  {variation.advisor_notes && variation.advisor_notes.length > 0 && (
                    <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
                      <strong style={{ color: 'var(--primary-color)' }}>💡 How to Deliver:</strong>
                      <ul className="bullet-list" style={{ marginTop: '0.5rem' }}>
                        {variation.advisor_notes.map((note, noteIdx) => (
                          <li key={noteIdx}>
                            <LinkifiedText text={note} />
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CollapsibleSection>
              )
            })}
          </>
        )}

        {/* Additional Resources - Collapsible */}
        {item.additional_resources && (
          <CollapsibleSection 
            title="📚 Additional Resources"
            defaultCollapsed={true}
            variant="default"
          >
            {item.additional_resources.approval_flow_questions && (
              <div>
                <strong style={{ color: 'var(--primary-color)' }}>Approval Flow Questions:</strong>
                <div style={{ marginTop: '0.5rem' }}>
                  <LinkifiedText text={item.additional_resources.approval_flow_questions} />
                </div>
              </div>
            )}
          </CollapsibleSection>
        )}

        {/* Legacy content support (for backward compatibility) */}
        {!item.additional_resources && item.content && (
          <InfoBox title="Additional Content">
            <ScriptBlock script={item.content} />
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

        {/* Advisor Notes - Collapsible section (when main_script exists) or InfoBox (legacy) */}
        {item.advisor_notes && item.advisor_notes.length > 0 && (
          item.main_script ? (
            <CollapsibleSection 
              title="💡 Advisor Notes"
              defaultCollapsed={true}
              variant="default"
            >
              <ul className="bullet-list">
                {item.advisor_notes.map((note, idx) => (
                  <li key={idx}>
                    <LinkifiedText text={note} />
                  </li>
                ))}
              </ul>
            </CollapsibleSection>
          ) : (
            <InfoBox title="Advisor Notes" variant="advisor-note">
              <ul className="bullet-list">
                {item.advisor_notes.map((note, idx) => (
                  <li key={idx}>
                    <LinkifiedText text={note} />
                  </li>
                ))}
              </ul>
            </InfoBox>
          )
        )}

        {item.soft_commitment && (
          <InfoBox title="Soft Commitment" variant="advisor-note">
            <ScriptBlock script={item.soft_commitment} />
          </InfoBox>
        )}

        {item.carpet_integration && item.carpet_integration.length > 0 && (
          <InfoBox title="CARPET Integration" variant="advisor-note">
            <ul className="bullet-list">
              {item.carpet_integration.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </InfoBox>
        )}

        {item.when_to_deploy && (
          <InfoBox title={item.when_to_deploy.title || "When to Deploy"} variant="warning">
            {item.when_to_deploy.criteria && item.when_to_deploy.criteria.length > 0 && (
              <ul className="bullet-list">
                {item.when_to_deploy.criteria.map((criterion, idx) => (
                  <li key={idx}>{criterion}</li>
                ))}
              </ul>
            )}
          </InfoBox>
        )}

        {item.when_NOT_to_deploy && (
          <InfoBox title={item.when_NOT_to_deploy.title || "When NOT to Deploy"} variant="warning">
            {item.when_NOT_to_deploy.criteria && item.when_NOT_to_deploy.criteria.length > 0 && (
              <ul className="bullet-list">
                {item.when_NOT_to_deploy.criteria.map((criterion, idx) => (
                  <li key={idx}>{criterion}</li>
                ))}
              </ul>
            )}
          </InfoBox>
        )}

        {item.where_to_go_next && (
          <InfoBox title={item.where_to_go_next.title || "Where to Go Next"} variant="advisor-note">
            {item.where_to_go_next.guidance && (
              <p style={{ marginBottom: '0.5rem', fontWeight: 600 }}>{item.where_to_go_next.guidance}</p>
            )}
            {item.where_to_go_next.default && (
              <LinkifiedText text={item.where_to_go_next.default} />
            )}
          </InfoBox>
        )}

        {item.question_groups && item.question_groups.length > 0 && (() => {
          let currentQuestionNumber = getStartingQuestionNumber()
          return (
            <>
              {item.question_groups.map((group, groupIndex) => {
                // Create a unique key that includes sectionId and group title
                const groupKey = `${itemId}_${group.title.replace(/\s+/g, '_')}_${groupIndex}`
                const startingNumber = currentQuestionNumber
                // Increment for next group
                currentQuestionNumber += group.questions ? group.questions.length : 0
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
                    startingQuestionNumber={startingNumber}
                  />
                )
              })}
            </>
          )
        })()}

        {item.assessment_question && (
          <InfoBox title="Assessment Question" variant="advisor-note" style={{ margin: '2rem 0' }}>
            <ScriptBlock script={item.assessment_question} />
          </InfoBox>
        )}

        {item.paths && item.assessment_question ? (
          // Two Paths Emerge structure - two big buttons side by side, content below based on selection
          <div className="two-paths-emerge-section">
            <div className="two-paths-buttons-row">
              {item.paths.map((path, idx) => {
                const pathId = path.id || `path-${idx}`
                const isSelected = openPaths[pathId] || false
                
                return (
                  <button
                    key={pathId}
                    className={`two-paths-button ${isSelected ? 'selected' : ''}`}
                    onClick={() => {
                      // Set this path as selected, deselect others
                      const newOpenPaths = {}
                      newOpenPaths[pathId] = !isSelected
                      setOpenPaths(newOpenPaths)
                    }}
                  >
                    <div className="two-paths-button-title">
                      {path.condition}
                    </div>
                    </button>
                )
              })}
            </div>
            {item.paths.map((path, idx) => {
              const pathId = path.id || `path-${idx}`
              const isSelected = openPaths[pathId] || false
              
              if (!isSelected) return null
              
              return (
                <div key={`content-${pathId}`} className="two-paths-content">
                        {path.script && (
                          <div style={{ marginBottom: '1rem' }}>
                            <ScriptBlock script={path.script} />
                          </div>
                        )}
                        {path.advisor_notes && path.advisor_notes.length > 0 && (
                          <InfoBox title="Advisor Notes" variant="advisor-note" style={{ marginTop: '1rem' }}>
                            <ul className="bullet-list">
                              {path.advisor_notes.map((note, noteIdx) => (
                                <li key={noteIdx}>
                                  <LinkifiedText text={note} />
                                </li>
                              ))}
                            </ul>
                          </InfoBox>
                        )}
                        {path.reconstruction_questions && path.reconstruction_questions.length > 0 && (
                          <InfoBox title="Reconstruction Questions" variant="advisor-note" style={{ marginTop: '1rem' }}>
                            <ul className="bullet-list">
                              {path.reconstruction_questions.map((q, qIdx) => (
                                <li key={qIdx}>
                                  <LinkifiedText text={q} />
                                </li>
                              ))}
                            </ul>
                          </InfoBox>
                    )}
                  </div>
                )
              })}
            </div>
        ) : item.paths ? (
          // Economy paths structure - use ForkPaths component
          <ForkPaths
            itemId={itemId}
            paths={item.paths}
            onPathSelect={handleEconomyPath}
          />
        ) : null}

        {item.transition && (
          <InfoBox title="Transition" variant="advisor-note" style={{ margin: '2rem 0' }}>
            <ScriptBlock script={item.transition} />
          </InfoBox>
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

        {item.capitalization_framing ? (
          <div style={{ margin: '2rem 0' }}>
            {item.capitalization_framing.title ? (
              <h3 style={{ color: 'var(--text-primary)', marginBottom: '1.5rem', fontSize: '1.25rem', fontWeight: 700 }}>
                {item.capitalization_framing.title}
              </h3>
            ) : null}
            {item.capitalization_framing.key_principle ? (
              <InfoBox title="Key Principle" variant="advisor-note" style={{ marginBottom: '1.5rem' }}>
                <LinkifiedText text={item.capitalization_framing.key_principle} />
              </InfoBox>
            ) : null}
            {item.capitalization_framing.content ? (
              <InfoBox variant="default" style={{ marginBottom: '1.5rem' }}>
                <LinkifiedText text={item.capitalization_framing.content} />
              </InfoBox>
            ) : null}
            {/* Each script gets its own collapsible section */}
            {item.capitalization_framing.scripts && 
             Array.isArray(item.capitalization_framing.scripts) && 
             item.capitalization_framing.scripts.length > 0 ? (
               item.capitalization_framing.scripts.map((scriptObj, idx) => {
                 if (!scriptObj || !scriptObj.script) return null
                 return (
                   <CollapsibleSection
                     key={`capitalization-script-${idx}`}
                     title={scriptObj.title || `Script ${idx + 1}`}
                     defaultCollapsed={true}
                     variant="default"
                   >
                     <ScriptBlock script={scriptObj.script} />
                   </CollapsibleSection>
                 )
               })
             ) : null}
            {/* Legacy support for old script array format */}
            {item.capitalization_framing.script && 
             Array.isArray(item.capitalization_framing.script) && 
             item.capitalization_framing.script.length > 0 && 
             !item.capitalization_framing.scripts ? (
                  item.capitalization_framing.script.map((scriptText, idx) => (
                 <CollapsibleSection
                   key={`capitalization-legacy-script-${idx}`}
                   title={`Script ${idx + 1}`}
                   defaultCollapsed={true}
                   variant="default"
                 >
                      <ScriptBlock script={scriptText} />
                 </CollapsibleSection>
                  ))
             ) : null}
              </div>
        ) : null}

        {item.related_objection_handlers && (
          <InfoBox title={item.related_objection_handlers.title || "Related Objection Handlers"} variant="advisor-note" style={{ margin: '2rem 0' }}>
            {item.related_objection_handlers.note && (
              <p style={{ marginBottom: '1rem', fontStyle: 'italic', color: 'var(--text-secondary)' }}>
                {item.related_objection_handlers.note}
              </p>
            )}
            {item.related_objection_handlers.handlers && item.related_objection_handlers.handlers.length > 0 && (
              <div
                onClick={(e) => {
                  const link = e.target.closest('.content-link')
                  if (!link) return
                  e.preventDefault()
                  const action = link.getAttribute('data-action')
                  const id = link.getAttribute('data-id')
                  if (action === 'loadHandler' && id) {
                    loadHandler(id)
                  }
                }}
              >
                <ul className="bullet-list">
                  {item.related_objection_handlers.handlers.map((handler, idx) => (
                    <li key={idx} style={{ marginBottom: '0.75rem' }}>
                      <strong style={{ color: 'var(--primary-color)' }}>{handler.title}:</strong>{' '}
                      <span dangerouslySetInnerHTML={{ __html: handler.link }} />
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </InfoBox>
        )}

        {/* Generic fallback renderer for unhandled properties */}
        {(() => {
          // Properties that are already explicitly rendered
          const renderedProps = new Set([
            'id', 'title', 'category', 'section', 'phase', 'purpose',
            'trigger', 'where_it_shows_up', 'context', 'golden_rule', 'core_principle',
            'primary_reframe', 'validation_spins', 'polite_disqualification', 'why_they_do_it',
            'handle_steps', 'how_to_handle', 'key_lesson', 'advisor_mindset', 'advisor_guidance',
            'advisor_notes', 'script', 'intro', 'content', 'soft_commitment', 'carpet_integration',
            'when_to_deploy', 'when_NOT_to_deploy', 'where_to_go_next', 'question_groups', 'paths',
            'on_call_sequence', 'handling_quality_objections', 'quick_reference_card', 'capitalization_framing',
            'assessment_question', 'transition', 'main_script', 'context_variations', 'additional_resources',
            'related_objection_handlers'
          ])

          const unrenderedProps = Object.keys(item).filter(key => 
            !renderedProps.has(key) && 
            item[key] !== null && 
            item[key] !== undefined &&
            key !== 'emoji' // Skip emoji as it's handled in question_groups
          )

          if (unrenderedProps.length === 0) return null

          return unrenderedProps.map(key => {
            const value = item[key]
            const valueType = Array.isArray(value) ? 'array' : typeof value

            // Format key name for display (convert snake_case to Title Case)
            const displayKey = key
              .split('_')
              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
              .join(' ')

            // Handle different value types
            if (valueType === 'string' && value.length > 0) {
              // Check if it looks like HTML/script content
              if (value.includes('<br>') || value.includes('<b>') || value.includes('<i>')) {
                return (
                  <InfoBox key={key} title={displayKey} style={{ margin: '1.5rem 0' }}>
                    <ScriptBlock script={value} />
                  </InfoBox>
                )
              } else {
                return (
                  <InfoBox key={key} title={displayKey} style={{ margin: '1.5rem 0' }}>
                    <LinkifiedText text={value} />
                  </InfoBox>
                )
              }
            } else if (valueType === 'array' && value.length > 0) {
              // Check if array contains strings or objects
              if (typeof value[0] === 'string') {
                return (
                  <InfoBox key={key} title={displayKey} style={{ margin: '1.5rem 0' }}>
                    <ul className="bullet-list">
                      {value.map((item, idx) => (
                        <li key={idx}>
                          <LinkifiedText text={item} />
                        </li>
                      ))}
                    </ul>
                  </InfoBox>
                )
              } else if (typeof value[0] === 'object') {
                // Array of objects - render as structured list
                return (
                  <InfoBox key={key} title={displayKey} style={{ margin: '1.5rem 0' }}>
                    {value.map((obj, idx) => (
                      <div key={idx} style={{ marginBottom: '1rem', paddingLeft: '1rem', borderLeft: '2px solid var(--primary-color)' }}>
                        {Object.keys(obj).map(objKey => {
                          const objValue = obj[objKey]
                          if (typeof objValue === 'string' && objValue.length > 0) {
                            return (
                              <div key={objKey} style={{ marginBottom: '0.5rem' }}>
                                <strong style={{ color: 'var(--primary-color)' }}>
                                  {objKey.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}:
                                </strong>{' '}
                                {objValue.includes('<br>') || objValue.includes('<b>') ? (
                                  <ScriptBlock script={objValue} />
                                ) : (
                                  <LinkifiedText text={objValue} />
                                )}
                              </div>
                            )
                          }
                          return null
                        })}
                      </div>
                    ))}
                  </InfoBox>
                )
              }
            } else if (valueType === 'object' && value !== null) {
              // Object - check if it has common structure
              const objKeys = Object.keys(value)
              if (objKeys.length > 0) {
                // Check if it's a simple object with string values
                const allStrings = objKeys.every(k => typeof value[k] === 'string')
                if (allStrings) {
                  return (
                    <InfoBox key={key} title={displayKey} style={{ margin: '1.5rem 0' }}>
                      {objKeys.map(objKey => (
                        <div key={objKey} style={{ marginBottom: '0.75rem' }}>
                          <strong style={{ color: 'var(--primary-color)' }}>
                            {objKey.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}:
                          </strong>{' '}
                          {value[objKey].includes('<br>') || value[objKey].includes('<b>') ? (
                            <ScriptBlock script={value[objKey]} />
                          ) : (
                            <LinkifiedText text={value[objKey]} />
                          )}
                        </div>
                      ))}
                    </InfoBox>
                  )
                } else {
                  // Complex object - render as JSON-like structure
                  return (
                    <InfoBox key={key} title={displayKey} variant="advisor-note" style={{ margin: '1.5rem 0' }}>
                      <pre style={{ 
                        background: 'var(--bg-secondary)', 
                        padding: '1rem', 
                        borderRadius: '4px',
                        overflow: 'auto',
                        fontSize: '0.9rem',
                        lineHeight: 1.5
                      }}>
                        {JSON.stringify(value, null, 2)}
                      </pre>
                    </InfoBox>
                  )
                }
              }
            } else if (valueType === 'number' || valueType === 'boolean') {
              return (
                <InfoBox key={key} title={displayKey} style={{ margin: '1.5rem 0' }}>
                  <p>{String(value)}</p>
                </InfoBox>
              )
            }

            return null
          })
        })()}

        {/* Additional content sections can be added here */}
      </div>
    </>
  )
}

export default SequentialContent


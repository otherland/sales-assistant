import React from 'react'
import { useContent } from '../../context/ContentContext'
import InfoBox from './InfoBox'
import ScriptBlock from './ScriptBlock'
import LinkifiedText from './LinkifiedText'
import CollapsibleSection from './CollapsibleSection'

function HandlerContent({ handlerData, handlerId }) {
  const { loadContent } = useContent()

  if (!handlerData) return null

  const returnToTrack = () => {
    const lastSequential = localStorage.getItem('lastSequentialContent') || 'opening_frame'
    loadContent(lastSequential)
  }

  return (
    <>
      <div className="content-header">
        <span className="content-category">{handlerData.category}</span>
        <h2 className="content-title">{handlerData.title}</h2>
        {handlerData.purpose && (
          <p className="content-purpose" style={{ fontStyle: 'italic', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
            {handlerData.purpose}
          </p>
        )}
        <p className="content-purpose">{handlerData.trigger}</p>
      </div>
      <div className="content-body">
        {handlerData.where_it_shows_up && (
          <InfoBox title="📍 Where It Shows Up" variant="default" style={{ marginBottom: '1.5rem' }}>
            <LinkifiedText text={handlerData.where_it_shows_up} />
          </InfoBox>
        )}
        {handlerData.quick_response && (
          <InfoBox title="⚡ Quick Response">
            <LinkifiedText text={handlerData.quick_response} />
          </InfoBox>
        )}

        {/* Main Script - Collapsible (for handlers with main_script structure) */}
        {handlerData.main_script && (
          <CollapsibleSection 
            title={handlerData.main_script.title || "📝 What to Say (Standard Script)"}
            defaultCollapsed={false}
            variant="default"
          >
            {handlerData.main_script.script && (
              <div style={{ marginBottom: handlerData.main_script.advisor_notes ? '1rem' : '0' }}>
                <ScriptBlock script={handlerData.main_script.script} />
              </div>
            )}
            {handlerData.main_script.advisor_notes && handlerData.main_script.advisor_notes.length > 0 && (
              <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
                <strong style={{ color: 'var(--primary-color)' }}>💡 How to Deliver:</strong>
                <ul className="bullet-list" style={{ marginTop: '0.5rem' }}>
                  {handlerData.main_script.advisor_notes.map((note, idx) => (
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
        {!handlerData.main_script && handlerData.script && !handlerData.full_script && (
          <ScriptBlock script={handlerData.script} />
        )}

        {handlerData.full_script && (
          <InfoBox title="📋 Full Script">
            <ScriptBlock script={handlerData.full_script} />
          </InfoBox>
        )}

        {/* Capitalization Framing - Render early, right after main script */}
        {handlerData.capitalization_framing ? (
          <div style={{ margin: '2rem 0' }}>
            {handlerData.capitalization_framing.title ? (
              <h3 style={{ color: 'var(--text-primary)', marginBottom: '1.5rem', fontSize: '1.25rem', fontWeight: 700 }}>
                {handlerData.capitalization_framing.title}
              </h3>
            ) : null}
            {handlerData.capitalization_framing.key_principle ? (
              <InfoBox title="Key Principle" variant="advisor-note" style={{ marginBottom: '1.5rem' }}>
                <LinkifiedText text={handlerData.capitalization_framing.key_principle} />
              </InfoBox>
            ) : null}
            {handlerData.capitalization_framing.content ? (
              <InfoBox variant="default" style={{ marginBottom: '1.5rem' }}>
                <LinkifiedText text={handlerData.capitalization_framing.content} />
              </InfoBox>
            ) : null}
            {/* Each script gets its own collapsible section */}
            {handlerData.capitalization_framing.scripts && 
             Array.isArray(handlerData.capitalization_framing.scripts) && 
             handlerData.capitalization_framing.scripts.length > 0 ? (
               handlerData.capitalization_framing.scripts.map((scriptObj, idx) => {
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
            {handlerData.capitalization_framing.script && 
             Array.isArray(handlerData.capitalization_framing.script) && 
             handlerData.capitalization_framing.script.length > 0 && 
             !handlerData.capitalization_framing.scripts ? (
               handlerData.capitalization_framing.script.map((scriptText, idx) => (
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

        {handlerData.key_principle && (
          <InfoBox title="🎯 Key Principle">
            <LinkifiedText text={handlerData.key_principle} />
          </InfoBox>
        )}

        {handlerData.content && (
          <InfoBox title="Additional Content">
            <LinkifiedText text={handlerData.content} />
          </InfoBox>
        )}

        {handlerData.story_mode && (
          <div style={{
            margin: '2.5rem 0',
            padding: '2rem',
            background: 'var(--bg-secondary)',
            border: '2px solid var(--primary-color)',
            borderRadius: '12px',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <span style={{ fontSize: '1.75rem' }}>🎭</span>
              <h3 style={{ color: 'var(--primary-color)', fontSize: '1.3rem', fontWeight: 700, margin: 0 }}>
                {handlerData.story_mode.title}
              </h3>
            </div>
            <InfoBox
              title="⏱️ When to Use This"
              style={{ background: 'var(--bg-secondary)', borderLeftColor: 'var(--accent-yellow)', marginBottom: '1.5rem' }}
            >
              <p style={{ fontStyle: 'italic', color: 'var(--text-secondary)' }}>
                {handlerData.story_mode.when_to_use}
              </p>
            </InfoBox>
            <ScriptBlock script={handlerData.story_mode.script} />
          </div>
        )}

        {handlerData.intervention_mode && (
          <div style={{
            margin: '2.5rem 0',
            padding: '2rem',
            background: 'var(--bg-secondary)',
            border: '2px solid var(--accent-red)',
            borderRadius: '12px',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <span style={{ fontSize: '1.75rem' }}>🛑</span>
              <h3 style={{ color: 'var(--accent-red)', fontSize: '1.3rem', fontWeight: 700, margin: 0 }}>
                {handlerData.intervention_mode.title}
              </h3>
            </div>
            <InfoBox
              title="⏱️ When to Use This"
              style={{ background: 'var(--bg-secondary)', borderLeftColor: 'var(--accent-red)', marginBottom: '1.5rem' }}
            >
              <p style={{ fontStyle: 'italic', color: 'var(--text-secondary)' }}>
                {handlerData.intervention_mode.when_to_use}
              </p>
            </InfoBox>
            <ScriptBlock script={handlerData.intervention_mode.script} />
          </div>
        )}

        {handlerData.primary_reframe && (
          <InfoBox title="Primary Reframe Script" variant="advisor-note">
            <ScriptBlock script={handlerData.primary_reframe} />
          </InfoBox>
        )}

        {handlerData.validation_spins && handlerData.validation_spins.length > 0 && (
          <InfoBox title="Validation Spins — Choose Your Response">
            <ul className="bullet-list">
              {handlerData.validation_spins.map((spin, idx) => (
                <li key={idx}>"{spin}"</li>
              ))}
            </ul>
          </InfoBox>
        )}

        {handlerData.polite_disqualification && (
          <InfoBox title="Polite Disqualification Script" variant="warning">
            <ScriptBlock script={handlerData.polite_disqualification} />
          </InfoBox>
        )}

        {handlerData.why_they_do_it && handlerData.why_they_do_it.length > 0 && (
          <InfoBox title="Why They Do It">
            <ul className="bullet-list">
              {handlerData.why_they_do_it.map((reason, idx) => (
                <li key={idx}>
                  <LinkifiedText text={reason} />
                </li>
              ))}
            </ul>
          </InfoBox>
        )}

        {/* How to Handle It - Each step gets its own collapsible section */}
        {handlerData.how_to_handle && handlerData.how_to_handle.length > 0 && (
          <>
            {handlerData.how_to_handle.map((stepObj, idx) => {
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

        {handlerData.handle_steps && handlerData.handle_steps.length > 0 && (
          <div className="info-box" style={{ margin: '2rem 0' }}>
            <h3 style={{ color: 'var(--text-primary)', marginBottom: '1.5rem', fontSize: '1.25rem' }}>
              How to Handle It:
            </h3>
            {handlerData.handle_steps.map((stepObj, idx) => (
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

        {/* Advisor Notes - Collapsible (for handlers without main_script) */}
        {!handlerData.main_script && handlerData.advisor_notes && handlerData.advisor_notes.length > 0 && (
          <CollapsibleSection 
            title="💡 Advisor Notes"
            defaultCollapsed={true}
            variant="default"
          >
            <ul className="bullet-list">
              {handlerData.advisor_notes.map((note, idx) => (
                <li key={idx}>
                  <LinkifiedText text={note} />
                </li>
              ))}
            </ul>
          </CollapsibleSection>
        )}

        {/* Pricing Objection Handler - Key Lesson */}
        {handlerData.key_lesson && (
          <InfoBox title="🎯 Key Lesson" variant="advisor-note" style={{ margin: '1.5rem 0' }}>
            <LinkifiedText text={handlerData.key_lesson} />
          </InfoBox>
        )}

        {/* Pricing Objection Handler - Where to Go Next */}
        {handlerData.where_to_go_next && (
          <InfoBox title={handlerData.where_to_go_next.title || "Where to Go Next"} variant="advisor-note" style={{ margin: '1.5rem 0' }}>
            {handlerData.where_to_go_next.guidance && (
              <p style={{ marginBottom: '0.75rem', fontWeight: 600 }}>
                {handlerData.where_to_go_next.guidance}
              </p>
            )}
            {handlerData.where_to_go_next.default && (
              <div>
                <LinkifiedText text={handlerData.where_to_go_next.default} />
              </div>
            )}
          </InfoBox>
        )}

        {/* Pricing Objection Handler - Pivot Examples */}
        {handlerData.pivot_examples && handlerData.pivot_examples.length > 0 && (
          <InfoBox title="Pivot Examples" variant="advisor-note" style={{ margin: '1.5rem 0' }}>
            {handlerData.pivot_examples.map((pivot, idx) => (
              <div key={idx} style={{ marginBottom: idx < handlerData.pivot_examples.length - 1 ? '1rem' : '0' }}>
                <ScriptBlock script={pivot.text} />
                {pivot.link_text && (
                  <p style={{ marginTop: '0.5rem', fontStyle: 'italic', color: 'var(--text-secondary)' }}>
                    → {pivot.link_text}
                  </p>
                )}
              </div>
            ))}
          </InfoBox>
        )}

        {handlerData.recognize_the_projection && (
          <InfoBox title={handlerData.recognize_the_projection.title} variant="warning" style={{ margin: '1.5rem 0' }}>
            <p><strong>Reality:</strong> {handlerData.recognize_the_projection.reality}</p>
            <p style={{ marginTop: '0.5rem' }}>
              <strong>Interpretation:</strong> {handlerData.recognize_the_projection.interpretation}
            </p>
          </InfoBox>
        )}

        {handlerData.accountability_boundaries && (
          <div style={{
            margin: '2rem 0',
            padding: '1.5rem',
            background: 'var(--bg-secondary)',
            borderLeft: '4px solid var(--primary-color)',
            borderRadius: '6px'
          }}>
            <h3 style={{ color: 'var(--primary-color)', marginBottom: '1rem', fontSize: '1.25rem', fontWeight: 700 }}>
              {handlerData.accountability_boundaries.title}
            </h3>
            <InfoBox title="Your Domain">
              <LinkifiedText text={handlerData.accountability_boundaries.your_domain} />
            </InfoBox>
            <InfoBox title="Their Domain" style={{ marginTop: '1rem' }}>
              <LinkifiedText text={handlerData.accountability_boundaries.their_domain} />
            </InfoBox>
            <InfoBox title="Positioning" variant="advisor-note" style={{ marginTop: '1rem' }}>
              <p style={{ fontWeight: 600 }}>
                <LinkifiedText text={handlerData.accountability_boundaries.positioning} />
              </p>
            </InfoBox>
          </div>
        )}

        {/* Generic fallback renderer for unhandled properties */}
        {(() => {
          // Properties that are already explicitly rendered
          const renderedProps = new Set([
            'title', 'category', 'trigger', 'quick_response', 'full_script', 'key_principle',
            'content', 'story_mode', 'intervention_mode', 'primary_reframe', 'validation_spins', 'polite_disqualification',
            'why_they_do_it', 'handle_steps', 'recognize_the_projection', 'accountability_boundaries',
            'script', 'main_script', 'how_to_handle', 'capitalization_framing', 'advisor_notes', 'key_lesson', 
            'where_to_go_next', 'pivot_examples', 'where_it_shows_up', 'purpose'
          ])

          const unrenderedProps = Object.keys(handlerData).filter(key => {
            // Double-check: explicitly skip pricing objection handler fields
            if (key === 'script' || key === 'main_script' || key === 'how_to_handle' || key === 'capitalization_framing' || 
                key === 'advisor_notes' || key === 'key_lesson' || key === 'where_to_go_next' || 
                key === 'pivot_examples') {
              return false
            }
            return !renderedProps.has(key) && 
            handlerData[key] !== null && 
            handlerData[key] !== undefined
          })

          if (unrenderedProps.length === 0) return null

          return unrenderedProps.map(key => {
            const value = handlerData[key]
            const valueType = Array.isArray(value) ? 'array' : typeof value

            // Format key name for display (convert snake_case to Title Case)
            const displayKey = key
              .split('_')
              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
              .join(' ')

            // Handle different value types
            if (valueType === 'string' && value.length > 0) {
              // Skip script field - should be handled by CollapsibleSection above
              if (key === 'script') {
                return null
              }
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
              // Skip advisor_notes - should be handled by CollapsibleSection above
              if (key === 'advisor_notes') {
                return null
              }
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
                // Special handling for how_to_handle - should be rendered by specific handler above
                if (key === 'how_to_handle') {
                  return null // Skip - already handled by CollapsibleSection above
                }
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
              // Skip capitalization_framing, where_to_go_next, pivot_examples - should be handled by specific handlers above
              if (key === 'capitalization_framing' || key === 'where_to_go_next' || key === 'pivot_examples') {
                return null
              }
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

        <div className="return-to-track">
          <button onClick={returnToTrack} className="return-btn">
            ↩️ Return to Main Track
          </button>
        </div>
      </div>
    </>
  )
}

export default HandlerContent


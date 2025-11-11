import React from 'react'
import InfoBox from './InfoBox'
import ScriptBlock from './ScriptBlock'
import LinkifiedText from './LinkifiedText'
import HormoziDiagnosticRouter from '../HormoziDiagnosticRouter'

function ReferenceContent({ refData, refId }) {
  if (!refData) return null

  // Check if this is a microapp that should use a custom component
  if (refData.isMicroapp || refId === 'hormozi_diagnostic_router') {
    return <HormoziDiagnosticRouter refData={refData} refId={refId} />
  }

  // Properties that should be rendered in header or skipped
  const skipProps = new Set(['title', 'subtitle', 'purpose'])

  // Format key name for display
  const formatKey = (key) => {
    return key
      .split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  }

  // Render a value based on its type
  const renderValue = (key, value, level = 0) => {
    if (value === null || value === undefined) return null

    const valueType = Array.isArray(value) ? 'array' : typeof value

    // String values
    if (valueType === 'string' && value.length > 0) {
      // Check if it looks like script/HTML content
      if (value.includes('<br>') || value.includes('<b>') || value.includes('<i>')) {
        return (
          <InfoBox key={key} title={formatKey(key)} style={{ margin: level === 0 ? '1.5rem 0' : '1rem 0' }}>
            <ScriptBlock script={value} />
          </InfoBox>
        )
      } else {
        return (
          <InfoBox key={key} title={formatKey(key)} style={{ margin: level === 0 ? '1.5rem 0' : '1rem 0' }}>
            <LinkifiedText text={value} />
          </InfoBox>
        )
      }
    }

    // Array values
    if (valueType === 'array' && value.length > 0) {
      // Array of strings
      if (typeof value[0] === 'string') {
        return (
          <InfoBox key={key} title={formatKey(key)} style={{ margin: level === 0 ? '1.5rem 0' : '1rem 0' }}>
            <ul className="bullet-list">
              {value.map((item, idx) => (
                <li key={idx}>
                  <LinkifiedText text={item} />
                </li>
              ))}
            </ul>
          </InfoBox>
        )
      }
      
      // Array of objects - handle special cases
      if (typeof value[0] === 'object') {
        // Special handling for variables (CARPET framework)
        if (key === 'variables' && value[0].letter) {
          return (
            <InfoBox key={key} title={formatKey(key)} style={{ margin: level === 0 ? '1.5rem 0' : '1rem 0' }}>
              {value.map((variable, idx) => (
                <div key={idx} style={{ marginBottom: '1.5rem', padding: '1rem', backgroundColor: 'var(--bg-secondary)', borderRadius: '8px' }}>
                  <h4 style={{ marginTop: 0, marginBottom: '0.5rem', color: 'var(--primary-color)' }}>
                    {variable.letter}: {variable.name}
                  </h4>
                  {variable.description && (
                    <p style={{ marginBottom: '0.75rem', fontStyle: 'italic' }}>
                      {variable.description}
                    </p>
                  )}
                  {variable.questions && variable.questions.length > 0 && (
                    <div>
                      <strong>Questions:</strong>
                      <ul className="bullet-list" style={{ marginTop: '0.5rem' }}>
                        {variable.questions.map((q, qIdx) => (
                          <li key={qIdx}>{q}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </InfoBox>
          )
        }

        // Special handling for artifacts (discovery framework)
        if (key === 'artifacts' && value[0].number) {
          return (
            <InfoBox key={key} title={formatKey(key)} style={{ margin: level === 0 ? '1.5rem 0' : '1rem 0' }}>
              {value.map((artifact, idx) => (
                <div key={idx} style={{ marginBottom: '2rem', padding: '1rem', backgroundColor: 'var(--bg-secondary)', borderRadius: '8px' }}>
                  <h4 style={{ marginTop: 0, marginBottom: '0.5rem', color: 'var(--primary-color)' }}>
                    {artifact.number}. {artifact.name}
                  </h4>
                  {artifact.definition && (
                    <p style={{ marginBottom: '0.75rem', fontWeight: '500' }}>
                      {artifact.definition}
                    </p>
                  )}
                  {artifact.standards && artifact.standards.length > 0 && (
                    <div style={{ marginBottom: '0.75rem' }}>
                      <strong>Standards:</strong>
                      <ul className="bullet-list" style={{ marginTop: '0.5rem' }}>
                        {artifact.standards.map((s, sIdx) => (
                          <li key={sIdx}>{s}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {artifact.must_capture && artifact.must_capture.length > 0 && (
                    <div style={{ marginBottom: '0.75rem' }}>
                      <strong>Must Capture:</strong>
                      <ul className="bullet-list" style={{ marginTop: '0.5rem' }}>
                        {artifact.must_capture.map((m, mIdx) => (
                          <li key={mIdx}>{m}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {artifact.must_surface && artifact.must_surface.length > 0 && (
                    <div style={{ marginBottom: '0.75rem' }}>
                      <strong>Must Surface:</strong>
                      <ul className="bullet-list" style={{ marginTop: '0.5rem' }}>
                        {artifact.must_surface.map((m, mIdx) => (
                          <li key={mIdx}>{m}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {artifact.must_propose && artifact.must_propose.length > 0 && (
                    <div style={{ marginBottom: '0.75rem' }}>
                      <strong>Must Propose:</strong>
                      <ul className="bullet-list" style={{ marginTop: '0.5rem' }}>
                        {artifact.must_propose.map((m, mIdx) => (
                          <li key={mIdx}>{m}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {artifact.must_map && artifact.must_map.length > 0 && (
                    <div style={{ marginBottom: '0.75rem' }}>
                      <strong>Must Map:</strong>
                      <ul className="bullet-list" style={{ marginTop: '0.5rem' }}>
                        {artifact.must_map.map((m, mIdx) => (
                          <li key={mIdx}>{m}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {artifact.example && (
                    <div style={{ marginBottom: '0.75rem', padding: '0.75rem', backgroundColor: 'var(--bg-primary)', borderRadius: '4px' }}>
                      <strong>Example:</strong> <em>{artifact.example}</em>
                    </div>
                  )}
                  {artifact.formula && (
                    <div style={{ marginBottom: '0.75rem', padding: '0.75rem', backgroundColor: 'var(--bg-primary)', borderRadius: '4px', fontFamily: 'monospace' }}>
                      <strong>Formula:</strong> {artifact.formula}
                    </div>
                  )}
                  {artifact.fail_cues && artifact.fail_cues.length > 0 && (
                    <div style={{ marginBottom: '0.75rem' }}>
                      <strong style={{ color: 'var(--warning-color)' }}>Fail Cues:</strong>
                      <ul className="bullet-list" style={{ marginTop: '0.5rem' }}>
                        {artifact.fail_cues.map((f, fIdx) => (
                          <li key={fIdx} style={{ color: 'var(--warning-color)' }}>{f}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </InfoBox>
          )
        }

        // Special handling for five_questions (curiosity standard)
        if (key === 'five_questions' && value[0].number) {
          return (
            <InfoBox key={key} title={formatKey(key)} style={{ margin: level === 0 ? '1.5rem 0' : '1rem 0' }}>
              {value.map((q, idx) => (
                <div key={idx} style={{ marginBottom: '1.5rem', padding: '1rem', backgroundColor: 'var(--bg-secondary)', borderRadius: '8px' }}>
                  <h4 style={{ marginTop: 0, marginBottom: '0.5rem', color: 'var(--primary-color)' }}>
                    {q.number}. {q.question}
                  </h4>
                  {q.what_this_means && (
                    <p style={{ marginTop: '0.5rem', fontStyle: 'italic', color: 'var(--text-secondary)' }}>
                      <strong>What this means:</strong> {q.what_this_means}
                    </p>
                  )}
                </div>
              ))}
            </InfoBox>
          )
        }

        // Special handling for failures array
        if (key === 'failures' && typeof value[0] === 'string') {
          return (
            <InfoBox key={key} title={formatKey(key)} variant="warning" style={{ margin: level === 0 ? '1.5rem 0' : '1rem 0' }}>
              <ul className="bullet-list">
                {value.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </InfoBox>
          )
        }

        // Special handling for lines array (control lines)
        if (key === 'lines' && typeof value[0] === 'string') {
          return (
            <InfoBox key={key} title={formatKey(key)} style={{ margin: level === 0 ? '1.5rem 0' : '1rem 0' }}>
              {value.map((line, idx) => (
                <div key={idx} style={{ marginBottom: '0.75rem', padding: '0.75rem', backgroundColor: 'var(--bg-secondary)', borderRadius: '4px', fontStyle: 'italic' }}>
                  "{line}"
                </div>
              ))}
            </InfoBox>
          )
        }

        // Special handling for why_it_works, where_to_deploy, critical_rules arrays
        if ((key === 'why_it_works' || key === 'where_to_deploy' || key === 'critical_rules' || key === 'why_this_works' || key === 'advisor_notes' || key === 'how_it_works') && typeof value[0] === 'string') {
          return (
            <InfoBox key={key} title={formatKey(key)} style={{ margin: level === 0 ? '1.5rem 0' : '1rem 0' }}>
              <ul className="bullet-list">
                {value.map((item, idx) => (
                  <li key={idx}>
                    <LinkifiedText text={item} />
                  </li>
                ))}
              </ul>
            </InfoBox>
          )
        }

        // Special handling for acknowledgment, building_rapport, transitioning arrays
        if ((key === 'acknowledgment' || key === 'building_rapport' || key === 'transitioning') && typeof value[0] === 'string') {
          return (
            <InfoBox key={key} title={formatKey(key)} style={{ margin: level === 0 ? '1.5rem 0' : '1rem 0' }}>
              {value.map((item, idx) => (
                <div key={idx} style={{ marginBottom: '0.75rem', padding: '0.75rem', backgroundColor: 'var(--bg-secondary)', borderRadius: '4px' }}>
                  "{item}"
                </div>
              ))}
            </InfoBox>
          )
        }

        // Generic array of objects
        return (
          <InfoBox key={key} title={formatKey(key)} style={{ margin: level === 0 ? '1.5rem 0' : '1rem 0' }}>
            {value.map((obj, idx) => (
              <div key={idx} style={{ marginBottom: '1rem', paddingLeft: '1rem', borderLeft: '2px solid var(--primary-color)' }}>
                {Object.keys(obj).map(objKey => {
                  const objValue = obj[objKey]
                  if (typeof objValue === 'string' && objValue.length > 0) {
                    return (
                      <div key={objKey} style={{ marginBottom: '0.5rem' }}>
                        <strong style={{ color: 'var(--primary-color)' }}>
                          {formatKey(objKey)}:
                        </strong>{' '}
                        {objValue.includes('<br>') || objValue.includes('<b>') ? (
                          <ScriptBlock script={objValue} />
                        ) : (
                          <LinkifiedText text={objValue} />
                        )}
                      </div>
                    )
                  } else if (Array.isArray(objValue) && objValue.length > 0) {
                    return (
                      <div key={objKey} style={{ marginBottom: '0.5rem' }}>
                        <strong style={{ color: 'var(--primary-color)' }}>
                          {formatKey(objKey)}:
                        </strong>
                        <ul className="bullet-list" style={{ marginTop: '0.25rem' }}>
                          {objValue.map((item, itemIdx) => (
                            <li key={itemIdx}>
                              {typeof item === 'string' ? item : JSON.stringify(item)}
                            </li>
                          ))}
                        </ul>
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
    }

    // Object values
    if (valueType === 'object' && value !== null) {
      const objKeys = Object.keys(value)
      if (objKeys.length === 0) return null

      // Special handling for translation_table
      if (key === 'translation_table') {
        return (
          <InfoBox key={key} title={formatKey(key)} style={{ margin: level === 0 ? '1.5rem 0' : '1rem 0' }}>
            {value.never_say && (
              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ color: 'var(--warning-color)', marginBottom: '0.5rem' }}>Never Say:</h4>
                <ul className="bullet-list">
                  {value.never_say.map((item, idx) => (
                    <li key={idx} style={{ color: 'var(--warning-color)' }}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
            {value.always_say && (
              <div>
                <h4 style={{ color: 'var(--primary-color)', marginBottom: '0.5rem' }}>Always Say:</h4>
                <ul className="bullet-list">
                  {value.always_say.map((item, idx) => (
                    <li key={idx} style={{ color: 'var(--primary-color)' }}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </InfoBox>
        )
      }

      // Special handling for six_beat_structure
      if (key === 'six_beat_structure') {
        return (
          <InfoBox key={key} title={formatKey(key)} style={{ margin: level === 0 ? '1.5rem 0' : '1rem 0' }}>
            {objKeys.map(beatKey => {
              const beat = value[beatKey]
              return (
                <div key={beatKey} style={{ marginBottom: '1.5rem', padding: '1rem', backgroundColor: 'var(--bg-secondary)', borderRadius: '8px' }}>
                  <h4 style={{ marginTop: 0, marginBottom: '0.5rem', color: 'var(--primary-color)' }}>
                    {beat.name || formatKey(beatKey)}
                  </h4>
                  {beat.purpose && (
                    <p style={{ marginBottom: '0.75rem', fontWeight: '500' }}>{beat.purpose}</p>
                  )}
                  {beat.example && (
                    <div style={{ marginBottom: '0.75rem', padding: '0.75rem', backgroundColor: 'var(--bg-primary)', borderRadius: '4px', fontStyle: 'italic' }}>
                      <strong>Example:</strong> {beat.example}
                    </div>
                  )}
                  {beat.key_phrase && (
                    <div style={{ marginBottom: '0.75rem', padding: '0.75rem', backgroundColor: 'var(--primary-color)', color: 'white', borderRadius: '4px' }}>
                      <strong>Key Phrase:</strong> "{beat.key_phrase}"
                    </div>
                  )}
                  {beat.critical_rule && (
                    <div style={{ marginBottom: '0.75rem', padding: '0.75rem', backgroundColor: 'var(--warning-color)', color: 'white', borderRadius: '4px' }}>
                      <strong>Critical Rule:</strong> {beat.critical_rule}
                    </div>
                  )}
                </div>
              )
            })}
          </InfoBox>
        )
      }

      // Special handling for enhanced_pattern (risk mitigation)
      if (key === 'enhanced_pattern') {
        return (
          <InfoBox key={key} title={formatKey(key)} style={{ margin: level === 0 ? '1.5rem 0' : '1rem 0' }}>
            {objKeys.map(stepKey => {
              const step = value[stepKey]
              return (
                <div key={stepKey} style={{ marginBottom: '1.5rem', padding: '1rem', backgroundColor: 'var(--bg-secondary)', borderRadius: '8px' }}>
                  <h4 style={{ marginTop: 0, marginBottom: '0.5rem', color: 'var(--primary-color)' }}>
                    {step.name || formatKey(stepKey)}
                  </h4>
                  {step.example && (
                    <div style={{ marginBottom: '0.75rem', padding: '0.75rem', backgroundColor: 'var(--bg-primary)', borderRadius: '4px' }}>
                      <strong>Example:</strong> <LinkifiedText text={step.example} />
                    </div>
                  )}
                  {step.why_this_works && (
                    <div style={{ marginTop: '0.75rem', fontStyle: 'italic', color: 'var(--text-secondary)' }}>
                      <strong>Why this works:</strong> {step.why_this_works}
                    </div>
                  )}
                </div>
              )
            })}
          </InfoBox>
        )
      }

      // Special handling for question_categories
      if (key === 'question_categories') {
        return (
          <InfoBox key={key} title={formatKey(key)} style={{ margin: level === 0 ? '1.5rem 0' : '1rem 0' }}>
            {objKeys.map(catKey => {
              const category = value[catKey]
              return (
                <div key={catKey} style={{ marginBottom: '1.5rem', padding: '1rem', backgroundColor: 'var(--bg-secondary)', borderRadius: '8px' }}>
                  <h4 style={{ marginTop: 0, marginBottom: '0.75rem', color: 'var(--primary-color)' }}>
                    {category.title || formatKey(catKey)}
                  </h4>
                  {category.questions && Array.isArray(category.questions) && (
                    <div>
                      {category.questions.map((q, qIdx) => {
                        if (typeof q === 'string') {
                          return (
                            <div key={qIdx} style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}>
                              • {q}
                            </div>
                          )
                        } else if (q.level && q.question) {
                          return (
                            <div key={qIdx} style={{ marginBottom: '0.75rem', padding: '0.75rem', backgroundColor: 'var(--bg-primary)', borderRadius: '4px' }}>
                              <strong style={{ color: 'var(--primary-color)' }}>{q.level}:</strong> {q.question}
                            </div>
                          )
                        }
                        return null
                      })}
                    </div>
                  )}
                </div>
              )
            })}
          </InfoBox>
        )
      }

      // Special handling for elements (dadd_formula)
      if (key === 'elements') {
        return (
          <InfoBox key={key} title={formatKey(key)} style={{ margin: level === 0 ? '1.5rem 0' : '1rem 0' }}>
            {objKeys.map(elemKey => {
              const element = value[elemKey]
              return (
                <div key={elemKey} style={{ marginBottom: '1.5rem', padding: '1rem', backgroundColor: 'var(--bg-secondary)', borderRadius: '8px' }}>
                  <h4 style={{ marginTop: 0, marginBottom: '0.5rem', color: 'var(--primary-color)' }}>
                    {element.name || formatKey(elemKey)}
                  </h4>
                  {element.definition && (
                    <p style={{ marginBottom: '0.75rem', fontWeight: '500' }}>{element.definition}</p>
                  )}
                  {element.in_practice && (
                    <div style={{ marginTop: '0.75rem', padding: '0.75rem', backgroundColor: 'var(--bg-primary)', borderRadius: '4px', fontStyle: 'italic' }}>
                      <strong>In Practice:</strong> {element.in_practice}
                    </div>
                  )}
                </div>
              )
            })}
          </InfoBox>
        )
      }

      // Special handling for old_economy/new_economy
      if (key === 'old_economy' || key === 'new_economy') {
        return (
          <InfoBox key={key} title={formatKey(key)} style={{ margin: level === 0 ? '1.5rem 0' : '1rem 0' }}>
            {value.industries && (
              <div style={{ marginBottom: '0.75rem' }}>
                <strong style={{ color: 'var(--primary-color)' }}>Industries:</strong> {value.industries}
              </div>
            )}
            {value.values && (
              <div style={{ marginBottom: '0.75rem' }}>
                <strong style={{ color: 'var(--primary-color)' }}>Values:</strong> {value.values}
              </div>
            )}
            {value.approach && (
              <div style={{ marginTop: '0.75rem', padding: '0.75rem', backgroundColor: 'var(--bg-primary)', borderRadius: '4px' }}>
                <strong>Approach:</strong> {value.approach}
              </div>
            )}
          </InfoBox>
        )
      }

      // Special handling for required_outputs
      if (key === 'required_outputs') {
        return (
          <InfoBox key={key} title={value.title || formatKey(key)} style={{ margin: level === 0 ? '1.5rem 0' : '1rem 0' }}>
            {value.standard && (
              <div style={{ marginBottom: '1rem', padding: '0.75rem', backgroundColor: 'var(--warning-color)', color: 'white', borderRadius: '4px', fontWeight: '500' }}>
                {value.standard}
              </div>
            )}
            {value.artifacts && Array.isArray(value.artifacts) && (
              <div>
                {value.artifacts.map((artifact, idx) => (
                  <div key={idx} style={{ marginBottom: '2rem', padding: '1rem', backgroundColor: 'var(--bg-secondary)', borderRadius: '8px' }}>
                    <h4 style={{ marginTop: 0, marginBottom: '0.5rem', color: 'var(--primary-color)' }}>
                      {artifact.number}. {artifact.name}
                    </h4>
                    {artifact.definition && (
                      <p style={{ marginBottom: '0.75rem', fontWeight: '500' }}>
                        {artifact.definition}
                      </p>
                    )}
                    {artifact.standards && artifact.standards.length > 0 && (
                      <div style={{ marginBottom: '0.75rem' }}>
                        <strong>Standards:</strong>
                        <ul className="bullet-list" style={{ marginTop: '0.5rem' }}>
                          {artifact.standards.map((s, sIdx) => (
                            <li key={sIdx}>{s}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {artifact.must_capture && artifact.must_capture.length > 0 && (
                      <div style={{ marginBottom: '0.75rem' }}>
                        <strong>Must Capture:</strong>
                        <ul className="bullet-list" style={{ marginTop: '0.5rem' }}>
                          {artifact.must_capture.map((m, mIdx) => (
                            <li key={mIdx}>{m}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {artifact.must_surface && artifact.must_surface.length > 0 && (
                      <div style={{ marginBottom: '0.75rem' }}>
                        <strong>Must Surface:</strong>
                        <ul className="bullet-list" style={{ marginTop: '0.5rem' }}>
                          {artifact.must_surface.map((m, mIdx) => (
                            <li key={mIdx}>{m}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {artifact.must_propose && artifact.must_propose.length > 0 && (
                      <div style={{ marginBottom: '0.75rem' }}>
                        <strong>Must Propose:</strong>
                        <ul className="bullet-list" style={{ marginTop: '0.5rem' }}>
                          {artifact.must_propose.map((m, mIdx) => (
                            <li key={mIdx}>{m}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {artifact.must_map && artifact.must_map.length > 0 && (
                      <div style={{ marginBottom: '0.75rem' }}>
                        <strong>Must Map:</strong>
                        <ul className="bullet-list" style={{ marginTop: '0.5rem' }}>
                          {artifact.must_map.map((m, mIdx) => (
                            <li key={mIdx}>{m}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {artifact.example && (
                      <div style={{ marginBottom: '0.75rem', padding: '0.75rem', backgroundColor: 'var(--bg-primary)', borderRadius: '4px' }}>
                        <strong>Example:</strong> <em>{artifact.example}</em>
                      </div>
                    )}
                    {artifact.formula && (
                      <div style={{ marginBottom: '0.75rem', padding: '0.75rem', backgroundColor: 'var(--bg-primary)', borderRadius: '4px', fontFamily: 'monospace' }}>
                        <strong>Formula:</strong> {artifact.formula}
                      </div>
                    )}
                    {artifact.fail_cues && artifact.fail_cues.length > 0 && (
                      <div style={{ marginBottom: '0.75rem' }}>
                        <strong style={{ color: 'var(--warning-color)' }}>Fail Cues:</strong>
                        <ul className="bullet-list" style={{ marginTop: '0.5rem' }}>
                          {artifact.fail_cues.map((f, fIdx) => (
                            <li key={fIdx} style={{ color: 'var(--warning-color)' }}>{f}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </InfoBox>
        )
      }

      // Special handling for examples_in_context
      if (key === 'examples_in_context') {
        return (
          <InfoBox key={key} title={formatKey(key)} style={{ margin: level === 0 ? '1.5rem 0' : '1rem 0' }}>
            {value.bad && (
              <div style={{ marginBottom: '1rem', padding: '0.75rem', backgroundColor: '#fee', borderRadius: '4px', borderLeft: '4px solid #f00' }}>
                <strong style={{ color: '#c00' }}>Bad:</strong> {value.bad}
              </div>
            )}
            {value.good && (
              <div style={{ marginBottom: '1rem', padding: '0.75rem', backgroundColor: '#efe', borderRadius: '4px', borderLeft: '4px solid #0a0' }}>
                <strong style={{ color: '#0a0' }}>Good:</strong> {value.good}
              </div>
            )}
            {value.bad_2 && (
              <div style={{ marginBottom: '1rem', padding: '0.75rem', backgroundColor: '#fee', borderRadius: '4px', borderLeft: '4px solid #f00' }}>
                <strong style={{ color: '#c00' }}>Bad:</strong> {value.bad_2}
              </div>
            )}
            {value.good_2 && (
              <div style={{ marginBottom: '1rem', padding: '0.75rem', backgroundColor: '#efe', borderRadius: '4px', borderLeft: '4px solid #0a0' }}>
                <strong style={{ color: '#0a0' }}>Good:</strong> {value.good_2}
              </div>
            )}
            {value.bad_3 && (
              <div style={{ marginBottom: '1rem', padding: '0.75rem', backgroundColor: '#fee', borderRadius: '4px', borderLeft: '4px solid #f00' }}>
                <strong style={{ color: '#c00' }}>Bad:</strong> {value.bad_3}
              </div>
            )}
            {value.good_3 && (
              <div style={{ marginBottom: '1rem', padding: '0.75rem', backgroundColor: '#efe', borderRadius: '4px', borderLeft: '4px solid #0a0' }}>
                <strong style={{ color: '#0a0' }}>Good:</strong> {value.good_3}
              </div>
            )}
          </InfoBox>
        )
      }

      // Special handling for what_not_to_do
      if (key === 'what_not_to_do') {
        return (
          <InfoBox key={key} title={value.title || formatKey(key)} variant="warning" style={{ margin: level === 0 ? '1.5rem 0' : '1rem 0' }}>
            {value.failures && Array.isArray(value.failures) && (
              <ul className="bullet-list">
                {value.failures.map((failure, idx) => (
                  <li key={idx}>{failure}</li>
                ))}
              </ul>
            )}
          </InfoBox>
        )
      }

      // Special handling for redaction_as_status_signal, strategic_deflection_pattern
      if (key === 'redaction_as_status_signal' || key === 'strategic_deflection_pattern') {
        return (
          <InfoBox key={key} title={formatKey(key)} style={{ margin: level === 0 ? '1.5rem 0' : '1rem 0' }}>
            {value.purpose && (
              <p style={{ marginBottom: '0.75rem', fontWeight: '500' }}>{value.purpose}</p>
            )}
            {value.example && (
              <div style={{ marginBottom: '0.75rem', padding: '0.75rem', backgroundColor: 'var(--bg-primary)', borderRadius: '4px', fontStyle: 'italic' }}>
                <strong>Example:</strong> {value.example}
              </div>
            )}
            {value.when_asked_about_tactics && (
              <div style={{ marginBottom: '0.75rem', padding: '0.75rem', backgroundColor: 'var(--bg-secondary)', borderRadius: '4px' }}>
                <strong>When Asked About Tactics:</strong> {value.when_asked_about_tactics}
              </div>
            )}
            {value.why_this_works && Array.isArray(value.why_this_works) && (
              <div style={{ marginTop: '0.75rem' }}>
                <strong>Why This Works:</strong>
                <ul className="bullet-list" style={{ marginTop: '0.5rem' }}>
                  {value.why_this_works.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </InfoBox>
        )
      }

      // Check if it's a simple object with string values
      const allStrings = objKeys.every(k => typeof value[k] === 'string')
      if (allStrings) {
        return (
          <InfoBox key={key} title={formatKey(key)} style={{ margin: level === 0 ? '1.5rem 0' : '1rem 0' }}>
            {objKeys.map(objKey => (
              <div key={objKey} style={{ marginBottom: '0.75rem' }}>
                <strong style={{ color: 'var(--primary-color)' }}>
                  {formatKey(objKey)}:
                </strong>{' '}
                <LinkifiedText text={value[objKey]} />
              </div>
            ))}
          </InfoBox>
        )
      }

      // Complex nested object - render recursively
      return (
        <InfoBox key={key} title={formatKey(key)} style={{ margin: level === 0 ? '1.5rem 0' : '1rem 0' }}>
          {objKeys.map(objKey => {
            if (skipProps.has(objKey)) return null
            return renderValue(objKey, value[objKey], level + 1)
          })}
        </InfoBox>
      )
    }

    return null
  }

  // Get all properties to render
  const allProps = Object.keys(refData).filter(key => !skipProps.has(key))

  // Special top-level string properties that should be rendered prominently
  const topLevelStringProps = [
    'what_discovery_is', 'formula', 'why_it_matters', 'the_test', 'the_principle', 
    'the_shift', 'critical_principle', 'when_to_deploy', 'why_this_matters', 'philosophy'
  ]

  return (
    <>
      <div className="content-header">
        <span className="content-category reference">Reference Library</span>
        <h2 className="content-title">{refData.title}</h2>
        {refData.purpose && <p className="content-purpose">{refData.purpose}</p>}
        {refData.subtitle && <p className="content-purpose">{refData.subtitle}</p>}
        {/* Render top-level string properties in header area */}
        {topLevelStringProps.map(prop => {
          if (refData[prop] && typeof refData[prop] === 'string') {
            return (
              <InfoBox key={prop} title={formatKey(prop)} style={{ margin: '1rem 0' }}>
                <LinkifiedText text={refData[prop]} />
              </InfoBox>
            )
          }
          return null
        })}
      </div>
      <div className="content-body">
        {/* Render all other properties */}
        {allProps
          .filter(key => !topLevelStringProps.includes(key))
          .map(key => {
            const value = refData[key]
            return renderValue(key, value)
          })}
      </div>
    </>
  )
}

export default ReferenceContent

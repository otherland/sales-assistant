import React from 'react'
import { useContent } from '../../context/ContentContext'
import InfoBox from './InfoBox'
import ScriptBlock from './ScriptBlock'
import LinkifiedText from './LinkifiedText'

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
        <p className="content-purpose">{handlerData.trigger}</p>
      </div>
      <div className="content-body">
        {handlerData.quick_response && (
          <InfoBox title="⚡ Quick Response">
            <LinkifiedText text={handlerData.quick_response} />
          </InfoBox>
        )}

        {handlerData.full_script && (
          <InfoBox title="📋 Full Script">
            <ScriptBlock script={handlerData.full_script} />
          </InfoBox>
        )}

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


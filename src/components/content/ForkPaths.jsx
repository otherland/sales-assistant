import React, { useState } from 'react'
import { useContent } from '../../context/ContentContext'
import { useSalesData } from '../../context/SalesDataContext'
import InfoBox from './InfoBox'
import ScriptBlock from './ScriptBlock'
import LinkifiedText from './LinkifiedText'
import CollapsibleSection from './CollapsibleSection'

function ForkPaths({ itemId, paths, onPathSelect }) {
  const { loadContent } = useContent()
  const { salesData } = useSalesData()
  const [selectedPath, setSelectedPath] = useState(null)

  const handlePathSelect = (path) => {
    setSelectedPath({ itemId, pathId: path.id, path })
    if (onPathSelect) {
      onPathSelect(path.id)
    }
  }

  if (!paths || paths.length === 0) return null

  const item = salesData?.sequential_flow?.call_one?.find(i => i.id === itemId)
  const path = selectedPath?.path

  return (
    <>
      <div className="fork-choice">
        <h3 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>
          Choose Your Economy:
        </h3>
        <div className="fork-buttons">
          {paths.map((pathOption) => (
            <button
              key={pathOption.id}
              className="fork-btn"
              onClick={() => handlePathSelect(pathOption)}
            >
              <div className="fork-btn-title">{pathOption.economy}</div>
              <div className="fork-btn-desc">{pathOption.context}</div>
            </button>
          ))}
        </div>
      </div>

      {path && (
        <div id="economy-script-display">
          <InfoBox title={path.economy} style={{ marginTop: '2rem' }}>
            <p><em>{path.context}</em></p>
            {path.script && <ScriptBlock script={path.script} />}
          </InfoBox>

          {path.proof_narrative && (
            <ProofNarrative proof={path.proof_narrative} />
          )}

          {path.pivot && (
            <InfoBox title="Pivot to Discovery" variant="advisor-note" style={{ marginTop: '2rem' }}>
              <ScriptBlock script={path.pivot} />
            </InfoBox>
          )}
        </div>
      )}
    </>
  )
}

function ProofNarrative({ proof }) {
  const beatOrder = [
    { key: 'beat_1_engagement_context', label: 'Beat 1 — Engagement Context' },
    { key: 'beat_2_diligence_extraction', label: 'Beat 2 — Diligence & Extraction' },
    { key: 'beat_3_brand_integrity_constraint', label: 'Beat 3 — Brand-Integrity Constraint' },
    { key: 'beat_4_audience_presence_findings', label: 'Beat 4 — Audience-Presence Findings' },
    { key: 'beat_5_private_infrastructure', label: 'Beat 5 — Private Infrastructure' },
    { key: 'beat_6_hardest_first_proof_tieback', label: 'Beat 6 — Hardest-First Proof + Tie-Back' }
  ]

  return (
    <div style={{
      margin: '2.5rem 0',
      padding: '2rem',
      background: 'var(--bg-secondary)',
      border: '2px solid var(--primary-color)',
      borderRadius: '12px',
      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
        <span style={{ fontSize: '1.75rem' }}>🎭</span>
        <h3 style={{ color: 'var(--primary-color)', fontSize: '1.3rem', fontWeight: 700, margin: 0 }}>
          {proof.title}
        </h3>
      </div>
      {proof.introduction && (
        <ScriptBlock script={proof.introduction} style={{ marginBottom: '2rem' }} />
      )}

      {proof.six_beats && (
        <div style={{ marginTop: '2rem' }}>
          <h4 style={{
            color: 'var(--text-primary)',
            fontSize: '1.1rem',
            fontWeight: 700,
            marginBottom: '1.5rem',
            textAlign: 'center'
          }}>
            The Six Beats (Speakable, in order)
          </h4>
          {beatOrder.map((beat, idx) => {
            if (!proof.six_beats[beat.key]) return null
            return (
              <CollapsibleSection
                key={beat.key}
                title={beat.label}
                defaultCollapsed={true}
                variant="default"
                className="six-beat-section"
              >
                <ScriptBlock script={proof.six_beats[beat.key]} />
              </CollapsibleSection>
            )
          })}
        </div>
      )}

      {proof.tie_back_line && (
        <div style={{
          marginTop: '2rem',
          padding: '1.25rem',
          background: 'var(--bg-primary)',
          borderLeft: '4px solid var(--accent-green)',
          borderRadius: '6px'
        }}>
          <h5 style={{
            color: 'var(--accent-green)',
            fontSize: '1rem',
            fontWeight: 700,
            marginBottom: '0.75rem'
          }}>
            Tie-Back Line
          </h5>
          <ScriptBlock script={proof.tie_back_line} />
        </div>
      )}
    </div>
  )
}

export default ForkPaths


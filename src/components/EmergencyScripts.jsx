import React, { useState } from 'react'

const PROTOCOLS = [
  {
    id: 'A',
    title: 'Prospect Goes Silent After Your Question',
    steps: [
      'Count to 3 in your head (don\'t panic)',
      'Rephrase the question in simpler form'
    ],
    script: 'Sorry, let me ask that differently — [simpler version]',
    example: {
      original: 'What\'s your current working definition of what makes someone a qualified opportunity for your team in terms of budget alignment, decision-making authority, and timeline?',
      simpler: 'What makes someone a qualified opportunity in your world?'
    },
    guidance: 'Simplicity is strength, not weakness. Break complex questions into single, focused ones.'
  },
  {
    id: 'B',
    title: 'You Freeze and Don\'t Know What to Ask Next',
    steps: [
      'Buy time by summarizing',
      'While they confirm, scan your CARPET tracker to see what you\'re missing'
    ],
    script: 'Let me make sure I captured that — [summarize their answer]. Did I get that right?',
    example: {
      text: 'Let me make sure I\'ve got this right — you mentioned that deals typically take 2-4 weeks from first call to close, and most stall after the proposal goes out. Did I capture that correctly?',
      note: '(This buys you 10 seconds to think of next question)'
    },
    guidance: 'This buys you 10 seconds to scan for next question. Check your CARPET tracker for missing variables.'
  },
  {
    id: 'C',
    title: 'You\'re Genuinely Lost in the Flow',
    steps: [
      'Loop back to something from 2 questions ago',
      'Ask a clarifying question about that earlier topic'
    ],
    script: 'Before we move on, help me understand [EARLIER TOPIC] a bit more — [CLARIFYING QUESTION]',
    example: {
      text: 'Before we move on, help me understand your team structure a bit more — you mentioned Jenna handles most of the initial calls. Does she also handle the technical evaluations, or does someone else take over at that stage?',
      note: '(This gets you back on track without admitting confusion)'
    },
    guidance: 'This reestablishes position without admitting confusion. Loop back to a previous topic to regain footing.'
  },
  {
    id: 'D',
    title: 'They\'re Giving You Too Much Information',
    steps: [
      'Acknowledge what they said',
      'Narrow the focus immediately'
    ],
    script: 'That\'s helpful context. Just to narrow the focus — [SPECIFIC THING YOU NEED]',
    example: {
      text: '(They ramble about 5 different channels)\n"That\'s helpful context. Just to narrow the focus — which of those channels is producing the most predictable conversions right now?"',
      note: ''
    },
    guidance: 'Redirect to strongest channel or clearest data point. Don\'t let them overwhelm you with information.'
  },
  {
    id: 'E',
    title: 'You Asked Too Many Questions at Once',
    steps: [
      'Acknowledge it immediately',
      'Narrow to just one question'
    ],
    script: 'Sorry, that was three questions in one. Let me focus — [ASK JUST ONE]',
    example: {
      text: 'Sorry, that was three questions in one. Let me focus — who typically takes that first call when interest comes in?',
      note: ''
    },
    guidance: 'Self-correction shows professionalism. Immediately narrow to one question.'
  },
  {
    id: 'F',
    title: 'Conversation Isn\'t Moving Forward / Prospect Won\'t Engage',
    steps: [
      'Acknowledge the impasse directly',
      'Offer to defer with materials for their review',
      'Give them control over next steps'
    ],
    script: 'Let me be direct with you. It sounds like no amount of conversation today will move this forward. I completely understand that. Here\'s what makes more sense: I\'ll send you our case studies, client contacts where possible, and a draft proposal. You do your diligence on your timeline. If it checks out and you want to reconnect, I\'m happy to. If not, no hard feelings. Does that sound more reasonable?',
    example: {
      text: 'Let me be direct with you. It sounds like no amount of conversation today will move this forward. I completely understand that. Here\'s what makes more sense: I\'ll send you our case studies, client contacts where possible, and a draft proposal. You do your diligence on your timeline. If it checks out and you want to reconnect, I\'m happy to. If not, no hard feelings. Does that sound more reasonable?',
      note: '(Use when prospect is resistant, guarded, or conversation has stalled. Respects their position while leaving door open.)'
    },
    guidance: 'Sometimes the best move is to step back and let them verify credibility on their own timeline. This respects their position while maintaining professionalism and leaving the door open for future engagement.'
  }
]

function EmergencyScripts({ expanded, isMobile, onAction }) {
  const [isOpen, setIsOpen] = useState(false)
  const [expandedProtocol, setExpandedProtocol] = useState(null)

  const toggleProtocol = (protocolId) => {
    setExpandedProtocol(expandedProtocol === protocolId ? null : protocolId)
  }

  return (
    <>
      {/* Floating Button */}
      <button
        className={`emergency-scripts-fab fab-button ${expanded && isMobile ? 'fab-expanded' : ''}`}
        onClick={(e) => {
          e.stopPropagation()
          setIsOpen(!isOpen)
          if (onAction) onAction()
        }}
        aria-label="Emergency Scripts"
        style={expanded && isMobile ? { '--fab-index': 4 } : {}}
      >
        🆘 Emergency
      </button>

      {/* Modal/Overlay */}
      {isOpen && (
        <div className="emergency-scripts-overlay" onClick={() => setIsOpen(false)}>
          <div className="emergency-scripts-modal" onClick={(e) => e.stopPropagation()}>
            <div className="emergency-scripts-header">
              <h2>🆘 Emergency Recovery Scripts</h2>
              <p className="emergency-scripts-subtitle">Use these when you freeze or get lost</p>
              <button 
                className="emergency-scripts-close"
                onClick={() => setIsOpen(false)}
                aria-label="Close"
              >
                ×
              </button>
            </div>

            <div className="emergency-scripts-content">
              {PROTOCOLS.map((protocol) => (
                <div 
                  key={protocol.id} 
                  className={`protocol-card ${expandedProtocol === protocol.id ? 'expanded' : ''}`}
                >
                  <div 
                    className="protocol-header"
                    onClick={() => toggleProtocol(protocol.id)}
                  >
                    <div className="protocol-title">
                      <span className="protocol-id">Protocol {protocol.id}:</span>
                      <span className="protocol-name">{protocol.title}</span>
                    </div>
                    <span className="protocol-toggle">
                      {expandedProtocol === protocol.id ? '▲' : '▼'}
                    </span>
                  </div>

                  {expandedProtocol === protocol.id && (
                    <div className="protocol-content">
                      <div className="protocol-steps">
                        {protocol.steps.map((step, index) => (
                          <div key={index} className="protocol-step">
                            <span className="step-number">{index + 1}.</span>
                            <span className="step-text">{step}</span>
                          </div>
                        ))}
                      </div>

                      <div className="protocol-script-box">
                        <div className="script-label">Script:</div>
                        <div className="script-text">{protocol.script}</div>
                      </div>

                      {protocol.example && (
                        <div className="protocol-example">
                          <div className="example-label">Example:</div>
                          {protocol.example.original && (
                            <div className="example-original">
                              <strong>Original:</strong> {protocol.example.original}
                            </div>
                          )}
                          {protocol.example.simpler && (
                            <div className="example-simpler">
                              <strong>Simpler:</strong> {protocol.example.simpler}
                            </div>
                          )}
                          {protocol.example.text && (
                            <div className="example-text">
                              {protocol.example.text.split('\n').map((line, i) => (
                                <div key={i}>{line}</div>
                              ))}
                            </div>
                          )}
                          {protocol.example.note && (
                            <div className="example-note">
                              <em>{protocol.example.note}</em>
                            </div>
                          )}
                        </div>
                      )}

                      <div className="protocol-guidance">
                        <strong>💡 Guidance:</strong> {protocol.guidance}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

    </>
  )
}

export default EmergencyScripts


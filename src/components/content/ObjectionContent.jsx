import React from 'react'
import HandlerContent from './HandlerContent'

function ObjectionContent({ objection, objectionNum }) {
  // Objection content uses the same structure as handler content
  // Just wrap it with objection-specific header
  return (
    <>
      <div className="content-header">
        <span className="content-category">Objection #{objectionNum}</span>
        <h2 className="content-title">{objection.title || `Objection ${objectionNum}`}</h2>
      </div>
      <HandlerContent handlerData={objection} handlerId={`objection_${objectionNum}`} />
    </>
  )
}

export default ObjectionContent


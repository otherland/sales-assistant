import React from 'react'
import InfoBox from './InfoBox'
import ScriptBlock from './ScriptBlock'
import LinkifiedText from './LinkifiedText'

function ReferenceContent({ refData, refId }) {
  if (!refData) return null

  // This is a simplified version - reference content has many different structures
  // based on the refId. We'll expand this as needed.
  return (
    <>
      <div className="content-header">
        <span className="content-category reference">Reference Library</span>
        <h2 className="content-title">{refData.title}</h2>
        {refData.purpose && <p className="content-purpose">{refData.purpose}</p>}
        {refData.subtitle && <p className="content-purpose">{refData.subtitle}</p>}
      </div>
      <div className="content-body">
        {/* Basic content rendering - will need to expand based on refId */}
        {refData.description && (
          <InfoBox>
            <LinkifiedText text={refData.description} />
          </InfoBox>
        )}

        {refData.content && (
          <InfoBox>
            <LinkifiedText text={refData.content} />
          </InfoBox>
        )}

        {/* Add more specific rendering based on refId as needed */}
        {/* This is a placeholder - the actual structure varies greatly by reference type */}
      </div>
    </>
  )
}

export default ReferenceContent


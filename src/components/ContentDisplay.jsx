import React from 'react'
import { useContent } from '../context/ContentContext'
import { formatScript, linkifyReferences } from '../utils/textFormatting'
import SequentialContent from './content/SequentialContent'
import HandlerContent from './content/HandlerContent'
import ReferenceContent from './content/ReferenceContent'
import ObjectionContent from './content/ObjectionContent'

function ContentDisplay() {
  const { contentType, currentContent, contentId, loadContent } = useContent()

  if (!contentType || !currentContent) {
    const handleWelcomeClick = (e) => {
      e.preventDefault()
      loadContent('opening_frame')
    }
    
    return (
      <div className="welcome-screen">
        <h2>Revenue Advisory Sales Assistant</h2>
        <p>Navigate through the Call One Discovery process. Use the left sidebar for sequential flow, right sidebar for objection handlers.</p>
        <a href="#" className="welcome-cta" onClick={handleWelcomeClick}>
          Start Call One →
        </a>
      </div>
    )
  }

  switch (contentType) {
    case 'content':
      return <SequentialContent item={currentContent} itemId={contentId} />
    case 'handler':
      return <HandlerContent handlerData={currentContent} handlerId={contentId} />
    case 'reference':
      return <ReferenceContent refData={currentContent} refId={contentId} />
    case 'objection':
      return <ObjectionContent objection={currentContent} objectionNum={parseInt(contentId)} />
    default:
      return null
  }
}

export default ContentDisplay


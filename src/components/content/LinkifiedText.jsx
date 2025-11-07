import React, { useEffect, useRef } from 'react'
import { linkifyReferences } from '../../utils/textFormatting'
import { useContent } from '../../context/ContentContext'

function LinkifiedText({ text, as = 'p', style = {} }) {
  const { loadContent, loadReferenceContent, loadObjection } = useContent()
  const containerRef = useRef(null)
  
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleClick = (e) => {
      const link = e.target.closest('.content-link')
      if (!link) return

      e.preventDefault()
      const action = link.getAttribute('data-action')
      const id = link.getAttribute('data-id')

      if (!action || !id) return

      switch (action) {
        case 'loadContent':
          loadContent(id)
          break
        case 'loadReferenceContent':
          loadReferenceContent(id)
          break
        case 'loadObjection':
          const objectionNum = parseInt(id, 10)
          if (!isNaN(objectionNum)) {
            loadObjection(objectionNum)
          }
          break
        default:
          console.warn(`Unknown action: ${action}`)
      }
    }

    container.addEventListener('click', handleClick)
    return () => container.removeEventListener('click', handleClick)
  }, [loadContent, loadReferenceContent, loadObjection])

  if (!text) return null
  
  const Component = as
  return (
    <Component 
      ref={containerRef}
      style={style}
      dangerouslySetInnerHTML={{ __html: linkifyReferences(text) }}
    />
  )
}

export default LinkifiedText


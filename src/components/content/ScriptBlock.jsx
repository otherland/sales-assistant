import React from 'react'
import { formatScript } from '../../utils/textFormatting'

function ScriptBlock({ script, style = {} }) {
  if (!script) return null
  
  return (
    <div 
      className="script-block" 
      style={style}
      dangerouslySetInnerHTML={{ __html: formatScript(script) }}
    />
  )
}

export default ScriptBlock


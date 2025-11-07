import React from 'react'

function InfoBox({ title, children, variant = 'default', style = {} }) {
  const className = `info-box ${variant === 'warning' ? 'warning' : ''} ${variant === 'advisor-note' ? 'advisor-note' : ''}`
  
  return (
    <div className={className} style={style}>
      {title && <div className="info-box-title">{title}</div>}
      {children}
    </div>
  )
}

export default InfoBox


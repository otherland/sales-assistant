import React from 'react'

function SettingsFAB({ onClick }) {
  return (
    <button 
      className="settings-fab" 
      id="settings-fab" 
      title="Settings"
      onClick={onClick}
    >
      ⚙️
    </button>
  )
}

export default SettingsFAB


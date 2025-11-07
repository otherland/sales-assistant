import React, { useState, useEffect } from 'react'
import { resetAllQuestions } from '../utils/questionState'

function SettingsPopup({ isOpen, onClose, layoutReversed, onLayoutReversedChange }) {
  const [fontFamily, setFontFamily] = useState('Merriweather')
  const [fontSize, setFontSize] = useState(16)
  const [colorTheme, setColorTheme] = useState('orange-light')

  useEffect(() => {
    // Load saved preferences from localStorage
    const savedFont = localStorage.getItem('script-font-family') || 'Merriweather'
    const savedSize = parseInt(localStorage.getItem('script-font-size') || '16', 10)
    const savedTheme = localStorage.getItem('color-theme') || 'orange-light'

    setFontFamily(savedFont)
    setFontSize(savedSize)
    setColorTheme(savedTheme)
  }, [])

  useEffect(() => {
    // Apply font family
    document.documentElement.style.setProperty('--script-font-family', fontFamily)
    localStorage.setItem('script-font-family', fontFamily)
  }, [fontFamily])

  useEffect(() => {
    // Apply font size
    document.documentElement.style.setProperty('--script-font-size', `${fontSize}px`)
    localStorage.setItem('script-font-size', fontSize.toString())
  }, [fontSize])

  useEffect(() => {
    // Apply color theme
    if (typeof window.setTheme === 'function') {
      window.setTheme(colorTheme)
    }
    localStorage.setItem('color-theme', colorTheme)
  }, [colorTheme])


  const handleFontSizeChange = (delta) => {
    const newSize = Math.max(12, Math.min(24, fontSize + delta))
    setFontSize(newSize)
  }

  const handleThemeChange = (e) => {
    setColorTheme(e.target.value)
  }

  const handleResetQuestions = () => {
    resetAllQuestions()
  }

  if (!isOpen) return null

  return (
    <div className={`settings-popup ${isOpen ? 'show' : ''}`} id="settings-popup">
      <div className="settings-content">
        <div className="settings-controls">
          <div className="control-group control-group-color-theme">
            <label className="control-label">Color Scheme</label>
            <select 
              id="theme-select" 
              className="theme-select"
              value={colorTheme}
              onChange={handleThemeChange}
            >
              <option value="ocean-light">🌊 Ocean Light</option>
              <option value="ocean-dark">🌊 Ocean Dark</option>
              <option value="forest-light">🌲 Forest Light</option>
              <option value="forest-dark">🌲 Forest Dark</option>
              <option value="sunset-light">🌅 Sunset Light</option>
              <option value="sunset-dark">🌅 Sunset Dark</option>
              <option value="lavender-light">💜 Lavender Light</option>
              <option value="lavender-dark">💜 Lavender Dark</option>
              <option value="neutral-light">⚪ Neutral Light</option>
              <option value="neutral-dark">⚫ Neutral Dark</option>
              <option value="rose-light">🌸 Rose Light</option>
              <option value="rose-dark">🌸 Rose Dark</option>
              <option value="sage-light">🌿 Sage Light</option>
              <option value="sage-dark">🌿 Sage Dark</option>
              <option value="sky-light">☁️ Sky Light</option>
              <option value="sky-dark">☁️ Sky Dark</option>
              <option value="orange-light">🧡 Orange Light</option>
              <option value="orange-dark">🧡 Orange Dark</option>
              <option value="presentation-light">💼 Presentation Light</option>
              <option value="presentation-dark">💼 Presentation Dark</option>
            </select>
          </div>

          <div className="control-group control-group-font">
            <label className="control-label">Font</label>
            <select 
              id="font-select" 
              className="font-select"
              value={fontFamily}
              onChange={(e) => setFontFamily(e.target.value)}
            >
              <option value="Merriweather">Merriweather</option>
              <option value="Inter">Inter</option>
              <option value="Open Sans">Open Sans</option>
              <option value="Roboto">Roboto</option>
              <option value="Lato">Lato</option>
              <option value="Spectral">Spectral</option>
              <option value="Atkinson Hyperlegible">Atkinson Hyperlegible</option>
            </select>
          </div>

          <div className="control-group control-group-size">
            <label className="control-label">Font Size</label>
            <div className="font-size-controls">
              <button 
                className="control-btn" 
                id="size-decrease" 
                title="Decrease Font Size"
                onClick={() => handleFontSizeChange(-1)}
              >
                −
              </button>
              <span className="font-size-display" id="font-size-value">
                {fontSize}px
              </span>
              <button 
                className="control-btn" 
                id="size-increase" 
                title="Increase Font Size"
                onClick={() => handleFontSizeChange(1)}
              >
                +
              </button>
            </div>
          </div>

          <div className="control-group control-group-reset">
            <label className="control-label">Question Progress</label>
            <button 
              className="control-btn reset-btn" 
              id="reset-questions" 
              title="Reset All Question Checkmarks"
              onClick={handleResetQuestions}
            >
              🔄 Reset Questions
            </button>
          </div>

          <div className="control-group control-group-layout">
            <label className="control-label">Layout</label>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={layoutReversed}
                onChange={(e) => onLayoutReversedChange(e.target.checked)}
              />
              <span className="toggle-label">Reverse Sidebars</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SettingsPopup


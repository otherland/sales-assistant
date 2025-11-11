import React, { useState, useEffect, useCallback } from 'react'
import { resetAllQuestions } from '../utils/questionState'
import { resetAllAnalytics } from '../utils/pageAnalytics'
import { applyThemeObject } from '../utils/themes'
import { hexToHsl } from '../utils/colorUtils'
import ColorPicker from './ColorPicker'

// Helper function to get initial state from localStorage
function getInitialState() {
  if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
    return {
      fontFamily: 'Merriweather',
      fontSize: 16,
      colorTheme: 'orange-light',
      useColorPicker: false,
      customHue: 30,
      customSaturation: 70,
      isDarkMode: false
    }
  }

  const savedUsePicker = localStorage.getItem('use-color-picker') === 'true'
  const savedHue = parseInt(localStorage.getItem('custom-hue') || '30', 10)
  const savedSaturation = parseInt(localStorage.getItem('custom-saturation') || '70', 10)

  return {
    fontFamily: localStorage.getItem('script-font-family') || 'Merriweather',
    fontSize: parseInt(localStorage.getItem('script-font-size') || '16', 10),
    contentPadding: parseInt(localStorage.getItem('content-padding') || '48', 10), // Default 3rem = 48px
    colorTheme: localStorage.getItem('color-theme') || 'orange-light',
    useColorPicker: savedUsePicker,
    customHue: savedHue,
    customSaturation: savedSaturation,
    isDarkMode: localStorage.getItem('dark-mode') === 'true'
  }
}

function SettingsPopup({ isOpen, onClose, layoutReversed, onLayoutReversedChange }) {
  const initialState = getInitialState()
  const [fontFamily, setFontFamily] = useState(initialState.fontFamily)
  const [fontSize, setFontSize] = useState(initialState.fontSize)
  const [contentPadding, setContentPadding] = useState(initialState.contentPadding)
  const [colorTheme, setColorTheme] = useState(initialState.colorTheme)
  const [useColorPicker, setUseColorPicker] = useState(initialState.useColorPicker)
  const [customHue, setCustomHue] = useState(initialState.customHue)
  const [customSaturation, setCustomSaturation] = useState(initialState.customSaturation)
  const [isDarkMode, setIsDarkMode] = useState(initialState.isDarkMode)

  useEffect(() => {
    // Load and apply saved preferences from localStorage
    const savedCustomTheme = localStorage.getItem('custom-theme')
    const savedUsePicker = localStorage.getItem('use-color-picker') === 'true'

    // Apply initial padding
    const savedPadding = parseInt(localStorage.getItem('content-padding') || '48', 10)
    document.documentElement.style.setProperty('--content-padding', `${savedPadding}px`)

    // If custom theme exists and we're using color picker, load it
    if (savedCustomTheme && savedUsePicker) {
      try {
        const customTheme = JSON.parse(savedCustomTheme)
        const savedDarkMode = localStorage.getItem('dark-mode') === 'true'
        applyThemeObject(customTheme, savedDarkMode)
      } catch (e) {
        console.error('Failed to load custom theme:', e)
        // Fallback: regenerate theme from saved hue/saturation
        if (savedUsePicker) {
          const savedHue = parseInt(localStorage.getItem('custom-hue') || '30', 10)
          const savedSaturation = parseInt(localStorage.getItem('custom-saturation') || '70', 10)
          const savedDarkMode = localStorage.getItem('dark-mode') === 'true'
          import('../utils/colorUtils').then(({ generateAccessibleTheme }) => {
            const newTheme = generateAccessibleTheme(savedHue, savedSaturation, savedDarkMode)
            applyThemeObject(newTheme, savedDarkMode)
            localStorage.setItem('custom-theme', JSON.stringify(newTheme))
          })
        }
      }
    } else if (!savedUsePicker && typeof window.setTheme === 'function') {
      // Load preset theme if not using custom
      const savedTheme = localStorage.getItem('color-theme') || 'orange-light'
      window.setTheme(savedTheme)
    }
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
    // Apply content padding
    document.documentElement.style.setProperty('--content-padding', `${contentPadding}px`)
    localStorage.setItem('content-padding', contentPadding.toString())
  }, [contentPadding])

  useEffect(() => {
    // Apply color theme (only if not using color picker)
    if (!useColorPicker && typeof window.setTheme === 'function') {
      window.setTheme(colorTheme)
      localStorage.setItem('color-theme', colorTheme)
      localStorage.removeItem('custom-theme')
    }
  }, [colorTheme, useColorPicker])

  const handleFontSizeChange = (delta) => {
    const newSize = Math.max(10, Math.min(36, fontSize + delta))
    setFontSize(newSize)
  }

  const handlePaddingChange = (delta) => {
    const newPadding = Math.max(16, Math.min(400, contentPadding + delta))
    setContentPadding(newPadding)
  }

  const handleThemeChange = (e) => {
    const newTheme = e.target.value
    setColorTheme(newTheme)
    setUseColorPicker(false)
    localStorage.setItem('use-color-picker', 'false')
    localStorage.setItem('color-theme', newTheme)
    // Clear custom theme settings when switching to preset
    localStorage.removeItem('custom-theme')
    localStorage.removeItem('custom-hue')
    localStorage.removeItem('custom-saturation')
  }

  const handleColorPickerChange = useCallback((theme, { hue, saturation }) => {
    applyThemeObject(theme, isDarkMode)
    setCustomHue(hue)
    setCustomSaturation(saturation)
    // Persist all color settings
    localStorage.setItem('custom-theme', JSON.stringify(theme))
    localStorage.setItem('use-color-picker', 'true')
    localStorage.setItem('custom-hue', hue.toString())
    localStorage.setItem('custom-saturation', saturation.toString())
    localStorage.setItem('dark-mode', isDarkMode.toString())
  }, [isDarkMode])

  const handleDarkModeToggle = (e) => {
    const newDarkMode = e.target.checked
    setIsDarkMode(newDarkMode)
    localStorage.setItem('dark-mode', newDarkMode.toString())
    
    // Regenerate theme with new dark mode setting
    if (useColorPicker) {
      import('../utils/colorUtils').then(({ generateAccessibleTheme }) => {
        const newTheme = generateAccessibleTheme(customHue, customSaturation, newDarkMode)
        applyThemeObject(newTheme, newDarkMode)
        // Persist all settings
        localStorage.setItem('custom-theme', JSON.stringify(newTheme))
        localStorage.setItem('custom-hue', customHue.toString())
        localStorage.setItem('custom-saturation', customSaturation.toString())
      })
    }
  }

  const handleResetQuestions = () => {
    resetAllQuestions()
  }

  const handleResetAnalytics = () => {
    if (window.confirm('Are you sure you want to reset all page analytics? This will clear all time tracking and progress data.')) {
      resetAllAnalytics()
      // Dispatch event to notify components that analytics were reset
      window.dispatchEvent(new CustomEvent('analyticsReset'))
    }
  }

  if (!isOpen) return null

  return (
    <div className={`settings-popup ${isOpen ? 'show' : ''}`} id="settings-popup">
      <div className="settings-content">
        <div className="settings-controls">
          <div className="control-group control-group-color-mode">
            <label className="control-label">Color Mode</label>
            <div className="color-mode-toggle">
              <button
                className={`color-mode-btn ${!useColorPicker ? 'active' : ''}`}
                onClick={() => {
                  setUseColorPicker(false)
                  localStorage.setItem('use-color-picker', 'false')
                  localStorage.setItem('color-theme', colorTheme)
                  if (typeof window.setTheme === 'function') {
                    window.setTheme(colorTheme)
                  }
                }}
              >
                Presets
              </button>
              <button
                className={`color-mode-btn ${useColorPicker ? 'active' : ''}`}
                onClick={() => {
                  setUseColorPicker(true)
                  localStorage.setItem('use-color-picker', 'true')
                  // Regenerate and apply custom theme when switching to custom mode
                  import('../utils/colorUtils').then(({ generateAccessibleTheme }) => {
                    const newTheme = generateAccessibleTheme(customHue, customSaturation, isDarkMode)
                    applyThemeObject(newTheme, isDarkMode)
                    // Persist all settings
                    localStorage.setItem('custom-theme', JSON.stringify(newTheme))
                    localStorage.setItem('custom-hue', customHue.toString())
                    localStorage.setItem('custom-saturation', customSaturation.toString())
                    localStorage.setItem('dark-mode', isDarkMode.toString())
                  })
                }}
              >
                Custom
              </button>
            </div>
          </div>

          {useColorPicker ? (
            <div className="control-group control-group-color-picker">
              <ColorPicker
                onColorChange={handleColorPickerChange}
                initialHue={customHue}
                initialSaturation={customSaturation}
                isDarkMode={isDarkMode}
              />
              <div className="control-group control-group-dark-mode">
                <label className="toggle-switch">
                  <input
                    type="checkbox"
                    checked={isDarkMode}
                    onChange={handleDarkModeToggle}
                  />
                  <span className="toggle-label">Dark Mode</span>
                </label>
              </div>
            </div>
          ) : (
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
          )}

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

          <div className="control-group control-group-size">
            <label className="control-label">Content Padding</label>
            <div className="font-size-controls">
              <button 
                className="control-btn" 
                id="padding-decrease" 
                title="Decrease Padding"
                onClick={() => handlePaddingChange(-8)}
              >
                −
              </button>
              <span className="font-size-display" id="padding-value">
                {contentPadding}px
              </span>
              <button 
                className="control-btn" 
                id="padding-increase" 
                title="Increase Padding"
                onClick={() => handlePaddingChange(8)}
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
              Reset
            </button>
          </div>

          <div className="control-group control-group-reset">
            <label className="control-label">Page Analytics</label>
            <button 
              className="control-btn reset-btn" 
              id="reset-analytics" 
              title="Reset All Page Analytics (Time Tracking & Progress)"
              onClick={handleResetAnalytics}
            >
              Reset All Progress
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


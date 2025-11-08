import React, { useState, useRef, useEffect, useCallback } from 'react';
import { hslToRgb, rgbToHex, generateAccessibleTheme } from '../utils/colorUtils';

function ColorPicker({ onColorChange, initialHue = 30, initialSaturation = 70, isDarkMode = false }) {
  const [hue, setHue] = useState(initialHue);
  const [saturation, setSaturation] = useState(initialSaturation);
  const [isDragging, setIsDragging] = useState(false);
  const padRef = useRef(null);

  // Sync state when initial props change (e.g., loading from localStorage)
  useEffect(() => {
    setHue(initialHue);
    setSaturation(initialSaturation);
  }, [initialHue, initialSaturation]);

  // Update parent when color changes
  useEffect(() => {
    const theme = generateAccessibleTheme(hue, saturation, isDarkMode);
    onColorChange(theme, { hue, saturation });
  }, [hue, saturation, isDarkMode, onColorChange]);

  // Handle mouse/touch events on the color pad
  const handlePadInteraction = useCallback((clientX, clientY) => {
    if (!padRef.current) return;

    const rect = padRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    const y = Math.max(0, Math.min(1, (clientY - rect.top) / rect.height));

    // X-axis controls hue (0-360)
    const newHue = Math.round(x * 360);
    // Y-axis controls saturation (0-100)
    const newSaturation = Math.round(100 - (y * 100));

    setHue(newHue);
    setSaturation(newSaturation);
  }, []);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    handlePadInteraction(e.clientX, e.clientY);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      handlePadInteraction(e.clientX, e.clientY);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e) => {
    e.preventDefault();
    setIsDragging(true);
    const touch = e.touches[0];
    handlePadInteraction(touch.clientX, touch.clientY);
  };

  const handleTouchMove = (e) => {
    e.preventDefault();
    if (isDragging) {
      const touch = e.touches[0];
      handlePadInteraction(touch.clientX, touch.clientY);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Add global mouse listeners when dragging
  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('touchend', handleTouchEnd);
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('touchend', handleTouchEnd);
      };
    }
  }, [isDragging, handleMouseMove]);

  // Generate gradient background for the pad
  // Horizontal: full hue spectrum (0-360)
  // Vertical: saturation (white at top = 0%, full color at bottom = 100%)
  // We overlay a white-to-transparent gradient on top of the hue spectrum
  const padStyle = {
    background: `linear-gradient(to bottom, 
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    linear-gradient(to right,
      hsl(0, 100%, 50%) 0%,
      hsl(60, 100%, 50%) 16.66%,
      hsl(120, 100%, 50%) 33.33%,
      hsl(180, 100%, 50%) 50%,
      hsl(240, 100%, 50%) 66.66%,
      hsl(300, 100%, 50%) 83.33%,
      hsl(360, 100%, 50%) 100%
    )`
  };

  // Position of the selector dot
  const dotX = (hue / 360) * 100;
  const dotY = 100 - (saturation / 100) * 100;

  // Current color preview
  const currentRgb = hslToRgb(hue, saturation, isDarkMode ? 70 : 50);
  const currentColor = rgbToHex(currentRgb.r, currentRgb.g, currentRgb.b);

  return (
    <div className="color-picker">
      <div className="color-picker-label">
        <span>Color Theme</span>
        <div 
          className="color-preview" 
          style={{ backgroundColor: currentColor }}
          title={`Hue: ${hue}°, Saturation: ${saturation}%`}
        />
      </div>
      
      <div 
        ref={padRef}
        className="color-pad"
        style={padStyle}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        <div 
          className="color-selector-dot"
          style={{
            left: `${dotX}%`,
            top: `${dotY}%`,
            transform: 'translate(-50%, -50%)'
          }}
        />
      </div>
      
      <div className="color-picker-info">
        <div className="color-info-item">
          <span className="color-info-label">Hue:</span>
          <span className="color-info-value">{hue}°</span>
        </div>
        <div className="color-info-item">
          <span className="color-info-label">Saturation:</span>
          <span className="color-info-value">{saturation}%</span>
        </div>
      </div>
      
      <div className="color-picker-hint">
        Drag to adjust • Ensures accessible contrast
      </div>
    </div>
  );
}

export default ColorPicker;


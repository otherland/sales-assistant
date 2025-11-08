/**
 * Color utility functions for theme generation
 * Handles HSL/RGB conversion, contrast checking, and accessible color palette generation
 */

/**
 * Converts HSL to RGB
 * @param {number} h - Hue (0-360)
 * @param {number} s - Saturation (0-100)
 * @param {number} l - Lightness (0-100)
 * @returns {Object} RGB object with r, g, b values (0-255)
 */
export function hslToRgb(h, s, l) {
  h /= 360;
  s /= 100;
  l /= 100;

  let r, g, b;

  if (s === 0) {
    r = g = b = l; // achromatic
  } else {
    const hue2rgb = (p, q, t) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1/6) return p + (q - p) * 6 * t;
      if (t < 1/2) return q;
      if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
      return p;
    };

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1/3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1/3);
  }

  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255)
  };
}

/**
 * Converts RGB to HSL
 * @param {number} r - Red (0-255)
 * @param {number} g - Green (0-255)
 * @param {number} b - Blue (0-255)
 * @returns {Object} HSL object with h, s, l values
 */
export function rgbToHsl(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;

  if (max === min) {
    h = s = 0; // achromatic
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    
    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
      case g: h = ((b - r) / d + 2) / 6; break;
      case b: h = ((r - g) / d + 4) / 6; break;
      default: h = 0;
    }
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100)
  };
}

/**
 * Converts RGB to hex string
 * @param {number} r - Red (0-255)
 * @param {number} g - Green (0-255)
 * @param {number} b - Blue (0-255)
 * @returns {string} Hex color string (e.g., "#ff0000")
 */
export function rgbToHex(r, g, b) {
  return "#" + [r, g, b].map(x => {
    const hex = x.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  }).join("");
}

/**
 * Converts hex string to RGB
 * @param {string} hex - Hex color string (e.g., "#ff0000")
 * @returns {Object} RGB object with r, g, b values
 */
export function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

/**
 * Calculates relative luminance for contrast checking
 * @param {number} r - Red (0-255)
 * @param {number} g - Green (0-255)
 * @param {number} b - Blue (0-255)
 * @returns {number} Relative luminance (0-1)
 */
function getLuminance(r, g, b) {
  const [rs, gs, bs] = [r, g, b].map(val => {
    val = val / 255;
    return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

/**
 * Calculates contrast ratio between two colors
 * @param {string} color1 - First color (hex)
 * @param {string} color2 - Second color (hex)
 * @returns {number} Contrast ratio (1-21)
 */
export function getContrastRatio(color1, color2) {
  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);
  
  if (!rgb1 || !rgb2) return 1;
  
  const lum1 = getLuminance(rgb1.r, rgb1.g, rgb1.b);
  const lum2 = getLuminance(rgb2.r, rgb2.g, rgb2.b);
  
  const lighter = Math.max(lum1, lum2);
  const darker = Math.min(lum1, lum2);
  
  return (lighter + 0.05) / (darker + 0.05);
}

/**
 * Checks if contrast ratio meets WCAG AA standards
 * @param {string} foreground - Foreground color (hex)
 * @param {string} background - Background color (hex)
 * @param {string} level - 'AA' or 'AAA'
 * @param {boolean} largeText - Whether text is large (18pt+ or 14pt+ bold)
 * @returns {boolean} Whether contrast meets standards
 */
export function meetsContrastStandard(foreground, background, level = 'AA', largeText = false) {
  const ratio = getContrastRatio(foreground, background);
  if (level === 'AAA') {
    return largeText ? ratio >= 4.5 : ratio >= 7;
  }
  return largeText ? ratio >= 3 : ratio >= 4.5;
}

/**
 * Adjusts lightness to meet contrast requirements
 * @param {number} h - Hue (0-360)
 * @param {number} s - Saturation (0-100)
 * @param {string} targetBg - Target background color (hex)
 * @param {number} minContrast - Minimum contrast ratio
 * @param {boolean} isDark - Whether we want a dark color
 * @returns {number} Adjusted lightness value
 */
function adjustForContrast(h, s, targetBg, minContrast, isDark) {
  let l = isDark ? 20 : 80;
  const step = isDark ? 5 : -5;
  const maxIterations = 20;
  let iterations = 0;
  
  while (iterations < maxIterations) {
    const rgb = hslToRgb(h, s, l);
    const hex = rgbToHex(rgb.r, rgb.g, rgb.b);
    const ratio = getContrastRatio(hex, targetBg);
    
    if (ratio >= minContrast) {
      return l;
    }
    
    l += step;
    if (l < 0) l = 0;
    if (l > 100) l = 100;
    iterations++;
  }
  
  return isDark ? 20 : 80; // Fallback
}

/**
 * Generates an accessible color palette from a base color
 * Creates harmonious color combinations that all work together
 * @param {number} hue - Base hue (0-360)
 * @param {number} saturation - Base saturation (0-100)
 * @param {boolean} isDarkMode - Whether to generate dark mode theme
 * @returns {Object} Theme color object matching theme structure
 */
export function generateAccessibleTheme(hue, saturation, isDarkMode = false) {
  // Primary colors - main accent
  const primaryLightness = isDarkMode ? 65 : 50;
  const primaryDarkLightness = isDarkMode ? 55 : 40;
  
  const primaryRgb = hslToRgb(hue, saturation, primaryLightness);
  const primaryDarkRgb = hslToRgb(hue, saturation, primaryDarkLightness);
  const primaryColor = rgbToHex(primaryRgb.r, primaryRgb.g, primaryRgb.b);
  const primaryDark = rgbToHex(primaryDarkRgb.r, primaryDarkRgb.g, primaryDarkRgb.b);
  
  // Background colors - all derived from hue
  let bgMain, bgSecondary, bgSidebar;
  if (isDarkMode) {
    // Dark mode: create dark backgrounds with subtle hue tinting
    // Main background - very dark with slight hue
    const bgMainRgb = hslToRgb(hue, Math.min(saturation * 0.15, 15), 12);
    bgMain = rgbToHex(bgMainRgb.r, bgMainRgb.g, bgMainRgb.b);
    
    // Secondary background - slightly lighter with more hue
    const bgSecondaryRgb = hslToRgb(hue, Math.min(saturation * 0.25, 20), 18);
    bgSecondary = rgbToHex(bgSecondaryRgb.r, bgSecondaryRgb.g, bgSecondaryRgb.b);
    
    // Sidebar - darker, more saturated version
    const sidebarRgb = hslToRgb(hue, Math.min(saturation * 0.4, 30), 15);
    bgSidebar = rgbToHex(sidebarRgb.r, sidebarRgb.g, sidebarRgb.b);
  } else {
    // Light mode: white main, tinted secondary
    bgMain = '#ffffff';
    
    // Generate light tinted background with hue influence
    const bgSecondaryRgb = hslToRgb(hue, Math.min(saturation * 0.25, 25), 97);
    bgSecondary = rgbToHex(bgSecondaryRgb.r, bgSecondaryRgb.g, bgSecondaryRgb.b);
    
    // Sidebar uses darker, more saturated version of primary
    const sidebarRgb = hslToRgb(hue, Math.min(saturation * 0.8, 70), 30);
    bgSidebar = rgbToHex(sidebarRgb.r, sidebarRgb.g, sidebarRgb.b);
  }
  
  // Text colors - ensure high contrast with backgrounds
  // Adjust lightness to ensure WCAG AA contrast (4.5:1 for normal text)
  let textPrimary, textSecondary, textLight;
  if (isDarkMode) {
    // Dark mode: light text on dark backgrounds
    // Primary text on bg-main - ensure high contrast
    let textPrimaryLightness = 95;
    let textPrimaryRgb = hslToRgb(hue, Math.min(saturation * 0.1, 5), textPrimaryLightness);
    let textPrimaryHex = rgbToHex(textPrimaryRgb.r, textPrimaryRgb.g, textPrimaryRgb.b);
    // Verify contrast, adjust if needed
    while (getContrastRatio(textPrimaryHex, bgMain) < 4.5 && textPrimaryLightness < 98) {
      textPrimaryLightness += 1;
      textPrimaryRgb = hslToRgb(hue, Math.min(saturation * 0.1, 5), textPrimaryLightness);
      textPrimaryHex = rgbToHex(textPrimaryRgb.r, textPrimaryRgb.g, textPrimaryRgb.b);
    }
    textPrimary = textPrimaryHex;
    
    // Secondary text - slightly less light, subtle hue
    const textSecondaryRgb = hslToRgb(hue, Math.min(saturation * 0.2, 10), 80);
    textSecondary = rgbToHex(textSecondaryRgb.r, textSecondaryRgb.g, textSecondaryRgb.b);
    
    // Light text - more muted, more hue influence
    const textLightRgb = hslToRgb(hue, Math.min(saturation * 0.3, 20), 60);
    textLight = rgbToHex(textLightRgb.r, textLightRgb.g, textLightRgb.b);
  } else {
    // Light mode: dark text on light backgrounds
    // Primary text on bg-main (white) - ensure high contrast
    let textPrimaryLightness = 10;
    let textPrimaryRgb = hslToRgb(hue, Math.min(saturation * 0.1, 5), textPrimaryLightness);
    let textPrimaryHex = rgbToHex(textPrimaryRgb.r, textPrimaryRgb.g, textPrimaryRgb.b);
    // Verify contrast, adjust if needed
    while (getContrastRatio(textPrimaryHex, bgMain) < 4.5 && textPrimaryLightness > 5) {
      textPrimaryLightness -= 1;
      textPrimaryRgb = hslToRgb(hue, Math.min(saturation * 0.1, 5), textPrimaryLightness);
      textPrimaryHex = rgbToHex(textPrimaryRgb.r, textPrimaryRgb.g, textPrimaryRgb.b);
    }
    textPrimary = textPrimaryHex;
    
    // Secondary text - slightly lighter, subtle hue
    const textSecondaryRgb = hslToRgb(hue, Math.min(saturation * 0.2, 15), 25);
    textSecondary = rgbToHex(textSecondaryRgb.r, textSecondaryRgb.g, textSecondaryRgb.b);
    
    // Light text - more muted, more hue influence
    const textLightRgb = hslToRgb(hue, Math.min(saturation * 0.5, 40), 50);
    textLight = rgbToHex(textLightRgb.r, textLightRgb.g, textLightRgb.b);
  }
  
  // Border color - harmonized with theme
  let borderColor;
  if (isDarkMode) {
    const borderRgb = hslToRgb(hue, Math.min(saturation * 0.3, 25), 25);
    borderColor = rgbToHex(borderRgb.r, borderRgb.g, borderRgb.b);
  } else {
    const borderRgb = hslToRgb(hue, Math.min(saturation * 0.35, 35), 85);
    borderColor = rgbToHex(borderRgb.r, borderRgb.g, borderRgb.b);
  }
  
  // Accent colors - complementary/harmonious colors based on hue
  // Use color theory: complementary is hue + 180, analogous are ±30
  const complementaryHue = (hue + 180) % 360;
  const analogousHue1 = (hue + 30) % 360;
  const analogousHue2 = (hue - 30 + 360) % 360;
  
  // Green accent - use complementary or analogous depending on hue
  // If hue is already green-ish (120±30), use complementary; otherwise use green
  const greenHue = (hue >= 90 && hue <= 150) ? complementaryHue : 140;
  const accentGreenRgb = hslToRgb(greenHue, isDarkMode ? 60 : 70, isDarkMode ? 55 : 45);
  const accentGreen = rgbToHex(accentGreenRgb.r, accentGreenRgb.g, accentGreenRgb.b);
  
  // Yellow accent - use analogous or warm yellow
  const yellowHue = (hue >= 30 && hue <= 90) ? analogousHue1 : 45;
  const accentYellowRgb = hslToRgb(yellowHue, isDarkMode ? 70 : 75, isDarkMode ? 60 : 50);
  const accentYellow = rgbToHex(accentYellowRgb.r, accentYellowRgb.g, accentYellowRgb.b);
  
  // Red accent - use complementary or warm red
  const redHue = (hue >= 0 && hue <= 30) || (hue >= 330 && hue <= 360) ? complementaryHue : 0;
  const accentRedRgb = hslToRgb(redHue, isDarkMode ? 70 : 75, isDarkMode ? 55 : 45);
  const accentRed = rgbToHex(accentRedRgb.r, accentRedRgb.g, accentRedRgb.b);
  
  // Script background and text - harmonized
  let scriptBg, scriptText;
  if (isDarkMode) {
    const scriptBgRgb = hslToRgb(hue, Math.min(saturation * 0.3, 25), 20);
    scriptBg = rgbToHex(scriptBgRgb.r, scriptBgRgb.g, scriptBgRgb.b);
    
    // Ensure text has good contrast
    const scriptTextRgb = hslToRgb(hue, Math.min(saturation * 0.1, 5), 92);
    scriptText = rgbToHex(scriptTextRgb.r, scriptTextRgb.g, scriptTextRgb.b);
  } else {
    const scriptBgRgb = hslToRgb(hue, Math.min(saturation * 0.2, 20), 96);
    scriptBg = rgbToHex(scriptBgRgb.r, scriptBgRgb.g, scriptBgRgb.b);
    
    const scriptTextRgb = hslToRgb(hue, Math.min(saturation * 0.1, 5), 12);
    scriptText = rgbToHex(scriptTextRgb.r, scriptTextRgb.g, scriptTextRgb.b);
  }
  
  // Quote color uses primary
  const quoteColor = primaryColor;
  
  return {
    'ui-theme': 'custom',
    'layout-mode': 'executive-presentation',
    'primary-color': primaryColor,
    'primary-dark': primaryDark,
    'bg-main': bgMain,
    'bg-secondary': bgSecondary,
    'bg-sidebar': bgSidebar,
    'text-primary': textPrimary,
    'text-secondary': textSecondary,
    'text-light': textLight,
    'border-color': borderColor,
    'accent-green': accentGreen,
    'accent-yellow': accentYellow,
    'accent-red': accentRed,
    'script-bg': scriptBg,
    'script-text': scriptText,
    'quote-color': quoteColor,
    'script-font-family': '"Merriweather", serif',
    'script-font-size': '18px'
  };
}

/**
 * Extracts HSL values from a hex color
 * @param {string} hex - Hex color string
 * @returns {Object} HSL object with h, s, l values
 */
export function hexToHsl(hex) {
  const rgb = hexToRgb(hex);
  if (!rgb) return { h: 0, s: 0, l: 50 };
  return rgbToHsl(rgb.r, rgb.g, rgb.b);
}


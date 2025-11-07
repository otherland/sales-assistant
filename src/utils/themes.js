/**
 * Theme management utilities
 * Handles theme switching, font selection, and CSS variable updates
 */

// Theme definitions
export const themes = {
    // Ocean Themes - Calming blue tones
    'ocean-light': {
        'ui-theme': 'ocean',
        'layout-mode': 'executive-presentation',
        'primary-color': '#2563eb',
        'primary-dark': '#1d4ed8',
        'bg-main': '#ffffff',
        'bg-secondary': '#eff6ff',
        'bg-sidebar': '#1e40af',
        'text-primary': '#0f172a',
        'text-secondary': '#1e293b',
        'text-light': '#93c5fd',
        'border-color': '#bfdbfe',
        'accent-green': '#059669',
        'accent-yellow': '#d97706',
        'accent-red': '#b91c1c',
        'script-bg': '#dbeafe',
        'script-text': '#0f172a',
        'quote-color': '#2563eb',
        'script-font-family': '"Merriweather", serif',
        'script-font-size': '18px'
    },
    'ocean-dark': {
        'ui-theme': 'ocean',
        'layout-mode': 'executive-presentation',
        'primary-color': '#60a5fa',
        'primary-dark': '#3b82f6',
        'bg-main': '#0f172a',
        'bg-secondary': '#1e293b',
        'bg-sidebar': '#0f172a',
        'text-primary': '#f1f5f9',
        'text-secondary': '#cbd5e1',
        'text-light': '#64748b',
        'border-color': '#334155',
        'accent-green': '#10b981',
        'accent-yellow': '#f59e0b',
        'accent-red': '#ef4444',
        'script-bg': '#1e293b',
        'script-text': '#f1f5f9',
        'quote-color': '#60a5fa',
        'script-font-family': '"Merriweather", serif',
        'script-font-size': '18px'
    },

    // Forest Themes - Soothing green tones
    'forest-light': {
        'ui-theme': 'forest',
        'layout-mode': 'executive-presentation',
        'primary-color': '#059669',
        'primary-dark': '#047857',
        'bg-main': '#ffffff',
        'bg-secondary': '#ecfdf5',
        'bg-sidebar': '#065f46',
        'text-primary': '#0f172a',
        'text-secondary': '#1e293b',
        'text-light': '#6ee7b7',
        'border-color': '#a7f3d0',
        'accent-green': '#059669',
        'accent-yellow': '#d97706',
        'accent-red': '#b91c1c',
        'script-bg': '#d1fae5',
        'script-text': '#0f172a',
        'quote-color': '#059669',
        'script-font-family': '"Merriweather", serif',
        'script-font-size': '18px'
    },
    'forest-dark': {
        'ui-theme': 'forest',
        'layout-mode': 'executive-presentation',
        'primary-color': '#34d399',
        'primary-dark': '#10b981',
        'bg-main': '#0f172a',
        'bg-secondary': '#1e293b',
        'bg-sidebar': '#0f172a',
        'text-primary': '#f1f5f9',
        'text-secondary': '#cbd5e1',
        'text-light': '#64748b',
        'border-color': '#334155',
        'accent-green': '#10b981',
        'accent-yellow': '#f59e0b',
        'accent-red': '#ef4444',
        'script-bg': '#1e293b',
        'script-text': '#f1f5f9',
        'quote-color': '#34d399',
        'script-font-family': '"Merriweather", serif',
        'script-font-size': '18px'
    },

    // Sunset Themes - Warm orange/red tones
    'sunset-light': {
        'ui-theme': 'sunset',
        'layout-mode': 'executive-presentation',
        'primary-color': '#dc2626',
        'primary-dark': '#b91c1c',
        'bg-main': '#ffffff',
        'bg-secondary': '#fef2f2',
        'bg-sidebar': '#991b1b',
        'text-primary': '#0f172a',
        'text-secondary': '#1e293b',
        'text-light': '#fca5a5',
        'border-color': '#fecaca',
        'accent-green': '#059669',
        'accent-yellow': '#d97706',
        'accent-red': '#b91c1c',
        'script-bg': '#fee2e2',
        'script-text': '#0f172a',
        'quote-color': '#dc2626',
        'script-font-family': '"Merriweather", serif',
        'script-font-size': '18px'
    },
    'sunset-dark': {
        'ui-theme': 'sunset',
        'layout-mode': 'executive-presentation',
        'primary-color': '#f87171',
        'primary-dark': '#ef4444',
        'bg-main': '#0f172a',
        'bg-secondary': '#1e293b',
        'bg-sidebar': '#0f172a',
        'text-primary': '#f1f5f9',
        'text-secondary': '#cbd5e1',
        'text-light': '#64748b',
        'border-color': '#334155',
        'accent-green': '#10b981',
        'accent-yellow': '#f59e0b',
        'accent-red': '#ef4444',
        'script-bg': '#1e293b',
        'script-text': '#f1f5f9',
        'quote-color': '#f87171',
        'script-font-family': '"Merriweather", serif',
        'script-font-size': '18px'
    },

    // Lavender Themes - Soft purple tones
    'lavender-light': {
        'ui-theme': 'lavender',
        'layout-mode': 'executive-presentation',
        'primary-color': '#7c3aed',
        'primary-dark': '#6d28d9',
        'bg-main': '#ffffff',
        'bg-secondary': '#faf5ff',
        'bg-sidebar': '#581c87',
        'text-primary': '#0f172a',
        'text-secondary': '#1e293b',
        'text-light': '#c4b5fd',
        'border-color': '#ddd6fe',
        'accent-green': '#059669',
        'accent-yellow': '#d97706',
        'accent-red': '#b91c1c',
        'script-bg': '#ede9fe',
        'script-text': '#0f172a',
        'quote-color': '#7c3aed',
        'script-font-family': '"Merriweather", serif',
        'script-font-size': '18px'
    },
    'lavender-dark': {
        'ui-theme': 'lavender',
        'layout-mode': 'executive-presentation',
        'primary-color': '#a78bfa',
        'primary-dark': '#8b5cf6',
        'bg-main': '#0f172a',
        'bg-secondary': '#1e293b',
        'bg-sidebar': '#0f172a',
        'text-primary': '#f1f5f9',
        'text-secondary': '#cbd5e1',
        'text-light': '#64748b',
        'border-color': '#334155',
        'accent-green': '#10b981',
        'accent-yellow': '#f59e0b',
        'accent-red': '#ef4444',
        'script-bg': '#1e293b',
        'script-text': '#f1f5f9',
        'quote-color': '#a78bfa',
        'script-font-family': '"Merriweather", serif',
        'script-font-size': '18px'
    },

    // Neutral Themes - Gray/brown tones
    'neutral-light': {
        'ui-theme': 'neutral',
        'layout-mode': 'executive-presentation',
        'primary-color': '#4b5563',
        'primary-dark': '#374151',
        'bg-main': '#ffffff',
        'bg-secondary': '#f9fafb',
        'bg-sidebar': '#1f2937',
        'text-primary': '#0f172a',
        'text-secondary': '#1e293b',
        'text-light': '#9ca3af',
        'border-color': '#d1d5db',
        'accent-green': '#059669',
        'accent-yellow': '#d97706',
        'accent-red': '#b91c1c',
        'script-bg': '#f3f4f6',
        'script-text': '#0f172a',
        'quote-color': '#4b5563',
        'script-font-family': '"Merriweather", serif',
        'script-font-size': '18px'
    },
    'neutral-dark': {
        'ui-theme': 'neutral',
        'layout-mode': 'executive-presentation',
        'primary-color': '#9ca3af',
        'primary-dark': '#6b7280',
        'bg-main': '#0f172a',
        'bg-secondary': '#1e293b',
        'bg-sidebar': '#0f172a',
        'text-primary': '#f1f5f9',
        'text-secondary': '#cbd5e1',
        'text-light': '#64748b',
        'border-color': '#334155',
        'accent-green': '#10b981',
        'accent-yellow': '#f59e0b',
        'accent-red': '#ef4444',
        'script-bg': '#1e293b',
        'script-text': '#f1f5f9',
        'quote-color': '#9ca3af',
        'script-font-family': '"Merriweather", serif',
        'script-font-size': '18px'
    },

    // Rose Themes - Soft pink tones
    'rose-light': {
        'ui-theme': 'rose',
        'layout-mode': 'executive-presentation',
        'primary-color': '#be185d',
        'primary-dark': '#9d174d',
        'bg-main': '#ffffff',
        'bg-secondary': '#fdf2f8',
        'bg-sidebar': '#831843',
        'text-primary': '#0f172a',
        'text-secondary': '#1e293b',
        'text-light': '#f9a8d4',
        'border-color': '#fbcfe8',
        'accent-green': '#059669',
        'accent-yellow': '#d97706',
        'accent-red': '#b91c1c',
        'script-bg': '#fce7f3',
        'script-text': '#0f172a',
        'quote-color': '#be185d',
        'script-font-family': '"Merriweather", serif',
        'script-font-size': '18px'
    },
    'rose-dark': {
        'ui-theme': 'rose',
        'layout-mode': 'executive-presentation',
        'primary-color': '#f472b6',
        'primary-dark': '#ec4899',
        'bg-main': '#0f172a',
        'bg-secondary': '#1e293b',
        'bg-sidebar': '#0f172a',
        'text-primary': '#f1f5f9',
        'text-secondary': '#cbd5e1',
        'text-light': '#64748b',
        'border-color': '#334155',
        'accent-green': '#10b981',
        'accent-yellow': '#f59e0b',
        'accent-red': '#ef4444',
        'script-bg': '#1e293b',
        'script-text': '#f1f5f9',
        'quote-color': '#f472b6',
        'script-font-family': '"Merriweather", serif',
        'script-font-size': '18px'
    },

    // Sage Themes - Muted green tones
    'sage-light': {
        'ui-theme': 'sage',
        'layout-mode': 'executive-presentation',
        'primary-color': '#16a34a',
        'primary-dark': '#15803d',
        'bg-main': '#ffffff',
        'bg-secondary': '#f0fdf4',
        'bg-sidebar': '#14532d',
        'text-primary': '#0f172a',
        'text-secondary': '#1e293b',
        'text-light': '#86efac',
        'border-color': '#bbf7d0',
        'accent-green': '#059669',
        'accent-yellow': '#d97706',
        'accent-red': '#b91c1c',
        'script-bg': '#dcfce7',
        'script-text': '#0f172a',
        'quote-color': '#16a34a',
        'script-font-family': '"Merriweather", serif',
        'script-font-size': '18px'
    },
    'sage-dark': {
        'ui-theme': 'sage',
        'layout-mode': 'executive-presentation',
        'primary-color': '#4ade80',
        'primary-dark': '#22c55e',
        'bg-main': '#0f172a',
        'bg-secondary': '#1e293b',
        'bg-sidebar': '#0f172a',
        'text-primary': '#f1f5f9',
        'text-secondary': '#cbd5e1',
        'text-light': '#64748b',
        'border-color': '#334155',
        'accent-green': '#10b981',
        'accent-yellow': '#f59e0b',
        'accent-red': '#ef4444',
        'script-bg': '#1e293b',
        'script-text': '#f1f5f9',
        'quote-color': '#4ade80',
        'script-font-family': '"Merriweather", serif',
        'script-font-size': '18px'
    },

    // Sky Themes - Light blue tones
    'sky-light': {
        'ui-theme': 'sky',
        'layout-mode': 'executive-presentation',
        'primary-color': '#0284c7',
        'primary-dark': '#0369a1',
        'bg-main': '#ffffff',
        'bg-secondary': '#f0f9ff',
        'bg-sidebar': '#0c4a6e',
        'text-primary': '#0f172a',
        'text-secondary': '#1e293b',
        'text-light': '#7dd3fc',
        'border-color': '#bae6fd',
        'accent-green': '#059669',
        'accent-yellow': '#d97706',
        'accent-red': '#b91c1c',
        'script-bg': '#e0f2fe',
        'script-text': '#0f172a',
        'quote-color': '#0284c7',
        'script-font-family': '"Merriweather", serif',
        'script-font-size': '18px'
    },
    'sky-dark': {
        'ui-theme': 'sky',
        'layout-mode': 'executive-presentation',
        'primary-color': '#38bdf8',
        'primary-dark': '#0ea5e9',
        'bg-main': '#0f172a',
        'bg-secondary': '#1e293b',
        'bg-sidebar': '#0f172a',
        'text-primary': '#f1f5f9',
        'text-secondary': '#cbd5e1',
        'text-light': '#64748b',
        'border-color': '#334155',
        'accent-green': '#10b981',
        'accent-yellow': '#f59e0b',
        'accent-red': '#ef4444',
        'script-bg': '#1e293b',
        'script-text': '#f1f5f9',
        'quote-color': '#38bdf8',
        'script-font-family': '"Merriweather", serif',
        'script-font-size': '18px'
    },

    // Original Presentation themes (keeping for compatibility)
    'presentation-light': {
        'ui-theme': 'presentation',
        'layout-mode': 'executive-presentation',
        'primary-color': '#1e40af',
        'primary-dark': '#1e3a8a',
        'bg-main': '#ffffff',
        'bg-secondary': '#eff6ff',
        'bg-sidebar': '#1e3a8a',
        'text-primary': '#0f172a',
        'text-secondary': '#1e293b',
        'text-light': '#93c5fd',
        'border-color': '#bfdbfe',
        'accent-green': '#059669',
        'accent-yellow': '#d97706',
        'accent-red': '#b91c1c',
        'script-bg': '#dbeafe',
        'script-text': '#0f172a',
        'quote-color': '#1e40af',
        'script-font-family': '"Merriweather", serif',
        'script-font-size': '18px'
    },
    'orange-light': {
        'ui-theme': 'orange',
        'layout-mode': 'executive-presentation',
        'primary-color': '#f97316',
        'primary-dark': '#ea580c',
        'bg-main': '#ffffff',
        'bg-secondary': '#fff7ed',
        'bg-sidebar': '#9a3412',
        'text-primary': '#0f172a',
        'text-secondary': '#1e293b',
        'text-light': '#fed7aa',
        'border-color': '#fed7aa',
        'accent-green': '#059669',
        'accent-yellow': '#d97706',
        'accent-red': '#b91c1c',
        'script-bg': '#fef3c7',
        'script-text': '#0f172a',
        'quote-color': '#f97316',
        'script-font-family': '"Merriweather", serif',
        'script-font-size': '18px'
    },

    'orange-dark': {
        'ui-theme': 'orange',
        'layout-mode': 'executive-presentation',
        'primary-color': '#fb923c',
        'primary-dark': '#f97316',
        'bg-main': '#0f172a',
        'bg-secondary': '#1e293b',
        'bg-sidebar': '#0f172a',
        'text-primary': '#f1f5f9',
        'text-secondary': '#cbd5e1',
        'text-light': '#64748b',
        'border-color': '#334155',
        'accent-green': '#10b981',
        'accent-yellow': '#f59e0b',
        'accent-red': '#ef4444',
        'script-bg': '#1e293b',
        'script-text': '#f1f5f9',
        'quote-color': '#fb923c',
        'script-font-family': '"Merriweather", serif',
        'script-font-size': '18px'
    },

    'presentation-dark': {
        'ui-theme': 'presentation',
        'layout-mode': 'executive-presentation',
        'primary-color': '#3b82f6',
        'primary-dark': '#2563eb',
        'bg-main': '#0f172a',
        'bg-secondary': '#1e293b',
        'bg-sidebar': '#0f172a',
        'text-primary': '#f1f5f9',
        'text-secondary': '#cbd5e1',
        'text-light': '#64748b',
        'border-color': '#334155',
        'accent-green': '#10b981',
        'accent-yellow': '#f59e0b',
        'accent-red': '#ef4444',
        'script-bg': '#1e293b',
        'script-text': '#f1f5f9',
        'quote-color': '#3b82f6',
        'script-font-family': '"Merriweather", serif',
        'script-font-size': '18px'
    }
};

// Font options
export const fontOptions = {
    'Inter': '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
    'Open Sans': '"Open Sans", sans-serif',
    'Roboto': '"Roboto", sans-serif',
    'Lato': '"Lato", sans-serif',
    'Merriweather': '"Merriweather", serif',
    'Spectral': '"Spectral", serif',
    'Atkinson Hyperlegible': '"Atkinson Hyperlegible", sans-serif'
};

// Current theme state
let currentTheme = typeof localStorage !== 'undefined' ? localStorage.getItem('theme') || 'presentation-light' : 'presentation-light';
let currentUITheme = typeof localStorage !== 'undefined' ? localStorage.getItem('ui-theme') || 'presentation' : 'presentation';

/**
 * Sets the application theme
 * @param {string} theme - Theme name (e.g., 'presentation-light', 'ocean-dark')
 */
export function setTheme(theme) {
    if (typeof document === 'undefined') return;
    
    const root = document.documentElement;
    const body = document.body;
    const themeColors = themes[theme];

    if (!themeColors) {
        console.warn(`Theme '${theme}' not found, falling back to presentation-light`);
        return setTheme('presentation-light');
    }

    // Apply theme colors
    for (const [property, value] of Object.entries(themeColors)) {
        root.style.setProperty(`--${property}`, value);
    }

    // Update UI theme classes
    const uiTheme = themeColors['ui-theme'];
    const layoutMode = themeColors['layout-mode'];

    // Remove all existing theme classes
    body.className = body.className.replace(/\bui-theme-\w+\b/g, '').replace(/\blayout-\w+[-\w]*\b/g, '').trim();

    // Add new theme classes
    body.classList.add(`ui-theme-${uiTheme}`);
    body.classList.add(`layout-${layoutMode.replace(/-/g, '-')}`);

    // Handle dark mode styling for sidebar
    const isDark = theme.includes('-dark') || theme === 'dark';
    if (isDark) {
        root.style.setProperty('--sidebar-text', '#f1f5f9');
        root.style.setProperty('--sidebar-border', 'rgba(241, 245, 249, 0.1)');
        body.classList.add('dark-mode');
    } else {
        root.style.setProperty('--sidebar-text', '#cbd5e1');
        root.style.setProperty('--sidebar-border', 'rgba(255, 255, 255, 0.1)');
        body.classList.remove('dark-mode');
    }

    if (typeof localStorage !== 'undefined') {
        localStorage.setItem('theme', theme);
        localStorage.setItem('ui-theme', uiTheme);
    }
    currentTheme = theme;
    currentUITheme = uiTheme;
}

/**
 * Sets the script font family
 * @param {string} fontName - Font name from fontOptions
 */
export function setFont(fontName) {
    if (typeof document === 'undefined') return;
    
    const root = document.documentElement;
    const fontFamily = fontOptions[fontName];
    
    if (!fontFamily) {
        console.warn(`Font '${fontName}' not found`);
        return;
    }
    
    root.style.setProperty('--script-font-family', fontFamily);
    
    if (typeof localStorage !== 'undefined') {
        localStorage.setItem('selectedFont', fontName);
    }

    // Update select element if it exists (React component handles this)
    const select = document.getElementById('font-select');
    if (select) select.value = fontName;
}

/**
 * Toggles between light and dark theme variants
 */
export function toggleTheme() {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
}

/**
 * Gets the current theme name
 * @returns {string} Current theme name
 */
export function getCurrentTheme() {
    return currentTheme;
}

/**
 * Gets the current UI theme
 * @returns {string} Current UI theme
 */
export function getCurrentUITheme() {
    return currentUITheme;
}

// Initialize theme and font on load
if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    // Initialize theme from localStorage or default
    const savedTheme = localStorage.getItem('theme') || 'presentation-light';
    setTheme(savedTheme);

    // Initialize font from localStorage or default to Merriweather
    const savedFont = localStorage.getItem('selectedFont') || 'Merriweather';
    setFont(savedFont);

    // Initialize font size from localStorage or default to 16px
    const savedFontSize = localStorage.getItem('scriptFontSize') || '16';
    document.documentElement.style.setProperty('--script-font-size', savedFontSize + 'px');
    
    // Initialize advice visibility from localStorage (default: visible)
    const adviceVisible = localStorage.getItem('adviceVisible') !== 'false';
    if (!adviceVisible) {
        document.body.classList.add('advice-hidden');
    }
}

// Expose to window for backward compatibility with inline scripts
if (typeof window !== 'undefined') {
    window.themes = themes;
    window.fontOptions = fontOptions;
    window.setTheme = setTheme;
    window.setFont = setFont;
    window.toggleTheme = toggleTheme;
    window.getCurrentTheme = getCurrentTheme;
    window.getCurrentUITheme = getCurrentUITheme;
}


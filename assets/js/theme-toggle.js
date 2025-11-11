/**
 * Theme Toggle System
 * Handles light/dark mode switching with localStorage persistence
 */

(function() {
  'use strict';

  const THEME_KEY = 'secaion-theme';
  const THEME_DARK = 'dark';
  const THEME_LIGHT = 'light';

  /**
   * Get the user's preferred theme
   * Priority: localStorage > system preference > default (dark)
   */
  function getPreferredTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY);
    if (savedTheme) {
      return savedTheme;
    }
    
    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      return THEME_LIGHT;
    }
    
    return THEME_DARK;
  }

  /**
   * Apply theme to the document
   */
  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);
    updateToggleButton(theme);
  }

  /**
   * Update toggle button icon based on current theme
   */
  function updateToggleButton(theme) {
    const toggleBtn = document.querySelector('.theme-toggle');
    if (!toggleBtn) return;

    const icon = toggleBtn.querySelector('.theme-icon');
    if (theme === THEME_LIGHT) {
      icon.textContent = '🌙';
      toggleBtn.setAttribute('aria-label', 'Switch to dark mode');
    } else {
      icon.textContent = '☀️';
      toggleBtn.setAttribute('aria-label', 'Switch to light mode');
    }
  }

  /**
   * Toggle between light and dark themes
   */
  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === THEME_LIGHT ? THEME_DARK : THEME_LIGHT;
    setTheme(newTheme);
  }

  /**
   * Initialize theme system
   */
  function initTheme() {
    // Apply saved/preferred theme immediately (before page renders)
    const theme = getPreferredTheme();
    document.documentElement.setAttribute('data-theme', theme);

    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', setupToggleButton);
    } else {
      setupToggleButton();
    }
  }

  /**
   * Setup toggle button event listener
   */
  function setupToggleButton() {
    const toggleBtn = document.querySelector('.theme-toggle');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', toggleTheme);
      updateToggleButton(document.documentElement.getAttribute('data-theme'));
    }
  }

  // Listen for system theme changes
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', (e) => {
      // Only auto-switch if user hasn't manually set a preference
      if (!localStorage.getItem(THEME_KEY)) {
        setTheme(e.matches ? THEME_LIGHT : THEME_DARK);
      }
    });
  }

  // Initialize immediately
  initTheme();
})();

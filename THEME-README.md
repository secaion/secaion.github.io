# Theme Toggle System

## Overview
This website includes a user-friendly light/dark theme toggle system that works seamlessly on GitHub Pages.

## Features
- ✅ **Persistent Theme**: User preference is saved in browser's localStorage
- ✅ **System Preference Detection**: Automatically detects user's system color scheme on first visit
- ✅ **Smooth Transitions**: All theme changes animate smoothly
- ✅ **Accessible**: Proper ARIA labels and keyboard-friendly
- ✅ **Clean Code**: Modular JavaScript with clear documentation
- ✅ **Consistent**: Works across all pages

## Files Modified

### CSS (`/assets/css/styles.css`)
- Added light and dark theme CSS variables
- Added theme toggle button styles
- Added smooth transitions for theme changes

### JavaScript (`/assets/js/theme-toggle.js`)
- Handles theme switching logic
- Manages localStorage persistence
- Detects system preferences
- Updates toggle button icons

### HTML (All pages)
- Added `data-theme="dark"` attribute to `<html>` tag
- Included theme-toggle.js script
- Added theme toggle button to navigation

## How It Works

### 1. Theme Variables
The CSS uses CSS custom properties (variables) for theming:

**Dark Theme (Default):**
```css
--bg: #0b0e1a;
--text: #e9edff;
--panel: #0e1324;
/* etc. */
```

**Light Theme:**
```css
--bg: #ffffff;
--text: #1a1a2e;
--panel: #f8f9fa;
/* etc. */
```

### 2. Theme Switching
When the toggle button is clicked:
1. JavaScript toggles the `data-theme` attribute on `<html>`
2. CSS variables update automatically
3. Theme preference is saved to localStorage
4. Button icon updates (☀️ for light mode, 🌙 for dark mode)

### 3. Persistence
- Theme choice is saved in `localStorage` with key: `secaion-theme`
- On page load, the saved theme is applied immediately
- Works across all pages and browser sessions

### 4. System Preference
On first visit (no saved preference):
- Detects `prefers-color-scheme` media query
- Applies matching theme automatically
- User can override at any time

## Usage

### Toggle Button
Located in the navigation bar on every page. Click to switch between themes.

### Manual Theme Setting (Developer)
You can set theme programmatically:
```javascript
document.documentElement.setAttribute('data-theme', 'light');
// or
document.documentElement.setAttribute('data-theme', 'dark');
```

### Clear Saved Preference
```javascript
localStorage.removeItem('secaion-theme');
```

## Browser Support
- ✅ All modern browsers (Chrome, Firefox, Safari, Edge)
- ✅ Works with JavaScript enabled
- ✅ Gracefully degrades if JavaScript is disabled (shows dark theme)

## Customization

### Add New Theme Colors
Edit `/assets/css/styles.css`:

```css
[data-theme="light"]{
  --bg: #your-color;
  --text: #your-color;
  /* add more variables */
}
```

### Change Default Theme
Edit the `data-theme` attribute in HTML files:
```html
<html lang="en" data-theme="light">
```

Or modify the `THEME_DARK` constant in `theme-toggle.js`.

### Change Toggle Icons
Edit button HTML or modify `updateToggleButton()` function in `theme-toggle.js`:
```javascript
if (theme === THEME_LIGHT) {
  icon.textContent = '🌙'; // Change this
} else {
  icon.textContent = '☀️'; // Change this
}
```

## Accessibility
- Toggle button includes proper `aria-label`
- Label updates to describe current action ("Switch to dark mode" / "Switch to light mode")
- Button is keyboard accessible
- High contrast ratios maintained in both themes

## Performance
- Minimal JavaScript (~100 lines, well-commented)
- No external dependencies
- Theme applied before page render (no flash)
- Smooth CSS transitions (0.3s)

## Troubleshooting

### Theme Not Persisting
- Check if localStorage is enabled in browser
- Check browser console for errors
- Verify `theme-toggle.js` is loaded

### Toggle Button Not Appearing
- Verify button HTML is present in navigation
- Check CSS is loaded correctly
- Inspect element to ensure button exists in DOM

### Theme Flash on Load
This shouldn't happen as theme is applied in the `<head>`. If it does:
- Ensure script is in `<head>` section
- Check that `data-theme` attribute exists on `<html>` tag

## Future Enhancements
Possible improvements:
- Add more theme options (blue, green, etc.)
- Add automatic theme switching based on time of day
- Add theme preview before switching
- Add keyboard shortcut for theme toggle

## License
This theme system is part of the Secaion website and follows the same license.

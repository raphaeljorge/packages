/**
 * This script helps you verify if the styles from my-react-library are being properly imported
 * in your application. Run this script in your browser console or Node.js environment.
 */

function checkStylesImported() {
  // Check if the document is available (browser environment)
  if (typeof document !== 'undefined') {
    // Get all stylesheets
    const stylesheets = Array.from(document.styleSheets);
    
    // Look for styles that might be from my-react-library
    const libraryStylesFound = stylesheets.some(sheet => {
      try {
        // Check if the stylesheet has rules
        if (!sheet.cssRules) return false;
        
        // Look for Tailwind classes or specific component styles
        const rules = Array.from(sheet.cssRules);
        return rules.some(rule =>
          rule.cssText && (
            // Look for component-specific classes
            rule.cssText.includes('formBuilder') ||
            rule.cssText.includes('formInput') ||
            rule.cssText.includes('formSelect') ||
            rule.cssText.includes('chip') ||
            rule.cssText.includes('arrayField')
          )
        );
      } catch (e) {
        // CORS error when accessing stylesheet from different origin
        console.warn('Could not access stylesheet rules:', e);
        return false;
      }
    });
    
    if (libraryStylesFound) {
      console.log('✅ my-react-library styles appear to be properly imported!');
    } else {
      console.error('❌ my-react-library styles do not appear to be imported.');
      console.log('Make sure you have imported the styles with:');
      console.log('import "my-react-library/dist/styles.css";');
    }
    
    return libraryStylesFound;
  } else {
    // Node.js environment
    console.log('This script needs to be run in a browser environment to check styles.');
    return null;
  }
}

// Run the check if in a browser environment
if (typeof window !== 'undefined') {
  // Wait for the document to be fully loaded
  if (document.readyState === 'complete') {
    checkStylesImported();
  } else {
    window.addEventListener('load', checkStylesImported);
  }
}

// Export for use in modules
if (typeof module !== 'undefined') {
  module.exports = { checkStylesImported };
}
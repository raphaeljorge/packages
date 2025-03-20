// Import global styles
import './styles/globals.css';

// Auto-inject CSS if in browser environment
if (typeof document !== 'undefined') {
  // Check if the style element already exists to avoid duplicates
  const id = 'my-react-library-styles';
  if (!document.getElementById(id)) {
    try {
      // Create a link element to load the CSS
      const link = document.createElement('link');
      link.id = id;
      link.rel = 'stylesheet';
      link.type = 'text/css';
      
      // Calculate the path to the CSS file
      // This assumes the package is installed in node_modules
      const isBundled = typeof window !== 'undefined' &&
                        typeof window.__webpack_public_path__ !== 'undefined';
      
      if (isBundled) {
        // If bundled with webpack, use the publicPath
        link.href = window.__MY_REACT_LIBRARY_PUBLIC_PATH__ || './styles.css';
      } else {
        // Otherwise, try to load from the package path
        link.href = 'node_modules/my-react-library/dist/styles.css';
      }
      
      // Append to head
      document.head.appendChild(link);
      
      console.log('my-react-library: Styles automatically injected');
    } catch (e) {
      console.warn('my-react-library: Failed to auto-inject styles:', e);
      console.info('my-react-library: Please import styles manually: import "my-react-library/dist/styles.css"');
    }
  }
}

// Export components
export * from './components';

// Export hooks
export * from './hooks';

// Export utils
export * from './utils';

// Export types
export * from './types';

# My React Library

A React component library with built-in Tailwind CSS styling.

## Installation

```bash
npm install my-react-library
# or
yarn add my-react-library
# or
pnpm add my-react-library
```

## Usage

### Importing Components

```jsx
import { FormBuilder } from 'my-react-library';

function App() {
  return (
    <div>
      <FormBuilder {...props} />
    </div>
  );
}
```

### Styles

The library now **automatically injects its styles** when imported, so you don't need to manually import the CSS file in most cases.

#### Automatic Style Injection

When you import any component from the library, the styles are automatically injected into the document:

```jsx
// Just import components - styles are automatically injected
import { FormBuilder } from 'my-react-library';
```

#### Manual Style Import (Fallback)

In rare cases where automatic injection fails (you'll see a console warning), you can manually import the styles:

```jsx
// Manual import if needed
import 'my-react-library/dist/styles.css';
```

If you're using a CSS/SCSS file:

```css
@import 'my-react-library/dist/styles.css';
```

Alternatively, if you're using webpack, you can use the `style-loader` to automatically inject the styles:

```js
// webpack.config.js
module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.css$/,
        include: /node_modules\/my-react-library/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};
```

## Troubleshooting

### Styles are not being applied (rare)

If you're experiencing issues with styles not being applied:

1. Check the browser console for any warnings from 'my-react-library' about style injection
2. Try manually importing the CSS file as shown in the "Manual Style Import" section
3. If you're using a bundler like webpack, ensure it's configured to handle CSS files from node_modules
4. Check if your bundler is configured to extract CSS into a separate file and that the file is being included in your HTML

### Testing if styles are properly imported

We provide a utility script to help you verify if the styles are being properly imported in your application:

```jsx
// In your browser console or in your application code
import { checkStylesImported } from 'my-react-library/example/style-test';

// Run the check
checkStylesImported();
```

This will check if the library's styles are present in the document and provide feedback.

## Examples

Check out the `example` directory for sample usage:

- `example/index.js` - Shows how to import and use components with proper style imports
- `example/index.html` - Shows how to use the library in a basic HTML page
- `example/style-test.js` - Utility to verify if styles are properly imported

## License

MIT
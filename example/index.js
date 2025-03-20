// Example usage of my-react-library
import React from 'react';
import ReactDOM from 'react-dom';
import { FormBuilder } from 'my-react-library';
// Note: Styles are automatically injected when importing components
// Manual import is only needed as a fallback if auto-injection fails:
// import 'my-react-library/dist/styles.css';

// Sample form schema
const formSchema = {
  fields: [
    {
      name: 'name',
      label: 'Full Name',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      label: 'Email Address',
      type: 'text',
      required: true,
    },
    {
      name: 'options',
      label: 'Select Options',
      type: 'select',
      options: [
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' },
        { label: 'Option 3', value: '3' },
      ],
    },
  ],
};

function App() {
  const handleSubmit = (data) => {
    console.log('Form submitted:', data);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Form Example</h1>
      <FormBuilder 
        schema={formSchema}
        onSubmit={handleSubmit}
        submitButtonText="Submit Form"
      />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
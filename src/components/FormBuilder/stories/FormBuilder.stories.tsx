import type { Meta, StoryObj } from '@storybook/react';
import { FormBuilder } from '../FormBuilder';
import type { FormConfig, WrapperProps } from '../../../types/form';
import { useFormBuilder } from '../../../hooks/useFormBuilder';

// Define custom wrapper components for stories
const CustomRowWrapper = ({ children, id }: WrapperProps) => (
  <div className="mb-8 border border-gray-200 p-4 rounded-lg">
    <div className="mb-2 font-semibold text-gray-700">
      Row: {id}
    </div>
    {children}
  </div>
);

const CustomColumnWrapper = ({ children, id }: WrapperProps) => (
  <div className="p-2 border border-blue-200 rounded-lg bg-blue-50">
    <div className="mb-2 text-sm text-blue-700">
      Column: {id}
    </div>
    {children}
  </div>
);

const ImportantFieldWrapper = ({ children, id }: WrapperProps) => (
  <div className="p-4 border-2 border-red-500 rounded-lg bg-red-100">
    <div className="font-bold text-red-700 mb-2">
      Important Field: {id}
    </div>
    {children}
  </div>
);

const CardWrapper = ({ children, id }: WrapperProps) => (
  <div className="mb-6 shadow-md rounded-lg overflow-hidden">
    <div className="bg-gray-800 text-white p-3 font-medium">
      {id}
    </div>
    <div className="p-4 bg-white">
      {children}
    </div>
  </div>
);

const SideBySideWrapper = ({ children }: WrapperProps) => (
  <div className="flex flex-row gap-4 w-full md:flex-row sm:flex-col">
    {children}
  </div>
);

// Example form configuration
const simpleFormConfig: FormConfig = {
  rows: [
    {
      id: 'personalInfo',
      columns: [
        {
          id: 'name',
          type: 'text',
          label: 'Full Name',
          required: true,
        },
        {
          id: 'email',
          type: 'text',
          label: 'Email Address',
          required: true,
          validation: {
            pattern: '^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$',
            message: 'Please enter a valid email address',
          },
        },
      ],
    },
    {
      id: 'preferences',
      columns: [
        {
          id: 'country',
          type: 'select',
          label: 'Country',
          required: true,
          options: [
            { value: 'us', label: 'United States' },
            { value: 'ca', label: 'Canada' },
            { value: 'mx', label: 'Mexico' },
            { value: 'uk', label: 'United Kingdom' },
          ],
        },
      ],
    },
  ],
};

// Complex form configuration with all field types
const complexFormConfig: FormConfig = {
  rows: [
    {
      id: 'personalInfo',
      wrapper: CardWrapper, // Using CardWrapper for this row
      columns: [
        {
          id: 'name',
          type: 'text',
          label: 'Full Name',
          required: true,
          wrapper: ImportantFieldWrapper, // Using ImportantFieldWrapper for this field
        },
        {
          id: 'email',
          type: 'text',
          label: 'Email Address',
          required: true,
          validation: {
            pattern: '^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$',
            message: 'Please enter a valid email address',
          },
        },
      ],
    },
    {
      id: 'maskedFields',
      columns: [
        {
          id: 'phone',
          type: 'text',
          label: 'Phone Number',
          placeholder: '(123) 456-7890',
          mask: '(###) ###-####',
          validation: {
            pattern: '^\\d{10}$',
            message: 'Phone number must be 10 digits',
          },
        },
        {
          id: 'ssn',
          type: 'text',
          label: 'Social Security Number',
          placeholder: '123-45-6789',
          mask: '###-##-####',
          validation: {
            pattern: '^\\d{9}$',
            message: 'SSN must be 9 digits',
          },
        },
      ],
    },
    {
      id: 'preferences',
      wrapper: SideBySideWrapper, // Using SideBySideWrapper for this row
      columns: [
        {
          id: 'country',
          type: 'select',
          label: 'Country',
          required: true,
          options: [
            { value: 'us', label: 'United States' },
            { value: 'ca', label: 'Canada' },
            { value: 'mx', label: 'Mexico' },
            { value: 'uk', label: 'United Kingdom' },
            { value: 'fr', label: 'France' },
            { value: 'de', label: 'Germany' },
          ],
        },
        {
          id: 'interests',
          type: 'chip',
          label: 'Interests',
          required: true,
          options: [
            'Technology',
            'Sports',
            'Music',
            'Art',
            'Travel',
            'Food',
            'Fashion',
            'Science',
          ],
          minItems: 2,
          maxItems: 5,
        },
      ],
    },
    {
      id: 'contactInfo',
      columns: [
        {
          id: 'phoneNumbers',
          type: 'array',
          label: 'Phone Numbers',
          minItems: 1,
          maxItems: 3,
          template: {
            type: 'text',
            placeholder: 'Enter phone number',
          },
        },
      ],
    },
  ],
};

// FormBuilder wrapper component for stories
const FormBuilderWrapper = ({
  config,
  wrapperStyle = 'none',
  showFieldWrapper = false
}: {
  config: FormConfig;
  wrapperStyle?: 'none' | 'custom' | 'card' | 'sideBySide';
  showFieldWrapper?: boolean;
}) => {
  const form = useFormBuilder(config, {
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      ssn: '',
      country: '',
      interests: [],
      phoneNumbers: [''],
    },
    mode: 'onChange',
  });

  // Get the appropriate row wrapper based on the style
  const getRowWrapper = () => {
    switch (wrapperStyle) {
      case 'custom':
        return CustomRowWrapper;
      case 'card':
        return CardWrapper;
      case 'sideBySide':
        return SideBySideWrapper;
      default:
        return undefined;
    }
  };

  // Get the column wrapper if needed
  const getColumnWrapper = () => {
    return showFieldWrapper ? CustomColumnWrapper : undefined;
  };

  return (
    <div className="w-[900px] mx-auto p-8 my-8 bg-white shadow-md rounded-lg">
      <FormBuilder
        config={config}
        form={form}
        RowWrapper={getRowWrapper()}
        ColumnWrapper={getColumnWrapper()}
      />
      
      <div className="mt-8 p-4 border border-gray-200 rounded-lg bg-gray-50">
        <h3 className="text-lg font-semibold mb-2">Form State</h3>
        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto text-xs">
          {JSON.stringify(form.state.raw, null, 2)}
        </pre>
      </div>
    </div>
  );
};

// Meta information for the component
const meta = {
  title: 'FormBuilder/FormBuilder',
  component: FormBuilderWrapper,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'light-gray',
      values: [
        { name: 'light-gray', value: '#f5f5f5' },
        { name: 'white', value: '#ffffff' },
      ],
    },
  },
  decorators: [
    (Story) => (
      <div className="flex justify-center p-4 bg-gray-50 min-h-screen">
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    config: {
      control: 'object',
      description: 'Form configuration object',
    },
    wrapperStyle: {
      control: 'select',
      options: ['none', 'custom', 'card', 'sideBySide'],
      description: 'Style of row wrapper to use',
    },
    showFieldWrapper: {
      control: 'boolean',
      description: 'Show column wrapper for fields',
    },
  },
} satisfies Meta<typeof FormBuilderWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

// Simple form story
export const SimpleForm: Story = {
  args: {
    config: simpleFormConfig,
    wrapperStyle: 'none',
    showFieldWrapper: false,
  },
};

// Complex form story
export const ComplexForm: Story = {
  args: {
    config: complexFormConfig,
    wrapperStyle: 'none',
    showFieldWrapper: false,
  },
};

// Form with custom row wrappers
export const FormWithCustomRowWrappers: Story = {
  args: {
    config: complexFormConfig,
    wrapperStyle: 'custom',
    showFieldWrapper: false,
  },
};

// Form with card style wrappers
export const FormWithCardWrappers: Story = {
  args: {
    config: complexFormConfig,
    wrapperStyle: 'card',
    showFieldWrapper: false,
  },
};

// Form with side by side layout
export const FormWithSideBySideLayout: Story = {
  args: {
    config: complexFormConfig,
    wrapperStyle: 'sideBySide',
    showFieldWrapper: false,
  },
};

// Form with column wrappers
export const FormWithColumnWrappers: Story = {
  args: {
    config: complexFormConfig,
    wrapperStyle: 'custom',
    showFieldWrapper: true,
  },
};
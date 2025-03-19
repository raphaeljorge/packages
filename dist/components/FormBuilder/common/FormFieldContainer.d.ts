import type React from 'react';
export interface FormFieldContainerProps {
  id: string;
  label?: string;
  required?: boolean;
  hint?: string;
  error?: string;
  isLoading?: boolean;
  children: React.ReactNode;
  loadingContent?: React.ReactNode;
  className?: string;
}
/**
 * Common container for all form fields
 * Provides consistent styling and structure
 */
declare const FormFieldContainer: React.FC<FormFieldContainerProps>;
export default FormFieldContainer;

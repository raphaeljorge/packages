import type React from 'react';
interface FormLabelProps {
  id: string;
  label?: string;
  required?: boolean;
  hint?: string;
}
/**
 * Common form label component used across all form fields
 */
declare const FormLabel: React.FC<FormLabelProps>;
export default FormLabel;

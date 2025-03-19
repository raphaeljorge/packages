import type { FormBuilderOptions, FormBuilderReturn, FormConfig } from '../types/form';
/**
 * Custom hook for form state management
 */
export declare const useFormBuilder: (
  config: FormConfig,
  options?: FormBuilderOptions
) => FormBuilderReturn;

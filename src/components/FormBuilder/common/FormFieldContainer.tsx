import type React from 'react';
import { classNames } from '../../../utils/classNames';
import { FormError, FormLabel } from './';
import styles from './FormFieldContainer.module.css';

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
const FormFieldContainer: React.FC<FormFieldContainerProps> = ({
  id,
  label,
  required,
  hint,
  error,
  isLoading = false,
  children,
  loadingContent,
  className,
}) => {
  return (
    <div className={classNames(styles.formFieldContainer, isLoading && styles.loading, className)}>
      <FormLabel id={id} label={label} required={required} hint={hint} />

      {isLoading && loadingContent ? loadingContent : children}

      <FormError error={error} />
    </div>
  );
};

export default FormFieldContainer;

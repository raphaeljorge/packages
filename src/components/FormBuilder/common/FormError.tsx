import type React from 'react';
import styles from './FormError.module.css';

interface FormErrorProps {
  error?: string;
}

/**
 * Common form error component used across all form fields
 */
const FormError: React.FC<FormErrorProps> = ({ error }) => {
  if (!error) return null;

  return <div className={styles.formError}>{error}</div>;
};

export default FormError;

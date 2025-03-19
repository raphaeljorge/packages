import type React from 'react';
import { classNames } from '../../../utils/classNames';
import styles from './FormError.module.css';

interface FormErrorProps {
  error?: string;
}

/**
 * Common form error component used across all form fields
 */
const FormError: React.FC<FormErrorProps> = ({ error }) => {
  if (!error) return null;

  return <div className={classNames(styles.formError, 'mt-1 text-sm text-red-500')}>{error}</div>;
};

export default FormError;

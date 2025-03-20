import type React from 'react';
import styles from './FormLabel.module.css';

interface FormLabelProps {
  id: string;
  label?: string;
  required?: boolean;
  hint?: string;
}

/**
 * Common form label component used across all form fields
 */
const FormLabel: React.FC<FormLabelProps> = ({ id, label, required, hint }) => {
  if (!label) return null;

  return (
    <label
      htmlFor={id}
      className={styles.formLabel}
    >
      {label}
      {required && (
        <span className={styles.requiredMark}>
          *
        </span>
      )}
      {hint && (
        <span className={styles.formHint}>({hint})</span>
      )}
    </label>
  );
};

export default FormLabel;

import type React from 'react';
import { useEffect, useRef } from 'react';
import type { FieldOption } from '../../../../types/form';
import { classNames } from '../../../../utils/classNames';
import { FormFieldContainer } from '../../common';
import type { SelectFieldProps } from '../types';
import styles from './SelectField.module.css';

/**
 * Select field component using uncontrolled input with ref
 */
const SelectField: React.FC<SelectFieldProps> = ({
  field,
  value,
  onChange,
  error,
  isLoading = false,
}) => {
  // Use ref for uncontrolled select
  const selectRef = useRef<HTMLSelectElement>(null);

  // Update select value when value prop changes
  useEffect(() => {
    if (selectRef.current && selectRef.current.value !== value) {
      selectRef.current.value = value || '';
    }
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  // Normalize options to { value, label } format
  interface NormalizedOption {
    value: string;
    label: string;
  }

  const normalizedOptions: NormalizedOption[] = field.options.map((option: FieldOption): NormalizedOption => {
    if (typeof option === 'string') {
      return { value: option, label: option };
    }
    return option;
  });

  // Skeleton loading state for the field
  const loadingContent = (
    <div className={styles.formSkeleton}>
      <div className={styles.skeletonInput} />
    </div>
  );

  // Normal select content
  const fieldContent = (
    <select
      ref={selectRef}
      id={field.id}
      className={classNames(
        styles.formSelect,
        error && styles.formSelectError
      )}
      defaultValue={value || ''}
      onChange={handleChange}
      disabled={isLoading}
    >
      <option value="">{field.placeholder || 'Select an option'}</option>

      {normalizedOptions.map((option: FieldOption) => {
        if (typeof option === 'string') {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        }

        return (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        );
      })}
    </select>
  );

  return (
    <FormFieldContainer
      id={field.id}
      label={field.label}
      required={field.required}
      error={error}
      isLoading={isLoading}
      loadingContent={loadingContent}
      className={classNames(styles.formField, isLoading && styles.loading)}
    >
      {fieldContent}
    </FormFieldContainer>
  );
};

export default SelectField;

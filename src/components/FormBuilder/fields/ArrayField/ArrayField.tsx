import type React from 'react';
import { useEffect, useState } from 'react';
import { classNames } from '../../../../utils/classNames';
import { FormFieldContainer } from '../../common';
import TextField from '../TextField';
import type { ArrayFieldProps } from '../types';
import styles from './ArrayField.module.css';

/**
 * Array field component with local state
 */
const ArrayField: React.FC<ArrayFieldProps> = ({
  field,
  value = [],
  onChange,
  error,
  arrayOperations,
  isLoading = false,
}) => {
  // Use local state to track array items
  const [items, setItems] = useState<any[]>(value || []);

  // Update local state when value prop changes
  useEffect(() => {
    setItems(value || []);
  }, [value]);

  // Add a new item to the array
  const addItem = () => {
    if (isLoading) return;

    // Check if we've reached the maximum number of items
    if (field.maxItems && items.length >= field.maxItems) {
      return;
    }

    // Use arrayOperations to add a new item
    // This will update the form state, which will trigger the useEffect
    // that updates the local state
    arrayOperations.add('');
  };

  // Remove an item from the array
  const removeItem = (index: number) => {
    if (isLoading) return;

    // Check if we're at the minimum number of items
    if (field.minItems && items.length <= field.minItems) {
      return;
    }

    // Use arrayOperations to remove an item
    // This will update the form state, which will trigger the useEffect
    // that updates the local state
    arrayOperations.remove(index);
  };

  // Update an item in the array
  const updateItem = (index: number, itemValue: string) => {
    if (isLoading) return;

    if (arrayOperations.update) {
      // Use arrayOperations.update if available
      arrayOperations.update(index, itemValue);
    } else {
      // Fall back to direct update if update method is not available
      const newItems = [...items];
      newItems[index] = itemValue;

      // Update local state and notify parent
      setItems(newItems);
      onChange(newItems);
    }
  };

  // Custom header with label and add button
  const customHeader = (
    <div className={styles.arrayFieldHeader}>
      <button
        type="button"
        className={classNames(
          styles.arrayAddButton,
          isLoading || (field.maxItems ? items.length >= field.maxItems : false) && styles.disabled
        )}
        onClick={addItem}
        disabled={isLoading || (field.maxItems ? items.length >= field.maxItems : false)}
        aria-label="Add item"
      >
        Add
      </button>
    </div>
  );

  // Skeleton loading state for the field
  const loadingContent = (
    <div className={styles.formSkeleton}>
      <div className={styles.skeletonArrayItems}>
        <div className={styles.skeletonArrayItem}>
          <div className={styles.skeletonInput} />
          <div className={styles.skeletonButton} />
        </div>
        {items.length > 1 && (
          <div className={styles.skeletonArrayItem}>
            <div className={styles.skeletonInput} />
            <div className={styles.skeletonButton} />
          </div>
        )}
      </div>
    </div>
  );

  // Normal field content
  const fieldContent = (
    <>
      {customHeader}

      {items.length === 0 && !isLoading && (
        <div className={styles.arrayEmptyMessage}>
          No items added yet. Click "Add" to add an item.
        </div>
      )}

      {items.length > 0 && !isLoading && (
        <div className={styles.arrayItems}>
          {items.map((item, index) => (
            <div
              key={`${field.id}-item-${index}`}
              className={styles.arrayItem}
            >
              <div className={styles.arrayItemContent}>
                {field.template.type === 'text' && (
                  <TextField
                    field={
                      {
                        ...field.template,
                        id: `${field.id}-${index}`,
                        label: `Item ${index + 1}`,
                        type: 'text',
                      } as any
                    }
                    value={item}
                    onChange={(value) => updateItem(index, value)}
                    isLoading={isLoading}
                  />
                )}
                {/* Add support for other field types as needed */}
              </div>

              <button
                type="button"
                className={classNames(
                  styles.arrayRemoveButton,
                  isLoading || (field.minItems ? items.length <= field.minItems : false) && styles.disabled
                )}
                onClick={() => removeItem(index)}
                disabled={isLoading || (field.minItems ? items.length <= field.minItems : false)}
                aria-label={`Remove item ${index + 1}`}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </>
  );

  return (
    <FormFieldContainer
      id={field.id}
      label={field.label}
      required={field.required}
      hint={field.minItems ? `Minimum ${field.minItems}` : undefined}
      error={error}
      isLoading={isLoading}
      loadingContent={loadingContent}
      className={classNames(
        styles.formField,
        styles.arrayField,
        isLoading && styles.loading
      )}
    >
      {fieldContent}
    </FormFieldContainer>
  );
};

export default ArrayField;

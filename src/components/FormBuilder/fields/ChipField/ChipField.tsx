import type React from 'react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { classNames } from '../../../../utils/classNames';
import { FormFieldContainer } from '../../common';
import type { ChipFieldProps } from '../types';
import styles from './ChipField.module.css';

// Define a normalized option type to ensure it always has value and label
interface NormalizedOption {
  value: string;
  label: string;
}

/**
 * Chip field component with autocomplete
 */
const ChipField: React.FC<ChipFieldProps> = ({
  field,
  value = [],
  onChange,
  error,
  isLoading = false,
}) => {
  // Use local state to track selected chips
  const [selectedChips, setSelectedChips] = useState<string[]>(value || []);
  // State for the autocomplete input
  const [inputValue, setInputValue] = useState<string>('');
  // State for showing/hiding the dropdown
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  // State for filtered options
  const [filteredOptions, setFilteredOptions] = useState<NormalizedOption[]>([]);
  // Ref for the input element
  const inputRef = useRef<HTMLInputElement>(null);

  // Update local state when value prop changes
  useEffect(() => {
    setSelectedChips(value || []);
  }, [value]);

  // Normalize options to { value, label } format
  const normalizedOptions = useMemo(() => {
    return field.options.map((option: string | NormalizedOption): NormalizedOption => {
      if (typeof option === 'string') {
      return { value: option, label: option };
      }
      return option as NormalizedOption;
    });
  }, [field.options]);

  // Filter options based on input value and already selected chips
  useEffect(() => {
    if (inputValue.trim() === '') {
      setFilteredOptions([]);
      return;
    }

    const filtered = normalizedOptions.filter(
      (option: NormalizedOption) =>
        // Filter by input value (case insensitive)
        option.label.toLowerCase().includes(inputValue.toLowerCase()) &&
        // Filter out already selected options
        !selectedChips.includes(option.value)
    );

    setFilteredOptions(filtered);
  }, [inputValue, normalizedOptions, selectedChips]);

  // Add a chip
  const addChip = (chipValue: string) => {
    if (isLoading) return;

    // Check if already selected
    if (selectedChips.includes(chipValue)) return;

    // Check if we've reached the maximum number of items
    if (field.maxItems && selectedChips.length >= field.maxItems) {
      return;
    }

    // Add the chip
    const newSelectedChips = [...selectedChips, chipValue];

    // Update local state
    setSelectedChips(newSelectedChips);

    // Clear input
    setInputValue('');

    // Hide dropdown
    setShowDropdown(false);

    // Notify parent component
    onChange(newSelectedChips);
  };

  // Remove a chip
  const removeChip = (chipValue: string) => {
    if (isLoading) return;

    // Remove the chip
    const newSelectedChips = selectedChips.filter((v) => v !== chipValue);

    // Update local state
    setSelectedChips(newSelectedChips);

    // Notify parent component
    onChange(newSelectedChips);
  };

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setShowDropdown(true);
  };

  // Handle input focus
  const handleInputFocus = () => {
    if (inputValue.trim() !== '') {
      setShowDropdown(true);
    }
  };

  // Handle input blur
  const handleInputBlur = () => {
    // Delay hiding the dropdown to allow for option selection
    setTimeout(() => {
      setShowDropdown(false);
    }, 200);
  };

  // Handle option selection
  const handleOptionSelect = (option: NormalizedOption) => {
    addChip(option.value);

    // Focus the input after selection
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  // Skeleton loading state for the field
  const loadingContent = (
    <div className={styles.formSkeleton}>
      <div className={styles.skeletonInput} />
      <div className={styles.skeletonChips}>
        <div className={styles.skeletonChip} />
        <div className={styles.skeletonChip} />
      </div>
    </div>
  );

  // Normal field content
  const fieldContent = (
    <>
      {/* Autocomplete input */}
      <div className={styles.chipAutocomplete}>
        <input
          ref={inputRef}
          type="text"
          className={styles.formInput}
          placeholder={field.placeholder || 'Type to search...'}
          value={inputValue}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          disabled={isLoading || (field.maxItems ? selectedChips.length >= field.maxItems : false)}
        />

        {/* Dropdown for autocomplete options */}
        {showDropdown && filteredOptions.length > 0 && (
          <div className={styles.chipDropdown}
          >
            {filteredOptions.map((option) => (
              <button
                key={option.value}
                type="button"
                className={styles.chipOption}
                onClick={() => handleOptionSelect(option)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleOptionSelect(option);
                  }
                }}
              >
                {option.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Selected chips */}
      {!isLoading && (
        <div className={styles.chipContainer}>
          {selectedChips.map((chipValue) => {
            // Find the option for this chip
            const option = normalizedOptions.find(
              (opt: NormalizedOption) => opt.value === chipValue
            );
            const chipLabel = option ? option.label : chipValue;

            return (
              <div
                key={chipValue}
                className={classNames(
                  styles.chip,
                  styles.chipSelected
                )}
              >
                <span className={styles.chipLabel}>{chipLabel}</span>
                <button
                  type="button"
                  className={styles.chipRemove}
                  onClick={() => removeChip(chipValue)}
                  aria-label={`Remove ${chipLabel}`}
                >
                  ×
                </button>
              </div>
            );
          })}
        </div>
      )}
    </>
  );

  return (
    <FormFieldContainer
      id={field.id}
      label={field.label}
      required={field.required}
      hint={field.minItems ? `Select at least ${field.minItems}` : undefined}
      error={error}
      isLoading={isLoading}
      loadingContent={loadingContent}
      className={classNames(styles.formField, isLoading && styles.loading)}
    >
      {fieldContent}
    </FormFieldContainer>
  );
};

export default ChipField;

import React from 'react';
import styles from './Button.module.css';

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
}) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]} rounded-md px-4 py-2`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
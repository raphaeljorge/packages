export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'password';
  required?: boolean;
}
export interface QueryConfig {
  enabled?: boolean;
  retry?: number;
  retryDelay?: number;
}

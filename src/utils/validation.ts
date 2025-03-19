export const required = (value: unknown): string | undefined => {
  if (!value) {
    return 'This field is required';
  }
  return undefined;
};

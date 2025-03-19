import type { StoryObj } from '@storybook/react';
declare const meta: {
  title: string;
  component: import('react').FC<import('./Button').ButtonProps>;
  parameters: {
    layout: string;
  };
  tags: string[];
  argTypes: {
    variant: {
      control: string;
      options: string[];
    };
    onClick: {
      action: string;
    };
  };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
export declare const Secondary: Story;
export declare const WithCustomOnClick: Story;

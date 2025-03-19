import type { StoryObj } from '@storybook/react';
declare const meta: {
  title: string;
  component: ({
    user,
    onLogin,
    onLogout,
    onCreateAccount,
  }: import('./Header').HeaderProps) => import('react/jsx-runtime').JSX.Element;
  tags: string[];
  parameters: {
    layout: string;
  };
  args: {
    onLogin: import('@storybook/test').Mock<[], void>;
    onLogout: import('@storybook/test').Mock<[], void>;
    onCreateAccount: import('@storybook/test').Mock<[], void>;
  };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const LoggedIn: Story;
export declare const LoggedOut: Story;

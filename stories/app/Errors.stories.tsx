import type { Meta, StoryObj } from '@storybook/react-native';

const meta = {
  title: 'QA/Errors',
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const ThrowsInRender: Story = {
  render: () => { throw new Error('QA: throws in render'); },
};

export const NeverSettles: Story = {
  // Hangs longer than the worker's 1 minute comparison timeout
  loaders: [() => new Promise(() => {})],
  render: () => <></>,
};

export const CrashesApp: Story = {
  render: () => {
    setTimeout(() => { throw new Error('QA: fatal outside render'); }, 0);
    return <></>;
  },
};

import type { Meta, StoryObj } from '@storybook/react-native';

import { ThemedText } from '@/components/themed-text';

const meta = {
  title: 'Component/ThemedText',
  component: ThemedText,
  args: {
    children: 'The quick brown fox',
  },
} satisfies Meta<typeof ThemedText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Title: Story = {
  args: { type: 'title', children: 'Feed' },
};

export const Subtitle: Story = {
  args: { type: 'subtitle', children: "Today's posts" },
};

export const SemiBold: Story = {
  args: { type: 'defaultSemiBold', children: 'luna_the_pup' },
};

export const Link: Story = {
  args: { type: 'link', children: 'See all comments' },
};

export const Subtitle2: Story = {
  args: { type: 'subtitle', children: 'Following' },
};

import type { Meta, StoryObj } from '@storybook/react-native';

import FeedScreen from '@/app/(tabs)/index';
import { mockPosts } from '@/data/mock';

const meta = {
  title: 'Screen/Feed',
  component: FeedScreen,
} satisfies Meta<typeof FeedScreen>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  args: {
    posts: [],
  },
};

export const Default: Story = {
  args: {
    posts: mockPosts.slice(0, 4),
  },
};

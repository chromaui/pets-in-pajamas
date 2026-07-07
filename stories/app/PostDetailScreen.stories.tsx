import type { Meta, StoryObj } from '@storybook/react-native';

import PostDetailScreen from '@/app/post/[id]';
import { mockPosts } from '@/data/mock';

const meta = {
  title: 'Screen/PostDetail',
  component: PostDetailScreen,
} satisfies Meta<typeof PostDetailScreen>;

export default meta;

type Story = StoryObj<typeof meta>;

export const FewComments: Story = {
  args: {
    post: mockPosts[2],
  },
};

export const ManyComments: Story = {
  args: {
    post: mockPosts[1],
  },
};

export const Comment: Story = {
  args: {
    post: mockPosts[0],
  },
};

import type { Meta, StoryObj } from '@storybook/react-native';

import ProfileScreen from '@/components/screens/profile-screen';
import { mockAuthors, mockPosts } from '@/data/mock';

const meta = {
  title: 'Screen/Profile',
  component: ProfileScreen,
} satisfies Meta<typeof ProfileScreen>;

export default meta;

type Story = StoryObj<typeof meta>;

export const OwnProfile: Story = {
  args: {
    user: mockAuthors[0],
    posts: mockPosts.filter((p) => p.author.id === mockAuthors[0].id),
    viewerRelationship: 'self',
  },
};

export const OtherUserProfile: Story = {
  args: {
    user: mockAuthors[1],
    posts: mockPosts.filter((p) => p.author.id === mockAuthors[1].id),
    viewerRelationship: 'other',
    isFollowing: false,
  },
};

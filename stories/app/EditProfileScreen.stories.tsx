import type { Meta, StoryObj } from '@storybook/react-native';

import EditProfileScreen from '@/app/profile/edit';
import { mockAuthors } from '@/data/mock';

const meta = {
  title: 'Screen/EditProfile',
  component: EditProfileScreen,
} satisfies Meta<typeof EditProfileScreen>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithUser: Story = {
  args: {
    user: mockAuthors[0],
  },
};

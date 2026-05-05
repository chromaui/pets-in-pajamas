import type { Meta, StoryObj } from '@storybook/react-native';

import EditProfileScreen from '@/app/profile/edit';

const meta = {
  title: 'Screen/EditProfile',
  component: EditProfileScreen,
} satisfies Meta<typeof EditProfileScreen>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

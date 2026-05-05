import ProfileScreen from '@/components/screens/profile-screen';
import { mockAuthors, mockPosts } from '@/data/mock';

export default function OtherUserProfileScreen() {
  const user = mockAuthors[1];
  const posts = mockPosts.filter((p) => p.author.id === user.id);

  return (
    <ProfileScreen
      user={user}
      posts={posts}
      viewerRelationship="other"
    />
  );
}

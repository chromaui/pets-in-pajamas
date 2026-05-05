import { Image } from 'expo-image';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { mockPosts } from '@/data/mock';
import { useThemeColor } from '@/hooks/use-theme-color';
import { Post } from '@/types';

interface FeedScreenProps {
  posts?: Post[];
}

function PostCard({ post }: { post: Post }) {
  const borderColor = useThemeColor({}, 'icon');
  const iconColor = useThemeColor({}, 'icon');

  return (
    <ThemedView style={styles.card}>
      <View style={styles.cardHeader}>
        <Image
          source={post.author.avatar}
          style={[styles.avatar, { borderColor }]}
          contentFit="cover"
        />
        <View style={styles.cardHeaderText}>
          <ThemedText type="defaultSemiBold">{post.author.username}</ThemedText>
        </View>
        <ThemedText style={[styles.moreButton, { color: iconColor }]}>•••</ThemedText>
      </View>

      <Image source={post.image} style={styles.postImage} contentFit="cover" />

      <View style={styles.cardActions}>
        <View style={styles.cardActionsLeft}>
          <IconSymbol name="heart" size={24} color={iconColor} />
          <IconSymbol name="bubble.left" size={24} color={iconColor} />
          <IconSymbol name="square.and.arrow.up" size={24} color={iconColor} />
        </View>
        <IconSymbol name="bookmark" size={24} color={iconColor} />
      </View>

      <View style={styles.cardBody}>
        <ThemedText type="defaultSemiBold">
          {post.likeCount.toLocaleString()} likes
        </ThemedText>
        <ThemedText>
          <ThemedText type="defaultSemiBold">{post.author.username} </ThemedText>
          {post.caption}
        </ThemedText>
        {post.commentCount > 0 && (
          <ThemedText style={styles.viewComments}>
            View all {post.commentCount} comments
          </ThemedText>
        )}
        <ThemedText style={styles.timestamp}>
          {formatRelativeTime(post.postedAt)}
        </ThemedText>
      </View>
    </ThemedView>
  );
}

function formatRelativeTime(isoString: string): string {
  const seconds = Math.floor((Date.now() - new Date(isoString).getTime()) / 1000);
  if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
  if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
  return `${Math.floor(seconds / 86400)}d ago`;
}

export default function FeedScreen({ posts = mockPosts }: FeedScreenProps) {
  const { top } = useSafeAreaInsets();

  if (posts.length === 0) {
    return (
      <ThemedView style={styles.emptyContainer}>
        <ThemedText type="title" style={styles.emptyIcon}>🐾</ThemedText>
        <ThemedText type="subtitle">No posts yet</ThemedText>
        <ThemedText style={styles.emptySubtext}>
          Follow some pets to see their posts here.
        </ThemedText>
      </ThemedView>
    );
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingTop: top }}
      showsVerticalScrollIndicator={false}>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    padding: 32,
  },
  emptyIcon: {
    fontSize: 48,
    lineHeight: 60,
  },
  emptySubtext: {
    textAlign: 'center',
    opacity: 0.6,
    marginTop: 4,
  },
  card: {
    marginBottom: 8,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    gap: 10,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 1,
  },
  cardHeaderText: {
    flex: 1,
  },
  moreButton: {
    fontSize: 18,
    letterSpacing: 2,
  },
  postImage: {
    width: '100%',
    aspectRatio: 1,
  },
  cardActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  cardActionsLeft: {
    flexDirection: 'row',
    gap: 16,
  },
  cardBody: {
    paddingHorizontal: 12,
    paddingBottom: 12,
    gap: 4,
  },
  viewComments: {
    opacity: 0.5,
    marginTop: 2,
  },
  timestamp: {
    fontSize: 11,
    opacity: 0.4,
    marginTop: 2,
    textTransform: 'uppercase',
  },
});

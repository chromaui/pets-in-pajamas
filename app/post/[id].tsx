import { Image } from 'expo-image';
import { ScrollView, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { mockPosts } from '@/data/mock';
import { useThemeColor } from '@/hooks/use-theme-color';
import { Comment, Post } from '@/types';

interface PostDetailScreenProps {
  post?: Post;
}

function CommentRow({ comment }: { comment: Comment }) {
  const borderColor = useThemeColor({}, 'icon');

  return (
    <View style={styles.commentRow}>
      <Image
        source={comment.author.avatar}
        style={[styles.commentAvatar, { borderColor }]}
        contentFit="cover"
      />
      <View style={styles.commentBody}>
        <ThemedText>
          <ThemedText type="defaultSemiBold">{comment.author.username} </ThemedText>
          {comment.body}
        </ThemedText>
        <ThemedText style={styles.commentTime}>
          {formatRelativeTime(comment.postedAt)}
        </ThemedText>
      </View>
    </View>
  );
}

function formatRelativeTime(isoString: string): string {
  const seconds = Math.floor((Date.now() - new Date(isoString).getTime()) / 1000);
  if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
  if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
  return `${Math.floor(seconds / 86400)}d ago`;
}

export default function PostDetailScreen({ post = mockPosts[0] }: PostDetailScreenProps) {
  const borderColor = useThemeColor({}, 'icon');
  const inputBackground = useThemeColor({ light: '#f5f5f5', dark: '#1e1e1e' }, 'background');

  return (
    <ThemedView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image source={post.image} style={styles.postImage} contentFit="cover" />

        <ThemedView style={styles.postHeader}>
          <Image
            source={post.author.avatar}
            style={[styles.avatar, { borderColor }]}
            contentFit="cover"
          />
          <View style={styles.postHeaderText}>
            <ThemedText type="defaultSemiBold">{post.author.username}</ThemedText>
            <ThemedText style={styles.timestamp}>{formatRelativeTime(post.postedAt)}</ThemedText>
          </View>
        </ThemedView>

        <View style={styles.caption}>
          <ThemedText>
            <ThemedText type="defaultSemiBold">{post.author.username} </ThemedText>
            {post.caption}
          </ThemedText>
        </View>

        <View style={styles.stats}>
          <ThemedText type="defaultSemiBold">
            {post.likeCount.toLocaleString()} likes
          </ThemedText>
          <ThemedText style={styles.commentCount}>
            {post.commentCount} comments
          </ThemedText>
        </View>

        <View style={styles.divider} />

        <View style={styles.comments}>
          {post.comments.map((comment) => (
            <CommentRow key={comment.id} comment={comment} />
          ))}
        </View>
      </ScrollView>

      <View style={[styles.inputBar, { borderTopColor: borderColor }]}>
        <TextInput
          style={[styles.input, { backgroundColor: inputBackground, color: borderColor }]}
          placeholder="Add a comment..."
          placeholderTextColor={borderColor}
          editable={false}
        />
        <TouchableOpacity style={styles.sendButton} onPress={() => {}}>
          <ThemedText type="defaultSemiBold" lightColor="#0a7ea4" darkColor="#fff">
            Post
          </ThemedText>
        </TouchableOpacity>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  postImage: {
    width: '100%',
    aspectRatio: 1,
  },
  postHeader: {
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
  postHeaderText: {
    flex: 1,
  },
  timestamp: {
    fontSize: 12,
    opacity: 0.5,
  },
  caption: {
    paddingHorizontal: 12,
    paddingBottom: 8,
  },
  stats: {
    flexDirection: 'row',
    gap: 12,
    paddingHorizontal: 12,
    paddingBottom: 12,
  },
  commentCount: {
    opacity: 0.6,
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#ccc',
    marginHorizontal: 12,
    marginBottom: 8,
  },
  comments: {
    paddingHorizontal: 12,
    paddingBottom: 16,
    gap: 16,
  },
  commentRow: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'flex-start',
  },
  commentAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 1,
    flexShrink: 0,
  },
  commentBody: {
    flex: 1,
    gap: 2,
  },
  commentTime: {
    fontSize: 11,
    opacity: 0.4,
    textTransform: 'uppercase',
  },
  inputBar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    gap: 10,
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  input: {
    flex: 1,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    fontSize: 14,
  },
  sendButton: {
    paddingHorizontal: 4,
  },
});

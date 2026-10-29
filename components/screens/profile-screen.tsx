import { Image } from 'expo-image';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useThemeColor } from '@/hooks/use-theme-color';
import { Author, Post } from '@/types';

interface ProfileScreenProps {
  user: Author;
  posts: Post[];
  viewerRelationship: 'self' | 'other';
  isFollowing?: boolean;
}

function StatBlock({ label, value }: { label: string; value: number }) {
  return (
    <View style={styles.statBlock}>
      <ThemedText type="defaultSemiBold" style={styles.statValue}>
        {value.toLocaleString()}
      </ThemedText>
      <ThemedText style={styles.statLabel}>{label}</ThemedText>
    </View>
  );
}

export default function ProfileScreen({
  user,
  posts,
  viewerRelationship,
  isFollowing = false,
}: ProfileScreenProps) {
  const { top } = useSafeAreaInsets();
  const borderColor = useThemeColor({}, 'icon');
  const buttonBackground = useThemeColor({}, 'tint');

  const thumbnailSize = 124;

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingTop: top }} showsVerticalScrollIndicator={false}>
      <ThemedView style={styles.header}>
        <Image
          source={user.avatar}
          style={[styles.avatarLarge, { borderColor }]}
          contentFit="cover"
        />
        <View style={styles.statsRow}>
          <StatBlock label="posts" value={user.postCount} />
          <StatBlock label="followers" value={user.followerCount} />
          <StatBlock label="following" value={user.followingCount} />
        </View>
      </ThemedView>

      <ThemedView style={styles.bioSection}>
        <ThemedText type="defaultSemiBold">{user.displayName}</ThemedText>
        <ThemedText style={styles.bio}>{user.bio}</ThemedText>
      </ThemedView>

      <ThemedView style={styles.actionSection}>
        {viewerRelationship === 'self' ? (
          <TouchableOpacity style={[styles.actionButton, { borderColor }]} onPress={() => {}}>
            <ThemedText type="defaultSemiBold">Edit Profile</ThemedText>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={[
              styles.actionButton,
              isFollowing
                ? { borderColor }
                : { backgroundColor: buttonBackground, borderColor: buttonBackground },
            ]}
            onPress={() => {}}>
            <ThemedText
              type="defaultSemiBold"
              lightColor={isFollowing ? undefined : '#fff'}
              darkColor={isFollowing ? undefined : '#000'}>
              {isFollowing ? 'Following' : 'Follow'}
            </ThemedText>
          </TouchableOpacity>
        )}
      </ThemedView>

      {posts.length === 0 ? (
        <ThemedView style={styles.emptyGrid}>
          <ThemedText type="title" style={styles.emptyIcon}>📷</ThemedText>
          <ThemedText style={styles.emptyText}>No posts yet</ThemedText>
        </ThemedView>
      ) : (
        <View style={styles.grid}>
          {posts.map((post) => (
            <TouchableOpacity key={post.id} onPress={() => {}}>
              <Image
                source={post.image}
                style={{ width: thumbnailSize, height: thumbnailSize }}
                contentFit="cover"
              />
            </TouchableOpacity>
          ))}
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
    gap: 24,
  },
  avatarLarge: {
    width: 86,
    height: 86,
    borderRadius: 43,
    borderWidth: 1,
  },
  statsRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statBlock: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 18,
  },
  statLabel: {
    fontSize: 13,
    opacity: 0.6,
  },
  bioSection: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 4,
    gap: 2,
  },
  bio: {
    opacity: 0.8,
  },
  actionSection: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  actionButton: {
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 7,
    alignItems: 'center',
  },
  emptyGrid: {
    paddingTop: 60,
    alignItems: 'center',
    gap: 8,
  },
  emptyIcon: {
    fontSize: 40,
  },
  emptyText: {
    opacity: 0.5,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 2,
    paddingTop: 2,
  },
});

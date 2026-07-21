import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useThemeColor } from '@/hooks/use-theme-color';

interface CreatePostScreenProps {
  caption?: string;
}

export default function CreatePostScreen({ caption = '' }: CreatePostScreenProps) {
  const borderColor = useThemeColor({}, 'icon');
  const inputBackground = useThemeColor({ light: '#f5f5f5', dark: '#1e1e1e' }, 'background');
  const buttonBackground = useThemeColor({}, 'buttonBackground');

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.heading}>New Post</ThemedText>

      <TouchableOpacity
        style={[styles.photoPlaceholder, { borderColor }]}
        onPress={() => {}}>
        <ThemedText style={styles.cameraIcon}>📷</ThemedText>
        <ThemedText style={styles.photoPrompt}>Tap to select a photo</ThemedText>
      </TouchableOpacity>

      <View style={styles.captionRow}>
        <TextInput
          style={[styles.captionInput, { backgroundColor: inputBackground, color: borderColor }]}
          placeholder="Write a caption..."
          placeholderTextColor={borderColor}
          multiline
          defaultValue={caption}
          editable={false}
        />
      </View>

      <TouchableOpacity
        style={[styles.shareButton, { backgroundColor: buttonBackground }]}
        onPress={() => {}}>
        <ThemedText
          type="defaultSemiBold"
          lightColor="#fff"
          darkColor="#000"
          style={styles.shareButtonText}>
          Share
        </ThemedText>
      </TouchableOpacity>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 20,
  },
  heading: {
    marginTop: 8,
  },
  photoPlaceholder: {
    aspectRatio: 1,
    width: '100%',
    borderWidth: 2,
    borderStyle: 'dashed',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  cameraIcon: {
    fontSize: 48,
    lineHeight: 60,
  },
  photoPrompt: {
    opacity: 0.5,
  },
  captionRow: {
    flex: 1,
  },
  captionInput: {
    borderRadius: 10,
    padding: 12,
    fontSize: 15,
    minHeight: 80,
    textAlignVertical: 'top',
  },
  shareButton: {
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
  },
  shareButtonText: {
    fontSize: 16,
  },
});

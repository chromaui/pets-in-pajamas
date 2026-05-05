import { Image } from 'expo-image';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { mockAuthors } from '@/data/mock';
import { useThemeColor } from '@/hooks/use-theme-color';
import { Author } from '@/types';

interface EditProfileScreenProps {
  user?: Author;
}

function FormField({ label, defaultValue }: { label: string; defaultValue: string }) {
  const borderColor = useThemeColor({}, 'icon');
  const inputBackground = useThemeColor({ light: '#f5f5f5', dark: '#1e1e1e' }, 'background');

  return (
    <View style={styles.field}>
      <ThemedText style={styles.fieldLabel}>{label}</ThemedText>
      <TextInput
        style={[styles.fieldInput, { borderColor, backgroundColor: inputBackground }]}
        defaultValue={defaultValue}
        editable={false}
      />
    </View>
  );
}

export default function EditProfileScreen({ user = mockAuthors[0] }: EditProfileScreenProps) {
  const borderColor = useThemeColor({}, 'icon');
  const buttonBackground = useThemeColor({}, 'tint');

  return (
    <ThemedView style={styles.container}>
      <View style={styles.avatarSection}>
        <Image
          source={user.avatar}
          style={[styles.avatar, { borderColor }]}
          contentFit="cover"
        />
        <TouchableOpacity onPress={() => {}}>
          <ThemedText lightColor="#0a7ea4" darkColor="#fff" style={styles.changePhotoLabel}>
            Change Photo
          </ThemedText>
        </TouchableOpacity>
      </View>

      <View style={styles.form}>
        <FormField label="Display Name" defaultValue={user.displayName} />
        <FormField label="Username" defaultValue={user.username} />
        <FormField label="Bio" defaultValue={user.bio} />
      </View>

      <TouchableOpacity
        style={[styles.saveButton, { backgroundColor: buttonBackground }]}
        onPress={() => {}}>
        <ThemedText
          type="defaultSemiBold"
          lightColor="#fff"
          darkColor="#000"
          style={styles.saveButtonText}>
          Save
        </ThemedText>
      </TouchableOpacity>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 24,
  },
  avatarSection: {
    alignItems: 'center',
    gap: 10,
    paddingTop: 12,
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    borderWidth: 1,
  },
  changePhotoLabel: {
    fontSize: 15,
    fontWeight: '600',
  },
  form: {
    gap: 16,
  },
  field: {
    gap: 6,
  },
  fieldLabel: {
    fontSize: 13,
    opacity: 0.6,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  fieldInput: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 15,
  },
  saveButton: {
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
  },
  saveButtonText: {
    fontSize: 16,
  },
});

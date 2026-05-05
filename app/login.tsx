import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useThemeColor } from '@/hooks/use-theme-color';

type LoginScreenProps = {
  error?: string;
}

export default function LoginScreen(props: LoginScreenProps) {
  const buttonBackground = useThemeColor({}, 'tint');

  return (
    <ThemedView style={styles.container}>
      <Image source={require('@/assets/images/ppjslogo.png')} style={styles.logo} contentFit="contain" />
      <ThemedText style={styles.header} type="title">Pets In Pajamas</ThemedText>
      <TextInput placeholder="Email" style={styles.input} />
        <TextInput
          style={styles.input} 
          secureTextEntry={true}
          placeholder="Password"
        />
      <TouchableOpacity
        style={[styles.button, { backgroundColor: buttonBackground }]}
        onPress={() => {}}>
        <ThemedText type="defaultSemiBold" lightColor="#fff" darkColor="#000">
          Login
        </ThemedText>
      </TouchableOpacity>
      <Link href="/" dismissTo style={styles.link}>
        <ThemedText type="link">Sign Up</ThemedText>
      </Link>
      { props.error && <ThemedText style={styles.error}>{props.error}</ThemedText>}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 12,
  },
  header: {
    marginBottom: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  input: {
    backgroundColor: 'white',
    marginTop: 15,
    fontSize: 16,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    width: '100%',
  },
  button: {
    marginTop: 15,
    width: '100%',
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
  },
  error: {
    color: 'white',
    backgroundColor: 'red',
    marginBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
  }
});


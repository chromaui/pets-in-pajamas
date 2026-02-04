import { Link } from 'expo-router';
import { StyleSheet, View, TextInput, Button } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function LoginScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.header} type="title">Pets In Pajamas</ThemedText>
      <TextInput placeholder="Email" style={styles.input} />
        <TextInput
          style={styles.input} 
          secureTextEntry={true}
          placeholder="Password"
        />
      <View style={styles.button} >
        <Button
          title="Login"
          onPress={() => {}}
        />
      </View>
      <Link href="/" dismissTo style={styles.link}>
        <ThemedText type="link">Sign Up</ThemedText>
      </Link>
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
    width: '80%',
  }
});


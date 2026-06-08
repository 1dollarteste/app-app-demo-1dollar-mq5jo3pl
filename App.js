import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>App Demo 1dollar</Text>
      <Text style={styles.subtitle}>Gerado pelo 1dollar 🚀</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b0b0f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: { color: '#fff', fontSize: 28, fontWeight: '700' },
  subtitle: { color: '#9aa0a6', fontSize: 15, marginTop: 8 },
});

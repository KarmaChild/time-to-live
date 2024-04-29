import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const items = [
  { name: "Hot Chocolate", date: "3 days left" },
  { name: "Garlic Press", date: "14 days left" },
  { name: "Egg boiler", date: "23 days left" },
]

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3D3E51',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

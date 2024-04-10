import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import ChatScreen from './src/screens/ChatScreen';

export default function App() {
  return (
    <View>
      <StatusBar style="auto" />
      {/* <HomeScreen /> */}
      <ChatScreen />
    </View>
  );
}

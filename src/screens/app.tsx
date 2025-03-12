import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Header from './header';

const App = () => {
  return (
    <SafeAreaView>
      <Header title="TasQ" />
      {/* 他のコンテンツ */}
    </SafeAreaView>
  );
}
export default App;
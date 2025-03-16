import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import Header from './header';
import Footer from './footer';

const Home = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Header title="TasQ" />
      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'space-between',
    backgroundColor: 'black',
  },
});
export default Home;
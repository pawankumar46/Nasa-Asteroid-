import { StatusBar } from 'expo-status-bar';
import { ImageBackground, SafeAreaView, StyleSheet, Text, View  } from 'react-native';
import Container from './components/Container';

import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
     <SafeAreaProvider>
    <NavigationContainer>
    <ImageBackground source={require('./assets/pic2.jpg')} style={styles.container}>
       
      <SafeAreaView style={styles.inner}>
      <Container />
      </SafeAreaView>
      
  
      
    </ImageBackground>
    </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
     alignItems: 'center',
    justifyContent: 'center',
    
  },
   inner : {
    width : '90%',
    height : '80%',
    backgroundColor : 'rgba(255,255,255,.4)'
   }
});

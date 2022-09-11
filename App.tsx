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
    width : 350,
    height : 700,
    opacity : .7,
    backgroundColor : 'rgba(125,125,125)',
    borderWidth  : 1,
    
    
   }
});

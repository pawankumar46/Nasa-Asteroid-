import { StyleSheet, Text, ImageBackground, View } from 'react-native'
import React from 'react'

import InputField from './InputField'
import Details from './Details'
import Random from './Random'

import {createNativeStackNavigator} from '@react-navigation/native-stack'


 export type RootComponents ={
  Asteroid : any;
    Details : any;
    Random : any
 }

 const Stack = createNativeStackNavigator<RootComponents>()
const Container = () => {
  return (
    <Stack.Navigator initialRouteName='Asteroid' 
    
        
      >
        <Stack.Screen name='Asteroid' component={InputField}  options={{
          headerTitleAlign : 'center',
          title: 'Asteroid',
          headerStyle: {
            backgroundColor: 'lightblue',
            },
          headerTintColor: 'black',
           headerTitleStyle: {
            fontSize: 25,
            fontWeight : 'bold'
            },
        }} />

        <Stack.Screen  name='Details' component={Details}  options={{
          headerTitleAlign : 'center',
          title: 'Details',
          headerStyle: {
            backgroundColor: 'lightblue',
            },
          headerTintColor: 'black',
          headerTitleStyle: {
             fontSize: 25,
            fontWeight : 'bold'
           },
        }}/>
        <Stack.Screen  name='Random' component={Random} options={{
          headerTitleAlign : 'center',
          title: 'Random',
          headerStyle: {
            backgroundColor: 'lightblue',
            },
          headerTintColor: 'black',
          headerTitleStyle: {
             fontSize: 25,
            fontWeight : 'bold'
           },
        }}/>


    </Stack.Navigator>
  )
}

export default Container

import { StyleSheet, Text, ImageBackground, View } from 'react-native'
import React from 'react'

import InputField from './InputField'
import Details from './Details'
import Random from './Random'

import {createNativeStackNavigator} from '@react-navigation/native-stack'


 export type RootComponents ={
    Form : any;
    Details : any;
    Random : any
 }

 const Stack = createNativeStackNavigator<RootComponents>()
const Container = () => {
  return (
    <Stack.Navigator initialRouteName='Form' 
    screenOptions={{
        headerStyle : {
          backgroundColor : 'lightblue',
           
        },
        headerTintColor : 'black'
        
      }}>
        <Stack.Screen name='Form' component={InputField}  options={{title : 'Nasa'}} />
        <Stack.Screen  name='Details' component={Details}  options={{title : 'Information'}}/>
        <Stack.Screen  name='Random' component={Random}  options={{title : 'Information'}}/>


    </Stack.Navigator>
  )
}

export default Container

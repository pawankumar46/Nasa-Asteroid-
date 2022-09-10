import { View, Text , StyleSheet,Linking } from 'react-native'
import React from 'react'

import {NativeStackScreenProps} from '@react-navigation/native-stack'
import { RootComponents } from './Container'
const Details = ({navigation , route}: NativeStackScreenProps<RootComponents , 'Details'>) => {

     console.log( 'check', route.params?.isHazard)
  return (
    <View >
      <Text style={styles.text}>Name :- {route.params?.name}</Text>
      <Text style={styles.text}>Hazard :- {`${route.params?.isHazard}`}</Text>
      <Text style={styles.text} onPress={()=> Linking.openURL(`${route.params?.url}`)} >Nasa-url = {route.params?.url}</Text>

    </View>
  )
}

const styles = StyleSheet.create({
    text : {
        padding : 40,
        textAlign : 'center',
        fontWeight : 'bold',
        fontSize  : 18
    }
})

export default Details
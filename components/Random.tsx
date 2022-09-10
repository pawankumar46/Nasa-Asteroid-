import { View, Text , StyleSheet , Linking, Button} from 'react-native'
import React from 'react'
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import { RootComponents } from './Container'

const Random = ({navigation , route}: NativeStackScreenProps<RootComponents , 'Random'>) => {

    const handleBack=()=>{
        navigation.popToTop()
    }
  return (
    <View>
       <View >
      <Text style={styles.text}>Name :- {route.params?.name}</Text>
      <Text style={styles.text}>Hazard :- {`${route.params?.isHazard}`}</Text>
      <Text style={styles.text} onPress={()=> Linking.openURL(`${route.params?.url}`)} >Nasa-url = {route.params?.url}</Text>

    </View>
    <View style={styles.btn}>
      <Button  title='Back' onPress={handleBack}></Button>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    text : {
        padding : 40,
        textAlign : 'center',
        fontWeight : 'bold',
        fontSize  : 18
    },
    btn : {
        width : 150,
        marginLeft : 100
    }
})

export default Random
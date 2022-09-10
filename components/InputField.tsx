import { View, Text ,  Button  , StyleSheet } from 'react-native'
import React,{useState , useEffect} from 'react'
import axios from 'axios'
import SelectList from 'react-native-dropdown-select-list'

import {NativeStackScreenProps} from '@react-navigation/native-stack'
import { RootComponents } from './Container'
const InputField = ({navigation} : NativeStackScreenProps<RootComponents , 'Form'>) => {
   const [details , setDetails] = useState([])
   const [num , setNum] = useState('')

     useEffect(()=>{
        axios.get(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=OkUUGW9SwyjTwnzKiGBqqLTRKkc30GHiNrWxJcsy`)
        .then((res)=>{
            const result = res.data.near_earth_objects
            const ids = result.map((ele : any)=> ele.id)
            setDetails(ids)
        })
        .catch((err)=> err.message)
     },[])
      
     console.log(details)
     console.log(num)
     

      // Submit button 

     const handlePress=()=>{
        axios.get(`https://api.nasa.gov/neo/rest/v1/neo/${num}?api_key=OkUUGW9SwyjTwnzKiGBqqLTRKkc30GHiNrWxJcsy`)
        .then((res)=>{
            const result = res.data
            //console.log('hazard',result.is_potentially_hazardous_asteroid)

            navigation.navigate('Details', {
                name : result.name,
                isHazard : result.is_potentially_hazardous_asteroid,
                url   : result.nasa_jpl_url
            })
        })
        .catch((err)=> err.message)
     }
 
     // Random button 
     const handleRandom=()=>{
        let random = Math.floor(Math.random() * details.length)
         let res2=  details[random]
         console.log(res2)
         axios.get(`https://api.nasa.gov/neo/rest/v1/neo/${res2}?api_key=OkUUGW9SwyjTwnzKiGBqqLTRKkc30GHiNrWxJcsy`)
         .then((res)=>{
             const result = res.data
            // console.log(result)

             navigation.navigate('Random', {
                name : result.name,
                isHazard : result.is_potentially_hazardous_asteroid,
                url   : result.nasa_jpl_url
            })
         })
         .catch((err)=> err.message)
       
     }
  return (
       <View >
         <View style={styles.text} >
        <SelectList   data={details} setSelected={setNum} />
        </View>
         <View style={styles.btn}>
          <Button disabled={num.length===0} title='Submit' onPress={handlePress}></Button>
          </View>

          <View style={styles.btn}>
            <Button title='Random-Id' onPress={handleRandom}></Button>
          </View>
       </View>
  )
}

const styles = StyleSheet.create({
    
   text : {
     margin : 2,
     paddingTop : 80,
     
    
  } ,
   btn : {
    width : 200,
    padding : 30,
    marginLeft : 60
   },
  
})

export default InputField
import { View, Text ,  Button  , StyleSheet, TouchableOpacity } from 'react-native'
import React,{useState , useEffect} from 'react'
import axios from 'axios'
import SelectList from 'react-native-dropdown-select-list'

import {NativeStackScreenProps} from '@react-navigation/native-stack'
import { RootComponents } from './Container'
const InputField = ({navigation} : NativeStackScreenProps<RootComponents , 'Asteroid'>) => {
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
       <View  >
          <View>
          <Text style={styles.word}>Nasa-Asteroid-Info</Text>
         <View style={styles.text} >
        <SelectList placeholder='Enter Asteroid-Id'  data={details} setSelected={setNum} search={false} onSelect={() => alert(num)} boxStyles={{borderRadius:10}} inputStyles={{fontSize : 18 , fontWeight : 'bold'}}
           />
        </View>
         <View style={styles.btn}>
          <Button disabled={num.length===0} title='Submit' onPress={handlePress}></Button>
          </View>

          <View  style={styles.btn}>
            <Button title='Random' onPress={handleRandom} ></Button>
            {/* <TouchableOpacity style={styles.btn} onPress={handleRandom}><Text>rrr</Text></TouchableOpacity> */}
          </View>
          </View>
       </View>
  )
}

const styles = StyleSheet.create({
    word : {
      textAlign : 'center',
      paddingTop : 70,
      fontWeight : 'bold',
      fontSize  : 20
    },
   text : {
     margin : 2,
     paddingTop : 130,
     width : 200,
     marginLeft : 70,
    
     
    
  } ,
   btn : {
    width : 200,
    padding : 30,
    marginLeft : 70,
    },
  
})

export default InputField
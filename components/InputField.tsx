import { View, Text ,  Button  , StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import React,{useState , useEffect} from 'react'
import axios from 'axios'
import SelectList from 'react-native-dropdown-select-list'


import {NativeStackScreenProps} from '@react-navigation/native-stack'
import { RootComponents } from './Container'
const InputField = ({navigation} : NativeStackScreenProps<RootComponents , 'Asteroid'>) => {
   const [details , setDetails] = useState([])
   
   const [ids , setIds] = useState('')
   const [ error , setError] = useState('Asteroid-Id not found. Please enter a valid Id')



    
     useEffect(()=>{
        axios.get(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=OkUUGW9SwyjTwnzKiGBqqLTRKkc30GHiNrWxJcsy`)
        .then((res)=>{
            const result = res.data.near_earth_objects
            const ids = result.map((ele : any)=> ele.id)
            setDetails(ids)
        })
        .catch((err)=> err.message)
     },[])
      
    
   
     

      // Submit button 

     const handlePress=()=>{
        axios.get(`https://api.nasa.gov/neo/rest/v1/neo/${ids}?api_key=OkUUGW9SwyjTwnzKiGBqqLTRKkc30GHiNrWxJcsy`)
        .then((res)=>{
            const result = res.data
            //console.log('hazard',result.is_potentially_hazardous_asteroid)

            navigation.navigate('Details', {
                name : result.name,
                isHazard : result.is_potentially_hazardous_asteroid,
                url   : result.nasa_jpl_url
            })
        })
        .catch((err)=>{
         if(err){
           
           alert(`${error}`)
           setIds('')
         }
      })
       setIds('')
     }
 
     // Random button 
     const handleRandom=()=>{
        let random = Math.floor(Math.random() * details.length)
         let res2=  details[random]
       
         axios.get(`https://api.nasa.gov/neo/rest/v1/neo/${res2}?api_key=OkUUGW9SwyjTwnzKiGBqqLTRKkc30GHiNrWxJcsy`)
         .then((res)=>{
             const result = res.data
         

             navigation.navigate('Random', {
                name : result.name,
                isHazard : result.is_potentially_hazardous_asteroid,
                url   : result.nasa_jpl_url
            })
         })
         .catch((err)=> alert(err.message) )
         setIds('')
     }
    
     
  return (
       <View  >
          <View>
          <Text style={styles.word}>Nasa-Asteroid-Info</Text>
         <View style={styles.text} >
        {/* <SelectList placeholder='Enter Asteroid-Id'  data={details} setSelected={setNum} search={false} onSelect={() => alert(num)} boxStyles={{borderRadius:10}} inputStyles={{fontSize : 18 , fontWeight : 'bold'}}
           /> */}
           <TextInput placeholder='Enter-Asteroid-Id' value={ids} onChangeText={(text)=> setIds(text)}  />
        </View>
         <View style={styles.btn}>
          <Button disabled={ids.length===0} title='Submit' onPress={handlePress}></Button>
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
     marginTop : 20,
     paddingTop : 10,
     padding : 20,
     width : 250,
     marginLeft : 50,
     borderWidth : 1,
     borderRadius : 15,
     fontSize  : 20
    
     
    
  } ,
   btn : {
    width : 200,
    padding : 30,
    marginLeft : 70,
    },
  
})

export default InputField
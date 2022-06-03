import React from 'react';
import {View, Text,Image,TextInput,StyleSheet,TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


function App() {
  return (
    <View>
       <View style={{top:5,height:58,borderWidth: 1,}}>
        <Image source={require('./Images/greater.png')} 
        style={{top:20,left:15}}
        />
        <Text style={{position:'absolute',alignSelf:'center',fontSize:24,fontFamily:'poppins',top:10,fontWeight:'200',fontStyle:'normal',color:'black'}}>Swipe Photo</Text>
      </View>

      <View style={{borderWidth:1,height:74,top:25,width:370,left:12,borderRadius:12}}>
      <Image source={require('./Images/circle.png')}
      style={{left:10,top:20,}}
      /> 
      <Image source={require('./Images/line.png')} 
      style={{left:70,width:110,bottom:20,height:5}}
      />
      <Image source={require('./Images/secondline.png')} 
      style={{position:'absolute',top:50,left:75,width:70,height:5}}
      />
      </View>
      <View style={{top:40}}>
        <Image source={require("./Images/bird.png")} 
        style={{height:410,width:350,left:10,backgroundColor:'white',borderRadius:17}}
        />
      </View>
      <View style={{position:'absolute',alignSelf:'flex-end',top:172,right:2}}>
        <Image source={require("./Images/vt.png")} 
       style={{height:410,width:30,backgroundColor:'white',borderRadius:8}}
        />
      </View>
      
        <View style={{top:67,height:45,width:200,alignSelf:'center',borderRadius:15,backgroundColor:'#3672E9'}}>
        <Text style={{fontSize:20,alignSelf: "center",top:10,color:'white'}}>Add Image</Text>
        </View>
</View>
  )
}
export default App;


import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image, TextInput, ScrollView} from 'react-native';
import {Audio} from 'expo-av';
import call from 'react-native-phone-call';



class Mainscreen extends React.Component {    

  constructor(){
    super()
    this.state={
      text:"",
      numbers:[]
    }
  }
 


    goToHyderabad= ()=>{
this.props.navigation.navigate("appNav3")
  }

  goToHome=()=>{
    this.props.navigation.navigate("appNav1")
  }

   goToDehli=()=>{
    this.props.navigation.navigate("appNav4")
  }

  goToMumbai=()=>{
this.props.navigation.navigate("appNav5")
  }

  goToKolkata=()=>{
this.props.navigation.navigate("appNav7")
  }

  goToJaipur=()=>{
this.props.navigation.navigate("appNav6")
  }

  goToVaranasi=()=>{
this.props.navigation.navigate("appNav8")
  }

goToLucknow=()=>{
this.props.navigation.navigate("appNav9")
  }
  render() {
    return (
      <ScrollView>
       
      




      <View style= {{marginTop: -10, marginLeft: -20}}>
      <TouchableOpacity style= {styling.Button} onPress={this.goToHyderabad}><Text>Hyderabad</Text></TouchableOpacity></View>

      <View style= {{marginTop: -10, marginLeft: -20}}>
      <TouchableOpacity style= {styling.Button} onPress={this.goToDehli}><Text>Dehli</Text></TouchableOpacity></View>

      <View style= {{marginTop: -10, marginLeft: -20}}>
      <TouchableOpacity style= {styling.Button}  onPress={this.goToMumbai}><Text>Mumbai</Text></TouchableOpacity></View>

      <View style= {{marginTop: -10, marginLeft: -20}}>
      <TouchableOpacity style= {styling.Button}  onPress={this.goToKolkata} ><Text>Kolkata</Text></TouchableOpacity></View>
      

       <View style= {{marginTop: -10, marginLeft: -20}}>
      <TouchableOpacity style= {styling.Button} onPress={this.goToVaranasi}><Text>Varanasi</Text></TouchableOpacity></View>

      <View style= {{marginTop: -10, marginLeft: -20}}>
      <TouchableOpacity style= {styling.Button} onPress= {this.goToLucknow}><Text>Lucknow</Text></TouchableOpacity></View>

      <View style= {{marginTop: -10, marginLeft: -20}}>
      <TouchableOpacity style= {styling.Button} onPress= {this.goToJaipur}><Text>Jaipur</Text></TouchableOpacity></View>

      <TouchableOpacity style={{marginTop:20, marginLeft: 150, justifyContent:"center"}} onPress={this.goToHome}><Text>Back to Home</Text></TouchableOpacity>

      </ScrollView>




      
    );
  }
}

const styling = StyleSheet.create({
Button:{
  backgroundColor: "#fed8b1",
  width: 200,
  height: 60,
  marginTop: 50,
  marginLeft: 115,
 alignItems: "center",
 justifyContent: "center",
 borderRadius: 200
},

Add:{
backgroundColor: "#ffffed",
  width: 300,
  height: 40,
  marginTop: 10,
  marginLeft: 30,
 alignItems: "center",
 justifyContent: "center",
 borderRadius: 200
},


textInputStyle:{
marginTop: 10, marginLeft: 10, width: "80%", height: 40, alignSelf: "center", textAlign: "center", borderWidth: 1
}



})

export default Mainscreen;
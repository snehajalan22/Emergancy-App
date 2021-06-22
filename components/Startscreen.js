import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image} from 'react-native';

export default class Startscreen extends React.Component {
 goToMain=()=>{
   this.props.navigation.navigate("appNav2")
 }
  render() {
    return (

      <View>

      <TouchableOpacity onPress= {this.goToMain}><Text style= {news.Text}>All in one emergency </Text></TouchableOpacity>
      
     </View>
    )
    }
}
const news = StyleSheet.create({
  Text:{
    backgroundColor: "red", 
    color: "white",
   marginLeft: 60,
   marginRight: 60,
   marginTop: 50,
   fontSize: 30,
   textAlign: "center", 
   width: 230,
   height: 90,
   justifyContent: "center",
   borderRadius: 30
 } }
)
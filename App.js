import * as React from "react";
import Constants from 'expo-constants';
import { Text, View, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import {createAppContainer, createSwitchNavigator} from "react-navigation";
import Mainscreen from "./components/Home"
import Hyderabad from "./components/Hyderabad"
import Dehli from "./components/Dehli"
import Mumbai from "./components/Mumbai"
import Kolkata from "./components/Kolkata"
import Jaipur from "./components/Jaipur"
import Lucknow from "./components/Lucknow"
import Varanasi from "./components/Varanasi"
import Startscreen from "./components/Startscreen"










export default class App extends React.Component {

  render() {
    return (
     <View>

      <AppContainer/>
     </View>  
      
    );
  }
}

var AppNavigator= createSwitchNavigator({
  
appNav1:Startscreen,  
appNav2: Mainscreen,
appNav3: Hyderabad, 
appNav4: Dehli,
appNav5: Mumbai,
appNav6: Jaipur,
appNav7: Kolkata,
appNav8:Varanasi,
appNav9: Lucknow




  
})
 var AppContainer = createAppContainer(AppNavigator)

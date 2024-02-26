import React, {useState} from "react";
import {  View, Text,Slider, TouchableOpacity, Switch,Image} from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import BlindPreview from "./blindstruc/BlindPreview";
import LinearGradient from "react-native-linear-gradient";
import styles from './Styles/appstyle'
// Importing the BlindsGenerator module
import { generateBlindsStructure } from "./blindstruc/BlindGenerator";
import { isEnabled } from "react-native/Libraries/Performance/Systrace";



function HomeScreen({ navigation }) {
  const[isEnabled,setEnable]=useState(true);
  const[sliderState,setSlidder]=useState(0);
const img = require("./logo/sliderlogo.jpg")



  const toggle =()=>{
  
    setEnable(previousState=>!previousState)
  }

  
  return (
    <View style={styles.container}> 
       {/*Switch */}
      <View style = {styles.Ctoggle}>
      <Text style = {styles.titlelvl}>Blind  Level Length</Text>
      <Switch 
       style ={styles.Stoggle}
      trackColor = {{false: '#D6D5D5', true: "#5CE3FE"}}
      thumbColor = "#57B899"
      onValueChange={toggle}
      value={isEnabled}
      />
      </View>
       {/* Seekbar*/}
    <View style={styles.level}>
      
    <Text style = {sliderState === 3 ? styles.selectedlvl : styles.lvlfont}>3m</Text>
  <Text style = {sliderState === 5 ? styles.selectedlvl : styles.lvlfont}>5m</Text>
  <Text style = {sliderState === 7 ? styles.selectedlvl : styles.lvlfont} >7m</Text>
  </View>


  <Slider
        style ={styles.slider}
        value = {sliderState}
       onValueChange={(value ) => setSlidder(value)}
       step={2}

       minimumValue={3}
       maximumValue={7}
        minimumTrackTintColor="#5CE3FE"
        maximumTrackTintColor="#D6D5D5"
        />
        <View style={styles.dotContainer}>
          {[3, 5, 7].map(value => (
            <View key={value} style={styles.dot} />
          ))}
        </View>
        
        <Image source = {img} style={styles.thumbStyle}/>



   {/* button for navigation */}
   <TouchableOpacity
        onPress={() =>
          navigation.navigate("Preview Blind Structure", {
            isRaiseBlind: isEnabled,
            raiseBlindInterval: isEnabled ? sliderState * 60 : null, // convert minutes to seconds if enabled
          })
        }
      >
        <Text style={styles.btn}>Blinds Structure </Text>
      </TouchableOpacity>
    </View>
  );
}

const Stack = createStackNavigator();

const App = () => {
  // Generating blinds structure using the functions from BlindsGenerator
  const gameTime = 1800; // 30 minutes in seconds
  const raiseBlindTime = 180; // 3 minutes in seconds
  const blindsStructure = generateBlindsStructure(gameTime, raiseBlindTime);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen 
          name="Preview Blind Structure"
          options={({ navigation }) => ({
            headerShown: true,
            headerTitle: () => (
              <Text style={styles.titleheader}>Preview Blind Structure</Text>
            ),
            headerLeft:() => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={styles.arrow}>◀︎</Text>
              </TouchableOpacity>
            ),
            headerBackground: () => (
              <LinearGradient
                colors={["#E1BEF3", "#DA8CF8", "#7E3EF8", "#6A1FF9"]}
                style={{ flex: 1 }}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
              />
            ),
          })}
        >
          {(props) => <BlindPreview {...props} jsonData={blindsStructure} />}
        </Stack.Screen>
      </Stack.Navigator>  
    </NavigationContainer>
  );
};



export default App;

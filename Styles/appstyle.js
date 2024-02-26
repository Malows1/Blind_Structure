import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
top: "30%",
   justifyContent:"center",
    alignItems:"center",
    borderWidth: 1,
    height: 200
    },
    titleheader: {
      fontWeight:"bold",
      marginLeft:12,
      fontSize: 25,
      color:"#fff",
      left: 15,
    },
    arrow: {
      fontSize: 40,
      justifyContent: "center",
      top: -4,
      left: 10 
    },
level:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 300, 
},
lvlfont:{
fontSize:18,
color:"black"
},
slider:{
    width: 320,
    height: 40,
    

},
selectedlvl:{
  fontSize: 18,
  color: '#4BF1EF',

},
btn:{
color:"#4EDAF7",
fontSize: 18,
fontWeight:"bold"
},
Stoggle:{
   
    scaleX: 1.1,
    scaleY: 1, 
    left: 50,
    height:40,
    top: -25
    
  

},
Ctoggle:{
  
  flexDirection: 'row',
  justifyContent: 'space-between',
 
},
titlelvl:{
  fontSize:20,
  fontWeight:"bold",
  color: "black",
  right: 70,
  top: -15
},
dotContainer: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  position: 'absolute',
  top: 95,
  left: 42,
  right: 42,
  

  paddingHorizontal: 20,
},
dot: {
  width: 10,
  height: 10,
  borderRadius: 4,
  backgroundColor: '#5CE3FE',
},
thumbStyle:{
    top: -40,
    width: 50, // Example width
    height: 40, // Example height
    left: 145,

  
    tintColor:'#5CE3FE',
    backgroundColor: "#F1F1F1"
},

  });
  export default styles;
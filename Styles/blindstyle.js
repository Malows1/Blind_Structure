import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
 
    container: {
      height: 50,
      justifyContent: 'center'
    },
    text: {
      color: '#fff',
      fontSize: 23,
      textAlign: 'center',
    },
    arrow: {
      color: '#fff',
      fontSize: 40,
      fontWeight: 'bold',
    },
    arrowcontainer: {
      position: 'absolute',
      left: 15,
      top: -4,
    },
    table: {
      marginTop: 20,
      paddingHorizontal: 10,
    },
    tableRow: {
      flexDirection: 'row',
    },
    tableCell: {
      color: 'black',
      flex: 1,
      borderBottomWidth: 1,
      borderColor: '#ccc',
      padding: 9,
    },
    headerCell: {
      fontWeight: 'bold',
      backgroundColor: '#f0f0f0', 
    },
    levelHeader: {
      color: '#5CE3FE', // Change color of the Level header
    },
    levelCell: {
      color: '#5CE3FE', // Change color of the Level column
    },
  });
  export default styles;
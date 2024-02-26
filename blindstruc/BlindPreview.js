import React from "react";
import 'react-native-gesture-handler';
import styles from '../Styles/blindstyle'
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
} from 'react-native';

const BlindPreview = ({ jsonData }) => {


  return (
    <SafeAreaView style={styles.bodybg}>
      {/* Header row */}
      <View style={styles.tableRow}>
        <Text style={[styles.tableCell, styles.headerCell, styles.levelHeader]}>Level</Text>
        <Text style={[styles.tableCell, styles.headerCell]}>Time</Text>
        <Text style={[styles.tableCell, styles.headerCell]}>Blinds</Text>
      </View>
      {/* DATA ROW table*/}
      <View style={styles.table}>
        {jsonData.map((row, index) => (
          <View style={styles.tableRow} key={index}>
            {row.map((cell, cellIndex) => (
              <Text style={[styles.tableCell, cellIndex === 0 ? styles.levelCell : null]} key={cellIndex}>
                {cell}
              </Text>
            ))}
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
}


export default BlindPreview;

import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import colors from '../constants/colors';

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 20,
    paddingVertical: 20
  },
  text: {
    fontSize: 16,
    color: "#343434"
  },
  seperator: {
    backgroundColor: "#e2e2e2",
    height: StyleSheet.hairlineWidth,
    marginLeft: 20
  }
})

export default function Options() {
  return (
    <View>
      <TouchableOpacity style={styles.row}>
        <Text style={styles.text}>Themes</Text>
      </TouchableOpacity>

      <View style={styles.seperator} />

      <TouchableOpacity style={styles.row}>
        <Text style={styles.text}>React Native Basics</Text>
      </TouchableOpacity>

      <View style={styles.seperator} />

      <TouchableOpacity style={styles.row}>
        <Text style={styles.text}>React Native by example</Text>
      </TouchableOpacity>
    </View>
  );
};
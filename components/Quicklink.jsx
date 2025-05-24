import { useState } from "react";
import { Button, Image, ScrollView, StyleSheet, Text, View } from "react-native";



const Quicklink = (props) => {
  

  return (
    <View style={styles.container}>
          <View style={styles.mix}><Image style={styles.image} source={require('../assets/musicalnote.png')} /></View>
          <Text style={styles.text}>{props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 50,
    margin: 4,
    marginBottom: 8,
    backgroundColor: "#444",
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "flex-start",
    borderRadius: 5
  },
  mix: {
    width: 40,
    height: 40,
    backgroundColor: '#607a94',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginLeft: 4,
    marginRight: 12
  },
  image: {
    width: 26,
    height: 26
  },
  text: {
    color: 'white',
    fontSize: 15
  }
});

export default Quicklink;
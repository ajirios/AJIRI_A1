import { useState } from "react";
import { Button, Image, ImageBackground, ScrollView, StyleSheet, Text, View } from "react-native";



const Subheader = (props) => {
  

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: "#000",
    alignItems: "flex-start",
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold"
  }
});

export default Subheader;
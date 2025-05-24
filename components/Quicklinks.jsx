import { useState } from "react";
import { Button, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import Quicklink from "./Quicklink";



const Quicklinks = () => {
  

  return (
    <View style={styles.container}>
          <Quicklink text="Hot Hits Canada" />
          <Quicklink text="Pop Favourites" />
          <Quicklink text="Hip-Hop Central" />
          <Quicklink text="80s Hard Rock" />
          <Quicklink text="All About Country" />
          <Quicklink text="Upbeat mix" />
          <Quicklink text="Daily Wellness" />
          <Quicklink text="Release Radar" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "black",
    flexWrap: 'wrap'
  },
  body: {
    width: '100%',
    height: 400
  }
});

export default Quicklinks;
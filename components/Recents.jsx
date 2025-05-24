import { useState } from "react";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import Subheader from "./Subheader";
import Playlist from "./Playlist";


const Recents = () => {
  

  return (
    <View style={styles.container}>
      <Subheader text="Recents" />
      <View style={styles.body}>
        <Playlist title="Pop mix" />
        <Playlist title="Hot Hits" />
        <Playlist title="Upbeat Mix" />
        <Playlist title="Daily Well..." />
        <Playlist title="Hip-Hop C..." />
        <Playlist title="80s Hard..." />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "black"
  },
  body: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: 350
  }
});

export default Recents;
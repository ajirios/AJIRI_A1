import { useState } from "react";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import Subheader from "./Subheader";
import Audiobook from "./Audiobook";


const Audiobooks = () => {
  

  return (
    <View style={styles.container}>
          <Subheader text="Audiobooks for you" />
          <View style={styles.body}>
            <Audiobook title="Mastering Conversation..." author="Helen Stone" />
            <Audiobook title="Control your mind and..." author="Eric Robertson" />
            <Audiobook title="Ikigai: The japanese sec..." author="Hector Garcia" />
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
    height: 600
  }
});

export default Audiobooks;
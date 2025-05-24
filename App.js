import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import Recents from "./components/Recents";
import Audiobooks from "./components/Audiobooks";
import Quicklinks from "./components/Quicklinks";


const Box = () => {
  return (
    <View style={{ width: 50, height: 50, backgroundColor: "sandybrown" }} />
  );
};

const App = () => {
  

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header style={styles.header} />
      <View style={styles.body}>
        <ScrollView style={{width:'100%'}}>
          <Quicklinks />
          <Recents />
          <Audiobooks />
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    alignItems: "flex-start",
    justifyContent: "flex-start",
    backgroundColor: "black"
  },
  header: {
    flex: 1
  },
  body: {
    flex: 19,
    width: '100%',
    backgroundColor: 'yellow'
  }
});

export default App;

import { useState } from "react";
import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from "react-native";



const Header = () => {
  const check = () => {};

  return (
    <View style={styles.container}>
        <View style={styles.logo}>
          <Image style={styles.image} source={require('../assets/applogo.png')} />
        </View>
        <View onPress={check} style={[styles.link, styles.selected]}><Text style={[styles.text, styles.active_text]}>All</Text></View>
        <View style={styles.link}><Text style={styles.text}>Music</Text></View>
        <View style={styles.link}><Text style={styles.text}>Podcasts</Text></View>
        <View style={styles.link}><Text style={styles.text}>Audiobooks</Text></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-evenly',
    backgroundColor: "black",
    paddingBottom: 6
  },
  logo: {
    backgroundColor: 'white',
    borderWidth: 0,
    borderColor: 'black',
    width: 40,
    height: 40,
    borderRadius: 20
  },
  selected: {
    backgroundColor: '#96f97b',
    borderRadius: 20,
    paddingHorizontal: 20
  },
  link: {
    textAlign: 'center',
    backgroundColor: "#444444",
    borderRadius: 20
,   height: 40,
    padding: 10,
    flexWrap: 'wrap'
  },
  text: {
    color: 'white',
    flexWrap: 'wrap',
    fontSize: 16
  },
  active_text: {
    color: 'black'
  },
  image: {
    width: 40,
    height: 40
  }
});

export default Header;
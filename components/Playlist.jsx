import { useState } from "react";
import { Button, Image, ImageBackground, ScrollView, StyleSheet, Text, View } from "react-native";



const Playlist = (props) => {
  

  return (
    <View style={styles.container}>
          <ImageBackground style={styles.imgBcg} source={require('../assets/musicalnote.png')}>
            <View style={styles.heading}>
                <Text style={styles.title}>{props.title}</Text>
            </View>
          </ImageBackground>
          <View style={styles.captions}>
            <Text style={styles.text}>Playlist</Text>
            <Text style={styles.text}>User 1</Text>
          </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 130,
    height: 160,
    margin: 4,
    marginBottom: 8,
    backgroundColor: "#444",
    flexDirection: 'column',
    alignItems: "center",
    justifyContent: "flex-start",
    borderRadius: 10
  },
  imgBcg: {
    backgroundColor: '#75a2c9',
    width: 130,
    height: 120,
    borderRadius: 5
  },
  captions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#444',
    width: 130,
    height: 40,
    padding: 5,
    borderRadius: 6
  },
  heading: {
    backgroundColor: 'rgba(68, 68, 68, 0.5)',
    height: 35
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20
  },
  text: {
    color: 'white'
  }
});

export default Playlist;
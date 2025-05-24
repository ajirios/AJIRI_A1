import { useState } from "react";
import { Button, Image, ImageBackground, ScrollView, StyleSheet, Text, View } from "react-native";



const Audiobook = (props) => {
  

  return (
    <View style={styles.container}>
          <View style={styles.background}>
            <Image style={styles.imgBcg} source={require('../assets/audiobook.png')} />
          </View>
          <View style={styles.float}>
            <Image style={styles.imgfloat} source={require('../assets/love.png')} />
          </View>
          <View style={styles.captions}>
            <Text style={styles.text}>Included in Premium</Text>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.author}>{props.author}</Text>
          </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 270,
    margin: 4,
    marginBottom: 8,
    backgroundColor: "#fff",
    flexDirection: 'column',
    alignItems: "flex-start",
    justifyContent: "flex-start",
    borderRadius: 5
  },
  imgBcg: {
    backgroundColor: 'white',
    width: 100,
    height: 100
  },
  imgfloat: {
    backgroundColor: 'white',
    width:40,
    height: 40
  },
  float: {
    width: 200,
    height: 70,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: 'white'
  },
  background: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 130
  },
  captions: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    padding: 5,
    width: 200,
    height: 70
  },
  text: {
    color: 'green'
  },
  title: {
    color: 'white'
  },
  author: {
    color: '#999'
  }
});

export default Audiobook;
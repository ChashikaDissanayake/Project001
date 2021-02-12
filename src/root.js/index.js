import React from 'react';
import {View, Text, StyleSheet, Image, TextInput, FlatList} from 'react-native';
import ComponetScreen from '../components/components';
import ComponetScreen2 from '../components/componets2';
import Images from '../configs/images';
import ListScreen from '../components/listScreen';

const app = () => {
  return (
    <View style={styles.comtariner}>
      <Text style={styles.textStyle}>heloo</Text>
      <Image source={Images.logo2} style={styles.image2} />
      <ListScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 25,
  },
  image1: {
    width: 100,
    height: 100,
  },
  image2: {
    width: 100,
    height: 100,
  },

  comtariner: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    width: '80%',
    borderWidth: 2,
    borderColor: 'black',
    fontSize: 25,
  },
  textInput2: {
    width: '80%',
    borderWidth: 2,
    borderColor: 'black',
    fontSize: 25,
    marginTop: 5,
  },
});

export default app;

import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const ComponetScreen2 = () => {
  const name = 'chashika';
  return (
    <View>
      <Text style={styles.textStyle}> hello fuck you fuck you </Text>
      <Text style={styles.subtxt}>my name is {name}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 35,
    alignContent: 'center',
  },
  subtxt: {
    fontSize: 20,
    alignContent: 'center',
    color: 'white',
  },
});

export default ComponetScreen2;

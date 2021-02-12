import React from 'react';
import {Text, StyleSheet} from 'react-native';

const ComponetScreen = () => {
  return <Text style={styles.textStyle}> THIS IS ALSO SHIT</Text>;
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    alignContent: 'center',
  },
});

export default ComponetScreen;

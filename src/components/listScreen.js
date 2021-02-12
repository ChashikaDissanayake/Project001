import React from 'react';
import {View, FlatList, StyleSheet, Text, StatusBar} from 'react-native';

const DATA = [
  {
    id: '#0',
    title: 'First Item',
  },
  {
    id: '#1',
    title: 'Second Item',
  },
  {
    id: '#2',
    title: 'Third Item',
  },
  {
    id: '#3',
    title: '4th Item',
  },
  {
    id: '#4',
    title: '5th Item',
  },
  {
    id: '#5',
    title: '6th Item',
  },
  {
    id: '#6',
    title: '7th Item',
  },
  {
    id: '#7',
    title: '8th Item',
  },
];

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const ListScreen = () => {
  const renderItem = ({item}) => <Item title={item.title} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default ListScreen;

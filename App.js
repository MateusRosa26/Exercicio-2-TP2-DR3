import React from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import ListItem from './components/ListItem';

const App = () => {
  const items = [
    { id: '1', title: 'Comprar leite' },
    { id: '2', title: 'Estudar React Native' },
    { id: '3', title: 'Caminhar' },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={({ item }) => <ListItem title={item.title} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
  },
});

export default App;

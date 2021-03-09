import React from 'react';
import Counter from './Counter';
import storeState from './redux/store';
import { Provider } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <Provider store={storeState}>
      <Text style={styles.header}>Simple Counter App</Text>  
        <View style={styles.mainContainer}>
          <Counter />
          <StatusBar style="auto" />
        </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    marginTop: 32,
    fontSize: 24,
    fontWeight: '500',
    textAlign: 'center'
  }
});

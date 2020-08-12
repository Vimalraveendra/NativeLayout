import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Header from './Components/Header';
import Boxes from './Components/Boxes';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Boxes />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

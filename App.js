import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Header from './Components/Header';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

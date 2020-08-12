import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Boxes = () => {
  return (
    <View style={styles.boxContainer}>
      <View style={styles.box}>
        <View style={styles.innerBox}>
          <Text style={styles.boxText}>Box1</Text>
        </View>
      </View>
      <View style={styles.box}>
        <View style={styles.innerBox}>
          <Text style={styles.boxText}>Box2</Text>
        </View>
      </View>
      <View style={styles.box}>
        <View style={styles.innerBox}>
          <Text style={styles.boxText}>Box3</Text>
        </View>
      </View>
      <View style={styles.box}>
        <View style={styles.innerBox}>
          <Text style={styles.boxText}>Box4</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  boxContainer: {
    width: '100%',
    height: '85%',
    backgroundColor: 'grey',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
  },
  box: {
    width: '50%',
    height: '50%',
    padding: 10,
  },
  innerBox: {
    backgroundColor: 'yellow',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxText: {
    fontSize: 20,
  },
});

export default Boxes;

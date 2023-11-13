import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const Counter = () => {
  let [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`Count: ${count}`}</Text>
      <Button
        color={'red'}
        title={'Increase the count'}
        onPress={() => setCount(count + 1)}
      />
      <Button
        color={'green'}
        title={'Decrease the count'}
        onPress={() => setCount(count - 1)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
  },
  title: {
    alignSelf: 'center',
    fontSize: 25,
    marginTop: 60,
  },
});

export default Counter;

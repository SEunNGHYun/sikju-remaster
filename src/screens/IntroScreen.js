import React from 'react';
import {
  View, Text, Button, StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  test: {
    fontSize: 50,
    textAlign: 'center',
  },
  view: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});

const IntroScreen = ({ navigation }) => {
  return (
    <View style={styles.view}>
      <Text style={styles.test}>인트로 페이지</Text>
      <Button title="3초 후" onPress={() => navigation.replace('Login')} />
    </View>
  );
};

export default IntroScreen;

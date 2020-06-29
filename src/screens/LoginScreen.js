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

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.view}>
      <Text style={styles.test}>Login Screen</Text>
      <Button
        title="카카오 로그인"
        onPress={() => navigation.navigate('Auth')}
      />
      <Button
        title="둘러보기"
        onPress={() => navigation.navigate('Tab')}
      />
    </View>
  );
};
export default LoginScreen;

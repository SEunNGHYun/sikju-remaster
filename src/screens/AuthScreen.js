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

const AuthScreen = ({ navigation }) => {
  return (
    <View style={styles.view}>
      <Text style={styles.test}>PhoneAuth Screen</Text>
      <Button
        title="인증 후 메인으로 이동"
        onPress={() => navigation.navigate('Tab')}
      />
    </View>
  );
};

export default AuthScreen;

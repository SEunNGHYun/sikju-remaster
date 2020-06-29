import React from 'react';
import {
  View, Text, StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  test: {
    fontSize: 50,
    textAlign: 'center',
  },
  view: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});

const MyPage = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.test}>마이페이지</Text>
    </View>
  );
};

export default MyPage;

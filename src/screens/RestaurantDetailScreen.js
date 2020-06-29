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
const RestaurantDetailScreen = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.test}>식당 상세 페이지</Text>
    </View>
  );
};

export default RestaurantDetailScreen;

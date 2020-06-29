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

const NearRests = ({ navigation }) => {
  return (
    <View style={styles.view}>
      <Text style={styles.test}>주변식당</Text>
      <Button
        title="식당 정보"
        onPress={() => navigation.navigate('RestaurantDetail')}
      />
    </View>
  );
};

export default NearRests;

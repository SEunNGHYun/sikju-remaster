import React from 'react';
import {
  View, Image, Button, StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  view: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  tinyLogo: {
    width: 400,
    height: 600,
  },
});

const IntroScreen = ({ navigation }) => {
  return (
    <View style={styles.view}>
      <Image
        style={styles.tinyLogo}
        width="100px"
        // eslint-disable-next-line global-require
        source={require('../assets/images/splash.png')}
      />
      <Button title="3초 후" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

export default IntroScreen;

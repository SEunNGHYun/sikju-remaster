import React from 'react';
import {
  View, Text, Button, StyleSheet
} from 'react-native';
// import { SvgCss, SvgXml } from 'react-native-svg';
// import svg from '../../../assets/svg';

const styles = StyleSheet.create({
  test: {
    fontSize: 50,
    textAlign: 'center',
  },
  view: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});

const MainScreen = ({ navigation }) => {
  return (
    <View style={styles.view}>
      <Text style={styles.test}>메인 페이지</Text>
      {/* <SvgXml xml={svg.fire} width="30%" height="30%" />
      <SvgCss xml={svg.logo} fill="#000000" width="50%" height="50%" /> */}

      <Button title="현위치 변경" onPress={() => navigation.navigate('Map')} />
      <Button
        title="식당 정보"
        onPress={() => navigation.navigate('RestaurantDetail')}
      />
    </View>
  );
};

export default MainScreen;

import React from 'react';
import {
  View, Text, Button, StyleSheet, ScrollView
} from 'react-native';
import styled from 'styled-components/native';
import {Container, Content}from 'native-base';
import {SvgCss} from 'react-native-svg';
import RestModal from './RestModalComponent';
// import { SvgCss, SvgXml } from 'react-native-svg';
import svg from '../../../assets/svg';

const styles = StyleSheet.create({
  test: {
    fontSize: 50,
    textAlign: 'center',
  },
  header: {flex : 0.8, backgroundColor : "blue"},
  image : {flex : 3,  backgroundColor : "green"},
  body : {flex : 5, backgroundColor : "red"},
  modal : {justifyContent : 'center', alignItems : 'center' }
});

const test = [ {
  rest_name : '윤',
  rest_like : 300,
  rest_loca : 300
},
{
  rest_name : '승',
  rest_like : 22,
  rest_loca : 30
}]

const MainScreen = ({ navigation }) => {
  return (
    <Container style={{flex : 1, backgroundColor: 'transparent'}}>
      <View style={styles.header}/>
      <View style={styles.image}/>
      <View style={styles.body}>
        <View style={{flexDirection : 'row'}}>
        <SvgCss width={19} height={19} xml={svg.Best} />
        <Text>이 가게 강력 추천!</Text>
        </View>
        <View  style={styles.modal}>
        <RestModal/>
        </View>
        </View>
    </Container>
  );
};

export default MainScreen;

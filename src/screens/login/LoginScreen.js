import React from 'react';
import { View, Text, Button } from 'react-native';
import styled from 'styled-components/native';
import { createAnimatableComponent } from 'react-native-animatable';
import { SvgCss } from 'react-native-svg';
import { wp } from '../../utils/constants';
import styles from '../../utils/styles';
import svg from '../../assets/svg';

const Container = styled.View`
    flex: 1;
    background-color: ${styles.primaryColor};
    justify-content: center;
    align-items: center;
`;
const LogoContainer = createAnimatableComponent(styled.View`
    align-items: center;
    margin-bottom: 100px;
`);
const ButtonContainer = styled.View`
    margin-top: 20px;
`;

const Title = styled.Text`
    color: white;
    font-size: ${wp(10)}px;
`;
// const Linked = styled.Text`
//     color: white;
//     font-size: 15px;
//     text-decoration: underline;
// `;
const LoginScreen = ({ navigation }) => {
  return (
    <Container>
      <LogoContainer animation="bounceIn">
        <SvgCss xml={svg.logo} width={wp(30)} height={wp(30)} fill="#000000" />
        <Title><Text>의식주</Text></Title>
      </LogoContainer>
      {/* <ButtonContainer>
        <AuthButton onPress={facebookLogIn} name="facebook"
        disabled={false} text="페이스북 계정으로 로그인하기" />
      </ButtonContainer> */}
      <ButtonContainer>
        {/* <AuthButton onPress={kakaoLogin} name="kakao"
          disabled={false} text="카카오 계정으로 로그인하기" /> */}
        <Button
          title="Tab"
          onPress={() => {
            navigation.navigate('Tab');
          }}
        />
        <Button
          title="Auth"
          onPress={() => {
            navigation.navigate('Auth');
          }}
        />
      </ButtonContainer>
      <View style={{ flexDirection: 'row', marginTop: 18 }}>
        {/* <Linked onPress={() => setPassible(true)}> */}
        <Text>
          먼저 둘러보기
        </Text>
        {/* </Linked> */}
      </View>
    </Container>
  );
};
export default LoginScreen;

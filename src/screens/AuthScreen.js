import React from 'react';
import {
  View, Text, Button, StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import { testFunction } from '../redux/action';

const styles = StyleSheet.create({
  test: {
    fontSize: 50,
    textAlign: 'center',
  },
  view: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});

const AuthScreen = ({
  // navigation, fe,
  toggle
}) => {
  return (
    <View style={styles.view}>
      <Text style={styles.test}>PhoneAuth Screen</Text>
      <Button
        title="인증 후 메인으로 이동"
        onPress={() => toggle()}
      />
    </View>
  );
};

// props로 reudx의 state 값 내려주기
const mapStateToProps = (state) => {
  return {
    fe: state.value
  };
};

// props로 state값 변화시키는 액션 함수 내려주기
const mapDispatchToProps = (dispatch) => {
  return {
    toggle: () => dispatch(testFunction())
  };
};

// 필요한 컴포넌트에서 connect로 갖다쓰기
export default connect(mapStateToProps, mapDispatchToProps)(AuthScreen);

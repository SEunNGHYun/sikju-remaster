import 'react-native-gesture-handler';
import React from 'react';
import {
  View, Text, Button, StyleSheet
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();

const styles = StyleSheet.create({
  test: {
    fontSize: 50,
    textAlign: 'center',
  },
  view: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});

const IntroScreen = ({ navigation }) => {
  return (
    <View style={styles.view}>
      <Text style={styles.test}>인트로 페이지</Text>
      <Button title="3초 후" onPress={() => navigation.replace('Login')} />
    </View>
  );
};

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.view}>
      <Text style={styles.test}>Login Screen</Text>
      <Button
        title="회원가입 버튼"
        onPress={() => navigation.navigate('Signup')}
      />
      <Button
        title="카카오 로그인"
        onPress={() => navigation.navigate('PhoneAuth')}
      />
    </View>
  );
};

const SignupScreen = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.test}>Signup Screen</Text>
      {/* <Button title="3초 후에 다음" onPress={() => navigation.navigate('Login')} /> */}
    </View>
  );
};

const PhoneAuthScreen = ({ navigation }) => {
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

const MapScreen = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.test}>지도</Text>
      {/* <Button title="인증 후 메인으로 이동" onPress={() => navigation.navigate('Tab')} /> */}
    </View>
  );
};

const MainScreen = ({ navigation }) => {
  return (
    <View style={styles.view}>
      <Text style={styles.test}>메인 페이지</Text>
      <Button title="현위치 변경" onPress={() => navigation.navigate('Map')} />
      <Button
        title="식당 정보"
        onPress={() => navigation.navigate('RestaurantDetail')}
      />
    </View>
  );
};

const RestaurantDetail = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.test}>식당 상세 페이지</Text>
    </View>
  );
};

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

const MyPage = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.test}>마이페이지</Text>
    </View>
  );
};

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="메인" component={MainScreen} />
      <Tab.Screen name="주변" component={NearRests} />
      <Tab.Screen name="마이페이지" component={MyPage} />
    </Tab.Navigator>
  );
};

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Intro"
          component={IntroScreen}
          options={{ title: 'titile option' }}
        >
          {/* {(props) => <HomeSreen {...props} extraData={someData} />} */}
        </Stack.Screen>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="PhoneAuth" component={PhoneAuthScreen} />
        <Stack.Screen name="Tab" component={TabNavigation} />
        <Stack.Screen name="Map" component={MapScreen} />
        <Stack.Screen name="RestaurantDetail" component={RestaurantDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

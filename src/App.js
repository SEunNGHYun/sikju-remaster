import 'react-native-gesture-handler';
import React from 'react';
import {
  View, Text, StyleSheet
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IntroScreen from './screens/IntroScreen';
import LoginScreen from './screens/LoginScreen';
import AuthScreen from './screens/AuthScreen';
import MapScreen from './screens/MapScreen';
import RestaurantDetailScreen from './screens/RestaurantDetailScreen';
import NearRests from './screens/TabNavigations/nearRests/NearRests';
import MainScreen from './screens/TabNavigations/main/MainScreen';

const Stack = createStackNavigator();

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
        <Stack.Screen name="Auth" component={AuthScreen} />
        <Stack.Screen name="Tab" component={TabNavigation} />
        <Stack.Screen name="Map" component={MapScreen} />
        <Stack.Screen name="RestaurantDetail" component={RestaurantDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

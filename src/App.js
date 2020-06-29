import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStore } from 'redux';
import { SvgCss } from 'react-native-svg';
import { Provider } from 'react-redux';

import reducer from './redux/reducers';

import IntroScreen from './screens/IntroScreen';
import LoginScreen from './screens/login/LoginScreen';
import AuthScreen from './screens/AuthScreen';
import MapScreen from './screens/MapScreen';
import SearchScreen from './screens/search/SearchScreen';
import RestaurantDetailScreen from './screens/RestaurantDetailScreen';
import svg from '../src/assets/svg';
import MyPage from './screens/TabNavigations/myPage/MyPageScreen';

import MainScreen from './screens/TabNavigations/main/MainScreen';
import NearRests from './screens/TabNavigations/nearRests/NearRests';
import styles from './utils/styles';

const Stack = createStackNavigator();

const Store = createStore(reducer);
// reducer를 이용하여 store 만들기

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={MainScreen} 
      options={{
        tabBarIcon: ({ focused }) => <SvgCss width={19} height={19} xml={svg.Home} fill={focused ? styles.primaryColor : styles.darkGreyColor}  />,
        tabBarLabel: '홈',
      }}/>
      <Tab.Screen name="Rests" component={NearRests} 
      options={{
        tabBarIcon: ({ focused }) => <SvgCss width={19} height={19} xml={svg.locate} fill={focused ? styles.primaryColor : styles.darkGreyColor}  />,
        tabBarLabel: '주변 삭당',
      }}/>
      <Tab.Screen name="MyPage" component={MyPage} 
      options={{
        tabBarIcon: ({ focused }) => <SvgCss width={19} height={19} xml={svg.my} fill={focused ? styles.primaryColor : styles.darkGreyColor}  />,
        tabBarLabel: '마이페이지',
      }}/>
    </Tab.Navigator>
  );
};

// store적용
function App() {
  return (
    <Provider store={Store}>
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
          <Stack.Screen name="Tab" component={TabNavigation} options={{
          headerShown: false,
        }}/>
          <Stack.Screen name="Map" component={MapScreen}  options={{
          headerShown: false,
        }}/>
          <Stack.Screen name="Search" component={SearchScreen} 
          options={{
            headerShown: false,
          }}/>
          <Stack.Screen name="RestaurantDetail" component={RestaurantDetailScreen} 
          options={{
            headerTitle : "매장정보"
          }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;

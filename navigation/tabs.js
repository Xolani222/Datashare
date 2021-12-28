import * as React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen, DealsScreen, SettingsScreen, WalletScreen} from '../Screens';
import {icons} from '../constants';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBarOptions={{
        showLabel: false,
        style: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: 'transparent',
          elevation: 0,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={icons.home}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Deals"
        component={DealsScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={icons.buy}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
              }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="wallet"
        component={WalletScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={icons.wallet}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
              }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={icons.settings}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

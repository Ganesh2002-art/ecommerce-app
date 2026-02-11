import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../screens/home/HomeScreen';
import CartScreen from '../screens/cart/CartScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
import colors from '../constants/colors';

import HomeStackNavigator from './HomeStackNavigator';
import CartStackNavigator from './CartStackNavigator';



const Tab = createBottomTabNavigator();

export default function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: colors.bg,
          borderTopColor: colors.border,
          height: 70,
        },
        tabBarIcon: ({ focused }) => {
          let iconName;

          if (route.name === 'Home') iconName = 'home-outline';
          if (route.name === 'Cart') iconName = 'cart-outline';
          if (route.name === 'Profile') iconName = 'person-outline';

          return (
            <Ionicons
              name={iconName}
              size={24}
              color={focused ? colors.accent : colors.secondary}
            />
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeStackNavigator} />
     <Tab.Screen name="Cart" component={CartStackNavigator} />

      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

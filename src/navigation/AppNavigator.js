import React from 'react';
import { useSelector } from 'react-redux';
import AuthNavigator from './AuthNavigator';
import MainTabNavigator from './MainTabNavigator';

export default function AppNavigator() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return isLoggedIn ? <MainTabNavigator /> : <AuthNavigator />;
}

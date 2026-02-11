import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CartScreen from '../screens/cart/CartScreen';
import CheckoutShipping from '../screens/cart/CheckoutShipping';
import CheckoutPayment from '../screens/cart/CheckoutPayment';
import OrderSuccess from '../screens/cart/OrderSuccess';

const Stack = createNativeStackNavigator();

export default function CartStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="CartMain" component={CartScreen} />
      <Stack.Screen name="CheckoutShipping" component={CheckoutShipping} />
      <Stack.Screen name="CheckoutPayment" component={CheckoutPayment} />
      <Stack.Screen name="OrderSuccess" component={OrderSuccess} />
    </Stack.Navigator>
  );
}

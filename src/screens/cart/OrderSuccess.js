import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { CommonActions } from '@react-navigation/native';
import { clearCart } from '../../redux/slices/cartSlice';
import CustomButton from '../../components/CustomButton';
import colors from '../../constants/colors';

export default function OrderSuccess({ navigation }) {
  const dispatch = useDispatch();

  const handleContinueShopping = () => {
    dispatch(clearCart());

    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          {
            name: 'Home', // TAB NAME (very important)
          },
        ],
      })
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Order Placed Successfully 🎉</Text>

      <CustomButton
        title="Continue Shopping"
        onPress={handleContinueShopping}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    color: colors.primary,
    fontSize: 22,
    marginBottom: 30,
    textAlign: 'center',
  },
});

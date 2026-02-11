import React from 'react';
import { View, StyleSheet } from 'react-native';
import InputField from '../../components/InputField';
import CustomButton from '../../components/CustomButton';
import colors from '../../constants/colors';

export default function CheckoutShipping({ navigation }) {
  return (
    <View style={styles.container}>
      <InputField placeholder="Address" />
      <InputField placeholder="City" />
      <InputField placeholder="Postal Code" />

      <CustomButton
        title="Continue to Payment"
        onPress={() => navigation.navigate('CheckoutPayment')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
    padding: 20,
  },
});

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomButton from '../../components/CustomButton';
import colors from '../../constants/colors';

export default function CheckoutPayment({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Payment Method (Dummy)</Text>

      <CustomButton
        title="Place Order"
        onPress={() => navigation.navigate('OrderSuccess')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
    padding: 20,
    justifyContent: 'center',
  },
  text: {
    color: colors.primary,
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
});

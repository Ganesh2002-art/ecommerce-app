import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/slices/authSlice';
import CustomButton from '../../components/CustomButton';
import colors from '../../constants/colors';

export default function ProfileScreen() {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>

      <CustomButton
        title="Logout"
        onPress={() => dispatch(logout())}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    color: colors.primary,
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 30,
    textAlign: 'center',
  },
});

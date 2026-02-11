import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/slices/authSlice';
import InputField from '../../components/InputField';
import CustomButton from '../../components/CustomButton';

export default function LoginScreen({ navigation }) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    dispatch(login({ email }));
  };

  return (
    <View style={styles.container}>

      {/* Title */}
      <Text style={styles.title}>Log into</Text>
      <Text style={styles.title}>your account</Text>

      {/* Inputs */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email address"
          placeholderTextColor="#666"
          style={styles.input}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#666"
          secureTextEntry
          style={styles.input}
        />
      </View>

      {/* Button */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>SIGN IN</Text>
      </TouchableOpacity>

      {/* Footer */}
      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.footerText}>
          Don’t have an account?{' '}
          <Text style={styles.footerBold}>Sign Up</Text>
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141416',
    paddingHorizontal: 30,
    paddingTop: 80,
  },

  title: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '600',
    lineHeight: 34,
  },

  inputContainer: {
    marginTop: 40,
  },

  input: {
    height: 54,
    borderBottomWidth: 1,
    borderBottomColor: '#2A2A2C',
    color: '#FFFFFF',
    fontSize: 16,
    marginBottom: 22,
  },

  button: {
    marginTop: 40,
    backgroundColor: '#FFFFFF',
    height: 54,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    color: '#000000',
    fontSize: 14,
    fontWeight: '600',
    letterSpacing: 1,
  },

  footerText: {
    marginTop: 30,
    color: '#8E8E93',
    textAlign: 'center',
    fontSize: 14,
  },

  footerBold: {
    color: '#FFFFFF',
    fontWeight: '500',
  },
});

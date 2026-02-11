import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import InputField from '../../components/InputField';
import CustomButton from '../../components/CustomButton';
import colors from '../../constants/colors';
export default function SignupScreen({ navigation }) {
  return (
    <View style={styles.container}>

      {/* Title */}
      <Text style={styles.title}>Create</Text>
      <Text style={styles.title}>your account</Text>

      {/* Inputs */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Name"
          placeholderTextColor="#666"
          style={styles.input}
        />
        <TextInput
          placeholder="Email address"
          placeholderTextColor="#666"
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#666"
          secureTextEntry
          style={styles.input}
        />
        <TextInput
          placeholder="Confirm password"
          placeholderTextColor="#666"
          secureTextEntry
          style={styles.input}
        />
      </View>

      {/* Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>SIGN UP</Text>
      </TouchableOpacity>

      {/* Footer */}
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.footerText}>
          Already have an account?{' '}
          <Text style={styles.footerBold}>Login</Text>
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


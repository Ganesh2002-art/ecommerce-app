import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
export default function SplashScreen({ navigation }) {
  return (
    <View style={styles.container}>
      
      {/* Logo Section */}
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.replace('Login')}
      >
        <Text style={styles.buttonText}>Get Started   →</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141416',
    paddingHorizontal: 30,
    paddingBottom: 40,
  },

  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    width: 260,
    height: 260,
  },

  button: {
    width: '100%',
    backgroundColor: '#D9D9D9',
    paddingVertical: 18,
    borderRadius: 40,
    alignItems: 'center',
  },

  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
  },
});

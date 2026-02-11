import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default function InputField(props) {
  return (
    <TextInput
      {...props}
      placeholderTextColor="#888"
      style={styles.input}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    color: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    paddingVertical: 12,
    marginBottom: 25,
    fontSize: 16,
  },
});

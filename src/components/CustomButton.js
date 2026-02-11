import React, { useRef } from 'react';
import { Text, Animated, Pressable, StyleSheet } from 'react-native';
import colors from '../constants/colors';

export default function CustomButton({ title, onPress }) {
  const scale = useRef(new Animated.Value(1)).current;

  return (
    <Pressable
      onPressIn={() => Animated.spring(scale, { toValue: 0.96, useNativeDriver: true }).start()}
      onPressOut={() => Animated.spring(scale, { toValue: 1, useNativeDriver: true }).start(onPress)}
    >
      <Animated.View style={[styles.btn, { transform: [{ scale }] }]}>
        <Text style={styles.text}>{title}</Text>
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: colors.accent,
    padding: 16,
    borderRadius: 14,
    alignItems: 'center',
    marginTop: 20,
  },
  text: { color: colors.primary, fontWeight: '600' },
});

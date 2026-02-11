import React, { useRef, useEffect } from 'react';
import { Animated, StyleSheet } from 'react-native';
import colors from '../constants/colors';

export default function ProductSkeleton() {
  const opacity = useRef(new Animated.Value(0.3)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 700,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0.3,
          duration: 700,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    <Animated.View style={[styles.card, { opacity }]} />
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.border,
    height: 200,
    width: '46%',
    borderRadius: 18,
    margin: 8,
  },
});

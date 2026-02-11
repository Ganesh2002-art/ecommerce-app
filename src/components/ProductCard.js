import React, { useRef, useEffect } from 'react';
import { Text, Image, Animated, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import colors from '../constants/colors';

export default function ProductCard({ item, onPress }) {
  const scale = useRef(new Animated.Value(1)).current;
  const fade = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fade, { toValue: 1, duration: 400, useNativeDriver: true }).start();
  }, []);

  return (
    <TouchableWithoutFeedback
      onPressIn={() => Animated.spring(scale, { toValue: 0.97, useNativeDriver: true }).start()}
      onPressOut={() => Animated.spring(scale, { toValue: 1, useNativeDriver: true }).start(onPress)}
    >
      <Animated.View style={[styles.card, { transform: [{ scale }], opacity: fade }]}>
        <Image source={{ uri: item.images[0] }} style={styles.img} />
        <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
        <Text style={styles.price}>${item.price}</Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderRadius: 18,
    padding: 12,
    margin: 8,
    width: '46%',
  },
  img: { height: 120, borderRadius: 14 },
  title: { color: colors.primary, marginTop: 10 },
  price: { color: colors.accent, marginTop: 6 },
});

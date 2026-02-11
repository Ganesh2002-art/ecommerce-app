import React, { useRef } from 'react';
import { View, Text, Animated, Dimensions, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/slices/cartSlice';
import CustomButton from '../../components/CustomButton';
import colors from '../../constants/colors';

const HEADER_HEIGHT = 320;
const { width } = Dimensions.get('window');

export default function ProductDetailsScreen({ route }) {
  const { product } = route.params;
  const dispatch = useDispatch();
  const scrollY = useRef(new Animated.Value(0)).current;

  const translateY = scrollY.interpolate({
    inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
    outputRange: [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75],
  });

  const scale = scrollY.interpolate({
    inputRange: [-HEADER_HEIGHT, 0],
    outputRange: [2, 1],
    extrapolate: 'clamp',
  });

  return (
    <View style={styles.container}>
      {/* Parallax Image */}
      <Animated.Image
        source={{ uri: product.images[0] }}
        style={[
          styles.image,
          { transform: [{ translateY }, { scale }] },
        ]}
      />

      <Animated.ScrollView
        contentContainerStyle={{ paddingTop: HEADER_HEIGHT }}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
      >
        <View style={styles.content}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.desc}>{product.description}</Text>
          <Text style={styles.price}>${product.price}</Text>

          <CustomButton
            title="Add To Cart"
            onPress={() => dispatch(addToCart(product))}
          />
        </View>
      </Animated.ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  image: {
    position: 'absolute',
    width,
    height: HEADER_HEIGHT,
  },
  content: {
    backgroundColor: colors.bg,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    padding: 20,
  },
  title: {
    color: colors.primary,
    fontSize: 22,
    fontWeight: '600',
  },
  desc: {
    color: colors.secondary,
    marginVertical: 12,
  },
  price: {
    color: colors.accent,
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 20,
  },
});

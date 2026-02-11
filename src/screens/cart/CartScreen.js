import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
} from 'react-native';
import { useSelector } from 'react-redux';
import CustomButton from '../../components/CustomButton';
import colors from '../../constants/colors';

export default function CartScreen({ navigation }) {
  const items = useSelector(state => state.cart.items);

  const total = items.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  if (items.length === 0) {
    return (
      <View style={styles.empty}>
        <Text style={styles.emptyText}>Your cart is empty 🛒</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 140 }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image
              source={{ uri: item.images?.[0] }}
              style={styles.image}
            />

            <View style={styles.info}>
              <Text style={styles.title} numberOfLines={2}>
                {item.title}
              </Text>

              <Text style={styles.price}>
                ${item.price} × {item.qty}
              </Text>
            </View>
          </View>
        )}
      />

      {/* Bottom Summary */}
      <View style={styles.footer}>
        <View style={styles.totalRow}>
          <Text style={styles.totalText}>Total</Text>
          <Text style={styles.totalPrice}>${total}</Text>
        </View>

        <CustomButton
          title="Proceed to Checkout"
          onPress={() => navigation.navigate('CheckoutShipping')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
    padding: 16,
  },

  card: {
    flexDirection: 'row',
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 12,
    marginBottom: 12,
  },

  image: {
    width: 70,
    height: 70,
    borderRadius: 12,
    backgroundColor: colors.border,
  },

  info: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'space-between',
  },

  title: {
    color: colors.primary,
    fontSize: 15,
    fontWeight: '500',
  },

  price: {
    color: colors.accent,
    fontSize: 14,
    marginTop: 6,
  },

  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.bg,
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },

  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },

  totalText: {
    color: colors.secondary,
    fontSize: 16,
  },

  totalPrice: {
    color: colors.primary,
    fontSize: 18,
    fontWeight: '700',
  },

  empty: {
    flex: 1,
    backgroundColor: colors.bg,
    justifyContent: 'center',
    alignItems: 'center',
  },

  emptyText: {
    color: colors.secondary,
    fontSize: 18,
  },
});


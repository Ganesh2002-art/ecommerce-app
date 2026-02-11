import React, { useEffect, useState, useMemo } from 'react';
import { View, FlatList, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/slices/productSlice';
import ProductCard from '../../components/ProductCard';
import ProductSkeleton from '../../components/ProductSkeleton';
import InputField from '../../components/InputField';
import colors from '../../constants/colors';

export default function HomeScreen({ navigation }) {
  const dispatch = useDispatch();
  const { list = [], loading } = useSelector(state => state.products);

  const [search, setSearch] = useState('');

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // 🔥 Optimized Filtering
  const filteredProducts = useMemo(() => {
    if (!search.trim()) return list;

    return list.filter(item =>
      item.title?.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, list]);

  if (loading) {
    return (
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', padding: 10 }}>
        {[...Array(6)].map((_, i) => (
          <ProductSkeleton key={i} />
        ))}
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: colors.bg, padding: 10 }}>
      
      {/* 🔎 Search Field */}
      <InputField
        placeholder="Search products..."
        value={search}
        onChangeText={setSearch}
      />

      {filteredProducts.length === 0 ? (
        <Text
          style={{
            color: colors.secondary,
            textAlign: 'center',
            marginTop: 40,
          }}
        >
          No products found 😕
        </Text>
      ) : (
        <FlatList
          data={filteredProducts}
          numColumns={2}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <ProductCard
              item={item}
              onPress={() =>
                navigation.navigate('ProductDetails', { product: item })
              }
            />
          )}
        />
      )}
    </View>
  );
}

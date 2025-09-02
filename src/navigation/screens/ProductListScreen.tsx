import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, TextInput, View, Text } from "react-native";
import { Image } from "expo-image";

import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { Product } from "@/types";
import { useNavigation } from "@react-navigation/native";
import ProductSkeleton from "@/components/ProductSkeleton";
import ProductItem from "@/components/ProductItem";
import EmptyState from "@/components/EmptyState";



export function ProductListScreen() {
  const navigation = useNavigation<any>();
  const { addToCart } = useCart();
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddToCart = (product: Product) => {
    addToCart(product);
  };

  const handleProductPress = (product: string) => {
    // console.log(productId)
    navigation.navigate("ProductDetail", { productId: product });
  };

  const handleRefresh = () => {
    setIsLoading(true);
    // Simulate refresh
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search products..."
        value={searchQuery}
        placeholderTextColor="#999999"
        onChangeText={setSearchQuery}
      />
      {isLoading ? (
        <View style={styles.skeletonContainer}>
          {[...Array(4)].map((_, index) => (
            <ProductSkeleton key={`skeleton-${index}`} />
          ))}
        </View>
      ) : (
        <FlatList
          data={isLoading ? [...Array(4)] : filteredProducts}
          renderItem={({ item }) =>
            isLoading ? (
              <ProductSkeleton />
            ) : (
              <ProductItem
                item={item}
                onProductPress={handleProductPress}
                // onAddToCart={handleAddToCart}
              />
            )
          }
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.productList}
          onRefresh={handleRefresh}
          refreshing={isLoading}
          ListEmptyComponent={
            <EmptyState
              title="No Products Found"
              message="Try adjusting your search criteria"
            />
          }
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 32,
    backgroundColor: "#FFFFFF",
  },
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 16,
    backgroundColor: "#FFFFFF",
    color: "#000000",
  },
  productList: {
    paddingBottom: 20,
  },
  productItem: {
    marginBottom: 16,
    backgroundColor: "#FFFFFF",
  },
  productCard: {
    borderRadius: 8,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    backgroundColor: "#FFFFFF",
  },
  productImage: {
    width: "100%",
    height: 200,
  },
  productInfo: {
    padding: 12,
    backgroundColor: "#FFFFFF",
  },
  addButton: {
    backgroundColor: "#007BFF",
    padding: 8,
    borderRadius: 4,
    alignItems: "center",
    marginTop: 8,
  },
  addButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  // Skeleton styles
  skeleton: {
    backgroundColor: "#E1E9EE",
    borderRadius: 4,
  },
  skeletonContainer: {
    flex: 1,
    paddingBottom: 20,
  },
  skeletonText: {
    height: 20,
    width: "70%",
    marginBottom: 8,
  },
  skeletonPrice: {
    height: 16,
    width: "40%",
    marginBottom: 8,
  },
  skeletonButton: {
    backgroundColor: "#E1E9EE",
    marginTop: 8,
    height: 36,
  },
  emptyState: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  emptyStateTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  emptyStateText: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
  },
});

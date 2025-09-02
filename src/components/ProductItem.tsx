import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { Product } from "@/types";
import { useCart } from "@/context/CartContext";

interface ProductItemProps {
  item: Product;
  onProductPress: (id: string) => void;
}

const ProductItem = ({ item, onProductPress }: ProductItemProps) => {
  const { addToCart, removeFromCart, cartItems, reduceQuantity } = useCart();
  
  // Check if the product is in the cart
  const cartItem = cartItems.find(cartItem => cartItem.product.id === item.id);
  const isInCart = Boolean(cartItem);
  const quantity = cartItem?.quantity || 0;

  const handleAddToCart = (e: any) => {
    e.stopPropagation();
    addToCart(item);
  };

  const handleRemoveFromCart = (e: any) => {
    e.stopPropagation();
    removeFromCart(item.id);
  };
  const handleReduceFromCart = (e: any) => {
    e.stopPropagation();
    reduceQuantity(item.id);
  };

  return (
    <View style={styles.productItem}>
      <View style={styles.productCard} onTouchEnd={() => onProductPress(item.id)}>
        <Image
          source={{ uri: item.image }}
          style={styles.productImage}
          contentFit="cover"
        />
        <View style={styles.productInfo}>
          <Text style={styles.subtitle}>{item.name}</Text>
          <Text>${item.price.toFixed(2)}</Text>
          
          {isInCart && (
            <View style={styles.quantityContainer}>
              <View 
                style={styles.quantityButton} 
                onTouchEnd={handleReduceFromCart}
              >
                <Text style={styles.quantityButtonText}>-</Text>
              </View>
              <Text style={styles.quantityText}>{quantity}</Text>
              <View 
                style={styles.quantityButton} 
                onTouchEnd={handleAddToCart}
              >
                <Text style={styles.quantityButtonText}>+</Text>
              </View>
            </View>
          )}
          
          <View
            style={[styles.addButton, isInCart && styles.inCartButton]}
            onTouchEnd={isInCart ? handleRemoveFromCart : handleAddToCart}
          >
            <Text style={styles.addButtonText}>
              {isInCart ? "Remove from Cart" : "Add to Cart"}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  inCartButton: {
    backgroundColor: "#dc3545",
  },
  addButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
  },
  quantityButton: {
    backgroundColor: "#007BFF",
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  quantityButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  quantityText: {
    marginHorizontal: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ProductItem;
import React from "react";
import { View, StyleSheet } from "react-native";

const ProductSkeleton = () => (
  <View style={styles.productItem}>
    <View style={styles.productCard}>
      <View style={[styles.productImage, styles.skeleton]} />
      <View style={styles.productInfo}>
        <View style={[styles.skeletonText, styles.skeleton]} />
        <View style={[styles.skeletonPrice, styles.skeleton]} />
        <View style={[styles.addButton, styles.skeletonButton]} />
      </View>
    </View>
  </View>
);

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
  skeleton: {
    backgroundColor: "#E1E9EE",
    borderRadius: 4,
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
   addButton: {
    
    padding: 8,
    borderRadius: 4,
    alignItems: "center",
    marginTop: 8,
  },
  skeletonButton: {
    backgroundColor: "#E1E9EE",
    marginTop: 8,
    height: 36,
  },
});

export default ProductSkeleton;
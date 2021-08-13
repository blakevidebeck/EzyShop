import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useDispatch } from "react-redux";

import { addToCart } from "../features/cart/CartSlice";
import { space, fontSizes } from "../infrastructure/styles/";

export interface Product {
  name: string;
  price: number;
}

interface Props {
  product: Product;
  checkout?: boolean;
}

export const Item: React.FC<Props> = ({ product, checkout }) => {
  const dispatch = useDispatch();

  return (
    <View style={Styles.container}>
      <Text style={Styles.name}>{product.name}</Text>
      <Text style={Styles.price}>${product.price}</Text>
      {checkout ? (
        <Button title="Remove from cart" onPress={() => null} />
      ) : (
        <Button
          title="Add to cart"
          onPress={() => dispatch(addToCart(product))}
        />
      )}
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    padding: space[3],
    margin: space[1],
    display: "flex",
    alignItems: "center",
    backgroundColor: "white",
  },
  name: {
    fontSize: fontSizes.title,
  },
  price: {
    fontSize: fontSizes.body,
    padding: space[1],
  },
});
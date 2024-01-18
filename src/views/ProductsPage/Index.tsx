import { useState, useEffect } from "react";
import { StyleSheet, ScrollView } from "react-native";
import api from "../../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ProductCard from "../../components/ProductsCard"
export function ProductsPage() {
  const [produto, setProduto] = useState([]);

  async function getProducts() {
    const value = await AsyncStorage.getItem("token") || "{}";
    const { data } = await api.get("/products", {
      headers: {
        Authorization: `Bearer ${value}`,
      },
    });
    setProduto(data);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <ScrollView style={styles.container}>
        {produto.map((product: any) => (
          <ProductCard 
            key={product.id}
            name={product.name} 
            price={product.price} 
            description={product.description}
            uri={product.uri}
          />
        ))}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 5,
    alignContent: "center",
  },
});

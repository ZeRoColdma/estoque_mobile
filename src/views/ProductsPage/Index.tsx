import { useState, useEffect } from "react";
import { StyleSheet, ScrollView } from "react-native";
import api from "../../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ProductCard from "../../components/ProductsCard"
import { decriptToken } from "../../util/decriptToken/decriptToken";
export function ProductsPage() {
  const [produto, setProduto] = useState([]);
  const [userId, setUserId] = useState<any>({});

  async function getProducts() {
    try {
      const token = await AsyncStorage.getItem("token") || "{}";
      const userId = decriptToken(token);
      
      const { data } = await api.get("/products", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProduto(data);
      setUserId((userId as any).id);
    } catch (e) {
      console.log(e);
    }
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
            userId={userId}
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

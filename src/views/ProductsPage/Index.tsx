import { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Table, Row, Rows } from 'react-native-table-component';
import api from "../../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import IProduct from "../../interfaces/Products";

export function ProductsPage() {
  const [produto, setProduto] = useState([]);
  const [data, setData] = useState([]);

  const tableHead = ['Name', 'Price'];
  const tableData = [setProduto];

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
      <View style={styles.container}>
        <Table >
          <Row data={tableHead} />
        </Table>
        {
        produto.map((item: IProduct) => {
          return (
            <>
              <Row data={[item.name, item.price]} />
            </>
          )
        })
      }
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  }
});

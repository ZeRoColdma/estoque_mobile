import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { Button, Text, TouchableOpacity, StyleSheet } from "react-native";
import api from "../../services/api";
import getData from "../../util/getValueFromUser/getValuesToUser";

export function MainPage() {
  const [produto, setProduto] = useState(0);
  const [data, setData] = useState<any>();

  async function getProducts() {
    const datas = await getData();

    console.log(datas);
  }

  return (
    <>
      <TouchableOpacity style={styles.btnStyle}>
        <Button title="Data" onPress={getProducts} />
      </TouchableOpacity>

      <Text>{produto}</Text>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  btnStyle: {
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
});

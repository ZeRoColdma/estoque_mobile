import { useState } from "react";
import { Product } from "../../interfaces/Products";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { decriptToken } from "../../util/decriptToken/decriptToken";
import api from "../../services/api";
  
export default async function getData(){
    const [token, setToken] = useState<any>();
    const [dataToken, setDataToken] = useState<any>([]);

    try {
      const value = (await AsyncStorage.getItem("token")) || "{}";
      setToken(value);
      const decoded = decriptToken(value);
      setDataToken(decoded);

      const response = await api.get(`/user_products/index/${dataToken.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response;
    } catch (e) {
      console.log(e);
    }
  };
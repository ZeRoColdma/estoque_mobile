import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { decriptToken } from "../../util/decriptToken/decriptToken";
  
export default async function getDataTokenValue(){
    const [token, setToken] = useState<any>();
    const [dataToken, setDataToken] = useState<any>([]);

    try {
      const value = await AsyncStorage.getItem("token") || "{}";
      setToken(value);
      const decoded = decriptToken(value);
      setDataToken(decoded);
      return {decoded};
    } catch (e) {
      console.log(e);
    }
  };
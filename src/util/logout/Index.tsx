import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet, Text } from "react-native";

export function LogOut(){
  const navigation = useNavigation();

  function handleLogout(){
    AsyncStorage.removeItem("token");
    navigation.navigate("Home");
  }
  return (
    <>
      {
        handleLogout()
      }
    </>
  );
}
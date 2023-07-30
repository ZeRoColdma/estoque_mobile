import { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Table, Row, Rows } from 'react-native-table-component';
import api from "../../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import IProduct from "../../interfaces/Products";

export function MainPage() {
    return (
    <>
      <View style={styles.container}>
        <Text>
          Main Page
        </Text>
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

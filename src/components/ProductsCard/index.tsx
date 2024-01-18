import React, {useState} from 'react';
import { StyleSheet, Modal, View } from "react-native";
import { Button, Card, Paragraph } from 'react-native-paper';
import IProduct from "../../interfaces/Products";
import {AddNewProductComponent} from "../NewUserProductComponent";

export default function CardComponent({ name, price, description }: IProduct) {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };


  return (
    <>
      <Card style={styles.cardStyle}>
      <Card.Content>
        <Paragraph>Nome: {name}</Paragraph>
        <Paragraph>Preço: {price}</Paragraph>
        <Paragraph>Descrição: {description}</Paragraph>
        <AddNewProductComponent />
      </Card.Content>
    </Card>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },

  cardStyle: {
    margin: 5,
    paddingBottom: 5,
    paddingLeft: 5,
    paddingRight: 5,
    alignContent: "center",
  },
});
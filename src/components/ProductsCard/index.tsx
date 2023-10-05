import React from 'react';
import { StyleSheet } from "react-native";
import { Card, Paragraph } from 'react-native-paper';
import IProduct from "../../interfaces/Products";

export default function CardComponent({ name, price, description }: IProduct) {
  return (
    <Card style={styles.cardStyle}>
      <Card.Content>
        <Paragraph>Nome: {name}</Paragraph>
        <Paragraph>Preço: {price}</Paragraph>
        <Paragraph>Descrição: {description}</Paragraph>
      </Card.Content>
      <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    </Card>
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
  }
});
import React, { useState } from 'react';
import { Modal, StyleSheet, Text, Pressable, View } from 'react-native';
import { Button } from 'react-native-paper';
import { ModalAddNewProductForm } from '../AddNewUseProductsForm';

export function ModalAddNewProduct() {
  const [modalVisible, setModalVisible] = useState(false);
  const [quantity, setQuantity] = useState(0);

  function handleQuantity(quantity: number) {
    console.log(quantity);
  }

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Insira a quantidade desejada</Text>
            <ModalAddNewProductForm />
            <Pressable
              style={styles.buttonClose}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text 
                style={styles.textStyle}>
                Adicionar Produto
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={styles.buttonOpen}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Adicionar ao seu estoque</Text>
      </Pressable>
    </View>
  )
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    width: 300,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  
  buttonOpen: {
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ff7bc1",
    width: 200,
    height: 40,
    borderRadius: 10
  },
  
  buttonClose: {
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ff7bc1",
    width: 200,
    height: 40,
    borderRadius: 10
  },

  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
    color: "#a14f7b"
  },
});
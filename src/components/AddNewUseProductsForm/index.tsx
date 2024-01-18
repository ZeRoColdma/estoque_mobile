import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Pressable } from 'react-native';


export function ModalAddNewProductForm() {
  const [quantity, setQuantity] = useState('');
  function handleInputChange(text: string){
    setQuantity(text);
  };

  return (
    <>
      <View style={styles.container}>
        <View style={{ marginBottom: 5 }}>
          <Pressable>
            <TextInput 
              placeholder='Quantidade' 
              style={styles.textInput}
              keyboardType="numeric"
              onChangeText={(event) => handleInputChange(event)}
              >{quantity}
            </TextInput>
          </Pressable>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 5,
    borderRadius: 10
  },

  textStyles: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 11,
    marginBottom: 10
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 50,
    height: 100,
  }
})
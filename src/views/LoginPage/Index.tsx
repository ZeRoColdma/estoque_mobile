import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import api from "../../services/api";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const image = require("../../assets/estoque.gif");

export function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const storeData = async (value: string) => {
    try {
      await AsyncStorage.setItem("token", value);
    } catch (e) {
      // saving error
    }
  };

  async function handleLogin() {
    if (email === "" || password === "") {
      alert("Email ou senha nao podem ser vazios!");
      return;
    }

    const data = await api.post("/session", {
      email,
      password,
    });

    if (data.status === 200) {
      const token = data.data.token;
      storeData(token);
      navigation.navigate("MainPage");
    } else {
      alert("Email ou senha incorretos!");
    }
  }

  return (
    <>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Image style={styles.image} source={image} />
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Email"
            placeholderTextColor="#000000"
            onChangeText={(email) => setEmail(email)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Senha"
            placeholderTextColor="#000000"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </View>
        {/* <TouchableOpacity>
          <Text style={styles.forgot_button}>Forgot Password?</Text>
        </TouchableOpacity> */}
        <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
          <Text style={styles.loginColor}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    // backgroundColor: "#ff7bc1",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    marginBottom: 150,
    height: 155,
    width: 350,
  },
  inputView: {
    backgroundColor: "#fae9ec",
    borderRadius: 30,
    width: "90%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  
  TextInput: {
    height: 50,
    flex: 1,
    padding: 5,
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
    color: "#000",
  },

  loginBtn: {
    width: "80%",
    borderRadius: 15,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "rgb(248, 101, 150)",
    color: "#fff",
  },

  loginColor: {
    color: "#fff",
  },

});

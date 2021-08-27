import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";

import styles from "./style";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import firebase from "../../config/firebase.js";

export default function NewUser({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorLogin, setErrorLogin] = useState("");

  const register = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        let user = userCredential.user;
        navigation.navigate("Login");
      })
      .catch((error) => {
        let errorCode = error.code;
        let errorMessage = error.message;
      });
  };

  return (
    <KeyboardAvoidingView
      //behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <Text style={styles.title}>Criar Conta</Text>
      <TextInput
        style={styles.input}
        placeholder="Use seu melhor e-mail"
        type="text"
        onChangeText={(text) => setEmail(text)}
        value={email}
      ></TextInput>
      <TextInput
        style={styles.input}
        placeholder="Senha (min. 8  Dígitos)"
        type="text"
        onChangeText={(text) => setPassword(text)}
        value={password}
      ></TextInput>
      {errorLogin === true ? (
        <View style={styles.contentAlert}>
          <MaterialCommunityIcons
            name="alert-circle"
            size={24}
            color="#bdbdbd"
          />
          <Text style={styles.warningAlert}>
            Senha e e-mail são obrigatórios.
          </Text>
        </View>
      ) : (
        <View />
      )}
      {email === "" || password === "" ? (
        <TouchableOpacity disabled={true} style={styles.buttonLogin}>
          <Text style={styles.textButtonLogin}>Registrar-se</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.buttonLoginOn}>
          <Text style={styles.textButtonLoginOn} onPress={register}>Registrar-se</Text>
        </TouchableOpacity>
      )}
      <Text style={styles.registration}>Possui conta?</Text>
      <Text
        style={styles.linkRegistration}
        onPress={() => navigation.navigate("Login")}
      >
        Faça Login
      </Text>
      <View style={{ height: 100 }}></View>
    </KeyboardAvoidingView>
  );
}

//! rnf - export default function React Snp.

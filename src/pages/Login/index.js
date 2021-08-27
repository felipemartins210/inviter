import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";

import firebase from '../../config/firebase';
import styles from "./style";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorLogin, setErrorLogin] = useState("");

  const loginFirebase = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        let user = userCredential.user;
        console.log(user);
        navigation.navigate("Invite", { idUser: user.uid });
      })
      .catch((error) => {
        setErrorLogin(true);
        let errorCode = error.code;
        let errorMessage = error.message;
      });
  };

  return (
    <KeyboardAvoidingView
      // behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <Text style={styles.title}>Circus Login</Text>
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        type="text"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder="Senha"
        type="text"
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      {errorLogin === true ? (
        <View style={styles.contentAlert}>
          <MaterialCommunityIcons
            name="alert-circle"
            size={24}
            color="#bdbdbd"
          />
          <Text style={styles.warningAlert}>Senha ou e-mail inválidos.</Text>
        </View>
      ) : (
        <View />
      )}
      {email === "" || password === "" ? (
        <TouchableOpacity disabled={true} style={styles.buttonLogin}>
          <Text style={styles.textButtonLogin}>Login</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity disabled={true} style={styles.buttonLoginOn}>
          <Text style={styles.textButtonLoginOn} onPress={loginFirebase}>
            Login
          </Text>
        </TouchableOpacity>
      )}
      <Text style={styles.registration}>Não possui conta?</Text>
      <Text
        style={styles.linkRegistration}
        onPress={() => navigation.navigate("NewUser")}
      >
        Crie uma conta
      </Text>
      <View style={{ height: 100 }}></View>
    </KeyboardAvoidingView>
  );
}

//! rnf - export default function React Snp.

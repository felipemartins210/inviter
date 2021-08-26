import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";

import firebase from "../../config/firebase";
import styles from "./style";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorLogin, setErrorLogin] = useState("");

  const loginFirebase = () => {
    //TODO > login firebase
  };

  return (
    <View>
      <Text>Login</Text>
    </View>
  );
}

//! rnf - export default function React Snp.

import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

import firebase from "../../config/firebase.js";
import styles from "./style";

export default function NewInvite({ navigation }, propos) {
  const [description, setDescription] = useState(null);
  const database = firebase.firestore();

  function addInvite() {
    database.collection("Invites").add({
      description: description,
      status: false,
    });
    navigation.navigate("Invite");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>description</Text>
      <TextInput
        style={styles.input}
        placeholder="Sua descrição"
        onChangeText={setDescription}
        value={description}
      />
      <TouchableOpacity
        style={styles.buttonNewInvite}
        onPress={() => {
          addInvite();
        }}
      >
        <Text style={styles.iconButton}>Adicionar</Text>
      </TouchableOpacity>
    </View>
  );
}

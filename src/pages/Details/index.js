import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

import database from "../../config/firebase";
import styles from "./style";

export default function Details({ navigation, route }) {
  const [descriptionEdit, setDescriptionEdit] = useState(
    route.params.description
  );
  const idInvite = route.params.id;

  function editInvite(description, id) {
    database.collection("Invites").doc(id).update({
      description: description,
    });
    navigation.navigate("Invite");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>description</Text>
      <TextInput
        style={styles.input}
        placeholder="Sua descrição"
        onChangeText={setDescriptionEdit}
        value={descriptionEdit}
      />
      <TouchableOpacity
        style={styles.buttonNewInvite}
        onPress={() => {
          editInvite(descriptionEdit, idInvite);
        }}
      >
        <Text style={styles.iconButton}>Adicionar</Text>
      </TouchableOpacity>
    </View>
  );
}

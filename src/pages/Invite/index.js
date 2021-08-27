import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";


import { FontAwesome } from "@expo/vector-icons";
import firebase from "../../config/firebase";
import styles from "./style";

export default function Invite({ navigation }) {
  const [invite, setInvite] = useState([]);
  const database = firebase.firestore();

  function deleteInvite(id) {
    database.collection("Invites").doc(id).delete();
  }

  useEffect(() => {
    // * Accessing coleection from firebase db
    // * Passing as a parameter a query
    database.collection("Invites").onSnapshot((query) => {
      const list = [];
      query.forEach((doc) => {
        list.push({ ...doc.data(), id: doc.id });
      });
      setInvite(list);
    });
  }, []);

  return (
    <View style={styles.container}>
    <View>
      <Text>Bem vindo {}</Text>
    </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={invite}
        renderItem={({ item }) => {
          return (
            <View style={styles.invite}>
              <TouchableOpacity
                style={styles.deleteInvite}
                onPress={() => {
                  deleteInvite(item.id);
                }}
              >
                <FontAwesome
                  name="check"
                  size={23}
                  color="#f92a6a"
                ></FontAwesome>
              </TouchableOpacity>
              <Text
                style={styles.descriptionInvite}
                onPress={() =>
                  navigation.navigate("Details", {
                    id: item.id,
                    description: item.description,
                  })
                }
              >
                {item.description}
              </Text>
            </View>
          );
        }}
      />
      <TouchableOpacity
        style={styles.buttonNewInvite}
        onPress={() => navigation.navigate("NewInvite")}
      >
        <Text style={styles.iconButton}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

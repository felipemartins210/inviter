import React, { useState, useEffect } from "react";
import { 
    View,
    Text,
    TouchableOpacity,
    FlatList
 } from "react-native";

 import database from '../../config/firebase'
 import { FontAwesome } from "@expo/vector-icons";
 import stykes from './style'
import styles from "./style";

export default function Invite({ navigation }) {
    const [invite, setInvite] = useState([])


    useEffect(()=>{
        // * Accessing coleection from firebase db
        // * Passing as a parameter a query
        database.collection("Invites").onSnapshot((query)=>{
            const list = []
            query.forEach((doc)=>{
                list.push({...doc.data(), id: doc.id})
            })
            setInvite(list)
        })
    }, [])

    return(
        <View style={styles.invite}>
           <FlatList/>
           <TouchableOpacity 
           style={styles.buttonNewInvite}
           onPress={()=> navigation.navigate("NewInvite")}
           >
               <Text style={styles.iconButton}>+</Text>
           </TouchableOpacity>
        </View>
    )
}
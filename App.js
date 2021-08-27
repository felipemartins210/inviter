import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
//! Buscar documentação para implementar Barra inferior de Menu
//TODO -> Implementar Bottom Tab Navigator
//import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Invite from "./src/pages/Invite";
import NewInvite from "./src/pages/NewInvite";
import Details from "./src/pages/Details";
import Login from "./src/pages/Login";
import NewUser from "./src/pages/NewUser";
import Home from "./src/pages/Home";

const Stack = createStackNavigator();
//TODO -> Implementar Bottom Tab Navigator
//const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTintColor: "#f92e66",
          }}
        />
        <Stack.Screen
          name="NewUser"
          component={NewUser}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Invite"
          component={Invite}
          options={{
            headerTintColor: "#f92e66",
          }}
        />
        <Stack.Screen
          name="NewInvite"
          component={NewInvite}
          options={{
            headerTintColor: "#f92e66",
          }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            headerTintColor: "#f92e66",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

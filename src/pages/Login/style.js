import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    //paddingTop: Platform.OS === "ios" ? 0 : 50,
  },
  title: {
    fontSize: 46,
    color: "#f92e66",
    marginBottom: 10,
    fontWeight: "bold",
  },
  input: {
    width: 300,
    marginTop: 10,
    padding: 10,
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: "#F92E6A",
    marginLeft: "auto",
    marginRight: "auto",
    color: "#4d5153",
  },
  contentAlert: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  warningAlert: {
    paddingLeft: 10,
    color: "#bdbdbd",
    fontSize: 16,
  },
  buttonLogin: {
    width: 200,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#bdbdbd",
    borderRadius: 50,
    marginTop: 30,
  },
  buttonLoginOn: {
    width: 200,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f92e66",
    borderRadius: 50,
    marginTop: 30,
  },
  textButtonLogin: {
    color: "#000000",
  },
  textButtonLoginOn: {
    color: "#ffffff",
  },
  registration: { marginTop: 20, color: "#4d5153" },
  linkRegistration: { fontSize: 16, color: "#1877f2", marginTop: 5 },
});

export default styles;

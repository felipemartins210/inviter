import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
  },
  invite: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
  deleteInvite: {
    justifyContent: "center",
    paddingLeft: 15,
  },
  descriptionInvite: {
    width: "75%",
    alignContent: "flex-start",
    backgroundColor: "#f5f5f5cf",
    padding: 12,
    paddingHorizontal: 20,
    borderRadius: 50,
    marginBottom: 5,
    marginRight: 15,
    color: "#282b2db5",
  },
  buttonNewInvite: {
    width: 60,
    height: 60,
    position: "absolute",
    bottom: 30,
    left: 20,
    backgroundColor: "#f9266a",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  iconButton: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    borderBottomColor: "#ff00ff",
  },
});

export default styles;

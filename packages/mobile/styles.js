// styles.js

import { StyleSheet } from "react-native";
import { normalizeHeight, normalizeWidth } from "./screens/Responsive";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: "center",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 70,
    color: "black",
    fontFamily: "JetBrainsMono-Regular",
  },
  text: {
    fontSize: 16,
    fontFamily: "JetBrainsMono-Regular",
  },
  input: {
    height: normalizeHeight(40),
    width: normalizeWidth(200),
    borderColor: "gray",
    borderWidth: 1,
    backgroundColor: "white",
    borderRadius: 10,
    textAlign: "center",
    fontFamily: "JetBrainsMono-Regular",
  },
  button: {
    padding: 10,
    borderRadius: 5,
    alignSelf: "center",
  },
  buttonPressed: {
    opacity: 0.6,
  },
  google: {
    backgroundColor: "white",
    padding: 8,
    width: normalizeWidth(200),
    borderRadius: 10,
    borderColor: "gray",
    borderWidth: 1,
    textAlign: "center",
    alignSelf: "center",
    marginTop: 20,
    fontFamily: "JetBrainsMono-Regular",
  },
});

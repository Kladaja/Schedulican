import React from "react";
import { StyleSheet, Text, View } from "react-native";

const TextInput = ({ placeHolder = "", text = "", onClick }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{placeHolder}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "80%",
    paddingHorizontal: "5%",
    paddingVertical: "2.5%",
    marginBottom: "2%",
    marginVertical: "2.5%",
    textAlign: "left",
    borderWidth: 1,
    borderColor: "#a5d200",
    borderRadius: "25px",
    backgroundColor: "#fff",
  },
  text: {
    color: "#a5d200",
    fontSize: "20px",
  },
});

export default TextInput;

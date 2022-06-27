import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Button = ({ text = "", isDark = true, onClick }) => {
  const containerStyle = isDark
    ? StyleSheet.flatten([styles.container, styles.containerDark])
    : StyleSheet.flatten([styles.container, styles.containerLight]);

  return (
    <View style={containerStyle}>
      <Text style={styles.text}>{text.toUpperCase()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "80%",
    paddingVertical: "2.5%",
    marginTop: "1%",
    marginBottom: "2%",
    textAlign: "center",
    borderRadius: "25px",
  },
  containerDark: {
    backgroundColor: "#289400",
  },
  containerLight: {
    backgroundColor: "#a5d200",
  },
  text: {
    color: "#fff",
    fontSize: "20px",
    fontWeight: "500",
  },
});

export default Button;

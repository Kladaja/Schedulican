import React from "react";
import { StyleSheet, Text as RNText, View } from "react-native";

const Text = ({ text = "" }) => {
  return (
    <View style={styles.container}>
      <RNText style={styles.text}>{text}</RNText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "75%",
    paddingTop: "2%",
    textAlign: "left",
  },
  text: {
    color: "#a5d200",
    fontSize: "14px",
    fontWeight: "400",
  },
});

export default Text;

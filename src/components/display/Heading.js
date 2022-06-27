import React from "react";
import { StyleSheet, Text as RNText, View } from "react-native";

const Heading = ({ text = "" }) => {
  return (
    <View style={styles.container}>
      <RNText style={styles.text}>{text}</RNText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "75%",
    paddingVertical: "2%",
    textAlign: "left",
  },
  text: {
    textAlign: "center",
    color: "#289400",
    fontFamily: "Manjari",
    fontSize: "27px",
    fontWeight: "600",
  },
});

export default Heading;

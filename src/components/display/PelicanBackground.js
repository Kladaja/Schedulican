import React from "react";
import { StyleSheet, ImageBackground } from "react-native";

const PelicanBackground = () => {
  return (
    <ImageBackground
      source={require("../../../assets/display/pelican_bg.png")}
      style={styles.bgImage}
    />
  );
};

const styles = StyleSheet.create({
  bgImage: { flex: 1, justifyContent: "right" },
});

export default PelicanBackground;

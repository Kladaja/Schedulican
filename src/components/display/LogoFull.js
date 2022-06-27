import React from "react";
import { StyleSheet, View, Image } from "react-native";

const LogoFull = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/logo/schedulican_logo.png")}
        style={styles.logoImage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "82%",
    height: "10%",
    marginBottom: "10%",
  },
  logoImage: {
    width: undefined,
    height: "100%",
    aspectRatio: 1,
    resizeMode: "contain",
  },
});

export default LogoFull;

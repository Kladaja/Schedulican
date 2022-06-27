import React from "react";
import { StyleSheet, View, Image } from "react-native";

const LogoFull = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/logo/schedulican_logo_text.png")}
        style={styles.logoImage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "40%",
    height: "5%",
    marginTop: "2%",
    marginBottom: "2%",
    marginLeft: "3%",
    marginRight: "3%",
  },
  logoImage: {
    width: undefined,
    height: "100%",
    aspectRatio: 1,
    resizeMode: "contain",
  },
});

export default LogoFull;

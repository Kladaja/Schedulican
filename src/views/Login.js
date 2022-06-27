import * as React from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import Button from "../components/buttons/Button";
import TextInput from "../components/inputs/TextInput";
import Text from "../components/display/Text";
import LogoFull from "../components/display/LogoFull";

const Login = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/display/pelican_bg.png")}
        style={styles.bgImage}
        imageStyle={styles.image}
      >
        <LogoFull />

        <TextInput placeHolder={"Username"} />
        <TextInput placeHolder={"Password"} />
        <View style={{ height: "5%" }}></View>

        <Button text={"Log in"} />
        <Text text={"Don't have an account yet?"} />
        <Button text={"Register"} isDark={false} />
        <View style={{ height: "5%" }}></View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f9f9f9",
  },
});

export default Login;

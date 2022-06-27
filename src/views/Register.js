import * as React from "react";
import { StyleSheet, ScrollView, View, ImageBackground } from "react-native";
import Button from "../components/buttons/Button";
import TextInput from "../components/inputs/TextInput";
import Heading from "../components/display/Heading";
import Text from "../components/display/Text";
import LogoText from "../components/display/LogoText";

const Register = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/display/pelican_bg.png")}
        style={styles.bgImage}
        imageStyle={styles.image}
      >
        <ScrollView contentContainerStyle={styles.scroll}>
          <LogoText />

          <View style={styles.formContainer}>
            <Heading text={"Create an account!"} />

            <TextInput placeHolder={"Username"} />
            <TextInput placeHolder={"Email"} />
            <TextInput placeHolder={"Password"} />
            <TextInput placeHolder={"Password again"} />
            <Text text={"Profile type:"} />
            <View style={{ height: "5%" }}></View>

            <Button text={"Register"} />
            <Text text={"Already have an account?"} />
            <Button text={"Log in"} isDark={false} />
            <View style={{ height: "5%" }}></View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {
    flexGrow: 1,
  },
  bgImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "#f9f9f9",
  },
  formContainer: {
    marginTop: "10%",
    alignItems: "center",
  },
});

export default Register;

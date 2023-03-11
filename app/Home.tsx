import { StyleSheet, ImageBackground, Text, TouchableOpacity } from "react-native";
import { CommonViewStyles } from "@twikkl/configs";
import { useRouter } from "expo-router";

// TODO - homepage
export default function ScreenHome() {
  return (
    <ImageBackground
      style={[CommonViewStyles.page, CommonViewStyles.centered]}
      imageStyle={{ opacity: 0.5 }}
      resizeMode="cover"
      source={require("@assets/imgs/temp/home.jpg")}
    >
      <TouchableOpacity style={{ backgroundColor: "#409fe1", borderRadius: 10 }} onPress={useRouter().back}>
        <Text style={{ fontSize: 35, color: "#1a1010", fontWeight: "bold" }}> Go back </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({});

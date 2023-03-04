import { useColors } from "@twikkl/hooks";
import { Image, Text, View, StyleSheet, ImagePropsBase } from "react-native";

const logoImg = require("@assets/imgs/logo.png") as ImagePropsBase["source"];

export default () => {
  const { brand: colorBrand } = useColors();

  return (
    <View style={{ ...styles.container, backgroundColor: colorBrand }}>
      <Image style={styles.logo} source={logoImg} />
      <Text style={styles.title}>Create an Account</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 150,
    height: 150,
  },
  title: {
    fontFamily: "axiforma",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 20,
    lineHeight: 33,
    color: "#fff",
  },
});

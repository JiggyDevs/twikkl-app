import { ReactElement } from "react";
import {
  Image, Text, View, StyleSheet, ImagePropsBase, TextInput, TouchableWithoutFeedback, Keyboard,
} from "react-native";
import { useColors, useTheme } from "@twikkl/hooks";
import { TwikklIcon } from "../hooks/useCachedResources";

const logoImg = require("@assets/imgs/logo.png") as ImagePropsBase["source"];

export default (): ReactElement => {

  const {
    primary: colorPrimary,
    brand: colorBrand,
    light: colorWhite,
    tertiary: colorTertiary,
    inactive: colorInactive,

  } = useColors();

  const { fonts } = useTheme();

  return (
    <TouchableWithoutFeedback onPress={ Keyboard.dismiss }>
      <View style={ [styles.container, styles.centered, { backgroundColor: colorBrand }] }>
        <View style={ styles.centered }>
          <Image style={ styles.logo } source={ logoImg } />
          <Text style={ { ...fonts.titleMedium, color: colorWhite } }>Create an Account</Text>
        </View>
        <View style={ styles.centered }>

          <TextInput
            value={"john.doe@test.com"}
            style={ {
              ...styles.input,
              backgroundColor: colorTertiary,
            } }
            placeholder={ "username" }
            placeholderTextColor={ colorInactive }
          />

          <View style={{ flexDirection: "row", alignItems:"center"}}>
          <TextInput
            value={"123456"}
            secureTextEntry
            style={ {
              ...styles.input,
              backgroundColor: colorTertiary,
            } }
            placeholder={ "password" }
            placeholderTextColor={ colorInactive }
            
          />
          <TwikklIcon
            name={ "eye-fill" } 
            size={ 25 } 
            color={ colorPrimary }
            style={{position:"absolute", left: 300}} 
          />
          </View>
          <View>
            <Text style={ { ...fonts.bodySmall, color: colorWhite } }>I agree to Terms of Service and Privacy
              Policy</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centered: {
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 160,
    height: 160,
  },
  input: {
    width: 343,
    height: 44,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 16,
    marginVertical: 10,
    paddingVertical: 13,
    paddingHorizontal: 16,
    gap: 221,
  },
});

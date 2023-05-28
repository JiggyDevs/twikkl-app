import { ReactElement } from "react";
import { Image, Text, View, StyleSheet, ImagePropsBase, TextInput, SafeAreaView } from "react-native";
import { Button, Checkbox } from "react-native-paper";
import { useColors, useTheme } from "@twikkl/hooks";
import { TwikklIcon, ViewVariant } from "@twikkl/configs";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useRouter } from "expo-router";
import { useTranslation } from "react-i18next";

const logoImg = require("@assets/imgs/logos/logo.png") as ImagePropsBase["source"];
const logoGoogle = require("@assets/imgs/logos/google.png") as ImagePropsBase["source"];

export default function ScreenRegister(): ReactElement {
  const router = useRouter();

  const { t } = useTranslation();

  const {
    primary: colorPrimary,
    brand: colorBrand,
    light: colorWhite,
    tertiary: colorTertiary,
    inactive: colorInactive,
  } = useColors();

  const { fonts } = useTheme();

  return (
    <SafeAreaView style={{ ...ViewVariant.page, backgroundColor: colorBrand }}>
      <KeyboardAwareScrollView contentContainerStyle={ViewVariant.centered}>
        <View style={{ ...ViewVariant.centered, ...styles.inner, paddingTop: "20%" }}>
          <Image style={styles.logo} source={logoImg} />
          <Text style={{ ...fonts.titleMedium, color: colorWhite }}>{t('register.createAccount')}</Text>
          <TextInput
            value="john.doe@test.com"
            style={{ ...styles.input, backgroundColor: colorTertiary }}
            placeholder="username"
            placeholderTextColor={colorInactive}
          />
          <View style={{ width: 343, flexDirection: "row", alignItems: "center" }}>
            <TextInput
              value="123456"
              secureTextEntry
              style={{
                ...styles.input,
                backgroundColor: colorTertiary,
              }}
              placeholder="password"
              placeholderTextColor={colorInactive}
            />
            <TwikklIcon name="eye-fill" size={25} color={colorPrimary} style={{ position: "absolute", left: "88%" }} />
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Checkbox uncheckedColor={colorPrimary} color={colorPrimary} onPress={() => { }} status="unchecked" />
            <View style={{ flexDirection: "row" }}>
              <Text style={{ ...fonts.bodySmall, color: colorWhite }}>{t('register.agree')} </Text>
              <Text style={{ ...fonts.bodySmall, color: colorPrimary, textDecorationLine: "underline" }}>
                {t('register.terms')}
              </Text>
              <Text style={{ ...fonts.bodySmall, color: colorWhite }}> {t('register.and')} </Text>
              <Text style={{ ...fonts.bodySmall, color: colorPrimary, textDecorationLine: "underline" }}>
                {t('register.privacy')}
              </Text>
            </View>
          </View>
          <Button
            style={{
              backgroundColor: colorInactive,
              width: 343,
              height: 50,
              marginTop: "10%",
              marginBottom: "5%",
              justifyContent: "center",
            }}
            onPress={() => router.push("/Home")}
          >
            <Text style={{ ...fonts.labelLarge, color: colorWhite }}>{t('register.createAccount')}</Text>
          </Button>
          <Text style={{ ...fonts.bodySmall, color: colorWhite }}>{t('register.or')}</Text>

          <Button
            textColor={colorWhite}
            style={{
              borderWidth: 1,
              borderColor: colorInactive,
              width: 343,
              height: 50,
              marginTop: "5%",
              marginBottom: "15%",
            }}
          >
            <Image
              source={logoGoogle}
              style={{
                alignSelf: "center",
                height: 24,
                width: 24,
              }}
            />
            <Text style={{ ...fonts.labelLarge, color: colorWhite }}> {t('register.createWithGoogle')}</Text>
          </Button>

          <View>
            <Text style={{ ...fonts.bodyMedium, color: colorWhite }}>{t('register.doYouHaveAWallet')}</Text>
            <Text
              style={{ ...fonts.bodyMedium, color: colorPrimary, textAlign: "center", textDecorationLine: "underline" }}
            >
              {t('register.connectWallet')}
            </Text>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  inner: {
    flex: 1,
    marginHorizontal: 10,
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

import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import { Text, Button } from "react-native-paper";
import i18n from "../translations";

/**
 * TODO - Rofile Screen
 *
 * @constructor
 */

export default function Profile(): ReactElement {
  const { t } = useTranslation();

  const onChangeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          color: "green",
        }}
      >
        {t("profile.title")}
      </Text>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          color: "green",
        }}
      >
        {t("welcome")}
      </Text>

      <Button onPress={() => onChangeLanguage("en")}>English</Button>
      <Button onPress={() => onChangeLanguage("fr")}>Français</Button>
      <Button onPress={() => onChangeLanguage("ar")}>عربي</Button>
      <Button onPress={() => onChangeLanguage("hi")}>हिंदी</Button>
      <Button onPress={() => onChangeLanguage("ch")}>中国人</Button>
    </View>
  );
}

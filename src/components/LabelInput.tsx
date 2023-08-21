import { View, Text, StyleSheet } from "react-native";
import React from "react";
import InputField from "./InputField";

const LabelInput = ({
  placeholder,
  value,
  onChangeText,
  label,
  type = "text",
  username,
  onNamePress,
  NameText,
}: {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  label: string;
  type?: "text" | "password" | "numeric" | "phone" | "email";
  username?: boolean;
  onNamePress?: () => void;
  NameText?: string;
}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <InputField
        onNamePress={onNamePress}
        nameText={NameText}
        username={username}
        type={type}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default LabelInput;

const styles = StyleSheet.create({
  label: {
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 6,
  },
});

import { View, Text, StyleSheet } from "react-native";
import React from "react";
import InputField from "./InputField";

const LabelInput = ({
  placeholder,
  value,
  onChangeText,
  label,
  disabled,
  type = "text",
  username,
  onNamePress,
  NameText,
  multiline,
}: {
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  disabled?: boolean;
  label: string;
  type?: "text" | "password" | "numeric" | "phone" | "email";
  username?: boolean;
  onNamePress?: () => void;
  NameText?: string;
  multiline?: boolean;
}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <InputField
        onNamePress={onNamePress}
        nameText={NameText}
        disabled={disabled}
        username={username}
        type={type}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        multiline={multiline}
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

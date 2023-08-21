import React, { ReactElement, useState } from "react";
import { TextInput } from "react-native-paper";
import styled, { css } from "styled-components/native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { StyleSheet, Text, View } from "react-native";
import ArrowDown from "@assets/svg/ArrowDown";
interface IProps {
  error?: boolean;
  value?: string;
  label?: string;
  onChangeText?: (text: string) => void;
  placeholder?: string;
  disabled?: boolean;
  onFocus?: () => void;
  onSubmitEditing?: Function;
  type?: "text" | "password" | "numeric" | "phone" | "email";
  style?: object;
  editable?: boolean;
  openDateTime?: Function;
  bg?: string;
  multiline?: boolean;
  numOfLines?: number;
  iStyle?: object;
  icon?: any;
  textColor?: string;
  leftIcon?: ReactElement;
  placeholderTextColor?: string;
  radius?: string;
  username?: boolean;
  nameText?: string;
  onNamePress?: () => void;
}

const Input = styled(TextInput)<{ focused: boolean; bg?: string }>`
  background-color: ${({ bg }) => bg || "#fff"};
  padding-horizontal: ${wp(4)}px;
  height: ${hp(5.4)}px;
  font-size: 16px;
  ${(props) =>
    props.focused &&
    css`
      /* background-color: #fff; */
    `}
`;

const InputWrapper = styled.View<{
  borderError: boolean;
  focused: boolean;
  radius?: string;
}>`
  overflow: hidden;
  border-width: 1px;
  border-color: #c0ccc1;
  border-radius: ${({ radius }) => radius || "16px"};
  ${(props) =>
    props.borderError &&
    css`
      border-color: red;
    `}

  ${(props) =>
    props.focused &&
    css`
      border-color: #50a040;
      /* border-width: 1px; */
    `}
`;

const InputField = ({
  type = "text",
  editable = true,
  value = "",
  error = false,
  textColor = "#143615",
  onChangeText = () => {},
  placeholder = "",
  disabled = false,
  onFocus = () => {},
  style = {},
  placeholderTextColor = "#C0CCC1",
  iStyle,
  bg,
  multiline,
  icon,
  leftIcon,
  radius,
  username,
  nameText,
  onNamePress,
}: IProps) => {
  const [togglePassword, setTogglePassword] = useState(true);
  const [focused, setFocused] = useState(false);
  const isHidePassword = type === "password" && togglePassword;
  return (
    <InputWrapper radius={radius} style={style} borderError={error} focused={focused}>
      <Input
        bg={bg}
        multiline={multiline}
        focused={focused}
        disabled={disabled}
        keyboardType={type === "numeric" ? "numeric" : type === "email" ? "email-address" : "default"}
        onFocus={() => {
          onFocus();
          setFocused(true);
        }}
        onBlur={() => {
          setFocused(false);
        }}
        value={value}
        onChangeText={onChangeText}
        placeholder={focused ? "" : placeholder}
        placeholderTextColor={placeholderTextColor}
        textColor={textColor}
        // textAlignVertical="top"
        secureTextEntry={isHidePassword}
        autoCapitalize="none"
        editable={editable}
        style={iStyle}
        underlineStyle={{ display: "none" }}
        right={
          type === "password" ? (
            <TextInput.Icon
              iconColor="#50A040"
              icon={isHidePassword ? "eye-off" : "eye"}
              onPress={() => setTogglePassword(!togglePassword)}
            />
          ) : (
            username && (
              <TextInput.Icon
                iconColor="#50A040"
                icon={() => (
                  <View style={styles.nameSuffix}>
                    <Text style={{ color: "#50A040" }}>{nameText}</Text>
                    <ArrowDown />
                  </View>
                )}
                style={{ width: 60 }}
                onPress={onNamePress}
              />
            )
          )
        }
        left={leftIcon && <TextInput.Icon icon={() => leftIcon} />}
      />
    </InputWrapper>
  );
};

export default InputField;

const styles = StyleSheet.create({
  nameSuffix: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingRight: 10,
  },
});

import { FC } from "react";
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from "react-native-confirmation-code-field";
import { ViewStyle } from "react-native-phone-input";

import { Text, View } from "react-native";

interface PinInputProps {
  length?: number;
  value: string;
  setValue: (arg: string) => void;
  label?: string;
  error?: string;
  type?: string;
  mt?: boolean;
}

const PinInput: FC<PinInputProps> = ({
  length = 6,
  value,
  setValue,
  error,
  label = "Enter verification code",
  type,
  mt,
}) => {
  const ref = useBlurOnFulfill({ value, cellCount: length });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const rootStyle: ViewStyle = {
    justifyContent: length === 6 ? "space-between" : "flex-start",
    gap: length === 6 ? undefined : 20,
  };

  return (
    <View style={{ marginTop: mt ? 0 : 6, alignItems: "center" }}>
      <Text
        style={{
          fontWeight: "700",
          fontSize: 20,
          marginBottom: 32,
        }}
      >
        {label}
      </Text>
      <CodeField
        ref={ref}
        {...props}
        cellCount={length}
        value={value}
        onChangeText={setValue}
        secureTextEntry
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        rootStyle={rootStyle}
        renderCell={({ symbol, index, isFocused }) => {
          const borderColor = error ? "red" : isFocused ? "#50A040" : "#C0CCC1";
          let textChild = null;
          if (symbol) {
            textChild = type === "password" ? "X" : symbol;
            // textChild = symbol;
          } else {
            textChild = isFocused ? <Cursor /> : null;
          }
          return (
            <View
              key={index}
              style={{
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 16,
                height: 56,
                width: 56,
                backgroundColor: "transparent",
                borderWidth: 1.5,
                borderColor,
              }}
              onLayout={getCellOnLayoutHandler(index)}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "500",
                }}
              >
                {textChild}
              </Text>
            </View>
          );
        }}
      />

      {error && <Text style={{ marginTop: 2, textAlign: "center", fontSize: 12, color: "red" }}>{error}</Text>}
    </View>
  );
};

export default PinInput;

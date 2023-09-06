import React from "react";
import { Text } from "react-native";
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from "react-native-confirmation-code-field";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

const CELL_COUNT = 6;

const ConfirmationField = ({ value, setValue = () => {} }: { value: string; setValue: (code: string) => void }) => {
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <CodeField
      ref={ref}
      {...props}
      value={value}
      onChangeText={setValue}
      cellCount={CELL_COUNT}
      keyboardType="number-pad"
      textContentType="oneTimeCode"
      rootStyle={{ paddingHorizontal: wp(4) }}
      renderCell={({ index, symbol, isFocused }) => (
        <Text
          key={index}
          style={[
            {
              lineHeight: 55,
              textAlign: "center",
              fontSize: 24,
              borderWidth: 1,
              borderColor: "#C0CCC1",
              width: wp(12),
              height: hp(6),
              marginTop: hp(2),
              borderRadius: 15,
            },
            isFocused && { borderColor: "#50A040" },
          ]}
          onLayout={getCellOnLayoutHandler(index)}
        >
          {symbol || (isFocused ? <Cursor /> : null)}
        </Text>
      )}
    />
  );
};

export default ConfirmationField;

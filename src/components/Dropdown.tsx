import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import styled from "styled-components/native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

const SubscribeOption = styled.View`
  flex-direction: row;
  align-items: center;
  padding: ${hp(1.6)}px ${wp(2.3)}px;
`;
const OptionWrapper = styled.View`
  border: 2px solid #fff;
  border-radius: 99px;
  width: ${wp(6)}px;
  height: ${hp(2.8)}px;
  align-items: center;
  justify-content: center;
`;
const Option = styled.View`
  border-radius: 99px;
  width: ${wp(3.5)}px;
  height: ${hp(1.6)}px;
`;

interface Options {
  icon: any;
  title: string;
  desc: string;
}

const Dropdown = ({
  options,
  optionsArray,
  setSubData,
  subData,
}: {
  options: boolean;
  optionsArray: Options[];
  setSubData: Function;
  subData: string;
}) => {
  return (
    <View style={{ zIndex: 1 }}>
      {options && (
        <View style={styles.optionsWrapper}>
          {optionsArray.map(({ icon, title, desc }) => (
            <Pressable key={title} onPress={() => setSubData(title)}>
              <SubscribeOption>
                <Text style={{ width: 23 }}>{icon}</Text>
                <View style={{ flex: 1, paddingHorizontal: 20 }}>
                  <Text style={styles.optionText}>{title}</Text>
                  <Text style={{ color: "#50A040", fontSize: 12 }}>{desc}</Text>
                </View>
                <OptionWrapper>
                  <Option
                    style={{
                      backgroundColor: title === subData ? "#fff" : "transparent",
                      padding: 5,
                    }}
                  />
                </OptionWrapper>
              </SubscribeOption>
            </Pressable>
          ))}
        </View>
      )}
    </View>
  );
};

export default Dropdown;

const styles = StyleSheet.create({
  optionsWrapper: { position: "absolute", backgroundColor: "#143615", width: "100%", borderRadius: 8 },
  optionText: {
    fontWeight: "600",
    fontSize: 15,
    color: "#fff",
  },
});

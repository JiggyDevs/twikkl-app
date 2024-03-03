import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components/native";
import Back from "@assets/svg/Back";
import CopyIconWithWrapper from "@assets/svg/CopyIconWithWrapper";
import SmallCaveatIcon from "@assets/svg/SmallCaveatIcon";

const Container = styled.View`
  flex-grow: 1;
`;
const TextApp = styled.Text``;

const SeedPhrase = () => {
  return (
    <Container>
      <View>
        <Back onPress={() => {}} />
        <Text>Recovery phrase</Text>
      </View>
      <View>
        <Text>Don’t lose your recovery phrase</Text>
        <Text>Write down these words in the right order(1-12) and save them somewhere safe.</Text>
      </View>

      <View>
        <CopyIconWithWrapper />
        <Text>Copy recovery phrase</Text>
      </View>
      <View>
        <SmallCaveatIcon />
        <Text>Never share your recovery phrase with anyone, store it securely!</Text>
      </View>
    </Container>
  );
};

export default SeedPhrase;

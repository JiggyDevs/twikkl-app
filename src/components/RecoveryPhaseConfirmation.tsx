import Checkbox from "expo-checkbox";
import { useEffect, useState } from "react";
import styled from "styled-components/native";
import ButtonEl from "./ButtonEl";
import { ViewVariant } from "@twikkl/configs";
import { Text, View } from "react-native";
import CaveatIcon from "@assets/svg/CaveatIcon";

const ModalEl = styled.Modal`
  flex-grow: 1;
`;

const Container = styled.View`
  background-color: rgba(20, 54, 21, 0.5);
  align-items: center;
  justify-content: center;
  padding-horizontal: 24px;
  flex-grow: 1;
`;
const TitleText = styled.Text`
  text-align: center;
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 16px;
`;
const InfoText = styled.Text`
  text-align: center;
  font-weight: 300;
  font-size: 15px;
`;
const Wrapper = styled.View`
  background-color: #f1fcf2;
  border-radius: 8px;
  padding-horizontal: 16px;
  padding-vertical: 32px;
  width: 95%;
`;
const IconWrapper = styled.View`
  margin-top: 24px;
  margin-bottom: 31px;
  align-items: center;
`;
const TCWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  column-gap: 12px;
  margin-bottom: 24px;
`;
const TCText = styled.Text`
  max-width: 85%;
`;

const RecoveryPhaseCOnfirmation = ({ showModal, onContinue }: { showModal: boolean; onContinue?: Function }) => {
  const [animationType, setAnimationType] = useState<any>("slide");
  const [isChecked, setChecked] = useState(false);

  useEffect(() => {
    isChecked && onContinue?.();
  }, [animationType]);

  return (
    <ModalEl visible={showModal} animationType={animationType} transparent>
      <Container>
        <Wrapper>
          <TitleText>Recovery phrase</TitleText>
          <InfoText>
            In the next step you will see your recovery phrase(12 words) that allows you to recover your wallet.
          </InfoText>
          <IconWrapper>
            <CaveatIcon />
          </IconWrapper>
          <TCWrapper>
            <Checkbox value={isChecked} onValueChange={setChecked} color={isChecked ? "#50A040" : undefined} />
            <TCText numberOfLines={2} ellipsizeMode="tail">
              I understand that if I lose my seed phrase, I will not be able to access my wallet
            </TCText>
          </TCWrapper>
          <View>
            <ButtonEl disabled={!isChecked} onPress={() => setAnimationType("none")}>
              <Text style={[ViewVariant.buttonText]}>Continue</Text>
            </ButtonEl>
          </View>
        </Wrapper>
      </Container>
    </ModalEl>
  );
};

export default RecoveryPhaseCOnfirmation;

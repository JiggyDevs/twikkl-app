import { StyleSheet } from "react-native";
import React from "react";
import styled from "styled-components/native";

interface OptionCardProps {
  desc?: string;
  text: string;
  icon: any;
  setScreen?: Function;
  showActionText?: boolean;
  actionText?: string;
  onActionClick?: Function;
}

const Button = styled.Pressable``;
const IconWrapper = styled.View``;
const ContentWrapper = styled.View<{ isActionText?: boolean }>`
  flex-grow: 1;
  max-width: 65%;
  max-width: ${(props) => (props.isActionText ? "65%" : "95%")};
`;
const Title = styled.Text`
  max-width: 98%;
  align-self: flex-start;
`;
const Desc = styled.Text`
  max-width: 98%;
  margin-top: 4px;
`;

const ActionButton = styled.Pressable`
  padding-horizontal: 20px;
  padding-vertical: 5px;
  align-self: center;
`;
const ActionText = styled.Text`
  font-weight: 700;
  font-size: 12px;
  text-transform: capitalize;
`;

const OptionCard = ({ desc, text, icon, setScreen, showActionText, actionText, onActionClick }: OptionCardProps) => {
  return (
    <Button onPress={() => setScreen?.(text)} style={styles.flexRow}>
      <IconWrapper style={{ width: 25 }}>{icon}</IconWrapper>
      <ContentWrapper isActionText={showActionText}>
        <Title numberOfLines={1} ellipsizeMode="tail">
          {text}
        </Title>
        {desc && (
          <Desc numberOfLines={2} ellipsizeMode="tail">
            {desc}
          </Desc>
        )}
      </ContentWrapper>
      {showActionText && (
        <ActionButton
          onPress={() => {
            onActionClick?.();
          }}
        >
          <ActionText>{actionText ?? "action"}</ActionText>
        </ActionButton>
      )}
    </Button>
  );
};

export default OptionCard;

const styles = StyleSheet.create({
  flexRow: {
    flexDirection: "row",
    gap: 28,
  },
});

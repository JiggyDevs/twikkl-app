import { Pressable } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import styled, { css } from "styled-components/native";

const Container = styled.View<{ checked: boolean }>`
  border: 2px solid #000;
  border-radius: 100px;
  width: ${wp(9)}px;
  height: ${hp(2.4)}px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const CircleSlider = styled.View<{ checked: boolean }>`
  position: absolute;
  left: 2px;
  width: ${wp(3.5)}px;
  height: ${hp(1.6)}px;
  background: #000;
  border-radius: 100px;

  ${(props) =>
    props.checked &&
    css`
      left: ${wp(4)}px;
      background-color: #50a040;
    `}
`;

const ToggleButton = ({ checked = false, onToggle = () => {} }: { checked?: boolean; onToggle?: Function }) => {
  return (
    <Pressable onPress={() => onToggle()}>
      <Container checked={checked}>
        <CircleSlider checked={checked} />
      </Container>
    </Pressable>
  );
};

export default ToggleButton;

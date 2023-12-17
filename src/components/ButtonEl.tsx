import React, { ReactElement } from "react";
import styled, { css } from "styled-components/native";
import { Button as PButton } from "react-native-paper";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

interface IButtonProps {
  children?: ReactElement;
  disabled?: boolean;
  onPress?: Function;
  loading?: boolean;
  showArrow?: boolean;
  outline?: boolean;
  bg?: string;
  height?: number;
  width?: number;
}

// style
const Button = styled(PButton)<{
  outline?: boolean;
  bg?: string;
  disabled?: boolean;
}>`
  width: 100%;
  border-radius: 20px;
  background-color: #50a040;

  ${(props) =>
    props.disabled &&
    css`
      background-color: #c0ccc1;
    `}

  ${(props) =>
    props.outline &&
    css`
      background-color: #fff;
      border: 0.5px solid #50a040;
    `}

  ${(props) =>
    props.bg &&
    css`
      background-color: ${props.bg};
    `}



    ${(props) =>
    props.disabled &&
    props.outline &&
    css`
      background-color: #fff;
      opacity: 0.5;
    `}
`;

const ButtonEl = ({
  onPress = () => {},
  disabled,
  children,
  loading,
  bg,
  height,
  width,
  outline = false,
}: IButtonProps) => {
  const customHeight = height ? (height / 852) * 100 : 0;
  const customWidth = width ? (width / 390) * 100 : 0;
  return (
    <Button
      bg={bg}
      loading={loading}
      disabled={disabled}
      mode="contained"
      onPress={() => onPress()}
      contentStyle={[
        {
          height: height ? hp(customHeight) : hp(6),
          width: width ? wp(customWidth) : "auto",
        },
      ]}
      uppercase={false}
      outline={outline}
    >
      {children}
    </Button>
  );
};

export default ButtonEl;

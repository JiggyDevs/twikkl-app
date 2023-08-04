// import React, { Fragment, ReactElement } from "react";
// import { StyleSheet } from "react-native";
// import { Button } from "react-native-paper";
// import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
// // import tw from "../../lib/tailwind";

// interface IButtonProps {
//   children?: ReactElement;
//   disabled?: boolean;
//   onPress?: Function;
//   loading?: boolean;
//   showArrow?: boolean;
//   outline?: boolean;
//   bg?: any;
//   disabledColor?: string;
//   height?: number;
//   width?: number;
//   icon?: any;
//   borderRadius?: string;
// }

// const ButtonEl = ({
//   onPress = () => {},
//   disabled,
//   disabledColor,
//   children,
//   loading,
//   bg,
//   height,
//   width,
//   icon,
//   borderRadius,
//   outline = false,
// }: IButtonProps) => {
//   const customHeight = height ? (height / 932) * 100 : 0;
//   const customWidth = width ? (width / 430) * 100 : 0;
//   return (
//     <Button
//       disabled={disabled}
//       icon={icon ?? undefined}
//       labelStyle={{
//         marginLeft: icon ? 50 : undefined,
//         marginTop: 15,
//       }}
//       loading={loading}
//       mode="contained"
//       onPress={() => onPress()}
//       style={[
//         // { backgroundColor: "green", borderRadius: 10 },
//         {
//           bg && bg,
//           disabled && { backgroundColor: disabledColor ?? "#8AC6CD" },
//           outline && styles.outline,
//           disabled && outline && styles.disabledOutlined,
//           borderRadius && borderRadius,
//         },
//         tw.style(`shadow-md`),
//       ]}
//       contentStyle={[
//         {
//           height: height ? hp(customHeight) : hp(7.4),
//           width: width ? wp(customWidth) : "auto",
//         },
//       ]}
//       uppercase={false}
//     >
//       {children}
//     </Button>
//   );
// };

// export default ButtonEl;

// const styles = StyleSheet.create({
//   outline: { backgroundColor: "white", borderWidth: 0.5, borderColor: "white" },
//   disabledOutlined: { backgroundColor: "white", opacity: 50 },
// });

import React, { Fragment, ReactElement } from "react";
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
  disabledColor?: string;
  height?: number;
  width?: number;
}

// style
const Button = styled(PButton)<{
  outline?: boolean;
  bg?: string;
  disabled?: boolean;
  disabledColor?: string;
}>`
  width: 100%;
  border-radius: 20px;
  background-color: #50a040;

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
    css`
      background-color: ${props.theme.disabled};
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
  disabledColor,
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
      disabledColor={disabledColor}
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
      <Fragment>{children}</Fragment>
    </Button>
  );
};

export default ButtonEl;

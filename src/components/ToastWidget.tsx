import styled from "styled-components/native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

const Container = styled.View<{ bg: string }>`
  padding-horizontal: ${wp(5)}px;
  padding-top: ${hp(6.5)}px;
  padding-bottom: ${hp(2)}px;
  background-color: ${(props) => props.bg};
  width: 100%;
`;

const Message = styled.Text`
  text-align: center;
  color: #fff;
  margin-bottom: ${hp("1.78%")}px;
`;

export type TMessageTypes = "error" | "warning" | "success" | "info";

const ToastMessage = ({ message, messageType }: { message: string; messageType: TMessageTypes }) => {
  const backgroundColor =
    messageType === "error"
      ? " #E81313"
      : messageType === "success"
      ? "#4aa254"
      : messageType === "info"
      ? "#3dabc6"
      : "#df954b";

  return (
    <Container bg={backgroundColor}>
      <Message>{message}</Message>
    </Container>
  );
};

export const toastConfig = {
  toastWidget: ({ props }: { props: any }) => <ToastMessage message={props.message} messageType={props.messageType} />,
};

export default ToastMessage;

import React, { ReactNode } from "react";
import styled from "styled-components/native";
import { Modal } from "react-native";

const AvoidingViewWrapper = styled.KeyboardAvoidingView`
  flex-grow: 1;
`;

const ModalEl = ({
  children,
  visible = false,
  transparent = false,
  animate = false,
}: {
  children: ReactNode;
  visible: boolean;
  transparent?: boolean;
  animate?: boolean;
}) => {
  return (
    <Modal visible={visible} transparent={transparent} animationType={animate ? "slide" : "none"}>
      <AvoidingViewWrapper>{children}</AvoidingViewWrapper>
    </Modal>
  );
};

export default ModalEl;

import { StyleProp, ViewStyle } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import styled from "styled-components/native";

const Wrapper = styled.View`
  flex: 1;
  height: 100%;
  width: 100%;
  position: absolute;
  background-color: #cdc9c9;
  opacity: 0.4;
`;

const AppLoader = ({ size = 30, color = "#295251" }: { size?: number; color?: string }) => {
  const styles: StyleProp<ViewStyle> = {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  };
  return (
    <Wrapper>
      <ActivityIndicator size={size} color={color} style={styles} />
    </Wrapper>
  );
};

export default AppLoader;

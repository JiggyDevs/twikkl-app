import styled from "styled-components/native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Pressable, Text } from "react-native";

const Wrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: ${hp(2)}px;
`;

const ListItem = ({ action, onPress, title }: { action: any; onPress?: () => void; title?: string }) => {
  return (
    <Wrapper>
      <Text>{title}</Text>
      <Pressable onPress={onPress}>{action}</Pressable>
    </Wrapper>
  );
};

export default ListItem;

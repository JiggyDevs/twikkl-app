import Account from "@assets/svg/Account";
import Help from "@assets/svg/Help";
import Invite from "@assets/svg/Invite";
import Language from "@assets/svg/Language";
import Lock from "@assets/svg/Lock";
import Report from "@assets/svg/Report";
import Safety from "@assets/svg/Safety";
import Terms from "@assets/svg/Terms";
import { EIcon, TwikklIcon } from "@twikkl/configs";
import { clearAuth } from "@twikkl/entities/auth.entity";
import { logoutConfirmationAlert } from "@twikkl/utils/AppAlert";
import { View, Text, StyleSheet, Pressable } from "react-native";
import styled, { css } from "styled-components/native";

const Container = styled.View`
  flex-grow: 1;
  justify-content: space-between;
  margin-bottom: 50px;
`;
const LogoutWrapper = styled.Pressable`
  padding: 10px;
  margin: 0 auto;
  width: 40%;
  align-items: center;
`;
const LogoutText = styled.Text<{ isPressed: boolean }>`
  font-size: 23px;
  font-weight: 700;

  ${(props) =>
    props.isPressed &&
    css`
      color: rgba(0, 0, 0, 0.2);
    `}
`;

const settings = [
  { icon: <Account />, text: "Account" },
  { icon: <TwikklIcon name={EIcon.BELL} size={24} color="#000" />, text: "Notifications" },
  { icon: <Lock />, text: "Security" },
  { icon: <Language />, text: "Language" },
  { icon: <Safety />, text: "Safety and Privacy" },
  { icon: <Help />, text: "Help" },
  { icon: <Terms />, text: "Terms and polices" },
  { icon: <Report />, text: "Report a problem" },
  { icon: <Invite />, text: "Invite friends" },
];

const Settings = ({ setScreen }: { setScreen: Function }) => {
  return (
    <Container>
      <View style={{ gap: 30 }}>
        {settings.map(({ icon, text }, index) => (
          <Pressable key={index} onPress={() => setScreen(text)} style={styles.flexRow}>
            <View style={{ width: 25 }}>{icon}</View>
            <Text style={{ fontSize: 16 }}>{text}</Text>
          </Pressable>
        ))}
      </View>
      <LogoutWrapper
        onPress={() => {
          logoutConfirmationAlert();
        }}
      >
        {({ pressed }) => <LogoutText isPressed={pressed}>LogOut</LogoutText>}
      </LogoutWrapper>
    </Container>
  );
};

export default Settings;

const styles = StyleSheet.create({
  flexRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 25,
  },
});

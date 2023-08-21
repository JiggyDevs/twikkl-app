import { Text, Image, Pressable, StyleSheet } from "react-native";

const OAuthButton = ({ text }: { text: string }) => {
  return (
    <Pressable style={styles.wrapper}>
      <Image source={require("@assets/imgs/logos/google.png")} />
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

export default OAuthButton;

const styles = StyleSheet.create({
  wrapper: {
    borderWidth: 1,
    borderColor: "#50A040",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: 20,
    marginTop: "7%",
    gap: 10,
  },
  text: {
    fontWeight: "bold",
    color: "#000",
    fontSize: 15,
  },
});

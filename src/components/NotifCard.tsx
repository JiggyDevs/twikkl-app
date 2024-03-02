import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import UserAvatar from "./UserAvatar";

type IProps = {
  avatar: any;
  handleView: () => void;
  userId?: string;
  text: string;
  desc?: string;
  time?: string;
  type?: string;
  name?: string;
  action?: string;
};

const NotifCard = ({ avatar, name, text, desc, time, type, action, handleView, userId = "" }: IProps) => {
  return (
    <View style={styles.wrapper}>
      <UserAvatar name={name} pic={avatar} userId={userId} />
      <View style={styles.flex}>
        <Text style={styles.textBold}>{text}</Text>
        {desc && (
          <Text style={{ fontSize: 12 }}>
            {desc} <Text style={{ color: "#50A040" }}>{time}</Text>
          </Text>
        )}
      </View>
      <View style={{ marginLeft: 20 }}>
        {type === "following" ? (
          <View style={styles.bgGreen}>
            <TouchableOpacity>
              <Text style={styles.textWhite}>Folllow</Text>
            </TouchableOpacity>
          </View>
        ) : (
          action && (
            <View style={styles.bgGreen}>
              <TouchableOpacity onPress={handleView}>
                <Text style={styles.textWhite}>{action}</Text>
              </TouchableOpacity>
            </View>
          )
        )}
      </View>
    </View>
  );
};

export default NotifCard;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    marginBottom: 10,
    alignItems: "center",
  },
  bgGreen: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#50A040",
    borderRadius: 16,
  },
  textWhite: {
    fontWeight: "700",
    fontSize: 14,
    color: "#F1FCF2",
  },
  textBold: {
    fontWeight: "700",
    fontSize: 14,
    marginBottom: 2,
  },
  flex: {
    flex: 1,
    marginLeft: 8,
  },
});

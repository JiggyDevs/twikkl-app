import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import { useFormField } from "@twikkl/hooks/common.hooks";
import LabelInput from "@twikkl/components/LabelInput";
import ButtonEl from "@twikkl/components/ButtonEl";
import { ViewVariant } from "@twikkl/configs";
import AccountAvatar from "@assets/svg/AccountAvatar";
import Camera from "@assets/svg/Camera";

const updateProfile = {
  name: "",
  username: "",
  bio: "",
};
const Account = () => {
  const { form, updateField } = useFormField(updateProfile);

  return (
    <View>
      <View style={{ alignSelf: "center" }}>
        <View
          style={{
            backgroundColor: "#fff",
            width: 110,
            height: 110,
            borderRadius: 99,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AccountAvatar />
        </View>
        <Camera style={{ position: "absolute", bottom: -10, right: 0 }} />
      </View>
      <Text style={{ textAlign: "center", marginTop: 20 }}>Update profile image</Text>
      <View style={styles.inputs}>
        <LabelInput
          label="Name"
          // placeholder="Enter your name"
          value={form.name}
          onChangeText={(val) => updateField("name", val)}
        />
        <LabelInput
          label="Username"
          // placeholder="Enter your name"
          value={form.username}
          onChangeText={(val) => updateField("username", val)}
        />
        <View>
          <Text style={styles.label}>Bio</Text>
          <TextInput
            multiline
            value={form.bio}
            onChangeText={(val) => updateField("bio", val)}
            // placeholder="Let people know what your group is about"
            style={styles.textarea}
          />
        </View>
      </View>
      <ButtonEl>
        <Text style={[ViewVariant.buttonText]}>Update Profile</Text>
      </ButtonEl>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  inputs: {
    marginVertical: 24,
    gap: 20,
    marginBottom: 70,
  },
  textarea: {
    borderColor: "#C0CCC1",
    backgroundColor: "#fff",
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    height: 80,
    fontSize: 15,
  },
  label: {
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 6,
  },
});

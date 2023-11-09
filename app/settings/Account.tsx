import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import { useFormField } from "@twikkl/hooks/common.hooks";
import LabelInput from "@twikkl/components/LabelInput";
import ButtonEl from "@twikkl/components/ButtonEl";
import { ViewVariant } from "@twikkl/configs";

const updateProfile = {
  name: "",
  username: "",
  bio: "",
};
const Account = () => {
  const { form, updateField } = useFormField(updateProfile);

  return (
    <View>
      <View style={{ alignSelf: "center" }}></View>
      <Text style={{ textAlign: "center" }}>Update profile image</Text>
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
          <Text>Bio</Text>
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
        <Text style={[ViewVariant.buttonText]}>Create group</Text>
      </ButtonEl>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  inputs: {
    marginTop: 24,
    gap: 14,
  },
  textarea: {
    borderColor: "#C0CCC1",
    backgroundColor: "#fff",
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    height: 90,
    fontSize: 15,
  },
});

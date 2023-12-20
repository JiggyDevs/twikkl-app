import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { useFormField } from "@twikkl/hooks/common.hooks";
import LabelInput from "@twikkl/components/LabelInput";
import ButtonEl from "@twikkl/components/ButtonEl";
import { ViewVariant } from "@twikkl/configs";
import AccountAvatar from "@assets/svg/AccountAvatar";
import Camera from "@assets/svg/Camera";
import BackHeader from "@twikkl/components/BackHeader";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { setUser, useAuth } from "@twikkl/entities/auth.entity";
import { useImageHook } from "@twikkl/hooks/image.hooks";
import { isValidFormSubmit, toastSuccess } from "@twikkl/utils/common";
import { useUploadPhoto } from "@twikkl/hooks/upload-hook";
import { updateUserProfile } from "@twikkl/services/profile.services";
import { hideLoader, showLoader } from "@twikkl/entities";

const Account = () => {
  const { user } = useAuth();

  const { pickImage } = useImageHook();

  const updateProfile = {
    avatar: user?.avatar || "",
    name: "",
    twitter: user?.twitter || "",
    username: user?.username || "",
    bio: user?.bio || "",
  };

  const { form, updateField } = useFormField(updateProfile);

  const { _uploadPhoto } = useUploadPhoto();

  const handleImagePick = async () => {
    const response = await pickImage();

    if (response) updateField("avatar", response);
  };

  const disabled = isValidFormSubmit(form, ["name"]);

  const handleProfileUpdate = async (data: { avatar: string; bio: string; twitter: string }) => {
    const response = await updateUserProfile(data);
    if (response) {
      setUser(response as any);
      toastSuccess("Profile updated successfully");
    }
    hideLoader();
  };

  const handleUpdate = async () => {
    showLoader();

    const { username, ...otherFields } = form;

    if (otherFields.avatar !== user?.avatar && otherFields.avatar) {
      const upload = await _uploadPhoto(otherFields.avatar);

      if (upload) return handleProfileUpdate({ ...otherFields, avatar: upload.url });
    }

    handleProfileUpdate(otherFields);
  };

  const router = useRouter();

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <BackHeader title="Account" onPress={() => router.back()} />
        </View>

        <Text style={{ textAlign: "center", marginTop: 20 }}>Update profile image</Text>

        <View style={styles.inputs}>
          <Text style={{ fontWeight: "bold" }}>Avatar</Text>

          <TouchableOpacity style={styles.avatarWrapper} onPress={handleImagePick}>
            <Image source={{ uri: form?.avatar }} style={styles.profileImg} />
          </TouchableOpacity>

          <LabelInput
            label="Name"
            placeholder="Enter your name"
            value={form.name}
            onChangeText={(val) => updateField("name", val)}
          />
          <LabelInput
            label="Username"
            disabled
            placeholder="Enter your username"
            value={form.username}
            onChangeText={(val) => updateField("username", val)}
          />
          <LabelInput
            label="Twitter Bio"
            placeholder="Enter your twitter username"
            value={form.twitter}
            onChangeText={(val) => updateField("twitter", val)}
          />
          <View style={{ marginBottom: 40 }}>
            <Text style={{ fontWeight: "bold" }}>Bio</Text>
            <TextInput
              multiline
              value={form.bio}
              onChangeText={(val) => updateField("bio", val)}
              placeholder="Let people know more about you"
              style={styles.textarea}
            />
          </View>
        </View>
        <ButtonEl disabled={!disabled} onPress={handleUpdate}>
          <Text style={[ViewVariant.buttonText]}>Update Profile</Text>
        </ButtonEl>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Account;

const styles = StyleSheet.create({
  screen: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    // gap: 42,
  },
  avatarWrapper: { alignItems: "center", justifyContent: "center" },
  profileImg: {
    width: 163,
    height: 163,
    borderRadius: 100,
    backgroundColor: "white",
    marginBottom: 16,
  },
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

{
  /* <View style={{ alignSelf: "center" }}>
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
<Text style={{ textAlign: "center", marginTop: 20 }}>Update profile image</Text> */
}

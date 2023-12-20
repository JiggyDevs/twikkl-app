import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";

export const useImageHook = () => {
  const getMediaLibraryPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
    if (status !== "granted") {
      console.log("Permission denied!");
    }
  };

  const pickImage = async () => {
    await getMediaLibraryPermission();
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      aspect: [9, 16],
      base64: true,
      quality: 1,
    });
    if (!result.canceled) {
      return result.assets[0].uri;
    }
  };

  return {
    pickImage,
  };
};

import { UploadVideoToS5Client, uploadPhotoToS5 } from "@twikkl/services/upload.services";
import { s5ClientAuthToken, s5ClientStorage } from "@twikkl/utils/config";

export const useUploadVideo = () => {
  const _uploadVideo = async (uri: string) => {
    const response = await UploadVideoToS5Client({ uri });

    if (response.data) {
      return {
        url: `${s5ClientStorage}/${response?.data?.cid}.mp4`,
        id: response?.data?.cid ?? "",
      };
    }
  };
  return {
    _uploadVideo,
  };
};
export const useUploadPhoto = () => {
  const _uploadPhoto = async (uri: string) => {
    const response = await uploadPhotoToS5({ uri });

    if (response.data) {
      return {
        url: `${s5ClientStorage}/${response?.data?.cid}.jpg?auth_token=${s5ClientAuthToken}`,
        id: response?.data?.cid ?? "",
      };
    }
  };
  return {
    _uploadPhoto,
  };
};

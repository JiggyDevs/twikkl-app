import { UploadVideoToS5Client } from "@twikkl/services/video.services";
import { s5ClientBaseUrl } from "@twikkl/utils/config";

export const useUploadVideo = () => {
  const _uploadVideo = async (uri: string) => {
    const response = await UploadVideoToS5Client({ uri });

    if (response.data) {
      return {
        url: `${s5ClientBaseUrl}/s5/blob/${response?.data?.cid}`,
        id: response?.data?.cid ?? "",
      };
    }
  };
  return {
    _uploadVideo,
  };
};

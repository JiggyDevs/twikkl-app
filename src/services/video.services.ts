import axios from "axios";
import { handleFetchError } from "@twikkl/utils/fetch";
import { s5ClientAuthToken, s5ClientBaseUrl } from "@twikkl/utils/config";

type UploadVideoProps = {
  uri: string;
};

const uploadToStorage = async (videoUri: string) => {
  try {
    const response = await fetch(videoUri);
    console.log(response);

    const blob = await response.blob();

    const filename = `SampleVideo.mp4`;
    return {
      blob,
      filename,
    };
  } catch (e) {
    console.error(e);
  }
};

export const UploadVideoToS5Client = async ({ uri }: UploadVideoProps) => {
  const formData = new FormData();
  //@ts-ignore
  formData.append("file", {
    name: "SampleVideo.mp4",
    uri,
    sourceUris: [uri],
    // extraMetadata :
    viewTypes: ["video"],
    type: "video/mp4",
  });

  try {
    return await axios.post(`${s5ClientBaseUrl}?auth_token=${s5ClientAuthToken}`, formData, {
      headers: {
        Authorization: `Bearer ${s5ClientAuthToken}`,
        "Content-Type": "multipart/form-data",
      },
    });
  } catch (error: any) {
    handleFetchError(error);
    return error;
  }
};

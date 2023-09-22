import axios from "axios";
import { s5ClientAuthToken, s5ClientBaseUrl } from "@twikkl/utils/config";

type UploadVideoProps = {
  uri: string;
};

export const UploadVideoToS5Client = async ({ uri }: UploadVideoProps) => {
  const formData = new FormData();
  //@ts-ignore
  formData.append("file", {
    name: "SampleVideo.mp4",
    uri,
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
    if (error.response) {
      // The server responded with an error status code (e.g., 4xx or 5xx)
      console.log("Response data:", error.response.data);
      console.log("Response status:", error.response.status);
      console.log("Response headers:", error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      console.log("Request:", error.request);
    } else {
      // Something else happened while setting up the request
      console.log("Error:", error.message);
    }
    return error;
  }
};

import { createPost } from "@twikkl/services/feed.services";
import { useRouter } from "expo-router";
import { toastSuccess } from "@twikkl/utils/common";
import { useUploadVideo } from "./upload-video";
import { showLoader, hideLoader } from "@twikkl/entities";

type ICreatePost = {
  contentUrl: string;
  description: string;
  tags: string[];
};

export const usePostHook = () => {
  const router = useRouter();
  const { _uploadVideo } = useUploadVideo();

  const _createPost = async (post: ICreatePost) => {
    showLoader();

    const videoResponse = await _uploadVideo(post.contentUrl);
    console.log(videoResponse.url);
    if (videoResponse?.url) {
      const response = await createPost({
        contentUrl: videoResponse.url,
        description: post.description,
        tags: post.tags,
      });

      if (response) {
        toastSuccess("Post created");
        router.push("Home");
      }
      hideLoader();
      return response;
    }
    hideLoader();
  };

  return {
    _createPost,
  };
};

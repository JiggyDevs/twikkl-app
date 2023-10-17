import { handleFetchError, fetchFromApi, isAxiosError } from "@twikkl/utils/fetch";
import { AxiosError } from "axios";

type Post = {
  contentUrl?: string;
  video: string;
  description: string;
};

interface UserFeedsResponse {
  data: Post[];
}

type FetchUserFeedsResponse = UserFeedsResponse | AxiosError;

export const fetchUserFeeds = async (): Promise<FetchUserFeedsResponse> => {
  try {
    const { data: posts } = await fetchFromApi({
      path: "posts/feed",
      method: "get",
    });
    const computeData = {
      ...posts,
      data: posts.data.map((post: Post) => {
        return {
          ...post,
          video: post.contentUrl,
        };
      }),
    };

    return computeData;
  } catch (error) {
    handleFetchError(error);

    if (isAxiosError(error)) {
      return error;
    }
    // Handle other types of errors or return a default value
    return {
      data: [],

      // Other properties as needed
    };

    // throw error;
  }
};
export function isUserFeedsResponse(response: FetchUserFeedsResponse | undefined): response is UserFeedsResponse {
  if (response) return (response as UserFeedsResponse).data !== undefined;

  return false;
}

type ICreatePost = {
  contentUrl: string;
  description: string;
  tags: string[];
};

export const createPost = async (post: ICreatePost) => {
  try {
    const { data } = await fetchFromApi({
      path: "posts",
      method: "post",
      body: post,
    });
    return data;
  } catch (error) {
    handleFetchError(error);
  }
};

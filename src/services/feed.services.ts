import { TUser } from "@twikkl/entities/auth.entity";
import { handleFetchError, fetchFromApi, isAxiosError } from "@twikkl/utils/fetch";
import { AxiosError } from "axios";

export type TComment = {
  _id: string;
  comment: string;
  user: TUser;
  updatedAt: string;
  post: string;
};

type Post = {
  contentUrl?: string;
  video: string;
  description: string;
  creator: TUser;
  comments: TComment[];
  likes: { user: TUser }[];
  _id: string;
};

interface UserFeedsResponse {
  data: Post[];
}

export type FetchUserFeedsResponse = UserFeedsResponse | AxiosError;

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
export const fetchUserPost = async (userId: string): Promise<FetchUserFeedsResponse> => {
  try {
    const { data: posts } = await fetchFromApi({
      path: `posts/user/${userId}`,
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
export const likePost = async (postId: string) => {
  try {
    const { data } = await fetchFromApi({
      path: `posts/post/like/${postId}`,
      method: "post",
      body: {},
    });
    return data;
  } catch (error) {
    handleFetchError(error);
  }
};
export const createComment = async (postId: string, comment: string) => {
  try {
    const { data } = await fetchFromApi({
      path: `comments/${postId}`,
      method: "post",
      body: { comment },
    });
    return data;
  } catch (error) {
    handleFetchError(error);
  }
};
export const unlikePost = async (postId: string) => {
  try {
    const { data } = await fetchFromApi({
      path: `posts/post/unlike/${postId}`,
      method: "post",
      body: {},
    });
    return data;
  } catch (error) {
    handleFetchError(error);
  }
};
export const bookmarkPost = async (postId: string) => {
  try {
    const { data } = await fetchFromApi({
      path: `posts/post/bookmarks/${postId}`,
      method: "post",
      body: {},
    });
    return data;
  } catch (error) {
    handleFetchError(error);
  }
};
export const removeBookmark = async (postId: string) => {
  try {
    const { data } = await fetchFromApi({
      path: `posts/post/bookmarks/${postId}/remove`,
      method: "post",
      body: {},
    });
    return data;
  } catch (error) {
    handleFetchError(error);
  }
};

export const fetchBookmarks = async () => {
  try {
    const { data } = await fetchFromApi({
      path: `posts/post/bookmarks`,
      method: "get",
      body: {},
    });
    return data;
  } catch (error) {
    handleFetchError(error);
  }
};

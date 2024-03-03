import { TUser } from "@twikkl/entities/auth.entity";
import { handleFetchError, fetchFromApi, isAxiosError } from "@twikkl/utils/fetch";
import { AxiosError } from "axios";

export type TComment = {
  _id: string;
  comment: string;
  user: TUser;
  subComments: TComment[];
  updatedAt: string;
  post: string;
};
export type TLikes = {
  _id: string;
  user: TUser;
  updatedAt: string;
  post: string;
};

export type Post = {
  contentUrl?: string;
  video: string;
  totalLikes: number;
  totalComments: number;
  description: string;
  creator: TUser;
  comments: TComment[];
  likes: { user: TUser }[];
  _id: string;
};

export type Pagination = {
  currentPage: number;
  hasNext: boolean;
  hasPrevious: boolean;
  next: number;
  total: number;
};
export type BookmarkPost = {
  _id: string;
  createdAt: string;
  post: string;
  updatedAt: string;
  user: string;
};
interface UserFeedsResponse {
  data: Post[];
  pagination: Pagination;
}

export type FetchUserFeedsResponse = UserFeedsResponse | AxiosError;

export const fetchUserFeeds = async (perPage?: number): Promise<FetchUserFeedsResponse | undefined> => {
  try {
    const { data: posts } = await fetchFromApi({
      path: `posts/feed?${perPage ? `perpage=${perPage}` : ""}`,
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

    // throw error;
  }
};
export const fetchUserPost = async (userId: string, perPage?: number): Promise<FetchUserFeedsResponse | undefined> => {
  try {
    const { data: posts } = await fetchFromApi({
      path: `posts/user/${userId}?${perPage ? `perPage=${perPage}` : ""}`,
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

    // throw error;
  }
};
export const fetchPost = async (postId: string): Promise<Post | undefined> => {
  try {
    const { data: post } = await fetchFromApi({
      path: `posts/post/${postId}`,
      method: "get",
    });
    const computeData = {
      ...post.data,
      video: post.data.contentUrl,
    };

    return computeData;
  } catch (error) {
    handleFetchError(error);
  }
};

export const fetchPostComments = async (
  postId: string,
  perPage?: number,
): Promise<{ data: TComment[]; pagination: Pagination } | undefined> => {
  try {
    const { data: comments } = await fetchFromApi({
      path: `comments/${postId}?perPage=${perPage || 10}`,
      method: "get",
    });

    const includeSubComments = await Promise.all(
      comments.data.map(async (comment: { _id: string }) => {
        const subComments = await fetchPostSubComments(comment._id);
        // console.log(subComments.data, "subComments");
        return {
          ...comment,
          subComments: subComments?.data || [], // Ensure to handle undefined case
        };
      }),
    );

    return {
      ...comments,
      data: includeSubComments,
    };
  } catch (error) {
    handleFetchError(error);
  }
};

export const fetchPostLikes = async (postId: string): Promise<{ data: TLikes[] } | undefined> => {
  try {
    const { data: likes } = await fetchFromApi({
      path: `posts/post/likes/${postId}`,
      method: "get",
    });

    return likes;
  } catch (error) {
    handleFetchError(error);
  }
};

export const fetchPostSubComments = async (
  commentId: string,
): Promise<{ data: TComment[]; pagination: Pagination } | undefined> => {
  try {
    const { data: comments } = await fetchFromApi({
      path: `comments/comment/${commentId}/replies?perpage=50`,
      method: "get",
    });

    return comments.data;
  } catch (error) {
    handleFetchError(error);
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
  categoryId?: string;
  groupId?: string;
};

export const createPost = async (post: ICreatePost) => {
  try {
    const { data } = await fetchFromApi({
      path: "posts",
      method: "post",
      body: post,
    });
    console.log("postData", data);
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
export const createComment = async (postId: string, comment: string, replyTo?: string) => {
  try {
    const { data } = await fetchFromApi({
      path: `comments/${postId}`,
      method: "post",
      body: { comment, replyTo },
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
      path: `posts/bookmarks/${postId}`,
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
      path: `posts/bookmarks/${postId}`,
      method: "delete",
      body: {},
    });
    return data;
  } catch (error) {
    handleFetchError(error);
  }
};

export const fetchBookmarks = async (): Promise<{ data: BookmarkPost[] } | undefined> => {
  try {
    const { data } = await fetchFromApi({
      path: `posts/bookmarks`,
      // method: "get",
      // body: {},
    });
    return data;
  } catch (error) {
    handleFetchError(error);
  }
};

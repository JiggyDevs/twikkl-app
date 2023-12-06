import { fetchFromApi, handleFetchError } from "@twikkl/utils/fetch";

type Profile = {
  _id: string;
  commentsNotification: boolean;
  createdAt: string;
  email: string;
  emailVerified: boolean;
  followersNotification: boolean;
  following: any[];
  groups: any[];
  avatar?: string;
  twitter?: string;
  bio?: string;
  lastLoginDate: string;
  likesNotification: boolean;
  mentionsNotification: boolean;
  repostNotification: boolean;
  updatedAt: string;
  username: string;
};
type Followers = {
  _id: string;
  follower: string;
  user: string;
  createdAt: string;
  updatedAt: string;
};
export const fetchProfile = async (userId: string): Promise<Profile | undefined> => {
  try {
    const { data } = await fetchFromApi({
      path: `users/${userId}`,
      method: "get",
    });
    return data.data;
  } catch (error) {
    handleFetchError(error);
  }
};
export const userFollowers = async (
  userId: string,
): Promise<
  | {
      data: Followers;
      pagination: {
        total: number;
      };
    }
  | undefined
> => {
  try {
    const { data } = await fetchFromApi({
      path: `following/followers/${userId}`,
      method: "get",
    });
    return data;
  } catch (error) {
    handleFetchError(error);
  }
};

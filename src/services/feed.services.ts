import { handleFetchError, fetchFromApi } from "@twikkl/utils/fetch";

export const fetchUserFeeds = async () => {
  try {
    const { data } = await fetchFromApi({
      path: "posts/feed",
      method: "get",
    });
    return data;
  } catch (error) {
    handleFetchError(error);
    throw error;
  }
};

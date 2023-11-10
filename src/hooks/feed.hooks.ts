import { fetchUserFeeds, isUserFeedsResponse } from "@twikkl/services/feed.services";
import { useQuery } from "@tanstack/react-query";

export const useFeedHook = () => {
  const { data: posts, isLoading, ...rest } = useQuery(["user-feed"], () => fetchUserFeeds());

  return {
    ...rest,
    posts: isUserFeedsResponse(posts) ? posts.data : [],
    isLoading,
  };
};

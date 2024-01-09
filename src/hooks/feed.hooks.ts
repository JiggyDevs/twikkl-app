import { fetchUserFeeds, isUserFeedsResponse } from "@twikkl/services/feed.services";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export const useFeedHook = () => {
  const [page, setPage] = useState(1);

  const { data: posts, isLoading, ...rest } = useQuery(["user-feed"], () => fetchUserFeeds());

  // console.log("feedsss", posts);

  return {
    ...rest,
    posts: isUserFeedsResponse(posts) ? posts.data : [],
    isLoading,
  };
};

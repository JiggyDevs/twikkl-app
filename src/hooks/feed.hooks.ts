import { UserFeedsResponse, fetchUserFeeds, isUserFeedsResponse } from "@twikkl/services/feed.services";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export const useFeedHook2 = () => {
  const [posts, setPosts] = useState<any>([]);

  const { data, hasNextPage, fetchNextPage, isLoading, refetch } = useInfiniteQuery({
    queryKey: ["user-feed"],
    queryFn: async ({ pageParam = 1 }) => fetchUserFeeds(pageParam),
    getNextPageParam: (resData: any) => {
      if (resData?.pagination?.currentPage === resData?.paginatio?.lastPage) {
        return undefined;
      }

      return resData.pagination.currentPage + 1;
    },
  });

  const loadMore = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  console.log({ data, isLoading });
  useEffect(() => {
    if (data) {
      console.log(data);
      setPosts(data.pages.map((page) => page.data).flat());
    }
  }, [data]);

  return {
    state: {
      posts,
      data,
      isLoading,
    },
    action: {
      setPosts,
      loadMore,
      refetch,
    },
  };
};

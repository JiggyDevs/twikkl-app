import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchUserPost } from "@twikkl/services/feed.services";
import { useEffect, useState } from "react";

export const useProfile = (userId: string) => {
  const [userPosts, setUserPosts] = useState<any>([]);
  const [pagination, setPagination] = useState<any>({});

  const { data, hasNextPage, fetchNextPage, isLoading, refetch } = useInfiniteQuery({
    queryKey: ["user-posts"],
    queryFn: async ({ pageParam = 1 }) => fetchUserPost(userId, pageParam),
    getNextPageParam: (resData: any) => {
      if (resData.pagination.currentPage === resData.pagination.lastPage) {
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
      setUserPosts(data.pages.map((page) => page.data).flat());
      // setPagination(data.pages)
    }
  }, [data]);

  return {
    state: {
      userPosts,
      data,
      isLoading,
      pagination,
    },
    action: {
      setUserPosts,
      loadMore,
      refetch,
    },
  };
};

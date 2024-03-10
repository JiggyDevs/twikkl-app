import { UserFeedsResponse, fetchUserFeeds, isUserFeedsResponse } from "@twikkl/services/feed.services";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export const useFeedHook = () => {
  const [page, setPage] = useState(1);
  const [pageMeta, setPageMeta] = useState<any>({ currentPage: 0, lastPage: 1 });
  const [posts, setPosts] = useState<any>([]);

  const { data, isLoading, isSuccess, ...rest } = useQuery(["user-feed", page], () => fetchUserFeeds(page), {
    keepPreviousData: true,
  });

  useEffect(() => {
    if (!isLoading && isSuccess) {
      const pagination = (data as UserFeedsResponse)?.pagination as Record<any, any>;

      if (pagination?.currentPage > pageMeta.currentPage) {
        const _postData = isUserFeedsResponse(data) ? data.data : [];
        setPosts((oldPosts: any) => oldPosts.concat(_postData));
        setPageMeta(pagination);
      }
    }
  }, [isLoading, rest.isPreviousData]);

  return {
    ...rest,
    pagination: !isLoading && isSuccess && (data as UserFeedsResponse)?.pagination,
    posts: isUserFeedsResponse(data) ? data.data : [],
    isLoading,
    postsData: isUserFeedsResponse({ data: posts }) ? posts : [],
    setPostsData: setPosts,
    setPage,
    page,
    pageMeta,
    setPageMeta,
  };
};

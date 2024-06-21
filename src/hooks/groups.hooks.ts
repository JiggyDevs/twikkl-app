import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { GroupResponse, fetchFavouriteGroups, fetchGroups, fetchUserGroups, isGroupResponse } from "@twikkl/services";
import { useEffect, useState } from "react";

export const useGroupHook2 = () => {
  const [groups, setGroups] = useState<any>([]);

  const { data, hasNextPage, fetchNextPage, isLoading, refetch } = useInfiniteQuery({
    queryKey: ["all-groups"],
    queryFn: async ({ pageParam = 1 }) => fetchGroups(pageParam),
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
      setGroups(data.pages.map((page) => page.data).flat());
    }
  }, [data]);

  return {
    state: {
      groups,
      data,
      isLoading,
    },
    action: {
      setGroups,
      loadMore,
      refetch,
    },
  };
};

export const useYourGroupsHook2 = () => {
  const [yourGroups, setYourGroups] = useState<any>([]);

  const { data, hasNextPage, fetchNextPage, isLoading, refetch } = useInfiniteQuery({
    queryKey: ["your-groups"],
    queryFn: async ({ pageParam = 1 }) => fetchUserGroups(pageParam),
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
      setYourGroups(data.pages.map((page) => page.data).flat());
    }
  }, [data]);

  return {
    state: {
      yourGroups,
      data,
      isLoading,
    },
    action: {
      setYourGroups,
      loadMore,
      refetch,
    },
  };
};

export const useYourFavouriteGroupsHook2 = () => {
  const [favouriteGroups, setFavouriteGroups] = useState<any>([]);

  const { data, hasNextPage, fetchNextPage, isLoading, refetch } = useInfiniteQuery({
    queryKey: ["favorite-groups"],
    queryFn: async ({ pageParam = 1 }) => fetchFavouriteGroups(pageParam),
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
      setFavouriteGroups(data.pages.map((page) => page.data).flat());
    }
  }, [data]);

  return {
    state: {
      favouriteGroups,
      data,
      isLoading,
    },
    action: {
      setFavouriteGroups,
      loadMore,
      refetch,
    },
  };
};

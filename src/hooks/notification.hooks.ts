import { useInfiniteQuery } from "@tanstack/react-query";
import { authEntity } from "@twikkl/entities/auth.entity";
import { userNotifications } from "@twikkl/services/notification.services";
import { useEffect, useState } from "react";

export const useNotification = () => {
  const [notifications, setNotifications] = useState<any>([]);
  const { user } = authEntity.get();

  const { data, hasNextPage, fetchNextPage, isLoading, refetch } = useInfiniteQuery({
    queryKey: ["notifications"],
    queryFn: async ({ pageParam = 1 }) => userNotifications(user?._id || "", pageParam),
    getNextPageParam: (resData: any) => {
      console.log({ pagination: resData.pagination });
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

  useEffect(() => {
    if (data) {
      setNotifications(data.pages.map((page) => page.data).flat());
    }
  }, [data]);

  return {
    state: {
      notifications,
      data,
      isLoading,
    },
    action: {
      setNotifications,
      loadMore,
      refetch,
    },
  };
};

import { useQuery } from "@tanstack/react-query";
import { GroupResponse, fetchFavouriteGroups, fetchGroups, fetchUserGroups, isGroupResponse } from "@twikkl/services";
import { useEffect, useState } from "react";

export const useGroupHook = () => {
  const [page, setPage] = useState(1);
  const [pageMeta, setPageMeta] = useState<any>({ currentPage: 0, lastPage: 1 });
  const [forYouGroupsData, setForYouGroupsData] = useState<any>([]);

  const {
    data: groups,
    isLoading,
    isSuccess,
    ...rest
  } = useQuery(["all-groups", page], () => fetchGroups(page), { keepPreviousData: true });
  // const groupsCat = isGroupResponse(groups) ? groups?.data[0]?.categories : [];
  console.log("groupps", groups);

  useEffect(() => {
    if (!isLoading && isSuccess) {
      const pagination = (groups as GroupResponse)?.pagination as Record<any, any>;
      const _groupsData = isGroupResponse(groups) ? (groups as GroupResponse).data : [];
      if (pagination?.currentPage > pageMeta.currentPage) {
        setForYouGroupsData((currentGroups: any) => currentGroups.concat(_groupsData));
        setPageMeta(pagination);
      }
    }
  }, [isLoading, rest.isPreviousData]);

  return {
    ...rest,
    groups: isGroupResponse(groups) ? groups.data : [],
    isForYouLoading: isLoading,
    forYouPage: page,
    setForYouPage: setPage,
    forYouPageMeta: pageMeta,
    setForYouPageMeta: setPageMeta,
    forYouGroupsData: isGroupResponse({ data: forYouGroupsData } as GroupResponse) ? forYouGroupsData : [],
  };
};

export const useYourGroupsHook = () => {
  const [page, setPage] = useState(1);
  const [pageMeta, setPageMeta] = useState<any>({ currentPage: 0, lastPage: 1 });
  const [yourGroupsData, setYourGroupsData] = useState<any>([]);

  const {
    data: groups,

    isLoading,
    isSuccess,
    ...rest
  } = useQuery(["your-groups", page], () => fetchUserGroups(page), { keepPreviousData: true });

  useEffect(() => {
    if (!isLoading && isSuccess) {
      const pagination = (groups as GroupResponse)?.pagination as Record<any, any>;
      const _groupsData = isGroupResponse(groups) ? (groups as GroupResponse).data : [];
      if (pagination?.currentPage > pageMeta.currentPage) {
        setYourGroupsData((currentGroups: any) => currentGroups.concat(_groupsData));
        setPageMeta(pagination);
      }
    }
  }, [isLoading, rest.isPreviousData]);

  return {
    ...rest,
    yourGroups: isGroupResponse(groups) ? groups.data : [],
    isLoading,
    isYourGroupLoading: isLoading,
    yourGroupPage: page,
    setYourGroupPage: setPage,
    yourPageMeta: pageMeta,
    setYourPageMeta: setPageMeta,
    yourGroupsData: isGroupResponse({ data: yourGroupsData } as GroupResponse) ? yourGroupsData : [],
  };
};

export const useYourFavouriteGroupsHook = () => {
  const [page, setPage] = useState(1);
  const [pageMeta, setPageMeta] = useState<any>({ currentPage: 0, lastPage: 1 });
  const [favouriteGroupsData, setFavouriteGroupsData] = useState<any>([]);

  const {
    data: groups,
    isLoading,
    isSuccess,
    ...rest
  } = useQuery(["favorite-groups", page], () => fetchFavouriteGroups(page), { keepPreviousData: true });

  useEffect(() => {
    if (!isLoading && isSuccess) {
      const pagination = (groups as GroupResponse)?.pagination as Record<any, any>;
      const _groupsData = isGroupResponse(groups) ? (groups as GroupResponse).data : [];
      if (pagination?.currentPage > pageMeta.currentPage) {
        setFavouriteGroupsData((currentGroups: any) => currentGroups.concat(_groupsData));
        setPageMeta(pagination);
      }
    }
  }, [isLoading, rest.isPreviousData]);

  return {
    ...rest,
    pagination: !isLoading && isSuccess && (groups as GroupResponse)?.pagination,
    favouriteGroups: isGroupResponse(groups) ? groups.data : [],
    isFavLoading: isLoading,
    favPage: page,
    setFavPage: setPage,
    favPageMeta: pageMeta,
    setFavPageMeta: setPageMeta,
    favouriteGroupsData: isGroupResponse({ data: favouriteGroupsData } as GroupResponse) ? favouriteGroupsData : [],
  };
};

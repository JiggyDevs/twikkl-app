import { useQuery } from "@tanstack/react-query";
import { fetchFavouriteGroups, fetchGroups, fetchUserGroups, isGroupResponse } from "@twikkl/services";

export const useGroupHook = () => {
  const { data: groups, isLoading, ...rest } = useQuery(["all-groups"], () => fetchGroups());
  // const groupsCat = isGroupResponse(groups) ? groups?.data[0]?.categories : [];
  console.log("groupps", groups);

  return {
    ...rest,
    groups: isGroupResponse(groups) ? groups.data : [],
    isLoading,
  };
};

export const useYourGroupsHook = () => {
  const { data: groups, isLoading, ...rest } = useQuery(["your-groups"], () => fetchUserGroups());

  return {
    ...rest,
    yourGroups: isGroupResponse(groups) ? groups.data : [],
    isLoading,
  };
};
export const useYourFavouriteGroupsHook = () => {
  const { data: groups, isLoading, ...rest } = useQuery(["favorite-groups"], () => fetchFavouriteGroups());

  return {
    ...rest,
    favouriteGroups: isGroupResponse(groups) ? groups.data : [],
    isLoading,
  };
};

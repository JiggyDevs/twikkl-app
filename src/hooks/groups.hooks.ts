import { useQuery } from "@tanstack/react-query";
import { fetchGroups, fetchUserGroups, isGroupResponse } from "@twikkl/services";

export const useGroupHook = () => {
  const { data: groups, isLoading, ...rest } = useQuery(["all-groups"], () => fetchGroups());

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

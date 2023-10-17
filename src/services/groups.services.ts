import { handleFetchError, fetchFromApi, isAxiosError } from "@twikkl/utils/fetch";
import { AxiosError } from "axios";

type Groups = {
  _id: string;
  name: string;
  description: string;
  creator: string;
  members: string[];
  isDeleted: boolean;
  isAdminDeleted: boolean;
};

interface GroupResponse {
  data: Groups[];
}

type FetchGroupsResponse = GroupResponse | AxiosError;

export const fetchGroups = async (): Promise<FetchGroupsResponse> => {
  try {
    const { data: posts } = await fetchFromApi({
      path: "groups",
      method: "get",
    });
    const computeData = {
      ...posts,
    };

    return computeData;
  } catch (error) {
    handleFetchError(error);

    if (isAxiosError(error)) {
      return error;
    }
    // Handle other types of errors or return a default value
    return {
      data: [],

      // Other properties as needed
    };

    // throw error;
  }
};
export const fetchUserGroups = async (): Promise<FetchGroupsResponse> => {
  try {
    const { data: posts } = await fetchFromApi({
      path: "groups/user",
      method: "get",
    });
    const computeData = {
      ...posts,
    };

    return computeData;
  } catch (error) {
    handleFetchError(error);

    if (isAxiosError(error)) {
      return error;
    }
    // Handle other types of errors or return a default value
    return {
      data: [],

      // Other properties as needed
    };

    // throw error;
  }
};

export function isGroupResponse(response: FetchGroupsResponse | undefined): response is GroupResponse {
  if (response) return (response as GroupResponse).data !== undefined;

  return false;
}

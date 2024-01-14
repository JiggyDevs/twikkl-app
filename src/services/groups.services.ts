import { handleFetchError, fetchFromApi, isAxiosError } from "@twikkl/utils/fetch";
import { AxiosError } from "axios";
import { FetchUserFeedsResponse } from "./feed.services";

export type Groups = {
  group: any;
  _id: string;
  name: string;
  description: string;
  creator: string;
  members: string[];
  categories: string[];
  isDeleted: boolean;
  avatar: string;
  coverImg: string;
  isAdminDeleted: boolean;
};

interface GroupResponse {
  data: Groups[];
}

type FetchGroupsResponse = GroupResponse | AxiosError;

export const fetchGroups = async (): Promise<FetchGroupsResponse> => {
  try {
    const { data: posts } = await fetchFromApi({
      path: "groups?excludeJoined=true",
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

export const fetchCategories = async (): Promise<{ data: { _id: string; description: string; name: string }[] }> => {
  try {
    const { data: categories } = await fetchFromApi({
      path: "categories?perpage=20",
      method: "get",
    });

    const computeData = {
      ...categories,
    };

    return computeData;
  } catch (error) {
    handleFetchError(error);

    // Handle other types of errors or return a default value
    return {
      data: [],

      // Other properties as needed
    };

    // throw error;
  }
};

export const createGroup = async (data: {
  name: string;
  description: string;
  categories: string[];
  isPrivate: boolean;
  coverImg: string;
  avatar: string;
}): Promise<FetchGroupsResponse | undefined> => {
  try {
    console.log(data);
    const { data: group } = await fetchFromApi({
      path: "groups",
      method: "post",
      body: data,
    });
    return group;
  } catch (error) {
    handleFetchError(error);

    if (isAxiosError(error)) {
      return error;
    }
    // Handle other types of errors or return a default value

    // throw error;
  }
};

export const createCategory = async (data: {
  name: string;
  description: string;
}): Promise<FetchGroupsResponse | undefined> => {
  try {
    const { data: categories } = await fetchFromApi({
      path: "categories",
      method: "post",
      body: data,
    });
    return categories;
  } catch (error) {
    handleFetchError(error);

    if (isAxiosError(error)) {
      return error;
    }
    // Handle other types of errors or return a default value

    // throw error;
  }
};

export const joinGroup = async (groupId: string): Promise<boolean | AxiosError | undefined> => {
  try {
    await fetchFromApi({
      path: "groups/join",
      method: "post",
      body: {
        groupId,
      },
    });
    return true;
  } catch (error) {
    handleFetchError(error);

    if (isAxiosError(error)) {
      return error;
    }
    // Handle other types of errors or return a default value

    // throw error;
  }
};
export const leaveGroup = async (groupId: string): Promise<boolean | AxiosError | undefined> => {
  try {
    await fetchFromApi({
      path: "groups/leave",
      method: "post",
      body: {
        groupId,
      },
    });
    return true;
  } catch (error) {
    handleFetchError(error);

    if (isAxiosError(error)) {
      return error;
    }
    // Handle other types of errors or return a default value

    // throw error;
  }
};
export const favouriteGroup = async (groupId: string): Promise<boolean | AxiosError | undefined> => {
  try {
    await fetchFromApi({
      path: "favorite-groups",
      method: "post",
      body: {
        groupId,
      },
    });
    return true;
  } catch (error) {
    handleFetchError(error);

    if (isAxiosError(error)) {
      return error;
    }
    // Handle other types of errors or return a default value

    // throw error;
  }
};

export const unfavouriteGroup = async (groupId: string): Promise<boolean | AxiosError | undefined> => {
  try {
    await fetchFromApi({
      path: `favorite-groups/${groupId}`,
      method: "delete",
    });
    return true;
  } catch (error) {
    handleFetchError(error);

    if (isAxiosError(error)) {
      return error;
    }
    // Handle other types of errors or return a default value

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
export const fetchFavouriteGroups = async (): Promise<FetchGroupsResponse> => {
  try {
    const { data: groups } = await fetchFromApi({
      path: "favorite-groups",
      method: "get",
    });
    const computeData = {
      ...groups,
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
export const fetchGroupPosts = async (groupId: string): Promise<FetchUserFeedsResponse> => {
  try {
    const { data: groups } = await fetchFromApi({
      path: `groups/${groupId}/posts`,
      method: "get",
    });
    const computeData = {
      ...groups,
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

import { handleFetchError, fetchFromApi, isAxiosError } from "@twikkl/utils/fetch";
import { AxiosError } from "axios";
import { FetchUserFeedsResponse } from "./feed.services";

export type Groups = {
  group?: any;
  _id: string;
  name: string;
  description: string;
  creator: string;
  members: string[];
  categories: string[];
  isDeleted: boolean;
  isPrivate?: boolean;
  avatar: string;
  coverImg: string;
  isAdminDeleted: boolean;
};

export interface GroupResponse {
  data: Groups[];
  pagination: Record<any, any>;
}

type FetchGroupsResponse = GroupResponse | AxiosError;

export const fetchGroups = async (page?: number): Promise<FetchGroupsResponse> => {
  const _page = page ?? 1;
  try {
    const { data: posts } = await fetchFromApi({
      path: `groups?excludeJoined=true&page=${_page}`,
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
      pagination: {},

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
    // console.log("createGroup", group);

    return group;
  } catch (error) {
    handleFetchError(error);
    console.log("createGroupError", error);
    // if (isAxiosError(error)) {
    //   // console.log("createGroupError1", error);
    //   // return error;
    // }
    // Handle other types of errors or return a default value

    throw error;
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
export const fetchUserGroups = async (page?: number): Promise<FetchGroupsResponse> => {
  const _page = page ?? 1;

  try {
    const { data: posts } = await fetchFromApi({
      path: `groups/user?page=${_page}`,
      // method: "get",
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
      pagination: {},

      // Other properties as needed
    };

    // throw error;
  }
};
export const fetchFavouriteGroups = async (page?: number): Promise<FetchGroupsResponse> => {
  const _page = page ?? 1;
  try {
    const { data: groups } = await fetchFromApi({
      path: `favorite-groups?page=${_page}`,
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
      pagination: {},

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
    // console.log("fetchhgroupsss", groups);

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

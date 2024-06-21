import { TUser } from "@twikkl/entities/auth.entity";
import { fetchFromApi, handleFetchError } from "@twikkl/utils/fetch";
import { Post } from "./feed.services";

export type NotificationResponse = {
  _id: string;
  title: string;
  type: string;
  content: string;
  clicked: boolean;
  user: TUser;
  post?: Post;
  createdAt: string;
  updatedAt: string;
};

export const userNotifications = async (
  userId: string,
  page?: number,
  pageSize?: number,
): Promise<
  | {
      data: NotificationResponse[];
      pagination: { currentPage: number; hasNext: boolean; hasPrevious: boolean; next: number; total: number };
    }
  | undefined
> => {
  const _pageSize = pageSize ?? 10;
  const _page = page ?? 1;
  try {
    const { data } = await fetchFromApi({
      path: `notifications/${userId}?${pageSize ? `perpage=${_pageSize}&` : ""}page=${_page}`,
      method: "get",
    });
    return data;
  } catch (error) {
    handleFetchError(error);
  }
};
export const markNotification = async (notificationId: string): Promise<boolean | undefined> => {
  try {
    await fetchFromApi({
      path: `notifications/${notificationId}`,
      method: "get",
    });
    return true;
  } catch (error) {
    handleFetchError(error);
  }
};

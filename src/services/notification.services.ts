import { fetchFromApi, handleFetchError } from "@twikkl/utils/fetch";

export type NotificationResponse = {
  _id: string;
  title: string;
  type: string;
  content: string;
  clicked: boolean;
  user: string;
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
  try {
    const { data } = await fetchFromApi({
      path: `notifications/${userId}${page ? `?page=${page}` : ""}${pageSize ? `&pageSize=${pageSize}` : ""}`,
      method: "get",
    });
    return data;
  } catch (error) {
    handleFetchError(error);
  }
};

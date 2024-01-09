import { TUser, authEntity } from "@twikkl/entities/auth.entity";
import { fetchPostLikes, likePost, unlikePost } from "@twikkl/services/feed.services";
import { useDebouncedCallback } from "use-debounce";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

export const useLikesHook = (likes: { user: TUser }[] = [], postId: string) => {
  const { data, refetch } = useQuery(["post-likes", postId], () => fetchPostLikes(postId));

  const likedUsers = data?.data.map((like) => like.user._id) || [];
  const { user } = authEntity.get();

  const isPostLiked = likedUsers.includes(user?._id || "");

  const [liked, setLike] = useState(isPostLiked);

  const [likeStatus, setLikeStatus] = useState<boolean | undefined>();

  const debounceLike = useDebouncedCallback(async () => {
    if (likeStatus === !liked) return;

    setLikeStatus(!liked);

    if (!liked) {
      const response = await unlikePost(postId);
      refetch();
      return response;
    }

    const response = await likePost(postId);
    refetch();
    return response;
  }, 1000);

  const toggleLikePost = async () => {
    setLike(!liked);

    debounceLike();
  };

  return {
    toggleLikePost,
    liked,
  };
};

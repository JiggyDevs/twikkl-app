import { TUser, authEntity } from "@twikkl/entities/auth.entity";
import { likePost, unlikePost } from "@twikkl/services/feed.services";
import { useDebouncedCallback } from "use-debounce";

import { useState } from "react";

export const useLikesHook = (likes: { user: TUser }[], postId: string) => {
  const likedUsers = likes.map((like) => like.user._id);
  const { user } = authEntity.get();

  const isPostLiked = likedUsers.includes(user?._id || "");

  const [liked, setLike] = useState(isPostLiked);

  const [likeStatus, setLikeStatus] = useState<boolean | undefined>();

  const debounceLike = useDebouncedCallback(async () => {
    if (likeStatus === !liked) return;

    setLikeStatus(!liked);

    if (!liked) {
      const response = await unlikePost(postId);

      return response;
    }

    const response = await likePost(postId);
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

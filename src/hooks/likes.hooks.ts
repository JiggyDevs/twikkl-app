import { TUser, authEntity } from "@twikkl/entities/auth.entity";
import { fetchPostLikes, likePost, unlikePost } from "@twikkl/services/feed.services";
import { useDebouncedCallback } from "use-debounce";

import { useCallback, useState } from "react";
import { useQuery } from "@tanstack/react-query";

export const useLikesHook = (likes: { user: TUser }[] = [], postId: string) => {
  const { user } = authEntity.get();

  const [liked, setLike] = useState(false);

  const handlePostLikes = useCallback(async () => {
    const response = await fetchPostLikes(postId);

    if (response) {
      const likedUsers = response?.data.map((like) => like.user._id) || [];

      const isPostLiked = likedUsers.includes(user?._id || "");

      setLike(isPostLiked);
      return response;
    }
    return {
      data: [],
    };
  }, [postId]);

  const { refetch } = useQuery(["post-likes", postId], () => handlePostLikes());

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

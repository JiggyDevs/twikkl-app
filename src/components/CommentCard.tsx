import React, { useState } from "react";
import styled from "styled-components/native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { Pressable, Text, View } from "react-native";
import UserAvatar from "./UserAvatar";
import ArrowDown from "@assets/svg/ArrowDown";
import FilledLike from "@assets/svg/FilledLike";
import Like from "@assets/svg/Like";
import { TComment } from "@twikkl/services/feed.services";
import dayjs from "dayjs";

const relativeTime = require("dayjs/plugin/relativeTime");

dayjs.extend(relativeTime);
export type Replies = {
  id: string;
  replier: string;
  reply: string;
  replier_picture: string;
};

const Wrapper = styled.View`
  flex-direction: row;
`;
const Main = styled.View`
  margin-left: ${wp(2.5)}px;
  flex: 1;
  margin-right: ${wp(5)}px;
`;
const SmallText = styled.Text`
  font-size: 12px;
  font-weight: 500;
  color: #fff;
`;
const TextWrapper = styled.View`
  background-color: #f1fcf2;
  padding: 10px;
  border-radius: 18px;
  align-self: flex-start;
  margin-bottom: 5px;
`;

const RenderCard = ({
  pic,
  comment,
  createdAt,
  handleReply,
  userId,
  name = "",
  likeCount,
}: {
  pic?: string;
  createdAt: string;
  comment: string;
  userId: string;
  handleReply?: () => void;
  name?: string;
  likeCount: number;
}) => {
  const [isLike, setIsLike] = useState(false);
  return (
    <Wrapper>
      <UserAvatar pic={pic} name={name} userId={userId} />
      <Main>
        <TextWrapper>
          <Text style={{ fontSize: 16 }}>{comment}</Text>
        </TextWrapper>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
          <SmallText>{(dayjs(createdAt) as any).fromNow()}</SmallText>
          <Pressable onPress={handleReply}>
            <SmallText>Reply</SmallText>
          </Pressable>
          <View style={{ flex: 1 }} />
          <Pressable onPress={() => setIsLike(!isLike)} style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <Text style={{ color: "#fff" }}>{likeCount > 0 && likeCount}</Text>
            {isLike ? <FilledLike /> : <Like />}
          </Pressable>
        </View>
      </Main>
    </Wrapper>
  );
};

const CommentCard = ({
  comment,
  likeCount = 0,
  subComment = [],
  handleReply,
}: {
  subComment: any[];
  comment: TComment;
  handleReply?: () => void;
  likeCount: number;
}) => {
  const [viewReplies, setViewReplies] = useState(false);
  return (
    <View>
      <RenderCard
        likeCount={likeCount}
        pic={comment.user?.img || ""}
        handleReply={handleReply}
        userId={comment.user._id || ""}
        name={comment.user.username}
        createdAt={comment.updatedAt}
        comment={comment.comment}
      />
      {Boolean(subComment?.length) && (
        <>
          {viewReplies && (
            <View style={{ marginLeft: 30, gap: 20, marginTop: 20 }}>
              {subComment?.map((item) => (
                <RenderCard
                  likeCount={item.likeCount}
                  pic={item.img}
                  createdAt={item.updatedAt}
                  comment={item?.subComment}
                  key={item?.id}
                />
              ))}
            </View>
          )}
          <Pressable
            style={{ flexDirection: "row", gap: 10, alignItems: "center" }}
            onPress={() => setViewReplies(!viewReplies)}
          >
            <Text style={{ color: "#fff" }}>
              {viewReplies ? "Close" : "View"} replies({subComment.length})
            </Text>
            <ArrowDown style={{ transform: [{ rotate: viewReplies ? "180deg" : "0deg" }] }} color="#fff" />
          </Pressable>
        </>
      )}
    </View>
  );
};

export default CommentCard;

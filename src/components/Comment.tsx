import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  NativeSyntheticEvent,
  NativeScrollEvent,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import React, { useRef, useState } from "react";
import styled from "styled-components/native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { ViewVariant } from "@twikkl/configs";
import CommentCard from "./CommentCard";
import { useFormField } from "@twikkl/hooks/common.hooks";
import CancelIcon from "@assets/svg/CancelIcon";
import SendIcon from "@assets/svg/SendIcon";
import { TComment, createComment, fetchPostComments } from "@twikkl/services/feed.services";
import { ActivityIndicator } from "react-native-paper";
import { useQuery } from "@tanstack/react-query";

const Wrapper = styled.View`
  padding-horizontal: ${hp(2)}px;
  flex: 1;
  gap: 20px;
  padding-bottom: 25px;
`;
const Container = styled.View`
  padding-top: ${hp(2)}px;
  flex: 1;
`;
const CancelWrapper = styled.Pressable`
  background-color: #f1fcf2;
  padding: 10px;
  border-radius: 99px;
`;

const defaultForm = {
  comment: "",
};

type CommentProps = {
  setComment: Function;
  postId: string;
  newComment: (comment: string) => void;
  comments: TComment[];
};
const Comment = ({ setComment, postId, newComment }: CommentProps) => {
  const { form, updateField, clearForm } = useFormField(defaultForm);

  const [loader, setLoader] = useState(false);
  // comment.user.username
  const [placeholder, setPlaceholder] = useState("Write a comment");

  const [replyComment, setReplyComment] = useState("");
  const [pageSize, setPageSize] = useState(10);

  const { data, isLoading, refetch } = useQuery(["comments", postId, pageSize], () =>
    fetchPostComments(postId, pageSize),
  );

  const comments = data?.data || [];

  const commentsPagination = data?.pagination;

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;
    const isEndReached = layoutMeasurement.height + contentOffset.y >= contentSize.height;

    if (isEndReached && commentsPagination) {
      if (!isLoading && (commentsPagination.total || 0) > pageSize) {
        setPageSize((prev) => prev + 10);
      }
    }
  };

  const inputRef = useRef<TextInput>(null);

  const handleSubmit = async () => {
    setLoader(true);

    const response = await createComment(postId, form.comment, replyComment || undefined);

    if (response) {
      newComment(form.comment);
      refetch();
      clearForm();
      setReplyComment("");
      setPlaceholder("Write a comment");
    }

    setLoader(false);
    return response;
  };

  return (
    // <KeyboardAvoidingView style={{ flex: 1 }}>
    <Container>
      <Wrapper>
        <View style={[ViewVariant.rowSpaceBetween]}>
          <View style={{ width: 20 }} />
          <Text style={{ color: "#fff", fontWeight: "600", fontSize: 16 }}>{comments.length} Comments</Text>
          <CancelWrapper onPress={() => setComment(false)}>
            <CancelIcon />
          </CancelWrapper>
        </View>
        <ScrollView onScroll={handleScroll}>
          <View style={{ gap: 30 }}>
            {isLoading && <ActivityIndicator />}
            {!isLoading &&
              comments.map((comment) => (
                <CommentCard
                  subComment={comment?.subComments || []}
                  likeCount={0}
                  handleReply={() => {
                    setReplyComment(comment._id);
                    setPlaceholder(`Reply to ${comment?.user.username}`);
                    inputRef?.current!.focus();
                  }}
                  key={comment._id}
                  comment={comment}
                />
              ))}
          </View>
        </ScrollView>
      </Wrapper>
      <View
        style={{
          flexDirection: "row",
          alignItems: "flex-end",
          gap: 20,
          backgroundColor: "#EEF3ED",
          padding: 20,
          paddingBottom: 30,
        }}
      >
        <TextInput
          placeholder={placeholder}
          style={{ flex: 1, fontSize: 16 }}
          value={form.comment}
          ref={inputRef}
          multiline
          onChangeText={(val) => updateField("comment", val)}
        />
        <TouchableOpacity disabled={!form.comment} onPress={handleSubmit}>
          {loader ? <ActivityIndicator /> : <SendIcon />}
        </TouchableOpacity>
      </View>
    </Container>
    // </KeyboardAvoidingView>
  );
};

export default Comment;

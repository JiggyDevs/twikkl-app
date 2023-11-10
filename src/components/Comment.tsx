import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styled from "styled-components/native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import Scroll from "./Scrollable";
import { ViewVariant } from "@twikkl/configs";
import CommentCard from "./CommentCard";
import { useFormField } from "@twikkl/hooks/common.hooks";
import CancelIcon from "@assets/svg/CancelIcon";
import SendIcon from "@assets/svg/SendIcon";
import { TComment, createComment } from "@twikkl/services/feed.services";
import { ActivityIndicator } from "react-native-paper";

const Wrapper = styled.View`
  padding-horizontal: ${hp(2)}px;
  flex: 1;
  gap: 20px;
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
  newComment: () => void;
  comments: TComment[];
};
const Comment = ({ setComment, postId, newComment, comments }: CommentProps) => {
  const { form, updateField, clearForm } = useFormField(defaultForm);

  console.log(comments);
  const [loader, setLoader] = useState(false);

  const handleSubmit = async () => {
    setLoader(true);

    const response = await createComment(postId, form.comment);

    if (response) {
      newComment();

      clearForm();
    }

    setLoader(false);
    return response;
  };
  return (
    <Container>
      <Wrapper>
        <View style={[ViewVariant.rowSpaceBetween]}>
          <View style={{ width: 20 }} />
          <Text style={{ color: "#fff", fontWeight: "600", fontSize: 16 }}>{comments.length} Comments</Text>
          <CancelWrapper onPress={() => setComment(false)}>
            <CancelIcon />
          </CancelWrapper>
        </View>
        <Scroll>
          <View style={{ gap: 30 }}>
            {comments.map((comment) => (
              <CommentCard subComment={[]} likeCount={0} handleReply={() => {}} key={comment._id} comment={comment} />
            ))}
          </View>
        </Scroll>
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
          placeholder="Write a comment"
          style={{ flex: 1, fontSize: 16 }}
          value={form.comment}
          multiline
          onChangeText={(val) => updateField("comment", val)}
        />
        <TouchableOpacity disabled={!form.comment} onPress={handleSubmit}>
          {loader ? <ActivityIndicator /> : <SendIcon />}
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default Comment;

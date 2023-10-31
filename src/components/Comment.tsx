import { View, Text, TextInput } from "react-native";
import React from "react";
import styled from "styled-components/native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import Scroll from "./Scrollable";
import { ViewVariant } from "@twikkl/configs";
import CommentCard from "./CommentCard";
import { useFormField } from "@twikkl/hooks/common.hooks";
import CancelIcon from "@assets/svg/CancelIcon";
import SendIcon from "@assets/svg/SendIcon";

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

const commentArr = [
  {
    comment: "Hi fam",
    img: require("../../assets/imgs/avatar1.png"),
    subComment: [],
    likeCount: 2,
  },
  {
    comment: "Another Comment Another Comment Another Comment Another Comment ",
    img: require("../../assets/imgs/avatar2.png"),
    subComment: [],
    likeCount: 1,
  },
  {
    comment: "comment again",
    img: require("../../assets/imgs/avatar3.png"),
    likeCount: 0,
    subComment: [
      { id: 1, subComment: "sub comment 1", img: require("../../assets/imgs/avatar5.png"), likeCount: 1 },
      { id: 2, subComment: "sub comment 2", img: require("../../assets/imgs/avatar6.png"), likeCount: 0 },
    ],
  },
  {
    comment: "last comment",
    img: require("../../assets/imgs/avatar4.png"),
    subComment: [],
    likeCount: 3,
  },
];

const defaultForm = {
  comment: "",
};

const Comment = ({ setComment }: { setComment: Function }) => {
  const { form, updateField, clearForm } = useFormField(defaultForm);
  return (
    <Container>
      <Wrapper>
        <View style={[ViewVariant.rowSpaceBetween]}>
          <View style={{ width: 20 }} />
          <Text style={{ color: "#fff", fontWeight: "600", fontSize: 16 }}>7.2K Comments</Text>
          <CancelWrapper onPress={() => setComment(false)}>
            <CancelIcon />
          </CancelWrapper>
        </View>
        <Scroll>
          <View style={{ gap: 30 }}>
            {commentArr.map((comment) => (
              <CommentCard handleReply={() => {}} key={comment.comment} {...comment} />
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
        <SendIcon />
      </View>
    </Container>
  );
};

export default Comment;

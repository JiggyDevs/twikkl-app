import ArrowDown from "@assets/svg/ArrowDown";
import Back from "@assets/svg/Back";
import Globe from "@assets/svg/Globe";
import Key from "@assets/svg/Key";
import { ViewVariant } from "@twikkl/configs";
import { useFormField } from "@twikkl/hooks/common.hooks";
import { isValidFormSubmit } from "@twikkl/utils/common";
import { useState } from "react";
import { View, Text, StyleSheet, Image, Pressable, TextInput } from "react-native";
import ButtonEl from "../ButtonEl";
import Dropdown from "../Dropdown";
import LabelInput from "../LabelInput";
import TermsAndPrivacy from "../TermsAndPrivacy";

const CreateGroup = ({ setCreateGroup }: { setCreateGroup: Function }) => {
  const createGroupData = {
    name: "",
    desc: "",
    invite: "",
  };
  const [tc, setTc] = useState(false);
  const [options, setOptions] = useState(false);
  const [subData, setSubData] = useState("");
  const { form, updateField } = useFormField(createGroupData);
  const disabled = isValidFormSubmit({ ...form, subData });
  const optionsArray = [
    { icon: <Globe />, title: "Public", desc: "This post will be visible to everyone on the network." },
    { icon: <Key />, title: "Private", desc: "This post will only be seen by you." },
  ];

  return (
    <View style={[ViewVariant.wrapper, { paddingBottom: 24 }]}>
      <Back style={styles.backButton} onPress={() => setCreateGroup(false)} dark="#041105" />
      <Image style={styles.image} source={require("../../../assets/imgs/logos/smLogo.png")} />
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>Create group</Text>
        <Text style={styles.desc}>Organize people in a space and exchange your thoughts and ideas.</Text>
        <View style={styles.children}>
          <LabelInput
            label="Group name"
            placeholder="Enter your group name"
            value={form.name}
            onChangeText={(val) => updateField("name", val)}
          />
          <View>
            <Text style={styles.label}>Description</Text>
            <TextInput
              multiline
              value={form.desc}
              onChangeText={(val) => updateField("desc", val)}
              placeholder="Let people know what your group is about"
              style={styles.textarea}
            />
          </View>
          <View>
            <Text style={styles.label}>Privacy</Text>
            <Pressable style={[styles.textarea, styles.dropdown]} onPress={() => setOptions(!options)}>
              <Text>{subData}</Text>
              <ArrowDown color="#000" />
            </Pressable>
          </View>
          {options && (
            <Dropdown options={options} optionsArray={optionsArray} setSubData={setSubData} subData={subData} />
          )}
          <LabelInput
            label="Invite friends"
            placeholder="Enter names"
            value={form.invite}
            onChangeText={(val) => updateField("invite", val)}
          />
        </View>
        <TermsAndPrivacy setTc={setTc} tc={tc} />
      </View>
      <ButtonEl loading={false} disabled={!disabled || !tc} onPress={() => {}}>
        <Text style={[ViewVariant.buttonText, (!disabled || !tc) && { color: "#000" }]}>Create group</Text>
      </ButtonEl>
    </View>
  );
};

export default CreateGroup;

const styles = StyleSheet.create({
  children: {
    marginTop: 24,
    // marginBottom: 1,
    gap: 14,
    zIndex: 10,
  },
  title: {
    fontWeight: "700",
    fontSize: 20,
    lineHeight: 33,
    textAlign: "center",
  },
  desc: {
    fontWeight: "500",
    textAlign: "center",
  },
  image: {
    alignSelf: "center",
    marginBottom: 16,
  },
  email: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: 16,
    marginTop: 4,
  },
  backButton: { padding: 13 },
  textarea: {
    borderColor: "#C0CCC1",
    backgroundColor: "#fff",
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    height: 90,
    fontSize: 15,
  },
  label: {
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 6,
  },
  dropdown: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 45,
  },
});

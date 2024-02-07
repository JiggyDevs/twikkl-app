import ArrowDown from "@assets/svg/ArrowDown";
import Back from "@assets/svg/Back";
import Globe from "@assets/svg/Globe";
import Key from "@assets/svg/Key";
import { ViewVariant } from "@twikkl/configs";
import { useFormField } from "@twikkl/hooks/common.hooks";
import { isValidFormSubmit } from "@twikkl/utils/common";
import { useCallback, useState } from "react";
import { View, Text, StyleSheet, Image, Pressable, TextInput, TouchableOpacity, ScrollView } from "react-native";
import ButtonEl from "../ButtonEl";
import Dropdown from "../Dropdown";
import LabelInput from "../LabelInput";
import TermsAndPrivacy from "../TermsAndPrivacy";
import { useImageHook } from "@twikkl/hooks/image.hooks";
import { useQuery } from "@tanstack/react-query";
import { createCategory, fetchCategories } from "@twikkl/services";
import ModalEl from "../ModalEl";

interface CreateGroupProps {
  handleCreateGroup: (data: {
    name: string;
    description: string;
    avatar: string;
    coverImg: string;
    categories: string[];
  }) => Promise<void>;
  setCreateGroup: Function;
}
const CreateGroup = ({ setCreateGroup, handleCreateGroup }: CreateGroupProps) => {
  const createGroupData = {
    name: "",
    desc: "",
    coverImg: "",
    categories: [] as string[],
    avatar: "",
    invite: "",
  };

  const [allCategories, setAllCategories] = useState<{ name: string; description: string }[]>([]);

  const handleFetchCategories = useCallback(async () => {
    const response = await fetchCategories();
    if (response) {
      setAllCategories(response.data);
    }
  }, []);

  const [showModal, setShowModal] = useState(false);

  const [categoryForm, setCategoryForm] = useState({
    name: "",
    description: "",
  });

  const { refetch } = useQuery(["categories"], () => handleFetchCategories());

  const [createCategoryLoader, setCreateCategoryLoader] = useState(false);
  const updateAllCategory = (data: { name: string; description: string }) => {
    setAllCategories((prev) => [...prev, data]);
  };
  const { form, updateField } = useFormField(createGroupData);
  const updateSelectedCategories = (name: string) => {
    if (form.categories.includes(name)) {
      const categories = form.categories.filter((categ) => categ !== name);
      updateField("categories", categories);
      return;
    }
    updateField("categories", [...form.categories, name]);
  };

  const handleCreateCategory = async () => {
    setCreateCategoryLoader(true);

    const response = await createCategory(categoryForm);
    setCreateCategoryLoader(false);

    const updateSelectedCategory = [...form.categories, categoryForm.name];

    if (response) {
      updateAllCategory(categoryForm);
      updateField("categories", updateSelectedCategory);
      setShowModal(false);
      refetch();
    }
  };

  const [tc, setTc] = useState(false);

  const [options, setOptions] = useState(false);

  const { pickImage } = useImageHook();

  const [subData, setSubData] = useState("");

  const handleImagePick = async () => {
    const response = await pickImage();

    if (response) updateField("avatar", response);
  };

  const handleCoverImagePick = async () => {
    const response = await pickImage();

    if (response) updateField("coverImg", response);
  };

  const disabled = isValidFormSubmit({ ...form, subData }, ["invite"]);

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
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.children}>
            <View>
              <Text style={styles.label}>Group Avatar</Text>

              <TouchableOpacity style={styles.avatarWrapper} onPress={handleImagePick}>
                <Image source={{ uri: form?.avatar }} style={styles.avatarImg} />
              </TouchableOpacity>
            </View>
            <View>
              <Text style={styles.label}>Group cover image</Text>

              <TouchableOpacity onPress={handleCoverImagePick}>
                <Image source={{ uri: form?.coverImg }} style={styles.coverImg} />
              </TouchableOpacity>
            </View>
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
            <View>
              <Text style={styles.label}>Category</Text>
              <View style={styles.allCategory}>
                {allCategories.map((categories) => (
                  <TouchableOpacity
                    key={categories.name}
                    onPress={() => updateSelectedCategories(categories.name)}
                    style={[
                      styles.category,
                      {
                        backgroundColor: form.categories.includes(categories.name) ? "#50A040" : "white",
                        borderColor: !form.categories.includes(categories.name) ? "#50A040" : "white",
                        borderStyle: "solid",
                        borderWidth: 1,
                      },
                    ]}
                  >
                    <Text style={{ color: form.categories.includes(categories.name) ? "white" : "black" }}>
                      {categories.name}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
              <TouchableOpacity onPress={() => setShowModal(true)}>
                <Text style={styles.addCatText}>Add category</Text>
              </TouchableOpacity>
            </View>

            <LabelInput
              label="Invite friends"
              placeholder="Enter names"
              value={form.invite}
              onChangeText={(val) => updateField("invite", val)}
            />
          </View>
        </ScrollView>

        <TermsAndPrivacy setTc={setTc} tc={tc} />
      </View>
      <ButtonEl
        loading={false}
        disabled={!disabled || !tc}
        onPress={() => {
          handleCreateGroup({
            name: form.name,
            description: form.desc,
            categories: form.categories,
            avatar: form.avatar,
            coverImg: form.coverImg,
          });
        }}
      >
        <Text style={[ViewVariant.buttonText, (!disabled || !tc) && { color: "#000" }]}>Create group</Text>
      </ButtonEl>
      <ModalEl transparent animate visible={showModal}>
        <View style={styles.modalWrapper}>
          <View style={styles.modal}>
            <LabelInput
              label="Category name"
              placeholder="Enter your category name"
              value={categoryForm.name}
              onChangeText={(val) => setCategoryForm((prev) => ({ ...prev, name: val }))}
            />
            <View style={styles.space} />

            <Text style={styles.label}>Category description</Text>
            <TextInput
              value={categoryForm.description}
              onChangeText={(val) => setCategoryForm((prev) => ({ ...prev, description: val }))}
              placeholder="Enter category description"
              style={styles.textarea}
            />
            <View style={styles.space} />

            <ButtonEl
              loading={createCategoryLoader}
              disabled={!categoryForm.name || !categoryForm.description}
              onPress={handleCreateCategory}
            >
              <Text style={[ViewVariant.buttonText, (!disabled || !tc) && { color: "#000" }]}>Create category</Text>
            </ButtonEl>
            <View style={styles.space} />

            <ButtonEl loading={false} bg="white" outline onPress={() => setShowModal(false)}>
              <Text style={[ViewVariant.buttonText, (!disabled || !tc) && { color: "#000" }]}>Cancel</Text>
            </ButtonEl>
          </View>
        </View>
      </ModalEl>
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
  modalWrapper: {
    backgroundColor: "rgba(20, 54, 21, 0.5)",
    justifyContent: "flex-end",
    alignItems: "center",
    flex: 1,
    paddingBottom: 100,
  },
  space: { height: 20 },
  modal: {
    backgroundColor: "#fff",
    width: "80%",
    padding: 32,
    alignItems: "center",
    borderRadius: 8,
  },
  allCategory: {
    flexDirection: "row",
    alignItems: "center",
  },
  category: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginRight: 6,
    borderRadius: 20,
  },
  title: {
    fontWeight: "700",
    fontSize: 20,
    lineHeight: 33,
    textAlign: "center",
  },
  avatarWrapper: { alignItems: "center", justifyContent: "center" },
  avatarImg: {
    width: 163,
    height: 163,
    borderStyle: "dashed",
    borderColor: "#C0CCC1",
    borderWidth: 1,
    borderRadius: 100,
    backgroundColor: "white",
    marginBottom: 16,
  },
  addCatText: {
    fontWeight: "700",
    fontSize: 12,
    lineHeight: 33,
    color: "#50A040",
    textAlign: "right",
  },
  coverImg: {
    width: "100%",
    height: 120,
    borderStyle: "dashed",
    borderColor: "#C0CCC1",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "white",
    marginBottom: 16,
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

import URLS from "./URLS";
import { IUserStory } from "react-native-insta-story";
import { appToast } from "@twikkl/utils/AppAlert";
import { Image } from "react-native";

const renderImage = (localImage: any) => Image.resolveAssetSource(localImage).uri;

const data: IUserStory<Record<string, any>>[] = [
  {
    user_id: 1,
    user_image: renderImage(require("../../../assets/imgs/story0.png")),
    user_name: "Forex",
    stories: [
      {
        story_id: 1,
        story_image: URLS.manOnBike,
        // swipeText: "Custom swipe text for this story",
        // onPress: () => appToast("story 1 swiped"),
      },
      {
        story_id: 2,
        story_image: URLS.manAvatar2,
      },
    ],
  },
  {
    user_id: 2,
    user_image: renderImage(require("../../../assets/imgs/story1.png")),
    user_name: "Binance",
    stories: [
      {
        story_id: 1,
        story_image: URLS.food,
        // swipeText: "Custom swipe text for this story",
        // onPress: () => appToast("story 1 swiped"),
      },
      {
        story_id: 2,
        story_image: URLS.drinksTogether,
        // swipeText: "Custom swipe text for this story",
        // onPress: () => appToast("story 2 swiped"),
      },
      {
        story_id: 3,
        story_image: URLS.party,
        // swipeText: "Custom swipe text for this story",
        // onPress: () => appToast("story 3 swiped"),
      },
      {
        story_id: 4,
        story_image: URLS.WEDDING,
        // swipeText: "Custom swipe text for this story",
        // onPress: () => appToast("story 4 swiped"),
      },
    ],
  },
  {
    user_id: 3,
    user_image: renderImage(require("../../../assets/imgs/story2.png")),
    user_name: "Crypto",
    stories: [
      {
        story_id: 1,
        story_image: URLS.WEDDING,
        swipeText: "Custom swipe text for this story",
        onPress: () => appToast("story 1 swiped"),
      },
      {
        story_id: 2,
        story_image: URLS.woman2,
        swipeText: "Custom swipe text for this story",
        onPress: () => appToast("story 2 swiped"),
      },
    ],
  },
  {
    user_id: 4,
    user_image: renderImage(require("../../../assets/imgs/story3.png")),
    user_name: "VR",
    stories: [
      {
        story_id: 1,
        story_image: URLS.party,
        swipeText: "Custom swipe text for this story",
        onPress: () => appToast("story 1 swiped"),
      },
      {
        story_id: 2,
        story_image: URLS.manOnBike,
        swipeText: "Custom swipe text for this story",
        onPress: () => appToast("story 2 swiped"),
      },
    ],
  },
  {
    user_id: 5,
    user_image: renderImage(require("../../../assets/imgs/story4.png")),
    user_name: "Love",
    stories: [
      {
        story_id: 1,
        story_image: URLS.manAvatar3,
        swipeText: "Custom swipe text for this story",
        onPress: () => appToast("story 1 swiped"),
      },
      {
        story_id: 2,
        story_image: URLS.drinksTogether,
        swipeText: "Custom swipe text for this story",
        onPress: () => appToast("story 2 swiped"),
      },
    ],
  },
  {
    user_id: 6,
    user_image: renderImage(require("../../../assets/imgs/story5.png")),
    user_name: "NFT",
    stories: [
      {
        story_id: 1,
        story_image: URLS.manOnBike,
        swipeText: "Custom swipe text for this story",
        onPress: () => appToast("story 1 swiped"),
      },
      {
        story_id: 2,
        story_image: URLS.woman2,
        swipeText: "Custom swipe text for this story",
        onPress: () => appToast("story 2 swiped"),
      },
    ],
  },
  // {
  //   user_id: 7,
  //   user_image: URLS.party,
  //   user_name: "Blockchain",
  //   stories: [
  //     {
  //       story_id: 1,
  //       story_image: URLS.manOnBike,
  //       swipeText: "Custom swipe text for this story",
  //       onPress: () => appToast("story 1 swiped"),
  //     },
  //     {
  //       story_id: 2,
  //       story_image: URLS.woman2,
  //       swipeText: "Custom swipe text for this story",
  //       onPress: () => appToast("story 2 swiped"),
  //     },
  //   ],
  // },
];

export default data;

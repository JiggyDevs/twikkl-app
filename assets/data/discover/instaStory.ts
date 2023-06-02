
import { appToast } from '@twikkl/utility/appAlert';
import URLS from './URLS';
import { IUserStory } from 'react-native-insta-story';

const data: IUserStory<Record<string, any>>[] = [
  {
    user_id: 1,
    user_image: URLS.manAvatar,
    user_name: 'Ubong Jacob',
    stories: [
      {
        story_id: 1,
        story_image: URLS.manOnBike,
        swipeText: 'Custom swipe text for this story',
        onPress: () => appToast('story 1 swiped'),
      },
      {
        story_id: 2,
        story_image: URLS.manAvatar2,
      },
    ],
  },
  {
    user_id: 2,
    user_image: URLS.manAvatar3,
    user_name: 'Joe',
    stories: [
      {
        story_id: 1,
        story_image: URLS.food,
        swipeText: 'Custom swipe text for this story',
        onPress: () => appToast('story 1 swiped'),
      },
      {
        story_id: 2,
        story_image: URLS.drinksTogether,
        swipeText: 'Custom swipe text for this story',
        onPress: () => appToast('story 2 swiped'),
      },
      {
        story_id: 3,
        story_image: URLS.party,
        swipeText: 'Custom swipe text for this story',
        onPress: () => appToast('story 3 swiped'),
      },
      {
        story_id: 4,
        story_image: URLS.WEDDING,
        swipeText: 'Custom swipe text for this story',
        onPress: () => appToast('story 4 swiped'),
      },
    ],
  },
  {
    user_id: 3,
    user_image: URLS.woman1,
    user_name: 'Wizkid',
    stories: [
      {
        story_id: 1,
        story_image: URLS.WEDDING,
        swipeText: 'Custom swipe text for this story',
        onPress: () => appToast('story 1 swiped'),
      },
      {
        story_id: 2,
        story_image: URLS.woman2,
        swipeText: 'Custom swipe text for this story',
        onPress: () => appToast('story 2 swiped'),
      },
    ],
  },
  {
    user_id: 4,
    user_image: URLS.WEDDING,
    user_name: 'Davido',
    stories: [
      {
        story_id: 1,
        story_image: URLS.party,
        swipeText: 'Custom swipe text for this story',
        onPress: () => appToast('story 1 swiped'),
      },
      {
        story_id: 2,
        story_image: URLS.manOnBike,
        swipeText: 'Custom swipe text for this story',
        onPress: () => appToast('story 2 swiped'),
      },
    ],
  },
  {
    user_id: 5,
    user_image: URLS.woman2,
    user_name: 'Yemi Alade',
    stories: [
      {
        story_id: 1,
        story_image: URLS.manAvatar3,
        swipeText: 'Custom swipe text for this story',
        onPress: () => appToast('story 1 swiped'),
      },
      {
        story_id: 2,
        story_image: URLS.drinksTogether,
        swipeText: 'Custom swipe text for this story',
        onPress: () => appToast('story 2 swiped'),
      },
    ],
  },
  {
    user_id: 6,
    user_image: URLS.party,
    user_name: 'DJ Cuppy',
    stories: [
      {
        story_id: 1,
        story_image: URLS.manOnBike,
        swipeText: 'Custom swipe text for this story',
        onPress: () => appToast('story 1 swiped'),
      },
      {
        story_id: 2,
        story_image: URLS.woman2,
        swipeText: 'Custom swipe text for this story',
        onPress: () => appToast('story 2 swiped'),
      },
    ],
  },
];

export default data;

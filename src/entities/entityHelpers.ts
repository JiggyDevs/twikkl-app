import AsyncStorage from "@react-native-async-storage/async-storage";

export const remoteStorage = {
  getItem: async (key: string) => {
    const data = await AsyncStorage.getItem(key);
    if (data === null) return "null";

    return data;
  },
  setItem: async (key: string, value: string) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {}
  },
};

import { ToastAndroid } from "react-native";

export const appToast = (message: string) => {
  ToastAndroid.showWithGravity(message, ToastAndroid.SHORT, ToastAndroid.CENTER);
};

import { clearAuth } from "@twikkl/entities/auth.entity";
import { Alert, ToastAndroid } from "react-native";

export const appToast = (message: string) => {
  ToastAndroid.showWithGravity(message, ToastAndroid.SHORT, ToastAndroid.CENTER);
};

export const logoutConfirmationAlert = (onProceed?: Function, onDismiss?: Function) => {
  Alert.alert(
    "Logout",
    "Are you sure you want to Logout?",
    [
      {
        text: "Cancel",
        onPress: () => {},
        style: "cancel",
      },
      {
        text: "Logout",
        onPress: () => {
          // clearAuth()
          onProceed?.();
        },
        style: "destructive",
      },
    ],
    {
      cancelable: true,
      onDismiss: () => {
        onDismiss?.();
      },
    },
  );
};

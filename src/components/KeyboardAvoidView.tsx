import { Platform } from "react-native";
import { ReactElement } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const KeyboardAvoidView = ({
  children,
  extraHeight,
  scroll = false,
}: {
  children: ReactElement;
  extraHeight?: number;
  scroll?: boolean;
}) => {
  return (
    <KeyboardAwareScrollView
      // enableAutomaticScroll={Platform.OS === "ios"}
      keyboardShouldPersistTaps="handled"
      extraScrollHeight={Platform.OS === "ios" ? 0 : 0} //70
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={{ flexGrow: 1 }}
      scrollEnabled={Platform.OS === "android" ? scroll : scroll}
      extraHeight={extraHeight ?? 100} //100
      showsVerticalScrollIndicator={false}
      scrollToOverflowEnabled={false}
      accessibilityElementsHidden={false}
      enableResetScrollToCoords={false}
      keyboardOpeningTime={0}
      enableOnAndroid
    >
      {children}
    </KeyboardAwareScrollView>
  );
};

export default KeyboardAvoidView;

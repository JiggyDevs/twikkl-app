import { SafeAreaView, StyleProp, StyleSheet, View, ViewStyle, ScrollView } from "react-native";
import { PropsWithChildren } from "react";
import Constants from "expo-constants";

import colors from "@twikkl/configs/colors";

interface Props extends PropsWithChildren {
  style?: StyleProp<ViewStyle>;
  isScrollable?: boolean;
}
/**
 * @default isScrollable-true
 */
const AppScreen = ({ children, style, isScrollable = true }: Props): JSX.Element => {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      {isScrollable ? (
        <ScrollView showsVerticalScrollIndicator={false} style={[styles.view, style]}>
          {children}
        </ScrollView>
      ) : (
        <View style={[styles.view, style]}>{children}</View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: colors.green100,
    flex: 1,
  },
  view: {
    flex: 1,
  },
});

export default AppScreen;

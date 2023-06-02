import { useEffect } from "react";
import * as Font from "expo-font";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { Provider as PaperProvider } from "react-native-paper";
import { StatusBar } from "expo-status-bar";
import { theme } from "@twikkl/configs";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

const axiforma = require("@assets/fonts/Axiforma-Regular.ttf") as Font.FontResource;
const TwikkLIconFonts = require("@assets/fonts/twikkl-icons-v1.0/fonts/twikkl-icons.ttf") as Font.FontResource;

export default function RootLayout() {
  const [loaded, error] = useFonts({ axiforma, TwikkLIconFonts });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  return (
    <>
      {!loaded && <SplashScreen />}
      {loaded && <RootLayoutNav />}
    </>
  );
}

function RootLayoutNav() {
  return (
    <PaperProvider theme={theme}>
      <StatusBar />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="Home" />
        <Stack.Screen name="discover" />
      </Stack>
    </PaperProvider>
  );
}

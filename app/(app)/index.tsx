// import { useEffect } from "react";
// import * as Font from "expo-font";
// import { useFonts } from "expo-font";
// import { Redirect, SplashScreen, Stack } from "expo-router";
// import { Provider as PaperProvider } from "react-native-paper";
// import { StatusBar } from "expo-status-bar";
// import { theme } from "@twikkl/configs";
// import { useTwikklEntity } from "@twikkl/entities";
// import Toast from "react-native-toast-message";
// import AppLoader from "@twikkl/components/AppLoader";
// import { toastConfig } from "@twikkl/components/ToastWidget";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { useAuth } from "@twikkl/entities/auth.entity";

// export {
//   // Catch any errors thrown by the Layout component.
//   ErrorBoundary,
// } from "expo-router";

// const axiforma = require("@assets/fonts/Axiforma-Regular.ttf") as Font.FontResource;
// const TwikkLIconFonts = require("@assets/fonts/twikkl-icons-v1.0/fonts/twikkl-icons.ttf") as Font.FontResource;
// const queryClient = new QueryClient();

// export default function RootLayout() {
//   const [loaded, error] = useFonts({ axiforma, TwikkLIconFonts });
//   const { isLoggedIn } = useAuth();
//   console.log({ isLoggedIn });

//   // Expo Router uses Error Boundaries to catch errors in the navigation tree.
//   useEffect(() => {
//     if (error) throw error;
//   }, [error]);

//   return (
//     <>
//       {!loaded && <SplashScreen />}
//       {loaded && <RootLayoutNav />}
//     </>
//   );
// }

// function RootLayoutNav() {
//   const { loading } = useTwikklEntity();

//   return (
//     <PaperProvider theme={theme}>
//       <QueryClientProvider client={queryClient}>
//         <StatusBar style="dark" />
//         <Stack screenOptions={{ headerShown: false }} initialRouteName="Home" />
//         {/* <Stack.Screen name="index" /> */}
//         {/* <Stack.Screen name="Home" /> */}

//         {loading && <AppLoader />}
//         <Toast config={toastConfig} />
//       </QueryClientProvider>
//     </PaperProvider>
//   );
// }
// import { View, Text } from "react-native";
// import React from "react";

// const Index = () => {
//   console.log("here in index of app app");
//   return (
//     <View>
//       <Text>showing index view</Text>
//     </View>
//   );
// };

// export default Index;

import ScreenHome from "./Home";

export default ScreenHome;

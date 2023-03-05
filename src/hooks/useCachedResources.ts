import { useEffect, useState } from "react";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

const axiforma = require("@assets/fonts/Axiforma-Regular.ttf") as Font.FontResource;

const IcoMoon = require("@assets/fonts/icomoon/fonts/icomoon.ttf") as Font.FontResource;

export default (): boolean => {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        await SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({ axiforma, IcoMoon });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        await SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync().catch(console.error);
  }, []);

  return isLoadingComplete;
};

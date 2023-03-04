import { StatusBar } from "expo-status-bar";
import { Provider as PaperProvider } from "react-native-paper";
import ScreenRegister from "@twikkl/screens/Register";
import { useCachedResources } from "@twikkl/hooks";
import { theme } from "@twikkl/configs";

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) return null;
  else {
    return (
      <PaperProvider theme={theme}>
        <StatusBar style="auto" />
        <ScreenRegister />
      </PaperProvider>
    );
  }
}

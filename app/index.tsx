import { StatusBar } from "expo-status-bar";
import { Provider as PaperProvider } from "react-native-paper";
import { useCachedResources } from "@twikkl/hooks";
import { theme } from "@twikkl/configs";
import ScreenRegister from "./Register";

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

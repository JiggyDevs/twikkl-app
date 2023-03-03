import { Provider as PaperProvider } from 'react-native-paper';
import { StatusBar } from "expo-status-bar";
import ScreenRegister from "@twikkl/screens/Register";
import { theme } from "@twikkl/configs";
import { useCachedResources } from "@twikkl/hooks";

export default function App() {

  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {

    return (
      <PaperProvider theme={theme}>
        <StatusBar style="auto"/>
        <ScreenRegister/>
      </PaperProvider>
    );
  }
}


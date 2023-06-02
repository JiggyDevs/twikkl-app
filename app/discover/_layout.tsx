import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { PaperProvider } from "react-native-paper";
import { theme } from "@twikkl/configs";

const DiscoverLayout = ()=>{
    return <Stack screenOptions={{ headerShown: false}}/>
}

export default DiscoverLayout
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useTheme } from "@twikkl/hooks";
import useCachedResources from "@twikkl/hooks/useCachedResources";

export default function App() {

  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {

    const { colors } = useTheme();

    return (
      <View style={{ ...styles.container, backgroundColor: colors.BRAND }}>
        <StatusBar style="auto"/>
        <Image
          style={styles.logo}
          source={require("@assets/imgs/logo.png")}
        />
        <Text style={styles.title}>Create an Account</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 150,
  },
  title: {
    fontFamily: 'axiforma',
    fontStyle: 'normal',
    fontWeight: "700",
    fontSize: 20,
    lineHeight: 33,
    color: "#fff"
  }
});

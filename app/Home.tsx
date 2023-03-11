import { StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";

// TODO - homepage
export default function Page() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Home Page</Text>
        <Text style={styles.subtitle} onPress={router.back}>
          Go Back
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#03d5c3",
  },
});

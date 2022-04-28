import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { BookDetail, Home } from "./screens";
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Book Store App!</Text>
      <Home />
      <BookDetail />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

import { StyleSheet, Text, View } from "react-native";

export default function Square() {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    backgroundColor: "red",
  },
});

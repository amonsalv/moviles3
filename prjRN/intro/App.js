import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={[styles.container, styles.borders, { borderColor: "blue" }]}>
      <Text style={{color:'white'}}>Hello word</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
    alignItems: "center",
    justifyContent: "center",
  },
  borders: {
    borderRadius: 10,
    borderWidth: 5,
  },
});

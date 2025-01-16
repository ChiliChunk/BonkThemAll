import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";

export default function Monster() {
    const params = useLocalSearchParams();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text> {params.id} </Text>
    </View>
  );
}
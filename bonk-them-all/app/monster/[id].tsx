import { RootView } from "@/components/RootView";
import { Row } from "@/components/Row";
import { useFetchQuery } from "@/hooks/useFetchQuery";
import { useThemeColors } from "@/hooks/useThemeColors";
import { router, useLocalSearchParams } from "expo-router";
import { View, Text , StyleSheet, Image, Pressable} from "react-native";
import Feather from "react-native-vector-icons/Feather";

export default function Monster() {
    let monster = useLocalSearchParams() as { name: string, icon: string, id: string };
    const colors = useThemeColors()
    const monsterDetails = useFetchQuery('monster/[id]', {id: monster.id}).data
  return (
    <RootView>
      <Row style={styles.header}>
        <Row>
          <Pressable onPress={router.back}>
            <Feather name="arrow-left" size={16} color={colors.lightGrey}/>
          </Pressable>
          <Text>{monster.name}</Text>
        </Row>
      </Row>
      <Image source={{ uri: monster.icon }} style={{ width: 120, height: 120 }}/>
      <Text>Weaknesses {monsterDetails?.breakable_parts[0]}</Text>
    </RootView>
  );
}

const styles = StyleSheet.create({
  header: {
    margin : 20,
    justifyContent : "space-between",
  }
})
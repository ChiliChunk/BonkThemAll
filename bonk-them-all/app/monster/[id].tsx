import { RootView } from "@/components/RootView";
import { Row } from "@/components/Row";
import { useFetchQuery } from "@/hooks/useFetchQuery";
import { useThemeColors } from "@/hooks/useThemeColors";
import { router, useLocalSearchParams } from "expo-router";
import { View, Text, StyleSheet, Image, Pressable, ImageSourcePropType } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import React from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { ThemedText } from "@/components/ThemedText";
import { prettierName } from "@/hooks/Name";
import { Card } from "@/components/Card";


const textToElement: { [key: string]: ImageSourcePropType } = {
  'fire': require('@/assets/images/fire.png'),
  'water': require('@/assets/images/water.png'),
  'ice': require('@/assets/images/ice.png'),
  'dragon': require('@/assets/images/dragon.png'),
} 

export default function Monster() {
  let monster = useLocalSearchParams() as { name: string, icon: string, id: string };
  const userColors = useThemeColors()

  const monsterDetails = useFetchQuery('monster/[id]', { id: monster.id }).data

  return (
    <RootView style={{ backgroundColor: userColors.saffron }}>
      <Row style={styles.header}>
        <Row >
          <Pressable onPress={router.back}>
            <Feather name="arrow-left" size={16} color={userColors.lightGrey} />
          </Pressable>
          <ThemedText variant="h2">{prettierName(monster.name)}</ThemedText>
        </Row>
      </Row>
      <Card style={[styles.bodyCards]}>
        <Row style={styles.row}>
          <Image id="icon" source={{ uri: monster.icon }} style={[styles.artwork, { width: 120, height: 120 }]} />
          <View>
            <ThemedText variant="body">Elemental Weaknesses</ThemedText> 
            {monsterDetails?.general_element_weaknesses.map((weakness) => {
                return <Image key={weakness.element + weakness.magnitude} source={textToElement[weakness.element]} />
            })}
          </View>
        </Row>
      </Card>
    </RootView>
  );
}

const styles = StyleSheet.create({
  header: {
    margin: 20,
    justifyContent: "space-between",
  },
  row: {
    width: "100%",
  },
  artwork: {
    position: "absolute",
    alignSelf: "center",
    top: -60,
  },
  bodyCards: {
    marginTop:60
  }
})
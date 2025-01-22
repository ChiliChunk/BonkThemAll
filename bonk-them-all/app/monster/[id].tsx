import { RootView } from "@/components/RootView";
import { Row } from "@/components/Row";
import { useFetchQuery } from "@/hooks/useFetchQuery";
import { useThemeColors } from "@/hooks/useThemeColors";
import getDominantColor from "@/hooks/getDominantColor";
import { router, useLocalSearchParams } from "expo-router";
import { View, Text, StyleSheet, Image, Pressable, ImageSourcePropType } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import React from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { ThemedText } from "@/components/ThemedText";
import { prettierName } from "@/hooks/Name";
import { Card } from "@/components/Card";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";


const textToElement: { [key: string]: ImageSourcePropType } = {
  'fire': require('@/assets/images/fire.png'),
  'water': require('@/assets/images/water.png'),
  'ice': require('@/assets/images/ice.png'),
  'dragon': require('@/assets/images/dragon.png'),
} 

export default function Monster() {
  let monster = useLocalSearchParams() as { name: string, icon: string, id: string };
  const userColors = useThemeColors()
  const getDominantColorFromImage = getDominantColor(monster.icon)
  const monsterDetails = useFetchQuery('monster/[id]', { id: monster.id }).data
  console.log(getDominantColorFromImage)
  return (
    <RootView style={{ backgroundColor: userColors.saffron }}>
      <Row style={styles.header}>
        {/* <Row >
          <Pressable onPress={router.back}>
            <Feather name="arrow-left" size={16} color={userColors.lightGrey} />
          </Pressable>
          <ThemedText variant="h2">{prettierName(monster.name)}</ThemedText>
        </Row> */}
      </Row>
      <Card style={[styles.bodyCards,{borderTopLeftRadius: 2000, borderTopRightRadius: 2000}]}>
        <Row style={styles.row}>
            <Row style={{ justifyContent: "center", alignItems: "center" }}>
              <Image id="icon" source={{ uri: monster.icon }} style={[styles.artwork, { width: 200, height: 200 }]} />
              <ThemedText style={{ textAlign: "center", width: "100%", marginTop:20 }} variant="h2">{prettierName(monster.name)}</ThemedText>
            </Row>
          <View >
            <ThemedText variant="body">Weaknesses</ThemedText> 
            {monsterDetails?.general_element_weaknesses.map((weakness) => {
                return <Image style={styles.badge} key={weakness.element + weakness.magnitude} source={textToElement[weakness.element]} />
            })}
          </View>
        </Row>
      </Card>
      <Card>
        <Row>
          <ThemedText variant="body">Drops</ThemedText>
          <ThemedText variant="body">ttoto</ThemedText>
        </Row>
      </Card>
    </RootView>
  );
}

const styles = StyleSheet.create({
  
  badge:{
    width: 25,
    height: 25,
  },
  header: {
    margin: 20,
    justifyContent: "space-between",
  },
  row: {
    width: "100%",
  },
  artwork: {
    position: "absolute",
    top: -160, 
   
  },
  bodyCards: {
    
    marginTop:100
  }
})
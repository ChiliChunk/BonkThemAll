import { Card } from "@/components/Card";
import { MonsterCard } from "@/components/MonsterCard";
import { SearchBar } from "@/components/SearchBar";
import { ThemedText } from "@/components/ThemedText";
import { useFetchQuery } from "@/hooks/useFetchQuery";
import { useThemeColors } from "@/hooks/useThemeColors";
import { Link } from "expo-router";
import { Text, View, StyleSheet, Image, FlatList, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {useState} from "react";

export default function Index() {
  const colors = useThemeColors()
  const {data, isFetching} = useFetchQuery("/monsters")
  const monsters = data ?? []
  const [search, setSearch] = useState('')
  const filteredMonsters =  search ? monsters.filter(monster => monster.name.toLowerCase().includes(search.toLowerCase())) : monsters;
  filteredMonsters.sort((a, b) => a.name.localeCompare(b.name))
  
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.tint }]}
    >
      <View style={styles.header}>
        {/* <Image source={require('@/assets/images/bta.png')} width={24} height={24} /> */}
        <ThemedText variant="h2" color="saffron">🔨 </ThemedText>
        <ThemedText variant="h2" color="saffron">Bonk Them All </ThemedText>
      </View>
      <View>
        <SearchBar value={search} onChange={setSearch}/>
      </View>
      <Card style={styles.body}>
        <FlatList 
          data={filteredMonsters} 
          numColumns={3}
          columnWrapperStyle={styles.gridGap}
          contentContainerStyle={[styles.gridGap, styles.list]}
          ListFooterComponent={
            isFetching ? <ActivityIndicator color={colors.saffron} size="large" /> : null
          }
          renderItem={({ item: monster }) =>
            <MonsterCard monster={monster} style={{flex:1/3}}/>
        } keyExtractor={(monster) => monster.id} />
      </Card>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 4
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 16
  },
  body: {
    flex: 1
  },
  text: {
    color: "#FFF"
  },
  gridGap : {
    gap: 8
  },
  list : {
    padding: 12}
})
import { Card } from "@/components/Card";
import { MonsterCard } from "@/components/MonsterCard";
import { SearchBar } from "@/components/SearchBar";
import { ThemedText } from "@/components/ThemedText";
import { useFetchQuery } from "@/hooks/useFetchQuery";
import { useThemeColors } from "@/hooks/useThemeColors";
import { View, StyleSheet, Image, FlatList, ActivityIndicator } from "react-native";
import {useState} from "react";
import { RootView } from "@/components/RootView";

export default function Index() {
  const colors = useThemeColors()
  const {data, isFetching} = useFetchQuery("monsters")
  const monsters = data ?? []
  const [search, setSearch] = useState('')
  const filteredMonsters =  search ? monsters.filter(monster => monster.name.toLowerCase().includes(search.toLowerCase())) : monsters;
  filteredMonsters.sort((a, b) => a.name.localeCompare(b.name))
  
  return (
    <RootView style={{backgroundColor: colors.saffron}}>
      <SearchBar  value={search} onChange={setSearch}/>
      <Card style={styles.body}>
        <FlatList 
          data={filteredMonsters} 
          numColumns={3}
          columnWrapperStyle={styles.gridGap}
          contentContainerStyle={[styles.gridGap, styles.list, {backgroundColor: colors.darkGrey}]}
          ListFooterComponent={
            isFetching ? <ActivityIndicator color={colors.saffron} size="large" /> : null
          }
          renderItem={({ item: monster }) =>
            <MonsterCard monster={monster} style={{flex:1/3}}/>
        } keyExtractor={(monster) => monster.id} />
      </Card>
    </RootView>
  );
}


const styles = StyleSheet.create({
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
    flex:1,
    borderRadius: 8,
    padding: 12
  }
})
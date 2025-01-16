import { useThemeColors } from "@/hooks/useThemeColors";
import { TextInput, View, StyleSheet, Image } from "react-native";

type Props = {
    value: string;
    onChange: (value: string) => void;
}


export function SearchBar ({value, onChange}: Props){
    const colors = useThemeColors()
    return <View style={[styles.row,{backgroundColor: colors.darkGrey}]} >
        <Image source={require("@/assets/images/search.png")} style={{width: 16, height: 16}}/>
        <TextInput placeholder="Ctrl+K to Search" placeholderTextColor={colors.lightGrey} style={[styles.input , {color : colors.textDefault}]} onChangeText={onChange} value={value}/>
    </View>
}

const styles = StyleSheet.create( {
   row:{
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 16,
    height: 32,
    paddingHorizontal: 12,
    marginBottom: 8
   },
   input:{
    
    flex:1,
    height:20,
    fontSize: 10,
    lineHeight: 16,
   }
}) 
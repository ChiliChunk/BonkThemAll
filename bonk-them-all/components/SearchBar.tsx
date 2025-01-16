import { useThemeColors } from "@/hooks/useThemeColors";
import { TextInput, View, StyleSheet, Image } from "react-native";
import { Row } from "./Row";

type Props = {
    value: string;
    onChange: (value: string) => void;
}


export function SearchBar ({value, onChange}: Props){
    const colors = useThemeColors()
    return <Row style={[styles.wrapper , {backgroundColor : colors.lightGrey}]} >
        <Image source={require("@/assets/images/search.png")} style={{width: 16, height: 16}}/>
        <TextInput placeholder="Ctrl+K to Search" placeholderTextColor={colors.saffron} style={[styles.input]} onChangeText={onChange} value={value}/>
    </Row>
}

const styles = StyleSheet.create( {
   wrapper:{
    flex: 1,
    borderRadius: 16,
    height: 32,
    paddingHorizontal:12,
    marginHorizontal : 12
   },
   input:{
    flex:3,
    height:20,
    width: 100,
    fontSize: 10,
    lineHeight: 16,
   }
}) 
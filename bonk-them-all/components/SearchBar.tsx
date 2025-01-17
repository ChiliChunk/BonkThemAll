import { useThemeColors } from "@/hooks/useThemeColors";
import { TextInput, View, StyleSheet, Image } from "react-native";
import { Row } from "./Row";
import Feather from 'react-native-vector-icons/Feather'

type Props = {
    value: string;
    onChange: (value: string) => void;
}


export function SearchBar ({value, onChange}: Props){
    const colors = useThemeColors()
    return <Row style={[styles.wrapper , {backgroundColor : colors.darkGrey ,borderWidth:1, borderColor : colors.lightGrey}]} >
        <Feather name="menu" size={16} color={colors.lightGrey}/>
        <TextInput placeholder="Search any monster" placeholderTextColor={colors.lighterGrey} style={[styles.input]} onChangeText={onChange} value={value}/>
    </Row>
}

const styles = StyleSheet.create( {
   wrapper:{
    flex: 0,
    borderRadius: 16,
    height: 32,
    paddingHorizontal:12,
    margin : 12
   },
   input:{
    fontWeight: "bold",
    flex:1,
    height:40,
    width: 100,
    fontSize: 14,
    lineHeight: 20,
    paddingVertical: 5,
   }
}) 
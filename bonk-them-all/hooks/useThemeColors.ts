import { useColorScheme } from "react-native"
import {Colors} from "../constants/Colors"

export function useThemeColors() {
    const theme = useColorScheme() ?? 'dark'
    return Colors[theme]
}
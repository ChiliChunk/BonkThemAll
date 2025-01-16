import { Colors } from "@/constants/Colors"
import { useThemeColors } from "@/hooks/useThemeColors"
import { Text,StyleSheet, type TextProps } from "react-native"

const styleText = StyleSheet.create ({
    body: {
        fontSize: 16,
        color: "black"
    },
    h1: {
        fontSize: 32,
        color: "black"
    },
    h2: {
        fontSize: 24,
        color: "black"
    }
})

type Props = TextProps & {
    variant ?: keyof typeof styleText,
    color ?: keyof typeof Colors["light"]
}

export function ThemedText ({variant, color, style, ...rest} : Props){
    const colors = useThemeColors()
    return <Text style={[styleText[variant ?? 'body'], {color : colors[color ?? "textDefault"]}, style ]} {... rest}/>
}


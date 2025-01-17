import { Colors } from "@/constants/Colors"
import { useThemeColors } from "@/hooks/useThemeColors"
import { Text,StyleSheet, type TextProps } from "react-native"

const styleText = StyleSheet.create ({
    body: {
        fontSize: 16
    },
    h1: {
        fontSize: 32
    },
    h2: {
        fontSize: 24
    }
})

type Props = TextProps & {
    variant ?: keyof typeof styleText,
    color ?: keyof typeof Colors["light"]
}

export function ThemedText ({variant, color, style, ...rest} : Props){
    const colors = useThemeColors()
    return <Text style={[styleText[variant ?? 'body'], {color : colors.textDefault }, style ]} {... rest}/>
}


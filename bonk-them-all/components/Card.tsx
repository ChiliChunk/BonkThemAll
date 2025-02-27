import { useThemeColors } from "@/hooks/useThemeColors"
import {View, ViewStyle, type ViewProps} from "react-native"

type Props = ViewProps & {}

export function Card({style, ...rest}: Props) {
    const colors = useThemeColors()
    return <View style = {[style ,styles ,{backgroundColor: colors.darkGrey }]} {...rest} />
}

const styles = {
    borderRadius: 8,
} satisfies ViewStyle
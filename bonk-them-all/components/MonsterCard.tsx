import { ViewStyle, Image, StyleSheet, Pressable } from "react-native"
import { Card } from "./Card"
import { ThemedText } from "@/components/ThemedText"
import { useThemeColors } from "@/hooks/useThemeColors"
import { Link } from "expo-router"

type Props = {
    style?: ViewStyle,
    monster: any
}

export function MonsterCard({ style, monster }: Props) {
    const colors = useThemeColors()
    return <Link href={{ pathname: `/monster/[id]`, params: { id: monster._id } }} asChild>
        <Pressable style={style}>
            <Card style={[styles.card, { backgroundColor: colors.darkGrey, borderWidth: 1, borderColor: colors.saffron }]}>
                <Image source={{ uri: monster.icon }}
                    style={{ width: 72, height: 72 }} />
                <ThemedText variant="body">{monster.name}</ThemedText>
            </Card>
        </Pressable>
    </Link>
}

const styles = StyleSheet.create({
    card: {
        alignItems: "center",
        borderRadius: 8,
        padding: 8
    }
})

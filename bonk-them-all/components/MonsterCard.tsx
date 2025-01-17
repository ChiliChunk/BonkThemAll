import { ViewStyle, Image, StyleSheet, Pressable, View } from "react-native"
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
    return <Link href={{ pathname: `/monster/[id]`, params: {id : monster._id, name : monster.name, icon: monster.icon} }} asChild>
        <Pressable style={style}>
            <Card style={[styles.card, { backgroundColor: colors.darkerGrey, borderWidth: 1, borderColor: colors.lighterGrey }]}>
                <Image source={{ uri: monster.icon }}
                    style={{ width: 72, height: 72 }} />
                <View style={[styles.cardFooter, { backgroundColor: colors.lightGrey }]} />
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
    },
    cardFooter:{
        position: "absolute",
        height: 32,
        bottom: 0,
        left: 0,
        right: 0,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,

    }
})

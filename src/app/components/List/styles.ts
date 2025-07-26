import {StyleSheet} from "react-native";
import {colors, fontFamily} from "@/theme";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
    },
    listContent:{
        gap: 12,
        paddingBottom: 80,
        paddingTop: 8,
    },
    title:{
        marginTop: 28,
        paddingBottom: 16,
        borderBottomWidth: 1,
        borderBottomColor: colors.gray[300],
        fontFamily: fontFamily.bold,
        fontSize: 20,
        color: colors.blue[800],
        letterSpacing: 0.3,
    },
    empty:{
        fontSize: 15,
        color: colors.gray[500],
        fontFamily: fontFamily.medium,
        textAlign: "center",
        marginTop: 40,
        marginBottom: 20,
        lineHeight: 22,
        opacity: 0.8,
    },
})

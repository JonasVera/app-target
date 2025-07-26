import {StyleSheet} from "react-native";
import {colors, fontFamily} from "@/theme";

export const styles = StyleSheet.create({
    container: {
        height: 48,
        flexDirection: "row",
        backgroundColor: colors.gray[200],
        borderRadius: 12,
        overflow: "hidden",
        padding: 3,
        shadowColor: colors.black,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 1,
    },
    option:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        borderRadius: 10,
        gap: 10,
        paddingVertical: 8,
    },
    title:{
        fontSize: 15,
        color: colors.gray[500],
        fontFamily: fontFamily.bold,
        letterSpacing: 0.3,
    }
})

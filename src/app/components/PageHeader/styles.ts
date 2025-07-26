import {StyleSheet} from "react-native";
import {colors, fontFamily} from "@/theme";

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        paddingTop: 36,
        paddingHorizontal: 16,
        backgroundColor: colors.white,
        borderBottomWidth: 1,
        borderBottomColor: colors.gray[200],
        paddingBottom: 16,
        marginBottom: 8,
    },
    header:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 28,
    },
    subtitle:{
        fontSize: 15,
        color: colors.gray[500],
        fontFamily: fontFamily.medium,
        letterSpacing: 0.3,
        lineHeight: 22,
    },
    title:{
        fontSize: 28,
        color: colors.blue[800],
        fontFamily: fontFamily.bold,
        marginBottom: 8,
        letterSpacing: 0.3,
    }
})

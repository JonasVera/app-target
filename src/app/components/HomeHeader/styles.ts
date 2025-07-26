import {StyleSheet} from "react-native";
import {colors, fontFamily} from "@/theme";


export const styles = StyleSheet.create({
    container: {
        width: "100%",
        minHeight: 324,
        paddingHorizontal: 28,
        justifyContent: "flex-end",
        paddingBottom: 24,
        paddingTop: 16,
        gap: 28,
        shadowColor: colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 4,
    },
    label:{
        fontSize: 14,
        color: colors.white,
        fontFamily: fontFamily.medium,
        letterSpacing: 0.5,
        opacity: 0.9,
    },
    total:{
        fontSize: 36,
        color: colors.white,
        fontFamily: fontFamily.bold,
        letterSpacing: 0.5,
        marginTop: 4,
        marginBottom: 4,
    },

    summary:{
        width: "100%",
        gap: 16,
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 8,
    }
})

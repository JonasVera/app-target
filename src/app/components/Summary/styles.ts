import {StyleSheet} from "react-native";
import {colors, fontFamily} from "@/theme";


export const styles = StyleSheet.create({
    container: {
        gap: 8,
        padding: 4,
    },
    header:{
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },
    label:{
        fontSize: 12,
        color: colors.blue[300],
        fontFamily: fontFamily.medium,
        letterSpacing: 0.5,
    },
    value:{
        fontSize: 20,
        color: colors.white,
        fontFamily: fontFamily.bold,
        letterSpacing: 0.5,
    }
})

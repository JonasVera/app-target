import {StyleSheet} from "react-native";
import {colors, fontFamily} from "@/theme";


export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.blue[500],
        minHeight: 52,
        width: "100%",
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 12,
        shadowColor: colors.blue[800],
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    title:{
        fontSize: 16,
        color: colors.white,
        fontFamily: fontFamily.bold,
        letterSpacing: 0.5,
        textTransform: 'uppercase',
    }
})

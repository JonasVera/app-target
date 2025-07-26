import {StyleSheet} from "react-native";
import {colors, fontFamily} from "@/theme";


export const styles = StyleSheet.create({
    container: {
        width: "100%",
        gap: 12,
        marginVertical: 8,
    },
    label:{
        color: colors.blue[800],
        fontFamily: fontFamily.medium,
        fontSize: 14,
        letterSpacing: 0.3,
        marginBottom: 4,
    },
    input:{
        fontSize: 16,
        color: colors.black,
        fontFamily: fontFamily.medium,
        paddingVertical: 10,
        paddingHorizontal: 4,
        borderBottomWidth: 2,
        borderColor: colors.blue[300],
        backgroundColor: colors.gray[100],
        borderRadius: 8,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    }
})

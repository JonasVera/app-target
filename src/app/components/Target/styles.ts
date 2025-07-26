import {StyleSheet} from "react-native";
import {colors, fontFamily} from "@/theme";


export const styles = StyleSheet.create({
    container: {
        minHeight: 80,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        gap: 16,
        paddingHorizontal: 20,
        paddingVertical: 12,
        backgroundColor: colors.white,
        borderRadius: 12,
        marginVertical: 6,
        shadowColor: colors.black,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.08,
        shadowRadius: 2,
        elevation: 2,
    },
    content:{
        flex: 1,
        gap: 10
    },
    name:{
        fontSize: 16,
        color: colors.black,
        fontFamily: fontFamily.bold,
        letterSpacing: 0.3,
    },
    status:{
        fontSize: 12,
        color: colors.gray[500],
        fontFamily: fontFamily.medium,
        letterSpacing: 0.2,
    }
})

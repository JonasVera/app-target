import {StyleSheet} from "react-native";
import {colors, fontFamily} from "@/theme";


export const styles = StyleSheet.create({
    container: {
        height:72,
        flexDirection:"row",
        alignItems:"center",
        gap:7,
    },
    info:{
        flex:1,
        gap:7
    },
    value:{
        fontSize:14,
        color:colors.black,
        fontFamily: fontFamily.medium,
    },
    description:{
        fontSize:12,
        color:colors.black,
        fontFamily: fontFamily.regular,
    }
})
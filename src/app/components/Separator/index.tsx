import {View, Text, ColorValue} from "react-native";
import {colors} from "@/theme";
import {styles} from "@/app/components/Separator/styles";





export function Separator({color}:{color: ColorValue}) {
    return(

        <View style={[styles.container, {backgroundColor: color}]}>

        </View>
    )
}
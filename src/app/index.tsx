import {View, Text, Button} from "react-native";
import {HomeHeader} from "@/app/components/HomeHeader";
import {colors} from "@/theme";

const summary = {
    total: "R$ 2.600,00",
    input: {
        label: "Entradas",
        value: "R$ 6.184,00"
    },
    output: {
        label: "Entradas",
        value: "R$ -3.184,00"
    }
}

export default function Index(){
    return(
        <View style={{flex:1}}>
            <HomeHeader data={summary} />
        </View>
    )
}
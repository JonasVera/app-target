import {View, Text, TouchableOpacity, TouchableOpacityProps} from "react-native";
import {styles} from "@/app/components/Target/styles";
import {MaterialIcons} from "@expo/vector-icons";
import {colors} from "@/theme";


export type TargetProps = {
    id?: string;
    name:string;
    current:string;
    target:string;
    percentage: string
}

type Props = TouchableOpacityProps & {
    data: TargetProps
}


export function Target({data, ...rest}: Props) {
    return(
        <TouchableOpacity style={styles.container} {...rest}>
            <View style={styles.content}>
                <Text style={styles.name} numberOfLines={1}>{data.name}</Text>
                <Text style={styles.status}>
                    {data.percentage}  •  {data.current} de {data.target}
                </Text>
            </View>
            <MaterialIcons name="chevron-right" size={20} color={colors.blue[500]} />
        </TouchableOpacity>

    )
}
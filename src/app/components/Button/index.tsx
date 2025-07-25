import {TouchableOpacity, TouchableOpacityProps, Text, ActivityIndicator} from "react-native";

import {colors} from "@/theme";
import {styles} from "@/app/components/Button/styles";

type Props = TouchableOpacityProps & {
    title: string;
    isProcessing?: boolean;
}


export function Button({title, isProcessing, ...rest}: Props) {
    return (
        <TouchableOpacity
        style={styles.container}
        disabled={isProcessing}
        {...rest}
        >
            <Text style={styles.title}>
                {isProcessing ? (<ActivityIndicator size="small" color={colors.white} />) : (title)}
            </Text>
        </TouchableOpacity>)
}
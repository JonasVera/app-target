import {View, TextInputProps, Text   } from "react-native";
import Input, {CurrencyInputProps} from "react-native-currency-input";

import {colors} from "@/theme";
import {styles} from "@/app/components/CurrencyInput/styles";



export type Props = CurrencyInputProps & {
    label: string;
    placeholder: string;
}


export function CurrencyInput({label,placeholder, ...rest}: Props) {
    return(
        <View style={styles.container} >
        <Text style={styles.label}>{label}</Text>
        <Input separator="," delimiter="." minValue={0} precision={2}
            placeholderTextColor={colors.gray[200]}
            style={styles.input}
            placeholder={placeholder} {...rest}   />
        </View>

    )
}
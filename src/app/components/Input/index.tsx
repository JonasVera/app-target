import {View, TextInput, TextInputProps, Text} from "react-native";
import {styles} from "@/app/components/Input/styles";
import {colors} from "@/theme";

export type Props = TextInputProps & {
    label: string;
    placeholder: string;
}

export function Input({label, placeholder, ...rest}: Props) {
    return(
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                placeholderTextColor={colors.gray[300]}
                style={styles.input}
                placeholder={placeholder}
                {...rest}
            />
        </View>
    )
}

import {ActivityIndicator} from "react-native";
import {styles} from "@/app/components/Loading/styles";
import {colors} from "@/theme/colors";

export function Loading() {
    return <ActivityIndicator size="large" color={colors.blue[500]} style={styles.container} />
}
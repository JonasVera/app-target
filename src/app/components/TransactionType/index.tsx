import {View} from "react-native";
import {styles} from "./styles";
import {Option} from "./option";
import {TransactionTypes} from "@/app/components/Utils/TransactionTypes";
import {colors} from "@/theme";

type Props = {
    selected: TransactionTypes;
    onChange: (type: TransactionTypes) => void;

}

export function TransactionType({selected, onChange}: Props) {
    return(
        <View style={styles.container}>
            <Option title="Guardar"
                    isSelected={selected === TransactionTypes.Input}
                    icon={"arrow-upward"}
                    selectedColor={colors.blue[500]}
                    onPress={()=> onChange(TransactionTypes.Input)} />

            <Option title="Resgatar"
                    isSelected={selected === TransactionTypes.Output}
                    icon={"arrow-downward"}
                    selectedColor={colors.red[400]}
                    onPress={()=> onChange(TransactionTypes.Output)} />
        </View>)
}


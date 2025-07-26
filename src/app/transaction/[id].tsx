import {View, Text} from "react-native";
import {useLocalSearchParams, router} from "expo-router";
import {PageHeader} from "@/app/components/PageHeader";
import {CurrencyInput} from "@/app/components/CurrencyInput";
import {Input} from "@/app/components/Input";
import {Button} from "@/app/components/Button";
import {TransactionType} from "@/app/components/TransactionType";
import { TransactionTypes } from "../components/Utils/TransactionTypes";
import {useState} from "react";

export default function Transaction() {

    const params = useLocalSearchParams<{ id: string }>();

    const [type, setType] = useState<TransactionTypes>(TransactionTypes.Input);

    return (
        <View style={{flex: 1, padding: 24}}>
            <PageHeader title="Nova Transação"
                        subtitle={"A cada valor guardado você fica mais próximo da sua meta. Se esforce para guardar e evitar retirar."}/>

            <View style={{marginTop: 32, gap: 24}}>
                <TransactionType selected={type} onChange={setType}/>
                <CurrencyInput value={0} label={"Valor (R$)"} placeholder={""} />
                <Input label={"Motivo (Opcional)"} placeholder="Ex: Investir 10% em CDB" />
                <Button title="Salvar" onPress={() => router.back()}  />
            </View>
        </View>
    )
}
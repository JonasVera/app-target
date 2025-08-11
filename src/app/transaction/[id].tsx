import { View, Text, Alert, StatusBar } from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import { PageHeader } from "@/app/components/PageHeader";
import { CurrencyInput } from "@/app/components/CurrencyInput";
import { Input } from "@/app/components/Input";
import { Button } from "@/app/components/Button";
import { TransactionType } from "@/app/components/TransactionType";
import { TransactionTypes } from "../components/Utils/TransactionTypes";
import { useState } from "react";
import { useTransactionsDatabase } from "@/database/useTransactionsDatabase";
export default function Transaction() {

    const params = useLocalSearchParams<{ id: string }>();
    const [isCreating, setIsCreating] = useState(false)
    const [amount, setAmount] = useState(0)
    const [type, setType] = useState<TransactionTypes>(TransactionTypes.Input);
    const [observation, setObservation] = useState("")

    const transactionDatabase = useTransactionsDatabase()

    async function handleCreate() {

        try {
            if (amount <= 0) {
                return Alert.alert("Atenção!", "Preencha o valor ")
            }
            setIsCreating(true)

            await transactionDatabase.create({
                target_id: Number(params.id),
                amount: type === TransactionTypes.Output ? amount * -1 : amount,
                observation
            })

            Alert.alert("Sucesso!", "Transação salva com sucesso!", [{
                text: "ok",
                onPress: router.back
            }])

        } catch (error) {
            Alert.alert("Erro", "Não foi possível salvar a transação.")
            setIsCreating(false)
        }

    }

    return (
        <View style={{ flex: 1, padding: 24 }}>
               <StatusBar barStyle="dark-content" />
            <PageHeader title="Nova Transação"
                subtitle={"A cada valor guardado você fica mais próximo da sua meta. Se esforce para guardar e evitar retirar."} />

            <View style={{ marginTop: 32, gap: 24 }}>
                <TransactionType selected={type} onChange={setType} />
                <CurrencyInput value={0} label={"Valor (R$)"} value={amount} onChangeValue={setAmount} label={"Valor alvo"} />
                <Input label={"Motivo (Opcional)"} value={observation} onChange={setObservation} placeholder="Ex: Investir 10% em CDB" />
                <Button title="Salvar" onPress={() => handleCreate()} isProcessing={isCreating} />
            </View>
        </View>
    )
}
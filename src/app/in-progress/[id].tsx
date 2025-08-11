import { Alert, View, StatusBar } from "react-native";
import { PageHeader } from "@/app/components/PageHeader";
import { Progress } from "@/app/components/Progress";
import { Transaction, TransactionProps } from "@/app/components/Transaction";
import { List } from "@/app/components/List";
import { TransactionTypes } from "@/app/components/Utils/TransactionTypes";
import { Button } from "@/app/components/Button";

import { router, useFocusEffect, useLocalSearchParams } from "expo-router";
import { useTargetDatabase } from "@/database/useTargetDatabase";
import { useCallback, useEffect, useState } from "react";
import { numberToCurrency } from "../components/Utils/numberToCurrency";
import { Loading } from "../components/Loading";
import { useTransactionsDatabase } from "@/database/useTransactionsDatabase";
import dayjs from "dayjs";
export default function InProgress() {

    const [isFetching, setIsFetching] = useState(true)

    const params = useLocalSearchParams<{ id: string }>()

    const targertDataBase = useTargetDatabase()

    const [details, setDetails] = useState({ name: "", current: "R$ 0,00", target: "R$ 0,00", percentage: 0 })

    const [transactions, setTransactions] = useState<TransactionProps[]>([])

    const transactionDatabase = useTransactionsDatabase()

    async function fetchDetails() {

        try {
            const response = await targertDataBase.show(Number(params.id));

            setDetails({
                name: response.name,
                current: numberToCurrency(response.current),
                target: numberToCurrency(response.amount),
                percentage: response.percentage
            })



        } catch (error) {
            Alert.alert("error", "Falha ao carregar dados")
        }
    }

    async function fetchTransactions() {
        try {
            const response = await transactionDatabase.listByTargetId(Number(params.id))

            setTransactions(
                response.map((item) => ({
                    id: String(item.id),
                    value: numberToCurrency(item.amount),
                    date: dayjs(item.created_at).format("DD/MM/YYYY [ás] HH:mm"),
                    description: item.observation,
                    type: item.amount <= 0 ? TransactionTypes.Output : TransactionTypes.Input

                }))
            )

        } catch (error) {
            Alert.alert("Sucesso", "Falha ao carregar as transações")
        }
    }

    async function fetchData() {
        const fetchDetailsPromise = fetchDetails()
        const fetchTransacionsPromise = fetchTransactions()

        await Promise.all([fetchDetailsPromise, fetchTransacionsPromise]);
        setIsFetching(false)
    }

    function handleTransactionRemove(id: string) {
 
        Alert.alert("Remover", "Deseja realmente remover ?", [
            { text: "Não", style: "cancel" },
            { text: "Sim", onPress: ()=> transactionRemove(id) }
        ])

    }

    async function transactionRemove(id: string) {
        try {
 
            await transactionDatabase.remove(Number(id))
           
            fetchData()
            Alert.alert("Removida", "Transação removida com sucesso!")

        } catch (error) {
            Alert.alert("Erro", "Falha ao remover transação")
        }
    }




    useFocusEffect(
        useCallback(() => {
            fetchData()
        }, [])
    )


    if (isFetching) {
        <Loading />
    }

    return (
        <View style={{ flex: 1, padding: 32, gap: 32 }}>
            <StatusBar barStyle="dark-content" />
            <PageHeader title={details.name} subtitle={""} rightButton={{
                icon: "edit",
                onPress: () => router.navigate(`/target?id=${params.id}`)
            }} />
            <Progress data={details} />

            <List
              
                emptyMessage="Nenhuma transação, Toque em nova transação"
                title="Transações"
                data={transactions}
                  keyExtractor={(item) => item.id}
                renderItem={({ item }) => <Transaction data={item} onRemove={() => handleTransactionRemove(item.id)} />} containerStyle={undefined} />
            <Button title="Nova Transação" onPress={() => router.navigate(`/transaction/${params.id}`)} />
        </View>
    )
}
import { View, Text, ImageComponent, Alert } from "react-native";
import { HomeHeader, HomeHeaderProps } from "@/app/components/HomeHeader";
import { Target, TargetProps } from "@/app/components/Target";
import { List } from "@/app/components/List";
import { Button } from "@/app/components/Button";
import { useCallback, useState } from "react";
import { router, useFocusEffect } from "expo-router";
import { StatusBar } from "react-native";
import { useTargetDatabase, TargetResponse } from "@/database/useTargetDatabase"
import { Loading } from "./components/Loading";
import { numberToCurrency } from "@/app/components/Utils/numberToCurrency";
import { useTransactionsDatabase } from "@/database/useTransactionsDatabase";
 
 
export default function Index() {

    const [targets, setTargets] = useState<TargetProps[]>([])
    const targetDatabase = useTargetDatabase();
    const transactionDatabase = useTransactionsDatabase()
    const [isFetching, setIsFetching] = useState(true)
    const [summary, setSummary] = useState<HomeHeaderProps>()


    async function fetchTargets(): Promise<TargetProps[]> {
        try {

            const response = await targetDatabase.listBySavedValue()

            return response.map((item) => ({
                id: String(item.id),
                name: item.name,
                current: item.name,
                percentage: item.percentage.toFixed(0) + "%",
                target: numberToCurrency(item.amount)
            }))

        } catch (error) {
            Alert.alert("erro", "Erro ao carregar as metas")
            console.log("Erro", error)
        }
    }

    async function fetchSummary():Promise<HomeHeaderProps> {
        try {
            const response = await transactionDatabase.sumary()

            return {
                total: numberToCurrency(response.input + response.output),
                input: {
                    label: "Entradas",
                    value: numberToCurrency(response.input)
                },
               output: {
                    label: "Saidas",
                    value: numberToCurrency(response.output)
                },
            }
        } catch (error) {
            Alert.alert("erro", "Nao foi possivel carregar o resumo")
        }
    }

    async function fethData() {
        const targetsDataPromise = fetchTargets()
        const summaryDataPromise = fetchSummary();

        const [targetData, dataSumary] = await Promise.all([targetsDataPromise, summaryDataPromise])

        setTargets(targetData)
        setSummary(dataSumary)
        setIsFetching(false)
    }

    useFocusEffect(
        useCallback(() => {
            fethData()
        }, [])
    )

    if (isFetching) {
        return <Loading />
    }

    return (
        <View style={{ flex: 1 }}>
            <StatusBar barStyle="light-content" />
            <HomeHeader data={summary} />
            <List
                keyExtractor={(item) => item.id}
                data={targets} title="Metas" emptyMessage="Nenhuma meta. Toque em nova meta para criar."
                renderItem={({ item }) => <Target data={item} onPress={() => router.push(`in-progress/${item.id}`)} />} containerStyle={undefined} />

            <View style={{ paddingBottom: 32, padding: 24 }}  >

                <Button title="Nova Meta" onPress={() => router.push("/target")} />
            </View>

        </View>
    )
}
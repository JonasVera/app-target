import { useEffect, useState } from "react";
import { View, Text, Alert, StatusBar } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { router } from "expo-router";
import { PageHeader } from "@/app/components/PageHeader";
import { Input } from "@/app/components/Input";
import { Button } from "@/app/components/Button";
import { CurrencyInput } from "@/app/components/CurrencyInput";
import { useTargetDatabase } from "@/database/useTargetDatabase";


export default function Target() {
    const [isProcessing, setProcessing] = useState(false);
    const [name, setName] = useState("")
    const [amount, setAmount] = useState(0)
    const params = useLocalSearchParams<{ id?: string }>()
    const targetDatabase = useTargetDatabase()

    function handleSave() {

        setProcessing(true)

        if (params.id) {
            update();
        } else {
            create();
        }

    }

    async function create() {
        try {
            await targetDatabase.create({ name, amount })
            Alert.alert("Nova Meta", "Meta criada com sucesso!", [{
                text: "Ok",
                onPress: () => router.back(),
            }])
        } catch (error) {
            Alert.alert("Erro", "Não foi possível criar a meta")
        }

    }


    async function fetchDetails(id: number) {
        try {
            const response = await targetDatabase.show(id);

            setName(response.name)
            setAmount(response.amount)

        } catch (error) {
            Alert.alert("erro", "Falha ao carregar os dados.")
            setProcessing(false)
        }

    }

    useEffect(() => {
        if (params.id) {
            fetchDetails(Number(params.id))
        }
    }, [])

    async function update() {
        try {
            await targetDatabase.update({ id: Number(params.id), name, amount })
            Alert.alert("Sucesso!", "Meta atualizada com sucesso!", [
                {
                    text: "OK",
                    onPress: () => router.back()
                }
            ])
        } catch (error) {
            Alert.alert("erro", "Falha ao atualizar registro")
            setProcessing(false)
        }
    }

    function hanbleRemove() {
        if (!params.id) {
            return
        }

        Alert.alert("Remover", "Deseja realmente remover ?", [
            { text: "Não", style: "cancel" },
            { text: "Sim", onPress: remove }

        ])
    }

    async function remove() {
        try {

            setProcessing(true)
            await targetDatabase.remove(Number(params.id))

            Alert.alert("Meta", "Meta removida com sucesso", [{
                text: "OK", onPress: ()=> router.replace("/")
            }])
        } catch (error) {
            Alert.alert("Erro", "Falha ao remover a meta")
        }
    }

    return (

        <View style={{ flex: 1, padding: 24 }}>
               <StatusBar barStyle="dark-content" />
            <PageHeader
                title="Meta"
                subtitle="Economize para alcançar sua meta financeira"
                rightButton={
                    params.id ? { icon: "delete", onPress: hanbleRemove } : undefined
                }
            />
            <View style={{ marginTop: 32, gap: 24 }}>
                <Input label="Nome da meta" placeholder="Viagem para a praia" value={name} onChangeText={setName} />
                <CurrencyInput placeholder="Valor alvo" value={amount} onChangeValue={setAmount} label={"Valor alvo"} />
                <Button title="Salvar" onPress={handleSave} isProcessing={isProcessing} />
            </View>

        </View>
    );
}
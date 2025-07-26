import {View, Text} from "react-native";
import {router} from "expo-router";
import {PageHeader} from "@/app/components/PageHeader";
import {Input} from "@/app/components/Input";
import {Button} from "@/app/components/Button";
import {CurrencyInput} from "@/app/components/CurrencyInput";


export default function Target() {
    return (
        <View  style={{flex:1, padding:24}}>
            <PageHeader title="Meta" subtitle="Economize para alcançar sua meta financeira"  />
            <View style={{marginTop:32, gap:24}}>
                <Input label="Nome da meta" placeholder="Viagem para a praia" />
                <CurrencyInput placeholder="Valor alvo" value={0} label={"Valor alvo"}  />
                <Button title="Salvar" onPress={() => router.back()}  />
            </View>

        </View>
    );
}
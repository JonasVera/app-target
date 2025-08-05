import {useState} from "react";
import {View, Text, Alert} from "react-native";
import { useLocalSearchParams } from "expo-router";
import {router} from "expo-router";
import {PageHeader} from "@/app/components/PageHeader";
import {Input} from "@/app/components/Input";
import {Button} from "@/app/components/Button";
import {CurrencyInput} from "@/app/components/CurrencyInput";


export default function Target(){
const [isProcessing, setProcessing] = useState(false);

const [name, setName] = useState("")

const [amout, setAmout] = useState(0)

const params = useLocalSearchParams<{id?:string}>()

function handleSave() {
    if(name.trim() || amout <=0){
        return Alert.alert("Atenção", "Preecha nome e valor!")
    }   
    setProcessing(true)
    

    if(params.id)
    {
        update();
    }else{
        create();
    }

    }

 async function create() {
    
 }   

async function update() {
    
 }   

    return (
 
 <View  style={{flex:1, padding:24}}>
            <PageHeader title="Meta" subtitle="Economize para alcançar sua meta financeira"  />
            <View style={{marginTop:32, gap:24}}>
                <Input label="Nome da meta" placeholder="Viagem para a praia" value={name} onChangeText={setName} />
                <CurrencyInput placeholder="Valor alvo" value={amout} label={"Valor alvo"}  onChangeValue={setAmout} />
                <Button title="Salvar" onPress={handleSave} isProcessing={isProcessing}  />
            </View>

        </View>
    );
}
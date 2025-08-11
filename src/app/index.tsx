import {View, Text, ImageComponent, Alert} from "react-native";
import {HomeHeader} from "@/app/components/HomeHeader";
import {Target, TargetProps} from "@/app/components/Target";
import {List} from "@/app/components/List";
import {Button} from "@/app/components/Button";
import { useCallback,useState } from "react";
import {router, useFocusEffect } from "expo-router";
import {StatusBar} from "react-native";
import {useTargetDatabase, TargetResponse} from "@/database/useTargetDatabase"

const summary = {
    total: "R$ 2.600,00",
    input: {
        label: "Entradas",
        value: "R$ 6.184,00"
    },
    output: {
        label: "Entradas",
        value: "R$ -3.184,00"
    }
}

 

export default function Index(){
    
    const [targets, setTargets] = useState<TargetProps[]>([])
    const targetDatabase = useTargetDatabase();



    async function fetchTargets(): Promise<TargetProps[]>{
     try {
        
        const response = await targetDatabase.listBySavedValue()
 

              return response.map((item)=>({
            id: String(item.id),
            name: item.name,
            current: item.name,
            percentage: item.percentage.toFixed(0) + "%",
            target: String(item.amount)
        }))
 
     } catch (error) {
        Alert.alert("erro", "Erro ao carregar as metas")
        console.log("Erro", error)
     }   
    }

    async function fethData() {
        const targetsDataPromise = fetchTargets()

       const [targetData] = await Promise.all([targetsDataPromise])
    
       setTargets(targetData)
    }

    useFocusEffect(
        useCallback(()=>{
           fethData()
        },[])
)
    
    return(
        <View style={{flex:1}}>
            <StatusBar barStyle="light-content" />
            <HomeHeader data={summary} />
            <List
                keyExtractor={(item) => item.id}
                data={targets} title="Metas" emptyMessage="Nenhuma meta. Toque em nova meta para criar."
                renderItem={({item}) => <Target data={item} onPress={()=> router.push(`in-progress/${item.id}`)}/>} containerStyle={undefined} />

            <View style={{paddingBottom:32, padding:24}}  >

                <Button title="Nova Meta" onPress={() => router.push("/target")} />
            </View>

        </View>
    )
}
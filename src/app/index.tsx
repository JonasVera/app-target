import {View, Text} from "react-native";
import {HomeHeader} from "@/app/components/HomeHeader";
import {Target} from "@/app/components/Target";
import {List} from "@/app/components/List";
import {Button} from "@/app/components/Button";
import {router} from "expo-router";
import {StatusBar} from "react-native";

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

const targets = [
    {
        id: "1",
        name: "Comprar uma caledeira gamer",
        current: "900,00",
        target: "1.200,00",
        percentage: "75%"
    },
    {
        id: "2",
        name: "Apple Wathc",
        current: "900,00",
        target: "580,00",
        percentage: "75%"
    },
    {
        id: "3",
        name: "Comer ",
        current: "1200,00",
        target: "3660,00",
        percentage: "75%"
    },
]

export default function Index(){
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
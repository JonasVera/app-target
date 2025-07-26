import {  View} from "react-native";
import {PageHeader} from "@/app/components/PageHeader";
import {Progress} from "@/app/components/Progress";
import {Transaction, TransactionProps} from "@/app/components/Transaction";
import {List} from "@/app/components/List";
import {TransactionTypes} from "@/app/components/Utils/TransactionTypes";
import {Button} from "@/app/components/Button";

import {router, useLocalSearchParams} from "expo-router";

export default function InProgress(){

    const params = useLocalSearchParams<{id: string}>()
    const details = {
        current: "R$ 580,00",
        target: "R$ 1.900,00",
        percentage: 25
    }

    const transactions: TransactionProps[] = [
        {
        id: "1",
        value: "R$ 580,00",
        date: "20/05/2021",
        description: "Compra de caledeira",
        type: TransactionTypes.Input,
        },
        {
            id: "1",
            description: null,
            value: "R$ 580,00",
            date: "20/05/2021",
            type: TransactionTypes.Output,
        }
    ]

    return(
        <View style={{flex:1, padding:32, gap:32}}>
            <PageHeader title="Apple Watch" subtitle={""}  rightButton={{
                    icon: "edit",
                    onPress: ()=> {}
            }}/>
            <Progress data={details} />

            <List
                keyExtractor={(item) => item.id}
                emptyMessage="Nenhuma transação, Toque em nova transação"
                title="Transações"
                data={transactions}
                renderItem={({item}) => <Transaction data={item} onRemove={() => {
                }}/>} containerStyle={undefined}            />
            <Button title="Nova Transação" onPress={()=> router.navigate(`/transaction/${params.id}`)} />
        </View>
    )
}
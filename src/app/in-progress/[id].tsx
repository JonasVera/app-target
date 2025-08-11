import {  Alert, View} from "react-native";
import {PageHeader} from "@/app/components/PageHeader";
import {Progress} from "@/app/components/Progress";
import {Transaction, TransactionProps} from "@/app/components/Transaction";
import {List} from "@/app/components/List";
import {TransactionTypes} from "@/app/components/Utils/TransactionTypes";
import {Button} from "@/app/components/Button";

import {router, useFocusEffect, useLocalSearchParams} from "expo-router";
import { useTargetDatabase } from "@/database/useTargetDatabase";
import { useCallback, useEffect, useState } from "react";
import { numberToCurrency } from "../components/Utils/numberToCurrency";
import { Loading } from "../components/Loading";

export default function InProgress(){

    const [isFetching, setIsFetching] = useState(true)

    const params = useLocalSearchParams<{id: string}>()

    const targertDataBase = useTargetDatabase()

    const [details, setDetails] = useState({name: "", current: "R$ 0,00", target: "R$ 0,00", percentage: 0})


    async function fetchDetails() {
        
        try {
            const response = await targertDataBase.show(Number(params.id));
    
            setDetails({
              name: response.name,
              current:  numberToCurrency(response.current),
              target: numberToCurrency(response.amount),
              percentage: response.percentage
            })
            
 

        } catch (error) {
            Alert.alert("error", "Falha ao carregar dados")
        }
    }

    async function fetchData() {
        const fetchDetailsPromise = fetchDetails()

        await Promise.all([fetchDetailsPromise]);
        setIsFetching(false)
    }

    useFocusEffect(
        useCallback(()=>{
           fetchDetails()
        },[])
)


 if(isFetching)
 {
    <Loading />
 }

    return(
        <View style={{flex:1, padding:32, gap:32}}>
            <PageHeader title={details.name} subtitle={""}  rightButton={{
                    icon: "edit",
                    onPress: ()=> {}
            }}/>
            <Progress data={details} />

            <List
                keyExtractor={(item) => item.id}
                emptyMessage="Nenhuma transação, Toque em nova transação"
                title="Transações"
                data={[]}
                renderItem={({item}) => <Transaction data={item} onRemove={() => {
                }}/>} containerStyle={undefined}            />
            <Button title="Nova Transação" onPress={()=> router.navigate(`/transaction/${params.id}`)} />
        </View>
    )
}
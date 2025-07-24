import {Button, Text, View} from "react-native";
import {useLocalSearchParams, router} from "expo-router";

export default function InProgress(){

    const params = useLocalSearchParams<{id: string}>();

    return(
        <View style={{flex:1, justifyContent: "center"}}>
            <Text>IN PROGRESS</Text>
            <Button title="Voltar" onPress={() => router.back()} />
        </View>
    )
}
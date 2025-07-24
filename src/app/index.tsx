import {View, Text, Button} from "react-native";
import {router} from "expo-router";
export default function Index(){
    return(
        <View>
            <Text>Hello World</Text>
            <Button title="Nova meta" onPress={() => router.navigate("/target")} />
        </View>
    )
}
import {View, Text, Button} from "react-native";
import {router} from "expo-router";
import {fontFamily} from "@/theme/fontFamily";
export default function Index(){
    return(
        <View style={{flex:1, justifyContent: "center"}}>
            <Text style={{fontFamily: fontFamily.bold}} >Hello World</Text>
            <Button title="Nova meta" onPress={() => router.navigate("/target")} />
            <Button title="Transaction" onPress={() => router.navigate("/transaction/123")} />
            ] <Button title="IN-PROGRESS" onPress={() => router.navigate("/in-progress/123")} />
        </View>
    )
}
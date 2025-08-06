import { Stack } from "expo-router";
import {Suspense} from "react";
import {colors} from "../theme/colors";
import {useFonts, Inter_400Regular, Inter_500Medium, Inter_700Bold} from "@expo-google-fonts/inter";
import {Loading} from "@/app/components/Loading";
import {migrate} from "@/database/migrate";
import {SQLiteProvider} from "expo-sqlite";

export default function Layout (){

    const [fontsLoaded] = useFonts({Inter_400Regular, Inter_500Medium, Inter_700Bold});

    if(!fontsLoaded){
        return (<Loading />)
    }

    return(
        <Suspense fallback={<Loading />}>
            <SQLiteProvider useSuspense databaseName={"target.db"} onInit={migrate}>
                <Stack
                    screenOptions={{headerShown: false,
                        contentStyle: {backgroundColor: colors.white},

                    }}
                />
            </SQLiteProvider>
        </Suspense>
        ) 
}
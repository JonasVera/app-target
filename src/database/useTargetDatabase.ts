import { useSQLiteContext } from "expo-sqlite"

export type TargetCreate = {
    name: string,
    amount: number
}


export function useTargetDatabase(){


    const database = useSQLiteContext()




    async function create(data:TargetCreate) {
      const statemnt = await database.prepareAsync("INSERT INTO targets (name, amount) VALUES ($name, $amount)")
    
        statemnt.executeAsync({$name: data.name, $anount: data.amount})
    }


    return {
        create
    }
}
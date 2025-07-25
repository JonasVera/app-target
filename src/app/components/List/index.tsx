import {FlatList, FlatListProps, StyleProp, Text, View, ViewStyle} from "react-native";
import {styles} from "@/app/components/List/styles";
import {JSX} from "react";
import {Separator} from "@/app/components/Separator";
import {colors} from "@/theme";


type Props<T> =  FlatListProps<T> & {
    title: string;
    emptyMessage:string;
    containerStyle?: StyleProp<ViewStyle>;
}


export function List<T>({title, emptyMessage, containerStyle, data, renderItem, ...rest}):JSX.Element {
    return(
        <View style={[styles.container, containerStyle]}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                ItemSeparatorComponent={()=> <Separator color={colors.gray[200]} />}
                contentContainerStyle={styles.listContent}
                showsHorizontalScrollIndicator={false}
                ListEmptyComponent={()=>(
                    <Text style={styles.empty}>{emptyMessage}</Text>
                    )}

                data={data}
                renderItem={renderItem}
                {...rest}
            >
            </FlatList>

        </View>

    )
}
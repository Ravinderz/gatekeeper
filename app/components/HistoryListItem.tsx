import {View, Text} from 'react-native'
import React from 'react'
import convertDate from "@/app/components/DateHelper";

type HistoryListItemProps = {
    item: {
        id?: string,
        name: string,
        date: string,
        phone?: string,
        purpose: string,
        status: string
    }
}

const HistoryListItem = (props: HistoryListItemProps) => {
    return (
        <View className={`m-2 rounded-md p-4 bg-primary-mild`}>
            <View className="flex flex-row justify-between mb-2 w-full">
            <View>
                <Text className="text-lg font-opensans-medium mb-1">{props.item.name}</Text>
                <Text className="text-gray-400 text-md">{convertDate(props.item.date)}</Text>
            </View>
            <View>
                <Text className={` text-sm p-2 px-4 ${props.item.status === "Approved" ? "bg-mild-green text-gray-600" : "bg-mild-red text-gray-100"}  rounded-2xl`}>{props.item.status}</Text>
            </View>
            </View>
            <View>
                <Text className="text-gray-500 text-md">{props.item.purpose}</Text>
            </View>
        </View>

    )
}
export default HistoryListItem

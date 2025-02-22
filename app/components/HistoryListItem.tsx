import {View, Text} from 'react-native'
import React from 'react'

const HistoryListItem = (props) => {
    return (
        <View
            className={`h-18 flex-row justify-between m-2 rounded-md p-4 ${props.item.status === "Rejected" ? "bg-mild-red" : "bg-mild-green"}`}>
            <View className="flex-grow p-2">
                <Text
                    className={`text-lg font-opensans-medium ${props.item.status === "Rejected" ? "text-gray-50" : "text-gray-800"}`}>{props.item.name}</Text>
                <Text
                    className={`text-md ${props.item.status === "Rejected" ? "text-gray-300" : "text-gray-600"}`}>{props.item.purpose}</Text>
            </View>
            <View className="p-4">
                <Text
                    className={`text-lg font-normal ${props.item.status === "Rejected" ? "text-gray-50" : "text-gray-800"}`}>{props.item.status}</Text>
            </View>
        </View>
    )
}
export default HistoryListItem

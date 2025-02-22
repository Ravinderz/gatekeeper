import {View, Text, TouchableOpacity} from 'react-native'
import React from 'react'

const PendingListItem = (props) => {
    return (
     <View className="my-2 bg-gray-100 p-4 rounded-xl">
        {/*add tags below the Name, phone and purpose*/}
        <View className="flex flex-row justify-between mb-2 w-full">
            <View>
                <Text className="text-lg font-opensans-medium mb-1">{props.item.name}</Text>
                <Text className="text-gray-400 text-md">{props.item.purpose}</Text>
            </View>
            <View>
                <Text className="text-gray-600 text-sm p-2 px-4 bg-orange-300 rounded-2xl">{props.item.status}</Text>
            </View>
        </View>

        <View className="flex flex-row justify-between w-full mt-4 pb-2">
            <View className="w-[48%]">
                <TouchableOpacity className="bg-mild-green p-4 rounded-lg">
                    <Text className="text-gray-800 text-center font-opensans-medium">Approve</Text>
                </TouchableOpacity>
            </View>
            <View className="w-[48%]">
                <TouchableOpacity className="bg-mild-red p-4 rounded-lg">
                    <Text className="text-white text-center font-opensans-medium">Reject</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
    );
}
export default PendingListItem

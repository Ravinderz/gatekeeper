import {View, Text, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import '../globals.css'
import {SafeAreaView} from "react-native-safe-area-context";

const Home = () => {

    const visitorStatics = [
        {
            name: 'Pending',
            value: 4
        },
        {
            name: 'Approval',
            value: 20
        },
        {
            name: 'Rejected',
            value: 15
        }
    ]

    const pendingRequests = [{
        name: "Ravinder",
        date: "13/12/2022",
        status: "Pending",
        purpose: "Meeting"
    }, {
        name: "Nishant",
        date: "13/12/2022",
        status: "Pending",
        purpose: "Casual"
    },
        {
            name: "Amazon Delivery",
            date: "13/12/2022",
            status: "Pending",
            purpose: "Parcel"
        },
    ]

    return (
        <SafeAreaView className="flex-1 px-8 bg-white h-full">
            <View className="flex-row">
                <Image source={require('../../assets/images/avatar.png')} className="w-16 h-16 my-4 rounded-full" />
                <View className="ml-4 flex justify-center">
                    <Text className="text-xl font-opensans-semibold">101</Text>
                    <Text className="text-lg text-gray-400">Welcome back</Text>
                </View>

            </View>
            <View>
                <Text className="text-xl font-opensans-semibold my-3">
                    Visitor Statistics
                </Text>
            </View>
            <View className="flex-row justify-evenly p-4 my-4 border-2 border-b-primary-300 rounded-xl">

                {
                    visitorStatics.map((item) => (
                        <View key={item.name}>
                            <Text className="text-xl">{item.value}</Text>
                            <Text className="text-gray-600 text-sm">{item.name}</Text>
                        </View>
                    ))
                }

            </View >
            <View>
                <Text className="text-xl font-opensans-semibold my-3">
                    Pending Requests
                </Text>
                <View className="">

                    {
                        pendingRequests.map((item) => (
                            <View key={item.name} className="my-2 bg-gray-100 p-4 rounded-xl">

                                <View className="flex flex-row justify-between mb-2">
                                    <View>
                                        <Text className="text-lg font-opensans-medium">{item.name}</Text>
                                        <Text className="text-gray-400 text-md">{item.purpose}</Text>
                                    </View>
                                    <View>
                                        <Text className="text-gray-600 text-sm p-2 bg-orange-300 rounded-2xl">{item.status}</Text>
                                    </View>
                                </View>

                                <View className="flex flex-row justify-between w-full">
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
                        ))
                    }
                </View >
            </View>
        </SafeAreaView>
    )
}
export default Home

import {View, Text, Image, ScrollView, FlatList} from 'react-native'
import React from 'react'
import '../globals.css'
import {SafeAreaView} from "react-native-safe-area-context";
import PendingListItem from "@/app/components/PendingListItem";


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
        <SafeAreaView className="flex-1 px-4 bg-white h-full">
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
            <View className="flex-1 h-full">
                <Text className="text-xl font-opensans-semibold my-3">
                    Pending Requests
                </Text>
                <FlatList
                    data={pendingRequests}
                    renderItem={({item}) => <PendingListItem key={item.name} item={item}/>}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{paddingBottom: 120}}
                />
            </View>
        </SafeAreaView>
    )
}
export default Home

import {FlatList, ScrollView, Text, View} from 'react-native'
import React from 'react'
import {SafeAreaView} from "react-native-safe-area-context";
import HistoryListItem from "@/app/components/HistoryListItem";

const History = () => {

    const DATA = [{
        name: "Ravinder",
        date: "12/12/2022",
        status: "Approved",
        purpose: "Meeting"
    }, {
        name: "Nishant",
        date: "13/12/2022",
        status: "Approved",
        purpose: "Casual"
    },
        {
            name: "Amazon Delivery",
            date: "13/12/2022",
            status: "Approved",
            purpose: "Parcel"
        },
        {
            name: "Swiggy Delivery",
            date: "15/12/2022",
            status: "Rejected",
            purpose: "Food delivery"
        },
        {
            name: "Blinkit Delivery",
            date: "15/12/2022",
            status: "Approved",
            purpose: "Grocery Delivery"
        },
        {
            name: "Swiggy Delivery",
            date: "15/12/2022",
            status: "Rejected",
            purpose: "Food delivery"
        },
        {
            name: "Blinkit Delivery",
            date: "15/12/2022",
            status: "Approved",
            purpose: "Grocery Delivery"
        },
        {
            name: "Swiggy Delivery",
            date: "15/12/2022",
            status: "Rejected",
            purpose: "Food delivery"
        },
        {
            name: "Blinkit Delivery",
            date: "15/12/2022",
            status: "Approved",
            purpose: "Grocery Delivery"
        },
        {
            name: "Swiggy Delivery",
            date: "15/12/2022",
            status: "Rejected",
            purpose: "Food delivery"
        },
        {
            name: "Blinkit Delivery",
            date: "15/12/2022",
            status: "Approved",
            purpose: "Grocery Delivery"
        }
    ]

    const getUniqueDates = (DATA) => {
        return [...new Set(DATA.map(item => item.date))];
    }

    return (
        <SafeAreaView className="bg-white flex-1 h-full px-4">
            {/*update the bg and add left or right border to show its approved / rejected*/}
            <View className="h-full flex-1">
                <Text className="text-xl font-opensans-semibold my-3">
                    Visitor's History
                </Text>
                <FlatList data={getUniqueDates(DATA)} renderItem={({item}) =>
                    <View className="h-full flex-1" >
                    <View><Text className="text-lg text-grey-800 m-2 font-medium font-opensans-semibold">{item}</Text></View>
                    <FlatList
                        data={DATA.filter(data => data.date === item)}
                        renderItem={({item}) => (<HistoryListItem item={item}/>)}
                        keyExtractor={item => item.name}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{paddingBottom: 120}}
                        >
                    </FlatList>
                    </View>
                } showsVerticalScrollIndicator={false}
                 contentContainerStyle={{paddingBottom: 120}}>
                </FlatList>
            </View>
        </SafeAreaView>
    )
}
export default History

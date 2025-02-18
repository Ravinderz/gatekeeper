import { FlatList, Text, View} from 'react-native'
import React from 'react'
import {SafeAreaView} from "react-native-safe-area-context";

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
        }
    ]

    const getUniqueDates = (DATA) => {
        return [...new Set(DATA.map(item => item.date))];
    }

    return (
        <SafeAreaView className="bg-white h-full px-8">
            <Text className="text-xl font-opensans-semibold my-3">
                Visitor's History
            </Text>
            <FlatList data={getUniqueDates(DATA)} renderItem={({item}) =>

                <View>
                <View><Text className="text-lg text-grey-800 m-2 font-medium font-opensans-semibold">{item}</Text></View>
                <FlatList
                data={DATA.filter(data => data.date === item)}
                      renderItem={({item}) => (
                          <View className={`h-18 flex-row justify-between m-2 rounded-md p-4 ${item.status === "Rejected" ? "bg-mild-red" : "bg-mild-green"}`}>
                              <View className="flex-grow p-2">
                                  <Text className={`text-lg font-opensans-medium ${item.status === "Rejected" ? "text-gray-50" : "text-gray-800"}`}>{item.name}</Text>
                                  <Text className={`text-md ${item.status === "Rejected" ? "text-gray-300" : "text-gray-600"}`}>{item.purpose}</Text>
                              </View>
                              <View className="p-4">
                                <Text className={`text-lg font-normal ${item.status === "Rejected" ? "text-gray-50" : "text-gray-800"}`}>{item.status}</Text>
                              </View>
                          </View>
                      )}
                      keyExtractor={item => item.name}
            >
            </FlatList>
                </View>
            }>
            </FlatList>
        </SafeAreaView>
    )
}
export default History

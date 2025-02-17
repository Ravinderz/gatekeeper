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
        <SafeAreaView className="bg-white h-full">
            <FlatList data={getUniqueDates(DATA)} renderItem={({item}) =>

                <View className="ml-6 mr-6">
                <View><Text className="text-lg text-grey-800 font-opensans-medium m-2">{item}</Text></View>
                <FlatList
                data={DATA.filter(data => data.date === item)}
                      renderItem={({item}) => (
                          <View className="h-18 flex-row justify-between m-2 font-light">
                              <View className="flex-grow p-2">
                                  <Text className="text-lg mb">{item.name}</Text>
                                  <Text className="text-md">{item.purpose}</Text>
                              </View>
                              <View className="p-4 w-36 flex items-center justify-center">
                                <Text className="text-lg text-gray-800">{item.status}</Text>
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

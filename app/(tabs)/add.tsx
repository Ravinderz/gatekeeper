import { Text, TextInput, TouchableOpacity, View} from 'react-native'
import React, {useState} from 'react'
import {SafeAreaView} from "react-native-safe-area-context";

const Add = () => {
    // Should be able to do this by scanning QR code as well.

    const [name,setName] = useState<string>();
    const [apartment,setApartment] = useState<string>();
    const [purpose,setPurpose] = useState<string>();


    const onValueChange = (type: string,value: string) => {
        if(type === "name"){
            setName(value)
        }else if(type === "apartment"){
            setApartment(value)
        }else if(type === "purpose"){
            setPurpose(value)
        }
    }

    return (
        <SafeAreaView className="bg-white h-full flex justify-between">
            {/*<Text>horizontal scroll calendar here</Text>*/}
           <View className="mt-6 mb-6">

            <Text className="ml-8 mr-8 mb-6 font-opensans-medium text-center text-2xl">Today</Text>

            <TextInput
                className="ml-8 mr-8 mb-6 h-[60] border border-b-black-100 rounded-md p-2 pl-4 pr-4"
                onChangeText={(event) => onValueChange("name",event)}
                placeholder="Name"
                value={name}
            />
            <TextInput
                className="ml-8 mr-8 mb-6 h-[60] border border-b-black-100 rounded-md p-2 pl-4 pr-4"
                onChangeText={(event) => onValueChange("apartment",event)}
                placeholder="Apartment Number"
                value={apartment}
            />
            <TextInput
                className="ml-8 mr-8 mb-6 h-[150] border border-b-black-100 rounded-md p-2 pl-4 pr-4"
                onChangeText={(event) => onValueChange("purpose",event)}
                placeholder="Purpose"
                value={purpose}
            />
           </View>

            <TouchableOpacity className="h-20 bg-primary-300 flex items-center justify-center ml-8 mr-8 mb-28 rounded-md">
                <Text className="text-white font-opensans-medium text-xl">Add</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}
export default Add

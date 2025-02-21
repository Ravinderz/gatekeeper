import {View, Text, Image} from 'react-native'
import React from 'react'
import {SafeAreaView} from "react-native-safe-area-context";
import SettingListItem from "@/app/components/SettingListItem";

const Settings = () => {
    return (
        <SafeAreaView className="bg-white h-full px-8">
            {/*<Text className="text-xl font-opensans-semibold my-3">*/}
            {/*    Settings*/}
            {/*</Text>*/}
            <View className="flex justify-center items-center mt-10 mb-6">
                <Image source={require('../../assets/images/avatar.png')} className="w-24 h-24 my-4 rounded-full"/>
                <View className="ml-4 flex justify-center">
                    <Text className="text-xl font-opensans-semibold text-center">101</Text>
                    <Text className="text-lg text-gray-400">Welcome back</Text>
                </View>
            </View>
            <Text className="text-xl font-opensans-semibold my-3">
                General
            </Text>
            <View className="mt-8">
                <SettingListItem icon={"user"} name={"Profile"} iconProvider={"AntDesign"}/>
                <SettingListItem icon={"invert-colors-on"} name={"Theme"} />
                <SettingListItem icon={"notifications-none"} name={"Notifications"} />
            </View>


        </SafeAreaView>
    )
}
export default Settings

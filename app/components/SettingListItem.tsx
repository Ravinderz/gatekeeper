import {View, Text} from 'react-native'
import React from 'react'
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import {AntDesign} from "@expo/vector-icons";

interface SettingListItemProps {
    icon?: string,
    name?: string,
    iconProvider?: string
}

const SettingListItem = ({icon,name, iconProvider = "material"}: SettingListItemProps) => {
    return (
        <View className="flex flex-row justify-between items-center py-2 border-b border-b-gray-300">
            <View className="flex flex-row items-center">
                {iconProvider === "material" ? <MaterialIcons name={icon} size={26} color="black" className="mr-6"/>
                 : <AntDesign name={icon} size={26} color="black" className="mr-6" />}
                <Text className="text-xl font-opensans-semibold my-4">
                    {name}
                </Text>
            </View>
            <MaterialIcons name="keyboard-arrow-right" size={24} color="black"/>
        </View>
    );
}
export default SettingListItem

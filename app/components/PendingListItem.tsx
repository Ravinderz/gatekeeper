import {View, Text, TouchableOpacity} from 'react-native'
import React, {useState} from 'react'

type PendingListItemProps = {
    item: {
        id?: string,
        name: string,
        phone?: string,
        date: string,
        purpose: string,
        status: string
    }
}

const PendingListItem = (props: PendingListItemProps) => {

    const [expand,setExpand] = useState<boolean>(false);
    const [status,setStatus] = useState<string | null>(null);


    const convertDate = (dateStr: string) => {
        const [day, month, year] = dateStr.split('/');
        const date = new Date(`${year}-${month}-${day}T00:00:00`);
        return date.toLocaleString('en-US', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        });
    }

    return (
     <TouchableOpacity onPress={() => setExpand(!expand)}>
     <View className="my-2 bg-primary-mild p-4 rounded-xl">
        {/*add tags below the Name, phone and purpose*/}
        <View className="flex flex-row justify-between mb-2 w-full">
            <View>
                <Text className="text-lg font-opensans-medium mb-1">{props.item.name}</Text>
                <Text className="text-gray-400 text-md">{convertDate(props.item.date)}</Text>
            </View>
            <View>
                <Text className="text-gray-600 text-sm p-2 px-4 bg-orange-300 rounded-2xl">{props.item.status}</Text>
            </View>
        </View>
         <View>
             <Text className="text-gray-500 text-md">{props.item.purpose}</Text>
         </View>

         { expand ? <View className="flex flex-row justify-between w-full mt-4 pb-2">
            <View className="w-[48%]">
                <TouchableOpacity className="bg-mild-green p-4 rounded-lg" onPress={() => setStatus("Approved")}>
                    <Text className="text-gray-800 text-center font-opensans-medium">Approve</Text>
                </TouchableOpacity>
            </View>
            <View className="w-[48%]">
                <TouchableOpacity className="bg-mild-red p-4 rounded-lg" onPress={() => setStatus("Rejected")}>
                    <Text className="text-white text-center font-opensans-medium">Reject</Text>
                </TouchableOpacity>
            </View>
        </View> : null}
    </View>
     </TouchableOpacity>
    );
}
export default PendingListItem

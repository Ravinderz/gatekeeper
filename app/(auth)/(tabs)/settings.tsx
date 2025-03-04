import { View, Text, Image, TouchableOpacity, Linking } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SettingListItem from "@/app/components/SettingListItem";
import { useClerk } from "@clerk/clerk-expo";
import { Redirect } from "expo-router";

const Settings = () => {
  const { signOut } = useClerk();

  const handleSignOut = async () => {
    try {
      await signOut();
      // Redirect to your desired page
      return <Redirect href={"/sign-in"} />;
    } catch (err) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error(JSON.stringify(err, null, 2));
    }
  };

  return (
    <SafeAreaView className="bg-white h-full px-4">
      {/*<Text className="text-xl font-opensans-semibold my-3">*/}
      {/*    Settings*/}
      {/*</Text>*/}
      <View className="flex justify-center items-center mt-10 mb-6">
        <Image
          source={require("../../assets/images/avatar.png")}
          className="w-24 h-24 my-4 rounded-full"
        />
        <View className="ml-4 flex justify-center">
          <Text className="text-xl font-opensans-semibold text-center">
            101
          </Text>
          <Text className="text-lg text-gray-400">Welcome back</Text>
        </View>
      </View>
      <Text className="text-xl font-opensans-semibold my-3">General</Text>
      <View className="flex-1 flex-col justify-between">
        <View className="mt-8">
          <SettingListItem
            icon={"user"}
            name={"Profile"}
            iconProvider={"AntDesign"}
          />
          <SettingListItem icon={"invert-colors-on"} name={"Theme"} />
          <SettingListItem icon={"notifications-none"} name={"Notifications"} />
        </View>
        <View>
          <TouchableOpacity
            onPress={handleSignOut}
            className="bg-mild-red  p-2 rounded-md mt-4 h-16 justify-center mb-28"
          >
            <Text className="text-center text-white font-opensans-semibold text-2xl ">
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Settings;

import { View, Text, Image } from "react-native";
import React from "react";
import { Link } from "expo-router";

const welcome = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <Image
        source={require("../assets/images/gatekeeper_logo.png")}
        className="w-[60%] h-[30%]"
      />
      <Text className="text-2xl font-opensans-semibold mb-6">Welcome</Text>
      <View className="flex-row">
        <Link href="/sign-in" className="mx-4 p-6 bg-primary-300 rounded-xl">
          <Text className="text-white text-xl font-opensans-regular">
            Sign in
          </Text>
        </Link>
        <Link href="/sign-up" className="mx-2 p-6 bg-gray-300 rounded-xl">
          <Text className="text-xl font-opensans-regular">Sign up</Text>
        </Link>
      </View>
    </View>
  );
};

export default welcome;

import { View, Text, Image, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import "../globals.css";
import { SafeAreaView } from "react-native-safe-area-context";
import PendingListItem from "@/app/components/PendingListItem";
import LoadingSection from "../components/LoadingSection";
import { useUser } from "@clerk/clerk-expo";

const Home = () => {
  const [visitorStatics, setVisitorStatics] = useState(null);
  const [pendingRequests, setPendingRequests] = useState(null);
  const [loading, setLoading] = useState(true);
  const { user } = useUser();

  const getVisitorStats = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `http://10.0.2.2:3000/visitor/visitor-stats/${user?.unsafeMetadata.apartmentNumber}`
      );
      const result = await response.json();
      console.log("result", result);
      setVisitorStatics(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const getPendingRequests = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `http://10.0.2.2:3000/visitor/pending-visitors/${user?.unsafeMetadata.apartmentNumber}`
      );
      const result = await response.json();
      console.log("result", result);
      setPendingRequests(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getVisitorStats();
    getPendingRequests();
  }, []);

  return (
    <SafeAreaView className="flex-1 px-4 bg-white h-full">
      <View className="flex-row">
        <Image
          source={require("../../assets/images/avatar.png")}
          className="w-16 h-16 my-4 rounded-full"
        />
        <View className="ml-4 flex justify-center">
          <Text className="text-xl font-opensans-semibold">
            {user?.unsafeMetadata.apartmentNumber}
          </Text>
          <Text className="text-lg text-gray-400">Welcome back</Text>
        </View>
      </View>
      <View>
        <Text className="text-xl font-opensans-semibold my-3">
          Visitor Statistics
        </Text>
      </View>
      <View className="flex-row justify-evenly p-4 my-4 border-2 border-b-primary-300 rounded-xl">
        {loading ? (
          <LoadingSection height={50} width={100} />
        ) : (
          visitorStatics &&
          visitorStatics.map((item) => (
            <View key={item.name}>
              <Text className="text-xl">{item.value}</Text>
              <Text className="text-gray-600 text-sm">
                {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
              </Text>
            </View>
          ))
        )}
      </View>
      <View className="flex-1 h-full">
        <Text className="text-xl font-opensans-semibold my-3">
          Pending Requests
        </Text>
        <FlatList
          data={pendingRequests}
          renderItem={({ item }) => (
            <PendingListItem key={item.name} item={item} />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 120 }}
        />
      </View>
    </SafeAreaView>
  );
};
export default Home;

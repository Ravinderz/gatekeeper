import { FlatList, Text, View } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HistoryListItem from "@/app/components/HistoryListItem";
import { convertDate } from "@/app/components/DateHelper";

const History = () => {
  const [visitorHistory, setVisitorHistory] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  const getVisitorHistory = async () => {
    try {
      const response = await fetch("http://10.0.2.2:3000/visitor/all/101");
      const result = await response.json();
      console.log("result", result);
      setVisitorHistory(result);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getVisitorHistory();
  }, []);

  const getUniqueDates = (list: any[]) => {
    console.log("list", list);
    return [...new Set(list.map((item) => item.created_at.split("T")[0]))];
  };

  return (
    <SafeAreaView className="bg-white flex-1 h-full px-4">
      {/*update the bg and add left or right border to show its approved / rejected*/}
      <View className="h-full flex-1">
        <Text className="text-xl font-opensans-semibold my-3">
          Visitor's History
        </Text>
        {!loading && visitorHistory ? (
          <>
            <FlatList
              data={getUniqueDates(visitorHistory || [])}
              renderItem={({ item }) => (
                <View className="h-full flex-1">
                  <View>
                    <Text className="text-lg text-grey-800 m-2 font-medium font-opensans-semibold">
                      {convertDate(item)}
                    </Text>
                  </View>
                  <FlatList
                    data={visitorHistory.filter(
                      (data) => data.created_at.split("T")[0] === item
                    )}
                    renderItem={({ item }) => <HistoryListItem item={item} />}
                    keyExtractor={(item) => item.name}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 120 }}
                  ></FlatList>
                </View>
              )}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingBottom: 120 }}
            ></FlatList>
          </>
        ) : (
          <Text>Loading...</Text>
        )}
      </View>
    </SafeAreaView>
  );
};
export default History;

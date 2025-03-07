import { Link, Redirect, Tabs } from "expo-router";
import { View, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { SignedIn, SignedOut } from "@clerk/clerk-expo";
import Welcome from "../welcome";

console.log("inside tabs layout");
const TabIcon = ({ focused, icon, title }) => {
  return (
    <View className="flex-1 mt-2 items-center ">
      {title === "History" ? (
        <MaterialIcons
          name={icon}
          size={focused ? 24 : 22}
          color={focused ? "#2F3380" : "gray"}
        />
      ) : (
        <Ionicons
          name={icon}
          size={focused ? 24 : 22}
          color={focused ? "#2F3380" : "gray"}
        />
      )}
      <Text
        className={` w-full mt-1 text-xs text-center ${
          focused
            ? "text-[#2F3380] font-opensans-semibold"
            : "text-gray font-opensans"
        }`}
      >
        {title}
      </Text>
    </View>
  );
};

export default function TabLayout() {
  return (
    <>
      <SignedIn>
        <Tabs
          screenOptions={{
            tabBarShowLabel: false,
            tabBarStyle: {
              position: "absolute",
              backgroundColor: "white",
              borderTopColor: "#2F33800A",
              borderTopWidth: 1,
              minHeight: 70,
            },
          }}
        >
          <Tabs.Screen
            name="index"
            options={{
              title: "Home",
              headerShown: false,
              tabBarIcon: ({ focused }) =>
                TabIcon({ focused, icon: "home", title: "Home" }),
            }}
          />
          <Tabs.Screen
            name="add"
            options={{
              title: "Add",
              headerShown: false,
              tabBarIcon: ({ focused }) =>
                TabIcon({ focused, icon: "add-circle", title: "Add" }),
            }}
          />
          <Tabs.Screen
            name="history"
            options={{
              title: "History",
              headerShown: false,
              tabBarIcon: ({ focused }) =>
                TabIcon({ focused, icon: "history", title: "History" }),
            }}
          />
          <Tabs.Screen
            name="settings"
            options={{
              title: "Settings",
              headerShown: false,
              tabBarIcon: ({ focused }) =>
                TabIcon({ focused, icon: "settings", title: "Settings" }),
            }}
          />
        </Tabs>
      </SignedIn>

      <SignedOut>
        <Welcome />
      </SignedOut>
    </>
  );
}

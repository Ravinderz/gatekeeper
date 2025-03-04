import { ClerkProvider, ClerkLoaded } from "@clerk/clerk-expo";
import { SplashScreen, Stack } from "expo-router";
import "../app/globals.css";
import { useFonts } from "expo-font";
import { tokenCache } from "@/cache";
import React, { useEffect } from "react";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "OpenSans-Bold": require("../assets/fonts/OpenSans-Bold.ttf"),
    "OpenSans-SemiBold": require("../assets/fonts/OpenSans-SemiBold.ttf"),
    "OpenSans-Regular": require("../assets/fonts/OpenSans-Regular.ttf"),
    "OpenSans-Light": require("../assets/fonts/OpenSans-Light.ttf"),
    "OpenSans-Medium": require("../assets/fonts/OpenSans-Medium.ttf"),
  });

  const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;

  if (!publishableKey) {
    throw new Error(
      "Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env"
    );
  }

  useEffect(() => {
    console.log("fontsLoaded", fontsLoaded);
    console.log("publishableKey", publishableKey);
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey={publishableKey}>
      <ClerkLoaded>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(auth)" />
        </Stack>
      </ClerkLoaded>
    </ClerkProvider>
  );
}

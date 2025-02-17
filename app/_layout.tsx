import {SplashScreen, Stack} from "expo-router";
import "./globals.css"
import {useFonts} from "expo-font";
import {useEffect} from "react";


export default function RootLayout() {

    const [fontsLoaded] = useFonts({
        "OpenSans-Bold": require("../assets/fonts/OpenSans-Bold.ttf"),
        "OpenSans-SemiBold": require("../assets/fonts/OpenSans-SemiBold.ttf"),
        "OpenSans-Regular": require("../assets/fonts/OpenSans-Regular.ttf"),
        "OpenSans-Light": require("../assets/fonts/OpenSans-Light.ttf"),
        "OpenSans-Medium": require("../assets/fonts/OpenSans-Medium.ttf")
      });

    useEffect(() => {
        if (fontsLoaded) {
            SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

  return <Stack screenOptions={{headerShown: false}}>
            <Stack.Screen name="(tabs)"/>
      </Stack>;
}

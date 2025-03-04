import { useSignIn } from "@clerk/clerk-expo";
import { Link, useRouter } from "expo-router";
import { Text, TextInput, Button, View, TouchableOpacity } from "react-native";
import React from "react";

export default function Page() {
  const { signIn, setActive, isLoaded } = useSignIn();
  const router = useRouter();

  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");

  // Handle the submission of the sign-in form
  console.log("inside sign-in");
  const onSignInPress = React.useCallback(async () => {
    if (!isLoaded) return;

    // Start the sign-in process using the email and password provided
    try {
      const signInAttempt = await signIn.create({
        identifier: emailAddress,
        password,
      });

      // If sign-in process is complete, set the created session as active
      // and redirect the user
      if (signInAttempt.status === "complete") {
        await setActive({ session: signInAttempt.createdSessionId });
        router.replace("/(tabs)");
      } else {
        // If the status isn't complete, check why. User might need to
        // complete further steps.
        console.error(JSON.stringify(signInAttempt, null, 2));
      }
    } catch (err) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error(JSON.stringify(err, null, 2));
    }
  }, [isLoaded, emailAddress, password]);

  return (
    <View className={`h-full flex-1 items-center justify-center px-4 `}>
      <Text className="text-2xl font-bold mb-1">Welcome to Gatekeeper</Text>
      <Text className="text-lg text-gray-400 font-opensans-regular mb-6">
        Welcome back! sign in to continue
      </Text>
      <TextInput
        autoCapitalize="none"
        style={{ fontSize: 16 }}
        value={emailAddress}
        placeholder="Enter email"
        className="mb-6 w-full h-[60] border border-b-black-100 rounded-md p-2 pl-4 pr-4"
        onChangeText={(email) => setEmailAddress(email)}
      />
      <TextInput
        value={password}
        style={{ fontSize: 16 }}
        placeholder="Enter password"
        secureTextEntry={true}
        className="mb-6 w-full h-[60] border border-b-black-100 rounded-md p-2 pl-4 pr-4"
        onChangeText={(password) => setPassword(password)}
      />
      <TouchableOpacity
        className="w-full h-16 bg-primary-300 flex items-center justify-center mb-6 rounded-md"
        onPress={onSignInPress}
      >
        <Text className="text-white font-opensans-bold text-lg">Sign In</Text>
      </TouchableOpacity>
      <View className="flex flex-row items-center">
        <Text className="text-gray-8700 text-lg font-opensans-regular">
          Don't have an account?
        </Text>
        <Link href="/sign-up" className="ml-2">
          <Text className="text-primary-300 text-lg font-opensans-bold">
            Sign up
          </Text>
        </Link>
      </View>
    </View>
  );
}

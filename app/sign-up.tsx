import * as React from "react";
import { Text, TextInput, Button, View, TouchableOpacity } from "react-native";
import { useSignUp } from "@clerk/clerk-expo";
import { Link, useRouter } from "expo-router";

export default function SignUpScreen() {
  const { isLoaded, signUp, setActive } = useSignUp();
  const router = useRouter();

  const [emailAddress, setEmailAddress] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [countryCode, setCountryCode] = React.useState("+91");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [pendingVerification, setPendingVerification] = React.useState(false);
  const [code, setCode] = React.useState("");

  console.log("inside sign-up");

  // Handle submission of sign-up form
  const onSignUpPress = async () => {
    if (!isLoaded) return;

    // Start sign-up process using email and password provided
    try {
      console.log({ username, emailAddress, password, phoneNumber });

      await signUp.create({
        username,
        emailAddress,
        password,
        phoneNumber: countryCode + phoneNumber,
      });

      // Send user an email with verification code
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      // Set 'pendingVerification' to true to display second form
      // and capture OTP code
      setPendingVerification(true);
    } catch (err) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error(JSON.stringify(err, null, 2));
    }
  };

  // Handle submission of verification form
  const onVerifyPress = async () => {
    if (!isLoaded) return;

    try {
      // Use the code the user provided to attempt verification
      const signUpAttempt = await signUp.attemptEmailAddressVerification({
        code,
      });

      // If verification was completed, set the session to active
      // and redirect the user
      if (signUpAttempt.status === "complete") {
        await setActive({ session: signUpAttempt.createdSessionId });
        router.replace("/(tabs)");
      } else {
        // If the status is not complete, check why. User may need to
        // complete further steps.
        console.error(JSON.stringify(signUpAttempt, null, 2));
      }
    } catch (err) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error(JSON.stringify(err, null, 2));
    }
  };

  if (pendingVerification) {
    return (
      <View className={`h-full flex-1 items-center justify-center px-4 `}>
        <Text className="text-2xl font-bold mb-1">Verify your email</Text>
        <TextInput
          value={code}
          style={{ fontSize: 16 }}
          placeholder="Enter your verification code"
          className="mb-6 w-full h-[60] border border-b-black-100 rounded-md p-2 pl-4 pr-4"
          onChangeText={(code) => setCode(code)}
        />
        <TouchableOpacity
          className="w-full h-16 bg-primary-300 flex items-center justify-center mb-28 rounded-md"
          onPress={onVerifyPress}
        >
          <Text className="text-white font-opensans-bold text-lg">Verify</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View className={`h-full flex-1 items-center justify-center px-4 `}>
      <>
        <Text className="text-2xl font-bold mb-1">Create an account</Text>
        <Text className="text-lg text-gray-400 font-opensans-regular mb-6">
          Welcome to Gatekeeper! fill in the details
        </Text>
        <TextInput
          value={username}
          placeholder="Enter username"
          style={{ fontSize: 16 }}
          className="mb-6 w-full h-[60] border border-b-black-100 rounded-md p-2 pl-4 pr-4"
          onChangeText={(username) => setUsername(username)}
        />
        <TextInput
          autoCapitalize="none"
          value={emailAddress}
          style={{ fontSize: 16 }}
          placeholder="Enter email"
          className="mb-6 w-full h-[60] border border-b-black-100 rounded-md p-2 pl-4 pr-4"
          onChangeText={(email) => setEmailAddress(email)}
        />

        <View className="flex flex-row items-center">
          <TextInput
            value={`+91`}
            placeholder="IN"
            style={{ fontSize: 16, color: "gray" }}
            editable={false}
            className=" mb-6 mr-6 w-[15%] h-[60] border border-b-black-100 rounded-md p-2 pl-4 pr-4"
          />

          <TextInput
            value={phoneNumber}
            placeholder="Enter phone number"
            style={{ fontSize: 16 }}
            className="mb-6 w-[80%] h-[60] border border-b-black-100 rounded-md p-2 pl-4 pr-4"
            onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}
          />
        </View>
        <TextInput
          value={password}
          placeholder="Enter password"
          style={{ fontSize: 16 }}
          secureTextEntry={true}
          className="mb-6 w-full h-[60] border border-b-black-100 rounded-md p-2 pl-4 pr-4"
          onChangeText={(password) => setPassword(password)}
        />
        <TouchableOpacity
          className="w-full h-16 bg-primary-300 flex items-center justify-center rounded-md"
          onPress={onSignUpPress}
        >
          <Text className="text-white font-opensans-bold text-lg">Sign Up</Text>
        </TouchableOpacity>
        <View className="flex flex-row items-center mt-4">
          <Text className="text-lg font-opensans-regular mr-2">
            Already a member?
          </Text>
          <Link href="/sign-in" className="text-primary-300 text-lg font-bold">
            Sign in
          </Link>
        </View>
      </>
    </View>
  );
}

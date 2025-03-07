import { Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useUser } from "@clerk/clerk-expo";

const Add = () => {
  // Should be able to do this by scanning QR code as well.

  const [name, setName] = useState<string>();
  const [phoneNumber, setPhoneNumber] = useState<string>();
  const [purpose, setPurpose] = useState<string>();
  const { user } = useUser();

  const onValueChange = (type: string, value: string) => {
    if (type === "name") {
      setName(value);
    } else if (type === "phoneNumber") {
      setPhoneNumber(value);
    } else if (type === "purpose") {
      setPurpose(value);
    }
  };

  const addVisitor = () => {
    // Add visitor to the database
    // Send a notification to the apartment owner
    // Send a notification to the visitor

    console.log("Adding visitor", {
      name,
      phoneNumber,
      purpose,
      apartmentNumber: user?.unsafeMetadata.apartmentNumber,
      createdBy: user?.id,
      updatedBy: user?.id,
    });

    fetch("http://10.0.2.2:3000/visitor/add-visitor", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        phoneNumber,
        purpose,
        apartmentNumber: user?.unsafeMetadata.apartmentNumber,
        createdBy: user?.id,
        updatedBy: user?.id,
      }),
    });

    // Reset the form
    setName("");
    setPhoneNumber("");
    setPurpose("");
  };

  return (
    <SafeAreaView className="bg-white h-full flex justify-between px-4 ">
      {/*<Text>horizontal scroll calendar here</Text>*/}
      <View className="mt-6 mb-6">
        <Text className="mb-6 font-opensans-medium text-center text-2xl">
          Today
        </Text>

        <TextInput
          className="mb-6 h-[60] border border-b-black-100 rounded-md p-2 pl-4 pr-4"
          onChangeText={(event) => onValueChange("name", event)}
          placeholder="Name"
          value={name}
        />
        <TextInput
          className="mb-6 h-[60] border border-b-black-100 rounded-md p-2 pl-4 pr-4"
          onChangeText={(event) => onValueChange("phoneNumber", event)}
          placeholder="Phone Number"
          value={phoneNumber}
        />
        <TextInput
          className="mb-6 h-[150] border border-b-black-100 rounded-md p-2 pl-4 pr-4"
          onChangeText={(event) => onValueChange("purpose", event)}
          placeholder="Purpose"
          value={purpose}
        />
      </View>

      <TouchableOpacity
        className="h-16 bg-primary-300 flex items-center justify-center mb-28 rounded-md"
        onPress={addVisitor}
      >
        <Text className="text-white font-opensans-medium text-lg">Add</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default Add;

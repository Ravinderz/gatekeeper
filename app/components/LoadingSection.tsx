import { View, Text } from "react-native";
import React from "react";

type LoadingSectionProps = {
  height: number;
  width: number;
};

const LoadingSection = ({ height, width }: LoadingSectionProps) => {
  return (
    <View
      className={`flex-1 items-center justify-center h-[${height}] w-[${width}] bg-black-100`}
    ></View>
  );
};

export default LoadingSection;

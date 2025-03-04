import { Redirect } from "expo-router";
import { useAuth } from "@clerk/clerk-expo";

export default function AuthRoutesLayout() {
  const { isSignedIn } = useAuth();
  console.log("isSignedIn inside AuthRoutesLayout", isSignedIn);
  if (isSignedIn) {
    return <Redirect href={"/sign-in"} />;
  } else {
    return <Redirect href={"/sign-up"} />;
  }
}

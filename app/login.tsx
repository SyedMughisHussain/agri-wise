import React from "react";
import { useRouter } from "expo-router";
import { Button, Text } from "react-native";

export default function Login() {
  const navigation = useRouter();

  function hnadleNavigation() {
    navigation.push("/Otp");
  }

  return (
    <>
      <Text>This is an login page</Text>
      <Button title="Push" onPress={hnadleNavigation} />
    </>
  );
}

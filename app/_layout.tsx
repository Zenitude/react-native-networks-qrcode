import { StyleSheet } from "react-native";
import { Stack } from "expo-router";
import React from "react";
import ContextProvider from "../context/Context";

export default function RootLayout() {
  return (
    <ContextProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false}} />
        <Stack.Screen name="contact" options={{ headerShown: false}} />
      </Stack>
    </ContextProvider>
  )
}

const styles = StyleSheet.create({})
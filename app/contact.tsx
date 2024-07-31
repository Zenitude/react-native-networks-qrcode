import { StyleSheet, Text, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";

export default function contact() {
  return (
    <SafeAreaView style={styles.area}>
      <ScrollView style={styles.scroll}>
        <View style={styles.container}>
          <Text style={styles.title}>Contact Us</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  area: {
    width: "100%",
    height: "100%",
  },
  scroll: {
    flex: 1,
    width: "100%",
    height: "100%",
    paddingTop: 100,
  },
  container: {
    width: "100%",
    height: "100%",
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 28
  }
})
import { StyleSheet, Text, View, Pressable, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import { colors } from "@/constants";
import ModalLinks from "@/components/ModalLinks";

export default function Index() {
  const [ showModal, setShowModal ] = useState(false);
  return (
    <SafeAreaView style={styles.area}>
      <ScrollView>
        <Text>Index</Text>
        <TouchableOpacity
          style={styles.buttonOpenModal}
          onPress={() => setShowModal(!showModal)}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonOpenModalText}>OPEN MODAL</Text>
        </TouchableOpacity>
        <ModalLinks showModal={showModal} setter={setShowModal}/>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  area: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  buttonOpenModal: {
    width: 100,
    height: 100,
    borderColor: colors.black,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    padding: 5
  }, 
  buttonOpenModalText: {
    color: colors.black
  }
})
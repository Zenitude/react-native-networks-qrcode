import { StyleSheet, Text, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useContext, useState } from "react";
import FormContact from "@/components/FormContact";
import { Context } from "@/context/Context";
import { colors } from "@/constants";

export default function index() {
  const { theme } = useContext(Context)!;
  const dateTime = {
    date: (new Date()).toLocaleDateString(),
    time: (new Date()).toLocaleTimeString(), 
  }

  const [ datas, setDatas ] = useState({
    from: '',
    createdAt: `${dateTime.date} at ${dateTime.time}`,
    message: ''
  })

  const styles = StyleSheet.create({
    area: {
      width: "100%",
      height: "100%",
      backgroundColor: theme === "dark" ? colors.dark.background : colors.light.background,
    },
    scroll: {
      flex: 1,
      width: "100%",
      height: "100%",
      paddingTop: 75,
    },
    container: {
      width: "100%",
      height: "100%",
    },
    title: {
      textAlign: "center",
      fontWeight: "bold",
      fontSize: 28,
      color: theme === "dark" ? colors.dark.text : colors.light.text
    }
  })
  
  const stylesForm = StyleSheet.create({
    containerForm: {
      width: "100%",
      gap: 15,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 50
    },
    label: {
      fontSize: 18,
      fontWeight: "bold",
      alignSelf: "flex-start",
      paddingLeft: 25,
      marginTop: 20,
      color: theme === "dark" ? colors.dark.text : colors.light.text
    },
    field: {
      width: "100%",
      maxWidth: 350,
      minWidth: 260,
      height: 60,
      borderWidth: 1,
      borderColor: theme === "dark" ? colors.dark.borderField : colors.light.borderField,
      backgroundColor: theme === "dark" ? colors. dark.backgroundField : colors.light.backgroundField,
      borderRadius: 15
    },
    message: {
      height: 180,
    },
    containerButton: {
      marginTop: 20,
      width: "100%",
      maxWidth: 350,
      minWidth: 260,
      height: 60,
      borderColor: theme === "dark" ? colors.dark.borderButton : colors.white,
      borderWidth: 1,
      backgroundColor: theme === "dark" ? colors.dark.backgroundButton : colors.light.backgroundButton,
      borderRadius: 15,
    },
    button: {
      width: "100%",
      height: "100%",
      justifyContent: "center",
      alignItems: "center",
    },
    textButton: {
      fontWeight: "bold",
      fontSize: 20,
      color: theme === "dark" ? colors.dark.textModal : colors.white,
    }
  })

  return (
    <SafeAreaView style={styles.area}>
      <ScrollView style={styles.scroll}>
        <View style={styles.container}>
          <Text style={styles.title}>Contact Us</Text>

          <FormContact 
            styles={stylesForm}
            datas={datas}
            setter={setDatas}
          />

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}


import { StyleSheet, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState, useContext } from "react";
import { colors, icons } from "@/constants";
import { Context } from "@/context/Context";
import ModalLinks from "@/components/ModalLinks";
import Form from "@/components/Form";
import ButtonModal from "@/components/ButtonModal";
import Qrcode from "@/components/Qrcode";

export default function Index() {
  const { datas, setDatas, theme } = useContext(Context)!;
  const [ showModal, setShowModal ] = useState(false);
  const optionsSelect = [
    {title: "Without", value: 0},
    {title: "Small", value: 5}, 
    {title: "Medium", value: 10}, 
    {title: "High", value: 20} 
  ];
  console.log('Le theme actuel est : ', theme)
  const styles = StyleSheet.create({
    area: {
      width: "100%",
      height: "100%",
      justifyContent: "center",
      alignItems: "center",
      paddingTop: 15,
      zIndex: 1,
      backgroundColor: theme === 'dark' ? colors.dark.background : colors.light.background,
    },
    scroll: {
      width: "100%",
      paddingHorizontal: 15
    },
    mainTitle: {
      fontSize: 24,
      fontWeight: "bold",
      textAlign: "center"
    },
    containerButtonOpenModal: {
      width: "100%",
      height: 50,
    },
    buttonOpenModal: {
      width: 40,
      height: 40,
      backgroundColor: theme === 'dark' ? colors.dark.background : colors.light.background,
      borderColor: theme === 'dark' ? colors.dark.border : colors.light.border,
      borderWidth: 2,
      borderRadius: 75,
      justifyContent: "center",
      alignItems: "center",
      padding: 5,
    }, 
    buttonOpenModalIcon: {
      width: "100%",
      height: "100%"
    },
  })
  
  const stylesForm = StyleSheet.create({
    containerForm: {
      paddingVertical: 15,
      gap: 20
    },
  })

  return (
    <SafeAreaView style={styles.area}>

      <ScrollView style={styles.scroll}>

        <ModalLinks showModal={showModal} setter={setShowModal}/>

        <ButtonModal 
          styles={{
            container: styles.containerButtonOpenModal, 
            button: styles.buttonOpenModal
          }} 
          setter={setShowModal} 
          data={showModal}
        >
          <Image 
            source={icons.infos}
            resizeMode="contain"
            style={styles.buttonOpenModalIcon}
          />
        </ButtonModal>

        <Qrcode />

        <Form 
          styles={stylesForm}
          datas={datas}
          setterDatas={setDatas}
          options={optionsSelect}
        />

      </ScrollView>

    </SafeAreaView>
  )
}


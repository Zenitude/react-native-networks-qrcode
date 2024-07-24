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
  const { datas, setDatas } = useContext(Context)!;
  const [ showModal, setShowModal ] = useState(false);
  const optionsSelect = [
    {title: "Without", value: 0}, 
    {title: "Small", value: 5}, 
    {title: "Medium", value: 10}, 
    {title: "High", value: 20} 
  ];

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

        <Form 
          styles={stylesForm}
          datas={datas}
          setterDatas={setDatas}
          options={optionsSelect}
        />

        <Qrcode 
          datas={datas}
        />

      </ScrollView>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  area: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 15,
    zIndex: 1
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
    width: 35,
    height: 35,
    borderColor: colors.black,
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
  
  containerQrcode: {

  },
})

const stylesForm = StyleSheet.create({
  containerForm: {
    borderBottomColor: colors.black,
    borderBottomWidth: 1,
    paddingBottom: 15,
    gap: 20
  },
})
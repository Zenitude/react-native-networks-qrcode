import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState, useContext } from "react";
import { colors, icons } from "@/constants";
import { Context } from "@/context/Context";
import ModalLinks from "@/components/ModalLinks";
import SwitchEdit from "@/components/SwitchEdit";
import Field from "@/components/subcomponents/Field";
import SelectField from "@/components/subcomponents/SelectField";

export default function Index() {
  const { datas, setDatas } = useContext(Context)!;
  const [ showModal, setShowModal ] = useState(false);
  const [ editLink, setEditLink ] = useState(false);
  const [ editForeColor, setEditForeColor ] = useState(false);
  const [ editBackColor, setEditBackColor ] = useState(false);
  const [ editPatch, setEditPatch ] = useState(false);
  const optionsSelect = [{title: "M"}, {title: "H"}];

  return (
    <SafeAreaView style={styles.area}>

      <ScrollView style={styles.scroll}>

        <ModalLinks showModal={showModal} setter={setShowModal}/>

        <View style={styles.containerButtonOpenModal}>
          <TouchableOpacity
            style={styles.buttonOpenModal}
            onPress={() => setShowModal(!showModal)}
            activeOpacity={0.7}
          >
            <Image 
              source={icons.infos}
              resizeMode="contain"
              style={styles.buttonOpenModalIcon}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.containerForm}>

          <SwitchEdit edit={editLink} setEdit={setEditLink} text={"Link"}>
            <Field 
              type={"default"}
              value={datas.qrcode.value}
              setValue={(text: string) => setDatas(prev => {
                const previous = {...prev};
                previous.qrcode.value = text;
                return previous;
              })}
              placeholder={"Insert your link"}
            />
          </SwitchEdit>

          <SwitchEdit edit={editForeColor} setEdit={setEditForeColor} text={"Foreground Color"}>
            <Field 
              type={"fore"}
              value={datas.fore}
            />
          </SwitchEdit>          

          <SwitchEdit edit={editBackColor} setEdit={setEditBackColor} text={"Background Color"}>
            <Field 
              type={"back"}
              value={datas.back}
            />
          </SwitchEdit> 

          <SwitchEdit edit={editPatch} setEdit={setEditPatch} text={"QRCode Patch"}>
            <SelectField 
              data={optionsSelect}
              setter={setDatas}
            />
          </SwitchEdit> 

        </View>

        <View style={styles.containerQrcode}>

        </View>

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
  containerForm: {
    borderBottomColor: colors.black,
    borderBottomWidth: 1,
    paddingBottom: 15,
    gap: 20
  },
  containerQrcode: {

  },
})
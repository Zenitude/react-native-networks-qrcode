import { StyleSheet, Text, View, TextInput, KeyboardTypeOptions, Modal, TouchableOpacity } from "react-native";
import React, { useState, useContext } from "react";
import ColorPicker, { Panel1, OpacitySlider, HueSlider, returnedResults } from "reanimated-color-picker";
import { Context } from "@/context/Context";
import { colors } from "@/constants";
import SelectField from "./SelectField";
import ButtonModal from "../ButtonModal";

export default function Field({type, value, setValue, placeholder, options}: FieldProps) {
  const { datas, setDatas, theme } = useContext(Context)!;
  const [ showModal, setShowModal ] = useState(false);

  const styles = StyleSheet.create({
    containerColorPicker: {
      flexDirection: "row",
      width: 80,
      height: 60,
      justifyContent: "center",
      alignItems: "center",
      borderTopLeftRadius: 10,
      borderBottomLeftRadius: 10,
      overflow: "hidden",
    },
    modal: {
      width: "80%",
      minWidth: 260,
      maxWidth: 350,
    },
    modalContent: {
      flex: 1,
      justifyContent: 'center',
      marginTop: 22,
      backgroundColor: 'transparent',
    },
    modalView: {
      margin: 10,
      borderColor: theme === 'dark' ? colors.dark.borderModal : colors.light.borderModal,
      borderWidth: 1,
      backgroundColor: theme === 'dark' ? colors.dark.backgroundModal : colors.light.backgroundModal,
      borderRadius: 20,
      padding: 25,
      shadowColor: theme === 'dark' ? colors.dark.shadow : colors.light.shadow,
      shadowOffset: {
        width: 2,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 10,
    },
    title: {
      fontSize: 18,
      fontWeight: "bold",
      paddingLeft: 30,
      color: theme === "dark" ? colors.dark.text : colors.light.text,
    },
    picker: {
      width: "80%",
      marginHorizontal: "auto",
      marginVertical: 15
    },
    preview: {
      width: "80%",
      marginHorizontal: "auto",
      marginVertical: 15
    },
    containerButton: {
      marginTop: 30,
      marginLeft: 30,
      width: "80%",
      height: 40,
      marginVertical: "auto",
      backgroundColor: theme === 'dark' ? colors.dark.backgroundButton : colors.light.backgroundButton,
      borderRadius: 15,
      justifyContent: "center",
      alignItems: "center"
    },
    button: {
      width: "100%",
      height: "100%",
      justifyContent: "center",
      alignItems: "center"
    },
    buttonText: {
      marginVertical: "auto",
      color: theme === 'dark' ? colors.dark.textModal : colors.white,
      fontWeight: "bold",
      fontSize: 18
    },
    input: {
      paddingLeft: 10,
    },
    buttonPicker: {
      width: "100%",
      height: "100%",
      backgroundColor: theme === 'dark' ? colors.dark.backgroundButton : colors.light.backgroundButton,
      justifyContent: "center"
    },
    textButtonPicker: {
      color: theme === 'dark' ? colors.dark.textModal : colors.white,
      textAlign: "center",
      fontWeight: "bold",
      textTransform: "uppercase"
    },
    fg: {
      backgroundColor: datas.fgColor, 
      flex: 1,
    },
    bg: {
      backgroundColor: datas.bgColor, 
      flex: 1,
    }
  })
  
  const stylesPreview = StyleSheet.compose(styles.picker, styles.preview);

  if(type === "select") {
    return (<SelectField 
      data={options!}
      setter={setDatas}
    />)
  } 
  else if(type === "fore" || type === "back") {
    return (
      <>
        <ButtonModal
          styles={{ container: styles.containerColorPicker, button: styles.buttonPicker }}
          setter={setShowModal}
          data={showModal}
        >
          <Text style={styles.textButtonPicker}>Change color</Text>
        </ButtonModal>
        
        <View style={type === "fore" ? styles.fg : styles.bg}></View>
        <Modal visible={showModal} animationType='slide' style={styles.modal} transparent={true}>
          <View style={styles.modalContent}>
            <View style={styles.modalView}>
              <ColorPicker style={stylesPreview} value={value} onComplete={(colors: returnedResults) => {
                  setDatas(prev => {
                    const previous = {...prev};
                    if(type === "fore") {
                      previous.fgColor = colors.hex
                    } else if(type === "back") {
                      previous.bgColor = colors.hex
                    }
                    return previous;
                  })
              }}>
                <Text style={styles.title}>Panel</Text>
                <Panel1 style={styles.preview} />
                <Text style={styles.title}>Hue</Text>
                <HueSlider style={styles.picker} />
                <Text style={styles.title}>Opacity</Text>
                <OpacitySlider style={styles.picker} />
                <View style={styles.containerButton}>
                  <TouchableOpacity onPress={() => setShowModal(!showModal)} style={styles.button}>
                    <Text style={styles.buttonText}>Confirm</Text>
                  </TouchableOpacity>
                </View>
              </ColorPicker>
            </View>
          </View>          
        </Modal>
      </>
    )
  }
  else {
    return (
      <TextInput
        onChangeText={setValue}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={theme === 'dark' ? colors.grey : colors.black + '85'}
        keyboardType={type as KeyboardTypeOptions}
        style={styles.input}
      />
    )
  }
  
}


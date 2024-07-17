import { StyleSheet, Text, View, TextInput, KeyboardTypeOptions, Modal, TouchableOpacity, Button } from "react-native";
import React, { useState, useContext } from "react";
import ColorPicker, { Panel1, OpacitySlider, HueSlider, returnedResults } from 'reanimated-color-picker';
import { Context } from "@/context/Context";
import { colors } from "@/constants";

type FieldProps = {
  type: KeyboardTypeOptions | string;
  value: string;
  setValue?: (text:string) => void;
  placeholder?: string;
}

export default function Field({type, value, setValue, placeholder}: FieldProps) {
  const { setDatas } = useContext(Context)!;
  const [ showModal, setShowModal ] = useState(false);

  const changeText = (text: string) => {
    console.log(text);
  }

  if(type === "select") {
    return (<View><Text>Select</Text></View>)
  } else if(type === "fore" || type === "back") {
    return (
      <>
        <View style={styles.containerColorPicker}>
          <Button title='Color Picker' onPress={() => setShowModal(true)} />
        </View>
        <Modal visible={showModal} animationType='slide' >
          <ColorPicker style={stylesPreview} value={value} onComplete={(colors: returnedResults) => {
              setDatas(prev => {
                const previous = {...prev};
                if(type === "fore") {
                  previous.fore = colors.rgba
                } else if(type === "back") {
                  previous.back = colors.rgba
                }
                return previous;
              })
              console.log(colors)
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
        </Modal>
      </>
    )
  }
  else {
    return (
      <View>
        {
          type === "select"
          ? (<Text>Select</Text>)
          : (
            <TextInput
              onChangeText={setValue}
              value={value}
              placeholder={placeholder}
              placeholderTextColor={colors.grey}
              keyboardType={type as KeyboardTypeOptions}
              style={styles.input}
            />
          )
        }
        
      </View>
    )
  }
  
}

const styles = StyleSheet.create({
  containerColorPicker: {
    backgroundColor: colors.white,
    flexDirection: "row",
    flex: 1,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    overflow: "hidden",
  },
  colorPicker: {
    width: "100%",
    height: 45,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    paddingLeft: 30
  },
  picker: {
    width: "80%",
    marginHorizontal: "auto",
    marginVertical: 15
  },
  preview: {
    borderColor: colors.black,
    borderWidth: 2,
    width: "80%",
    marginHorizontal: "auto",
    marginVertical: 15
  },
  containerButton: {
    marginTop: 30,
    marginLeft: 30,
    width: "80%",
    height: 35,
    marginVertical: "auto",
    backgroundColor: colors.blue,
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
    color: colors.white,
  },
  input: {
    paddingLeft: 10,
  }
})

const stylesPreview = StyleSheet.compose(styles.picker, styles.preview);
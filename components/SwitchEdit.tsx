import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { colors, icons } from "@/constants";

type SwitchEditProps = {
    edit: boolean;
    setEdit: React.Dispatch<React.SetStateAction<boolean>>;
    text: string;
    children: React.ReactNode;
}

export default function SwitchEdit({edit, setEdit, text, children}: SwitchEditProps) {
  return (
    <View style={styles.containerSwitch}>
        {
            !edit
            ? (<View style={styles.container}><Text style={styles.default}>{text}</Text></View>)
            : (<View style={styles.container}>{children}</View>)
        }
            <View style={styles.containerIcon}>
              <TouchableOpacity
                onPress={() => setEdit(!edit)}
              >
                <Image 
                  source={edit ? icons.cancelEdit : icons.edit}
                  resizeMode="contain"
                  style={styles.icon}
                />
              </TouchableOpacity>
            </View>
          </View>
  )
}

const styles = StyleSheet.create({
    containerSwitch: {
        flexDirection: "row",
        height: 50,
        borderColor: colors.black,
        borderWidth: 1,
        borderRadius: 10,
        alignItems: "center"
    },
    container: {
        flex: 1
    },
    default: {
      fontSize: 16,
      fontWeight: "bold",
      paddingLeft: 15,
    },
    containerIcon: {
        width: 50,
        height: 50,
        paddingTop: 8,
        paddingLeft: 8,
        borderLeftColor: colors.black,
        borderLeftWidth: 1,
        backgroundColor: colors.blue,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },
    icon: {
        width: 35,
        height: 35,
    }

})
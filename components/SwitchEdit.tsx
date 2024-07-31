import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { colors, icons } from "@/constants";
import ButtonImage from "./ButtonImage";
import { Context } from "@/context/Context";

export default function SwitchEdit({edit, setEdit, text, children}: SwitchEditProps) {
  const { theme } = useContext(Context)!;

  const styles = StyleSheet.create({
    containerSwitch: {
      flexDirection: "row",
      height: 60,
      backgroundColor: theme === "dark" ? colors.dark.backgroundField : colors.light.backgroundField,
      borderWidth: 1,
      borderRadius: 10,
      alignItems: "center",
      overflow: 'hidden'
    },
    container: {
      flex: 1,
      flexDirection: "row"
    },
    default: {
      fontSize: 16,
      fontWeight: "bold",
      paddingLeft: 15,
      color: theme === 'dark' ? colors.dark.text : colors.light.text,
    },
    containerIcon: {
      width: 60,
      height: 58,
      paddingTop: 10,
      paddingLeft: 10,
      borderRightColor: theme === 'dark' ? colors.dark.borderField : colors.light.borderField,
      borderBottomColor: theme === 'dark' ? colors.dark.borderField : colors.light.borderField,
      borderTopColor: theme === 'dark' ? colors.dark.borderField : colors.light.borderField,
      borderRightWidth: 1,
      borderBottomWidth: 1,
      borderTopWidth: 1,
      backgroundColor: theme === 'dark' ? colors.dark.theme.third : colors.light.theme.third,
      borderTopRightRadius: 9,
      borderBottomRightRadius: 9,
    },
    button: {},
    icon: {
      width: 40,
      height: 40,
    }

  })

  return (
    <View style={styles.containerSwitch}>
      {
          !edit
          ? (<View style={styles.container}><Text style={styles.default}>{text}</Text></View>)
          : (<View style={styles.container}>{children}</View>)
      }
      <ButtonImage 
        styles={{
          container: styles.containerIcon,
          button: styles.button,
          icon: styles.icon
        }}
        src={edit ? icons.cancelEdit : icons.edit}
        action={() => setEdit(!edit)}
      />
    </View>
  )
}


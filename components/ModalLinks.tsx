import { StyleSheet, Text, View, Modal } from "react-native";
import React, { useContext, useEffect } from "react";
import Networks from "./subcomponents/Networks";
import { networks, supports, others, colors } from "../constants";
import { Link } from "expo-router";
import ButtonModal from "./ButtonModal";
import { Context }  from "@/context/Context";

export default function ModalLinks({showModal, setter} : ModalLinksProps) {
  const { theme } = useContext(Context)!;

  const styles = StyleSheet.create({
    container: {
      width: "80%",
      minWidth: 260,
      maxWidth: 350,
    },
    content: {
      flex: 1,
      justifyContent: 'center',
      marginTop: 22,
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
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    header: {
      width: "100%",
      height: 50,
      justifyContent: "center",
      marginBottom: 10,
    },
    headerTitle: {
      fontSize: 20,
      fontWeight: "bold",
      textAlign: "center",
      color: theme === 'dark' ? colors.dark.textModal : colors.light.textModal,
    },
    headerButtonClose: {
      width: 30,
      height: 30,
      borderRadius: 5,
      borderColor: theme === 'dark' ? colors.dark.borderButton : colors.light.borderButton,
      backgroundColor: theme === 'dark' ? colors.dark.backgroundButtonModal : colors.light.backgroundButtonModal,
      borderWidth: 1,
      alignSelf: "flex-end",
      justifyContent: "center",
      alignItems: "center",
    },
    buttonClose: {},
    headerTextButtonClose: {
      fontWeight: "bold",
      fontSize: 20,
      color: theme === 'dark' ? colors.dark.textModal : colors.white,
    },
    main: {
      width: "100%",
    },
    subtitle: {
      fontWeight: "bold",
      color: theme === 'dark' ? colors.dark.textModal : colors.light.textModal,
    },
    footer: {
      alignItems: "center",
      justifyContent: "center",
    },
    footerInfos: {
      fontSize: 14,
      color: theme === 'dark' ? colors.dark.textModal : colors.light.textModal,
    },
    contactLink: {
      textDecorationStyle: "dashed",
      textDecorationLine: "underline",
      textDecorationColor: theme === 'dark' ? colors.dark.text : colors.light.text,
      color: theme === 'dark' ? colors.dark.text : colors.light.text,
    }
  })
  
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={showModal}
      onRequestClose={() => setter(!showModal) }
      style={styles.container}
    >
        <View style={styles.content}>

          <View style={styles.modalView}>

            <View style={styles.header}>
              <ButtonModal
                styles={{
                  container: styles.headerButtonClose,
                  button: styles.buttonClose
                }}
                setter={setter}
                data={showModal}
              >
                <Text style={styles.headerTextButtonClose}>X</Text>
              </ButtonModal>
              <Text style={styles.headerTitle}>Networks</Text>
            </View>

            <View style={styles.main}>
              <Text style={styles.subtitle}>Social networks</Text>
              <Networks icons={networks}/>
              <Text style={styles.subtitle}>Financial supports</Text>
              <Networks icons={supports}/>
              <Text style={styles.subtitle}>Other networks</Text>
              <Networks icons={others}/>
            </View>

            <View style={styles.footer}>
              <Text style={styles.footerInfos}>
                This image appears when a network is not included among those above.
                For another network to be added <Link href="/contact" style={styles.contactLink}>contact us</Link>
              </Text>
              <Text style={styles.footerInfos}>
              The theme of this application is based on that of your smartphone, if your smartphone is in dark, this application will be in dark and vice versa if it is in light.
              </Text>
            </View>

          </View>

        </View>
      </Modal>
  )
}


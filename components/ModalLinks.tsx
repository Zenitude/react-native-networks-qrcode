import { StyleSheet, Text, View, Modal } from "react-native";
import React from "react";
import Networks from "./subcomponents/Networks";
import { networks, supports, others, colors } from "../constants";
import { Link } from "expo-router";
import ButtonModal from "./ButtonModal";

export default function ModalLinks({showModal, setter} : ModalLinksProps) {
  
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
                  styleContainer: styles.headerButtonClose,
                  styleButton: styles.buttonClose
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
            </View>

          </View>

        </View>
      </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "80%",
    minWidth: 260,
    maxWidth: 350,
    backgroundColor: colors.primary,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 10,
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: 25,
    shadowColor: '#000',
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
  },
  headerButtonClose: {
    width: 30,
    height: 30,
    borderRadius: 5,
    borderColor: colors.black,
    borderWidth: 1,
    color: colors.white,
    alignSelf: "flex-end",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonClose: {},
  headerTextButtonClose: {
    fontWeight: "bold",
    fontSize: 20,
  },
  main: {
    width: "100%",
  },
  subtitle: {
    fontWeight: "bold",
  },
  footer: {
    alignItems: "center",
    justifyContent: "center",
  },
  footerInfos: {
    fontSize: 14,
  },
  contactLink: {
    textDecorationStyle: "dashed",
    textDecorationLine: "underline",
    textDecorationColor: colors.blue,
    color: colors.blue
  }
})
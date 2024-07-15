import { StyleSheet, Text, View, Modal, Pressable } from "react-native";
import React, { useState } from "react";
import Networks from "./Networks";
import { networks, supports, others, colors } from "../constants";
import { Link } from "expo-router";

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
              <Text style={styles.headerTitle}>Networks</Text>
              <Pressable
                style={styles.headerButtonClose}
                onPress={() => setter(!showModal)}
              >
                <Text style={styles.headerTextButtonClose}>X</Text>
              </Pressable>
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
              <Text style={styles.footerInfos}>Images appearing according to the link</Text>
              <Text>For another network to be considered <Link href="/contact">contact us</Link></Text>
            </View>

          </View>

        </View>
      </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
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
    height: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  headerButtonClose: {
    width: 30,
    height: 30,
    borderRadius: 5,
    color: colors.third,
  },
  headerTextButtonClose: {},
  main: {},
  subtitle: {
    fontWeight: "bold"
  },
  footer: {
    alignItems: "center",
    justifyContent: "center"
  },
  footerInfos: {
    fontSize: 14,
    textAlign: "center"
  },
})
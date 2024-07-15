import { StyleSheet, View, Image, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { colors } from "@/constants";

export default function Networks({icons} : NetworksProps) {
  return (
    <View style={styles.container}>
        { 
            icons.map((el) => (
                <Link href={el.link} style={styles.link}>
                    <View style={styles.iconContainer}>
                        <Image
                            source={el.icon}
                            resizeMode="contain"
                            style={styles.icons}
                        />
                    </View>
                    {
                        el.text && (<Text style={styles.title}>{el.text}</Text>)
                    }
                </Link>
            ))
        }
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        width: 250,
        padding: 5,
    },
    link: {
        height: "auto",
        flexDirection: "column",
        flexWrap: "wrap",
        gap: 5
    },
    iconContainer: {
        width: 50,
        height: 50,
        borderRadius: 10
    },
    icons: {
        width: "100%",
        height: "100%",
    },
    title: {
        fontWeight: "bold",
        fontSize: 12
    }
})
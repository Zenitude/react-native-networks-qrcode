import { StyleSheet, View, Image, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function Networks({icons} : NetworksProps) {
  return (
    <View style={styles.container}>
        { 
            icons.map((el, index) => (
                <Link href={el.link} style={styles.link} key={index}>
                    <View style={styles.contentLink}>
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
                    </View>
                </Link>
            ))
        }
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        gap: 5,
        marginVertical: 10,
    },
    link: {
        width: 75,
        textAlign: "center",
    },
    contentLink: {
        flexDirection: "column",
        gap: 5
    },
    iconContainer: {
        width: 50,
        height: 50,
        borderRadius: 15,
        overflow: "hidden",
        marginHorizontal: "auto"  
    },
    icons: {
        width: 52,
        height: 52,
        borderRadius: 10,
    },
    title: {
        fontWeight: "bold",
        fontSize: 11,
        textAlign: "center"
    }
})
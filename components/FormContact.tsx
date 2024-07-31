import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Field from "@/components/subcomponents/Field";
import Button from "./Button";

export default function FormContact({styles, datas, setter} : FormContactProps) {
    const sendMessage = () => {}

    return (
        <View style={styles.containerForm}>
            <Field 
                type={'email-address'}
                value={''}
                setValue={(text) => setter({...datas, from: text})}
                placeholder="Enter your email address"
            />

            <Field 
                type={'default'}
                value={''}
                setValue={(text) => setter({...datas, message: text})}
                placeholder="Enter your message"
            />

            <Button
                styles={{
                    container: styles.containerButton,
                    button: styles.button
                }}
                action={() => sendMessage}
            >
                <Text>Send Message</Text>
            </Button>
        </View>
    )
}